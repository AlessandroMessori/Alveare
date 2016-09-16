var forumCtrl = function ($scope, $rootScope, $state, Messages, FileHandler) {

    Messages.getPosts($scope, $rootScope, $state, 'newsSpinner');

    $scope.openFile = function (file) {
        FileHandler.openFile(file);
    }

};

module.exports = forumCtrl;
