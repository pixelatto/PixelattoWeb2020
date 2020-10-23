// Configure AWS SDK for JavaScript
AWS.config.region = 'us-east-2'; // Región
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:b5c6e052-bf09-4956-8942-e643cfdcc3dd',
});

var eventData = '{"options": {"headers": {"Authorization": "Basic ZTY3M2ZlN2U4YmYyMDFmOmM0OGYxNjJlZWViNTExMjY0OTRh","Accept": "application/json"},"method": "GET"},"data": {}}';

// Prepare to call Lambda function
var lambda = new AWS.Lambda({ region: AWS.config.region, apiVersion: '2015-03-31' });
var lambdaParams = {
    FunctionName: 'sendOwlHttpRequest',
    Payload: eventData
};

function runLambda() {
    // Call the Lambda function to collect the spin results
    lambda.invoke(lambdaParams, function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(JSON.parse(JSON.parse(data.Payload)));
        }
    });
}