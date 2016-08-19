var loginCtrl = function ($scope, $ionicLoading, $window, Auth) {

    $scope.inputType = 'password';

    $scope.UserLogin = function (username, password,RememberMe) {
        $ionicLoading.show({
            template: 'Accesso in Corso...'
        });
        Auth.Login(username, password, $ionicLoading);
        $scope.SetRememberMe(RememberMe);
    };

    $scope.SetRememberMe = function (RememberMe) {

        if (RememberMe) {
            $window.localStorage.setItem("RememberMe", "true");
        }

    };

    $scope.hideShowPassword = function () {
        if ($scope.inputType == 'password')
            $scope.inputType = 'text';
        else
            $scope.inputType = 'password';
    };

};

module.exports = loginCtrl;