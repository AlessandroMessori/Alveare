import Firebase from "firebase";

class updateCredentialsCtrl {

    constructor($scope, $state, $ionicLoading, InputFields, Modals, UpdateCred) {

        $scope.logoImg = require("../../../../Images/logo.jpg");
        $scope.userName = "";
        $scope.currentUser = Firebase.auth().currentUser;

        UpdateCred.GetUserData($scope.currentUser, (user)=> {
            $scope.mail = user.mail;
            $scope.userName = user.name + " " + user.surname;
            $scope.$apply();
        });

        $scope.UpdateCred = (mail, password, repeatPassword) => {
            if (InputFields.filledFields([mail, password, repeatPassword])) {

                if (password == repeatPassword) {

                    $ionicLoading.show({
                        template: "Aggiornamento in corso..."
                    });
                    UpdateCred.Update($scope.currentUser, mail, $scope.userName, password, ()=> {
                        $ionicLoading.hide();
                        Modals.ResultTemplate("credenziali aggiornate con successo", ()=>$state.go("tab.forum"));
                    });
                }
                else {
                    Modals.ResultTemplate("le password non corrispondono");
                }

            }
            else {
                Modals.ResultTemplate("compila tutti i campi");
            }
        };

    }

}

export default updateCredentialsCtrl;