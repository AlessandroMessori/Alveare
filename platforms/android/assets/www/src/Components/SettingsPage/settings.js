var settingsCtrl = function ($scope, $rootScope, $state, Auth, Modals) {

    if (window.localStorage.getItem('RememberMe') == 'true') {
        $scope.RememberMe = true;
    }
    else {
        $scope.RememberMe = false;
    }

    $scope.updateRememberMe = function (RememberMe) {
        window.localStorage.setItem('RememberMe', RememberMe.toString());
        $scope.RememberMe = RememberMe;
    };

    $scope.Disconnect = function () {
        Auth.Logout($state, $rootScope, Modals);
    };

};

module.exports = settingsCtrl;
