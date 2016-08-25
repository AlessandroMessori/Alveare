var forumCtrl = function ($scope, $state, $window, Messages) {

    $scope.$on('$ionicView.enter', function () {
        Messages.getPosts($scope, $state, 'newsSpinner');
    });

    $scope.doRefresh = function () {
        Messages.getPosts($scope, $state, 'newsSpinner');
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

};

module.exports = forumCtrl;
