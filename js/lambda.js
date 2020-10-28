// Configure AWS SDK for JavaScript
AWS.config.region = 'us-east-2'; // Región
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:b5c6e052-bf09-4956-8942-e643cfdcc3dd',
});

// Prepare to call Lambda function
var lambda = new AWS.Lambda({ region: AWS.config.region, apiVersion: '2015-03-31' });

function getSendOwlProduct(id) {
    var eventData = '{"url": "https://www.sendowl.com/api/v1/products","options": {"headers": {"Authorization": "Basic ZTY3M2ZlN2U4YmYyMDFmOmM0OGYxNjJlZWViNTExMjY0OTRh","Accept": "application/json"},"method": "GET"},"data": {}}';

    var lambdaParams = {
        FunctionName: 'sendOwlHttpRequest',
        Payload: eventData
    };

    if (id != null) lambdaParams.Payload = eventData.replace("products", "products/"+id);

    return callLambdaFunction(lambdaParams);
}

function checkUserSuscribed(email) {
    var eventData = '{"url": "https://us4.api.mailchimp.com/3.0/search-members?query=","options": {"user": "`anystring`:fa5b26f2cb4e4d0b2012c43439338b0c-us4","headers": {"Authorization": "Basic QW55c3RyaW5nOmZhNWIyNmYyY2I0ZTRkMGIyMDEyYzQzNDM5MzM4YjBjLXVzNA=="}},"data": {}}';

    var lambdaParams = {
        FunctionName: 'mailchimpHttpRequest',
        Payload: eventData
    };

    if(email != null) lambdaParams.Payload = eventData.replace("query=", "query=" + email);

    return callLambdaFunction(lambdaParams);
}

function callLambdaFunction(lambdaParams) {
    return new Promise ((resolve, reject) => {
        lambda.invoke(lambdaParams, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(JSON.parse(data.Payload)));
            }
        });
    });
}