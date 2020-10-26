// Configure AWS SDK for JavaScript
AWS.config.region = 'us-east-2'; // Región
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:b5c6e052-bf09-4956-8942-e643cfdcc3dd',
});

var eventData = '{"url": "https://www.sendowl.com/api/v1/products","options": {"headers": {"Authorization": "Basic ZTY3M2ZlN2U4YmYyMDFmOmM0OGYxNjJlZWViNTExMjY0OTRh","Accept": "application/json"},"method": "GET"},"data": {}}';

// Prepare to call Lambda function
var lambda = new AWS.Lambda({ region: AWS.config.region, apiVersion: '2015-03-31' });
var lambdaParams = {
    FunctionName: 'sendOwlHttpRequest',
    Payload: eventData
};

function getSendOwlProduct(id) {
    if (id != null) lambdaParams.Payload = eventData.replace("products", "products/"+id);

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