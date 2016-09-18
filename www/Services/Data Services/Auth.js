var Firebase = require('firebase');
var _ = require('lodash');
var Auth = function () {
    this.Signup = function (name, pass, mail, loadingtemplate, state, history, modals) {

        Firebase.auth().createUserWithEmailAndPassword(mail, pass).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            loadingtemplate.hide();
            modals.ResultTemplate(errorMessage);
        });

        Firebase.auth().onAuthStateChanged(function (user) {

            if (user != null && history.currentStateName() == 'signup') {
                user.updateProfile({displayName: name});
                loadingtemplate.hide();
                Firebase.auth().signOut();
                modals.resultTemplate('Profilo creato correttamente');
                state.go('login');
            }

        });

    };

    this.Login = function (email, pass, loadingtemplate, state, history, modals) {

        Firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
            //var errorCode = error.code;
            modals.ResultTemplate(error.message);
            loadingtemplate.hide();
        });

        Firebase.auth().onAuthStateChanged(function (user) {

            if (user != null && history.currentStateName() == 'login') {
                loadingtemplate.hide();
                state.go("tab.link");
            }

        });
    };

    this.Logout = function (loadingtemplate, state, modals) {
        Firebase.auth().signOut().then(function () {
            state.go('login');
            loadingtemplate.hide();
        }, function (error) {
            loadingtemplate.hide();
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
