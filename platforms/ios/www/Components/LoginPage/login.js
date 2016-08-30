var loginCtrl = function ($scope, $ionicLoading, $window, $state, Auth, InputFields) {

    $scope.inputType = 'password';

    $scope.UserLogin = function (username, password, RememberMe) {
        if (InputFields.filledFields([username, password])) {
            $ionicLoading.show({
                template: 'Accesso in Corso...'
            });
            Auth.Login(username, password, $ionicLoading, $state);
            $scope.SetRememberMe(RememberMe);
        }
        else {
            alert('compila tutti i campi');
        }
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