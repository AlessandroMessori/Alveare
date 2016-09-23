var forumCtrl = function ($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {

    Messages.getPosts($scope, $rootScope, $state, 'newsSpinner');

    $scope.$on('$ionicView.enter', function () {
        if (window.localStorage.getItem('justLogged') == 'true') {
            Messages.getPosts($scope, $rootScope, $state, 'newsSpinner');
            window.localStorage.setItem('justLogged', 'false');
        }
    });

    $scope.openFile = function (file) {
        FileHandler.openFile(file, $ionicLoading);
    }

};

module.exports = forumCtrl;
