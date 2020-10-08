exports.handler = function(event, context, callback)
{
    var statusCode = 200; //Ok
    var response = "";
    if (
        event.headers["user"] == "5e8756796a972807781bb1b2" && event.headers["pass"] == "ozeotropo" ||
        event.headers["user"] == "5e85aeb96a97283dfc3309aa" && event.headers["pass"] == "amongus" ||
        false
        )
    {
        response = "74abb9fdcb76a8983d80dbb6be3f9f62";
    }
    else
    {
        response = "Invalid user login!";
        statusCode = 401 //Unauthorized
    }

    callback(
        null, {
            statusCode: statusCode,
            body: response
        }
    );
}