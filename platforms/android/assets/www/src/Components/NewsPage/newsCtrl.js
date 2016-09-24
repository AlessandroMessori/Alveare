var forumCtrl = function ($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {

    $rootScope.userName = window.localStorage.getItem('Username');
    Messages.getPosts($scope, $rootScope, $state, 'newsSpinner');

    $scope.$on('$ionicView.enter', function () {
        if ($rootScope.userName != window.localStorage.getItem('Username')) {
            Messages.getPosts($scope, $rootScope, $state, 'newsSpinner');
            $rootScope.userName = window.localStorage.getItem('Username');
        }
    });

    $scope.openFile = function (file) {
        FileHandler.openFile(file, $ionicLoading);
    }

};

module.exports = forumCtrl;
