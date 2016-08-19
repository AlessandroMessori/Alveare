var signupCtrl = function ($scope, $ionicLoading, $location, Auth) {

    $scope.inputType = 'password';

    $scope.UserSignup = function (username, password, mail) {
        $ionicLoading.show({
            template: 'Registrazione in corso...'
        });
        Auth.Signup(username, password, mail, $ionicLoading);
    };

    $scope.go = function () {
        document.location.href = '#/login'
    };

    $scope.hideShowPassword = function () {
        if ($scope.inputType == 'password')
            $scope.inputType = 'text';
        else
            $scope.inputType = 'password';
    };

};

module.exports = signupCtrl;