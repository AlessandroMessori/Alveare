var Parse = require('parse');
var tabsCtrl = function ($scope, $ionicTabsDelegate, $ionicLoading, $window, $state,Auth) {

    $scope.checkadmin = function () {

        if (Parse.User.current()) {
            if (Parse.User.current().get("isadmin")) {
                return "ng-show";
            } else {
                return "ng-hide";
            }
        }
    };

    $scope.Disconnect = function () {
        /*$ionicLoading.show({
            template: 'Disconnessione in corso...'
        });*/
        //Auth.Logout($ionicLoading,$state);
        $state.go('login');
        $window.localStorage.setItem("RememberMe", "false");
    };

};

module.exports = tabsCtrl;