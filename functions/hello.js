exports.handler = function(event, context, callback)
{
    
    var response = "";
    if (event.headers["user"] == "javi" && event.headers["pass"] == "1234")
    {
        response = "Correct! Here's your Api key";
    }
    else
    {
        response = "Invalid user login!";
    }

    callback(
        null, {
            statusCode: 200,
            body: response
        }
    );
}