// INIT

var poolData = {
    UserPoolId: 'us-east-2_OB6FVg8Bj',
    ClientId: '16n6r53sf1pq4i30sbb2lukmq0'
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// FUCTIONS

function AWSSignUp(username, email, password) {
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'email', Value: email });

    userPool.signUp(username, password, [attributeEmail], null, (err, data) => {
        if (err) console.error(err);
        console.log(data);
    });
}

function AWSLogin(username, password) {
    var authenticationData = {
        Username: username,
        Password: password,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var userData = {
        Username: username,
        Pool: userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            // var accessToken = result.getAccessToken().getJwtToken();
            /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
            sessionStorage.setItem("pixelatto_session_token", result.accessToken.jwtToken)
        },

        onFailure: function (err) {
            console.error(err);
        },
    });

}

function AWSCheckSession() {
    const user = userPool.getCurrentUser();
    if (user) {
        user.getSession((err, session) => {
            if (err) console.error(err);
            console.log(session);
        });
    }
    
    return user;
}

function AWSLogout() {
    const user = userPool.getCurrentUser();
    if (user) {
        user.signOut();
        sessionStorage.setItem("pixelatto_session_token", null)
    }
}