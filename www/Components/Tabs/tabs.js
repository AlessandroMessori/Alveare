var Firebase = require('firebase');
var _ = require('lodash');
var tabsCtrl = function ($scope, $ionicTabsDelegate, $ionicLoading, $window, $state, $rootScope, $ionicScrollDelegate, Auth) {
    $scope.View = 'tab-link';
    Auth.getAdmins($scope);

    $scope.$on('$ionicView.enter', function () {
        $ionicScrollDelegate.scrollTop();
        $scope.closeDrawer();
        $scope.User = Firebase.auth().currentUser.displayName;
        $scope.UserMail = Firebase.auth().currentUser.email;
        Auth.getAdmins($scope);
        $scope.checkadmin();
    });

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
        $rootScope.previousState = from.name;
        if ($rootScope.previousState == 'comments') {
            $rootScope.previousState = 'tab.forum'
        }
    });

    $scope.checkadmin = function () {
        if (_.includes($scope.Admins, $scope.UserMail)) {
            return "ng-show";
        } else {
            return "ng-hide";
        }
    };

    $scope.Disconnect = function () {
        $ionicLoading.show({
            template: 'Disconnessione in corso...'
        });
        Auth.Logout($ionicLoading, $state);
        $state.go('login');
        $window.localStorage.setItem("RememberMe", "false");
    };

    $scope.backBtnClick = function () {
        $state.go($rootScope.previousState);
    };

    $scope.navigate = function (destination, ind) {
        $scope.View = 'tab.' + destination;
        document.getElementById('MainView1').style.display = 'none';
        document.getElementById('MainView2').style.display = 'none';
        document.getElementById('MainView3').style.display = 'none';
        document.getElementById('MainView4').style.display = 'none';
        document.getElementById('MainView5').style.display = 'none';
        document.getElementById('MainView' + ind).style.display = 'block';
    }
};

module.exports = tabsCtrl;