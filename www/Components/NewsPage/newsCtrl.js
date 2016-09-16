var forumCtrl = function ($scope, $state, $window, $http, Messages, FileHandler) {

    Messages.getPosts($scope, $state, 'newsSpinner');

    $scope.openFile = function (file) {
        FileHandler.openFile(file);
    }

};

module.exports = forumCtrl;
