var Firebase = require('firebase');
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

    this.getAdmins = function (scope) {
        var ModelRef = Firebase.database().ref('Amministratori');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();
            scope.Admins = results;
        });
    }
};

module.exports = Auth;
