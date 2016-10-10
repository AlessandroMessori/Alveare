class settingsCtrl {
    constructor($scope, $rootScope, $state, Auth, Modals, SocialHandler) {

        if (window.localStorage.getItem("RememberMe") == "true") {
            $scope.RememberMe = true;
        }
        else {
            $scope.RememberMe = false;
        }

        $scope.updateRememberMe = (RememberMe) => {
            window.localStorage.setItem("RememberMe", RememberMe.toString());
            $scope.RememberMe = RememberMe;
        };

        $scope.shareApp = () => SocialHandler.shareApp();


        $scope.rateUs = () => SocialHandler.rateUs();


        $scope.Disconnect = () => Auth.Logout($state, $rootScope, Modals);
    }
}

module.exports = settingsCtrl;
