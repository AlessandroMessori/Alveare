import Firebase from "firebase";

class updateCredentialsCtrl {

    constructor($scope, $state, $ionicLoading, InputFields, Modals, Users) {

        $scope.logoImg = require("../../../../Images/logo.png");
        $scope.userName = "";
        $scope.currentUser = Firebase.auth().currentUser;
        window.localStorage.setItem("RememberMe", "false");

        Users.GetUserData($scope.currentUser, (user) => {
            $scope.mail = user.mail;
            $scope.userName = user.name + " " + user.surname;
            $scope.$apply();
        });

        $scope.UpdateCred = (mail, password, repeatPassword) => {

            if (InputFields.filledFields([mail, password, repeatPassword])) {

                if (mail.toLowerCase() != Firebase.auth().currentUser.email.toLowerCase()) {

                    if (password == repeatPassword) {

                        if (password.length > 7) {

                            $ionicLoading.show({template: "Aggiornamento in corso..."});

                            Users.Update($scope.currentUser, mail, $scope.userName, password, () => {
                                $ionicLoading.hide();
                                Modals.ResultTemplate("credenziali aggiornate con successo", () => $state.go("tab.forum"));
                            });
                        }
                        else {
                            Modals.ResultTemplate("La password deve avere almeno 7 caratteri");
                        }
                    }
                    else {
                        Modals.ResultTemplate("le password non corrispondono");
                    }
                }
                else {
                    Modals.ResultTemplate("La mail deve essere diversa da quella precedente");
                }
            }
            else {
                Modals.ResultTemplate("compila tutti i campi");
            }
        };

    }

}

export default updateCredentialsCtrl;