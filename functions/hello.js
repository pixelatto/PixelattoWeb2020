exports.handler = function(event, context, callback)
{
    var response = "Connected (" + event.headers["user"] + event.headers["pass"] + "): " + event.body;

    callback(
        null, {
            statusCode: 200,
            body: response
        }
    );
}