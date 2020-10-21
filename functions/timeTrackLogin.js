exports.handler = function(event, context, callback)
{
    var statusCode = 200; //Ok
    var response = "";
    if (
        (event.headers["user"] == "5e8756796a972807781bb1b2" && event.headers["pass"] == "ozeotropo")  ||
        (event.headers["user"] == "5e85aeb96a97283dfc3309aa" && event.headers["pass"] == "amongus")    ||
        (event.headers["user"] == "5e821b9d6a9728636371961e" && event.headers["pass"] == "mercadona")  ||
        (event.headers["user"] == "5f1ec0b6f589af0f490e2f49" && event.headers["pass"] == "1992")       ||
        (event.headers["user"] == "5ef5d56a6a97287b8d58ce1f" && event.headers["pass"] == "coloreando") ||
        (event.headers["user"] == "5e831d956a9728038e712a3d" && event.headers["pass"] == "juengine")   ||
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