var forumCtrl = function ($scope, $state, $window,Messages) {

    $scope.Posts = Messages.getPosts($window, $state,'newsSpinner');

    $scope.doRefresh = function () {
        $scope.Posts = Messages.getPosts($window, $state,'newsSpinner');
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

};

module.exports = forumCtrl;
