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

    $scope.Disconnect = function () {
        Auth.Logout($state, $rootScope, Modals);
    };

    $scope.backBtnClick = function () {
        $state.go($rootScope.previousState);
    };

    //convert to Service
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