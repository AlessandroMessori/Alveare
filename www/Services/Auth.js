var Firebase = require('firebase');
var Parse = require('parse');
var Auth = function () {

    this.Signup = function (name, pass, mail, loadingtemplate, state) {
        var user = new Parse.User();

        user.set("username", name);
        user.set("password", pass);
        user.set("email", mail);
        user.set("isadmin", false);
c
        user.signUp(null, {
            success: function (user) {
                // Hooray! Let them use the app now.
                loadingtemplate.hide();
                alert("Creato Account Con successo");
                state.go('login');
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                loadingtemplate.hide();
                alert("Error: " + error.code + " " + error.message);
            }
        });
    };

    this.Login = function (name, pass, loadingtemplate, state) {
        Parse.User.logIn(name, pass, {
            success: function (user) {
                loadingtemplate.hide();
                state.go("tab.link");
            },
            error: function (user, error) {
                loadingtemplate.hide();
                alert("Error: " + error.code + " " + error.message);
            }

        });
        /*Firebase.auth().signInWithEmailAndPassword(name, pass).catch(function(error) {
            Firebase.auth().onAuthStateChanged(function(user) {
                alert(user);
                if (user) {
                   loadingtemplate.hide();
                    state.go("tab.link");
                } else {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        });*/
    };

    this.Logout = function (loadingtemplate, state) {
        Parse.User.logOut();
        state.go('login');
        loadingtemplate.hide();
    };

};

module.exports = Auth;
