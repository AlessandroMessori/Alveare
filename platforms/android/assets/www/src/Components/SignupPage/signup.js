var signupCtrl = function ($scope, $ionicLoading, $location, $state, $ionicHistory, Auth, InputFields, StaticData, Modals) {

    $scope.inputType = 'password';
    $scope.imgData = StaticData.logoImg;

    $scope.UserSignup = function (username, password, mail) {
        if (InputFields.filledFields([username, password, mail])) {
            $ionicLoading.show({
                template: 'Registrazione in corso...'
            });
            Auth.Signup(username, password, mail, $state, $ionicHistory);
        }
        else {
            Modals.ResultTemplate('compila tutti i campi');
        }
    };

    $scope.go = function () {
        $state.go('login');
    };

    $scope.hideShowPassword = function () {
        if ($scope.inputType == 'password')
            $scope.inputType = 'text';
        else
            $scope.inputType = 'password';
    };

};

module.exports = signupCtrl;