var Parse = require('parse');
var Auth = function () {

    this.Signup = function (name, pass, mail, loadingtemplate) {
        var user = new Parse.User();

        user.set("username", name);
        user.set("password", pass);
        user.set("email", mail);
        user.set("isadmin", false);

        user.signUp(null, {
            success: function (user) {
                // Hooray! Let them use the app now.
                loadingtemplate.hide();
                alert("Creato Account Con successo");
                document.location.href = "/#login";
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                loadingtemplate.hide();
                alert("Error: " + error.code + " " + error.message);
            }
        });
    };

    this.Login = function (name, pass, loadingtemplate) {
        Parse.User.logIn(name, pass, {
            success: function (user) {
                loadingtemplate.hide();
                document.location.href = "/#tab/link";
            },
            error: function (user, error) {
                loadingtemplate.hide();
                alert("Error: " + error.code + " " + error.message);
            }

        });
    };

    this.Logout = function (loadingtemplate) {
        Parse.User.logOut();
        document.location.href = "/#login";
        loadingtemplate.hide();
    };

};

module.exports = Auth;
