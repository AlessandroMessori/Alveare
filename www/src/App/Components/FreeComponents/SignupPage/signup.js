class signupCtrl {
    constructor($scope, $ionicLoading, $state, $ionicHistory, Auth, InputFields, Modals) {
        $scope.inputType = "password";
        $scope.logoImg = require("../../../../Images/logo.jpg");

        $scope.UserSignup = (username, password, mail) => {
            if (InputFields.filledFields([username, password, mail])) {
                $ionicLoading.show({
                    template: "Registrazione in corso..."
                });
                Auth.Signup(username, password, mail, $state, $ionicHistory);
            }
            else {
                Modals.ResultTemplate("compila tutti i campi");
            }
        };

        $scope.go = ()=> $state.go("login");


        $scope.hideShowPassword = () => {
            if ($scope.inputType == "password")
                $scope.inputType = "text";
            else
                $scope.inputType = "password";
        };
    }
}

export default signupCtrl;
