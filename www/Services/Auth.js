var Firebase = require('firebase');
var Auth = function () {

    this.Signup = function (name, pass, mail, loadingtemplate, state, history) {

        Firebase.auth().createUserWithEmailAndPassword(mail, pass).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            loadingtemplate.hide();
            alert(errorMessage);
        });

        Firebase.auth().onAuthStateChanged(function (user) {

            if (user != null && history.currentStateName() == 'signup') {
                user.updateProfile({displayName: name});
                loadingtemplate.hide();
                Firebase.auth().signOut();
                alert('Profilo creato correttamente');
                state.go('login');
            }

        });

    };

    this.Login = function (email, pass, loadingtemplate, state, history) {

        Firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
            //var errorCode = error.code;
            alert(error.message);
            loadingtemplate.hide();
        });

        Firebase.auth().onAuthStateChanged(function (user) {

            if (user != null && history.currentStateName() == 'login') {
                loadingtemplate.hide();
                state.go("tab.link");
            }

        });
    };

    this.Logout = function (loadingtemplate, state) {
        Firebase.auth().signOut().then(function () {
            state.go('login');
            loadingtemplate.hide();
        }, function (error) {
            loadingtemplate.hide();
            alert('Impossibile disconnetersi dal profilo');
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
