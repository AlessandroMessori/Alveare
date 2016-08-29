var forumCtrl = function ($scope, $state, $window, Messages) {

    $scope.$on('$ionicView.enter', function () {
        Messages.getPosts($scope, $state, 'newsSpinner');
    });
};

module.exports = forumCtrl;
