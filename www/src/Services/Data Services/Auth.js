var Firebase = require('firebase');
var _ = require('lodash');

var Auth = function ($ionicLoading, Modals, StringHandler) {
    this.Signup = function (name, pass, mail, state, history) {

        Firebase.auth().createUserWithEmailAndPassword(mail, pass).catch(function (error) {
            $ionicLoading.hide();
            Modals.ResultTemplate(StringHandler.getErrorMessage(error.code));
        });

        Firebase.auth().onAuthStateChanged(function (user) {

            if (user != null && history.currentStateName() == 'signup') {
                user.updateProfile({displayName: name});
                $ionicLoading.hide();
                Firebase.auth().signOut();
                Modals.ResultTemplate('Profilo creato correttamente');
                state.go('login');
            }
        });

    };

    this.Login = function (email, pass, loadingTemplate, state, history, modals) {

        Firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
            loadingTemplate.hide();
            modals.ResultTemplate("Mail o Password errati");
        });

        Firebase.auth().onAuthStateChanged(function (user) {

            if (user != null && history.currentStateName() == 'login') {
                loadingTemplate.hide();
                state.go("tab.forum");
            }

        });
    };

    this.Logout = function (state, rootScope, modals) {
        Firebase.auth().signOut().then(function () {
            state.go('login');
            window.localStorage.setItem("RememberMe", "false");
            window.localStorage.setItem("IsAdmin", "false");
            window.localStorage.removeItem("Username");
        }, function () {
            modals.ResultTemplate('Impossibile disconnetersi dal profilo');
        });
    };

    this.checkAdmins = function (scope, id) {

        if (window.localStorage.getItem('Username')) {
            scope.User = window.localStorage.getItem('Username');
        }
        var ModelRef = Firebase.database().ref('Amministratori');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();

            if (window.localStorage.getItem('IsAdmin') == 'true') {
                document.getElementById(id).style.display = 'block';
            }
            else if (!_.includes(results, scope.UserMail) || !scope.UserMail) {
                document.getElementById(id).style.display = 'none';
                window.localStorage.setItem('IsAdmin', 'false');
            }
            else {
                document.getElementById(id).style.display = 'block';
                if (window.localStorage.getItem('RememberMe') == 'true') {
                    window.localStorage.setItem('IsAdmin', 'true');
                }
            }

            if (window.localStorage.getItem('RememberMe') == 'true') {
                window.localStorage.setItem('Username', Firebase.auth().currentUser.displayName);
            }
        });
    }
};

module.exports = Auth;
