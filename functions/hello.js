exports.handler = function(event, context, callback)
{
    const {netlifyIdentity, netlifyUser} = context.clientContext;

    var response = "Connected (" + event.headers["user"] + event.headers["pass"] + "): " + event.body + "|" + netlifyIdentity + "/" + netlifyUser;

    callback(
        null, {
            statusCode: 200,
            body: response
        }
    );
}