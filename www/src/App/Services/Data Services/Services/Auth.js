import Firebase from "firebase";
import includes from "lodash/includes";

class Auth {

    constructor($ionicLoading, Notifications, Modals, StringHandler) {

        this.Signup = (name, pass, mail, state, history) => {

            Firebase.auth().createUserWithEmailAndPassword(mail, pass).catch(error => {
                $ionicLoading.hide();
                Modals.ResultTemplate(StringHandler.getErrorMessage(error.code));
            });

            Firebase.auth().onAuthStateChanged(user => {

                if (user != null && history.currentStateName() == "signup") {
                    user.updateProfile({displayName: name});
                    $ionicLoading.hide();
                    Firebase.auth().signOut();
                    Modals.ResultTemplate("Profilo creato correttamente");
                    state.go("login");
                }
            });

        };

        this.Login = (email, pass, loadingTemplate, state, history, modals) => {

            Firebase.auth().signInWithEmailAndPassword(email, pass).catch(() => {
                loadingTemplate.hide();
                modals.ResultTemplate("Mail o Password errati");
            });

            Firebase.auth().onAuthStateChanged(user => {

                if (user != null && history.currentStateName() == "login") {
                    loadingTemplate.hide();
                    if (user.displayName) {
                        state.go("tab.forum");
                    }
                    else {
                        state.go("updateCredentials");
                    }
                }

            });
        };

        this.Logout = (state, rootScope, modals) => {
            const id = Firebase.auth().currentUser.uid;
            Notifications.deleteToken(id)
                .then(() => {
                    Firebase.auth().signOut()
                        .then(() => {
                            state.go("login");
                            window.localStorage.setItem("RememberMe", "false");
                            window.localStorage.setItem("IsAdmin", "false");
                            window.localStorage.removeItem("Username");
                        }, () => {
                            modals.ResultTemplate("Impossibile disconnetersi dal profilo");
                        });
                })
                .catch(() => {
                    modals.ResultTemplate("Impossibile disconnetersi dal profilo");
                })
        };

        this.checkAdmins = (scope, id) => {

            if (window.localStorage.getItem("Username")) {
                scope.User = window.localStorage.getItem("Username");
            }
            const ModelRef = Firebase.database().ref("Amministratori");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();

                if (window.localStorage.getItem("IsAdmin") == "true") {
                    document.getElementById(id).style.display = "block";
                }
                else if (!includes(results, scope.UserMail) || !scope.UserMail) {
                    document.getElementById(id).style.display = "none";
                    window.localStorage.setItem("IsAdmin", "false");
                }
                else {
                    document.getElementById(id).style.display = "block";
                    if (window.localStorage.getItem("RememberMe") == "true") {
                        window.localStorage.setItem("IsAdmin", "true");
                    }
                }

                if (window.localStorage.getItem("RememberMe") == "true") {
                    window.localStorage.setItem("Username", Firebase.auth().currentUser.displayName);
                }
            });
        };

    }

}

export default Auth;
