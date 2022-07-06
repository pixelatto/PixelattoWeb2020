// Configure AWS SDK for JavaScript
AWS.config.region = 'us-east-2'; // Región
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:b5c6e052-bf09-4956-8942-e643cfdcc3dd',
});

// Prepare to call Lambda function
var lambda = new AWS.Lambda({ region: AWS.config.region, apiVersion: '2015-03-31' });

function getSendOwlProduct(id) {
    if(id != null) {
        var eventData = '{"data": {"productId": "' + id + '"}';

        var lambdaParams = {
            FunctionName: 'sendOwlHttpRequest',
            Payload: eventData
        };

        return callLambdaFunction(lambdaParams);
    }
}

function checkUserSuscribed(email) {
    if(email != null) {
        var eventData = '{"data": {"email": "' + email + '"}';

        var lambdaParams = {
            FunctionName: 'mailchimpHttpRequest',
            Payload: eventData
        };
    }

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