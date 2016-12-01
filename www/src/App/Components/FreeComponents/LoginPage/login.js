import Firebase from "firebase";

class loginCtrl {
    constructor($scope, $ionicLoading, $window, $state, $ionicHistory, Auth, InputFields, Modals) {

        Firebase.auth().signOut();
        $scope.inputType = "password";
        $scope.logoImg = require("../../../../Images/logo.jpg");

        $scope.$on("$ionicView.enter", () => {
            Firebase.auth().signOut();
            $scope.formScope.mail = "";
            $scope.formScope.password = "";
        });

        $scope.setFormScope = (scope) => $scope.formScope = scope;

        $scope.UserLogin = (mail, password, RememberMe) => {
            if (InputFields.filledFields([mail, password])) {
                $ionicLoading.show({template: "Accesso in Corso..."});
                $ionicHistory.clearHistory();
                $ionicHistory.clearCache();
                Auth.Login(mail, password, $ionicLoading, $state, $ionicHistory, Modals);
                $scope.SetRememberMe(RememberMe);
            }
            else {
                Modals.ResultTemplate("alcuni campi sono vuoti o mail non è valida");
            }
        };

        $scope.SetRememberMe = RememberMe => {
            if (RememberMe) $window.localStorage.setItem("RememberMe", "true");
        };

        $scope.hideShowPassword = () => {
            $scope.inputType = ($scope.inputType == "password") ? "text" : "password";
        };

    }
}


export default loginCtrl;