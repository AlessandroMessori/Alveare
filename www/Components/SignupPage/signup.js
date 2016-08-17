var signupCtrl = function ($scope, $ionicLoading, $location,Auth) {

    $scope.UserSignup = function () {
        $ionicLoading.show({
            template: 'Registrazione in corso...'
        });
        Auth.Signup($scope.username, $scope.password, $scope.mail, $ionicLoading);
    };

    $scope.go = function () {
        document.location.href = 'login.html'
    };

    $scope.changePassView = function () {

        if ($scope.ShowPass)
            $("#passtxt").attr("type", "text");
        else {
            $("#passtxt").attr("type", "password")
        }
    }
};

module.exports = signupCtrl;