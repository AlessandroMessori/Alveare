var loginCtrl = function ($scope, $ionicLoading, $window, Auth) {

    $scope.inputType = 'password';

    $scope.UserLogin = function (username, password) {
        $ionicLoading.show({
            template: 'Accesso in Corso...'
        });
        Auth.Login(username, password, $ionicLoading);
        $scope.SetRememberMe();
    };

    $scope.SetRememberMe = function () {

        if ($scope.RememberMe) {
            $window.localStorage.setItem("RememberMe", "true");
        }

    };

    $scope.CheckRememberMe = function () {

        if ($window.localStorage.getItem("RememberMe") == "true") {
            document.location.href = "index.html";
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