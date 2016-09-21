var forumCtrl = function ($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {

    Messages.getPosts($scope, $rootScope, $state, 'newsSpinner');

    $scope.openFile = function (file) {
        FileHandler.openFile(file,$ionicLoading);
    }

};

module.exports = forumCtrl;
