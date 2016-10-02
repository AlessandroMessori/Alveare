var Firebase = require('firebase');
var tabsCtrl = function ($scope, $ionicTabsDelegate, $ionicLoading, $window, $state, $rootScope, $ionicScrollDelegate, Auth, Modals, PlatformHandler) {

    $scope.View = 'tab-link';

    Auth.checkAdmins($scope, 'adminPanel');

    PlatformHandler.is('iOS',
        function () {
            document.getElementById('tabBar').style.marginTop = '-5%';
        });

    $scope.$on('$ionicView.enter', function () {
        $scope.closeDrawer();
        $scope.User = Firebase.auth().currentUser.displayName;
        $scope.UserMail = Firebase.auth().currentUser.email;
        Auth.checkAdmins($scope, 'adminPanel');
    });

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from) {
        $rootScope.previousState = from.name;
        if ($rootScope.previousState == 'comments') {
            $rootScope.previousState = 'tab.forum'
        } else {
            $ionicScrollDelegate.scrollTop();
        }
    });

    $scope.backBtnClick = function () {
        $state.go($rootScope.previousState);
    };

    $scope.ShowLinks = function () {
        if (document.getElementById('linkList').style.display == 'block') {
            document.getElementById('linkList').style.display = 'none'
        }
        else {
            document.getElementById('linkList').style.display = 'block'
        }
    };

    //convert to Service
    $scope.navigate = function (destination, ind) {
        $scope.View = 'tab-' + destination;
        for (var i = 1; i < 10; i++) {
            document.getElementById('MainView' + i).style.display = 'none';
        }
        document.getElementById('MainView' + ind).style.display = 'block';
    }
};

module.exports = tabsCtrl;