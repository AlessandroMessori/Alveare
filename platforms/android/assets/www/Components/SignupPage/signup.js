var signupCtrl = function ($scope, $ionicLoading, $location, Auth) {

    $scope.inputType = 'password';

    $scope.UserSignup = function () {
        $ionicLoading.show({
            template: 'Registrazione in corso...'
        });
        Auth.Signup($scope.username, $scope.password, $scope.mail, $ionicLoading);
    };

    $scope.go = function () {
        document.location.href = 'login.html'
    };

    $scope.hideShowPassword = function () {
        if ($scope.inputType == 'password')
            $scope.inputType = 'text';
        else
            $scope.inputType = 'password';
    };

};

module.exports = signupCtrl;