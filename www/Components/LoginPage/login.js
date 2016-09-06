var Firebase = require('firebase');
var loginCtrl = function ($scope, $ionicLoading, $window, $state, $ionicHistory, Auth, InputFields,StaticData) {

    Firebase.auth().signOut();
    $scope.inputType = 'password';
    $scope.imgData = StaticData.logoImg;

    $scope.UserLogin = function (mail, password, RememberMe) {
        if (InputFields.filledFields([mail, password])) {
            $ionicLoading.show({
                template: 'Accesso in Corso...'
            });
            Auth.Login(mail, password, $ionicLoading, $state, $ionicHistory);
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