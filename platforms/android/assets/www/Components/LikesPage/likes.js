var likesCtrl = function ($scope, $rootScope, Likes) {

    $scope.$on('$ionicView.enter', function () {
        Likes.getLikers($rootScope.currentPost, $scope, 'likesSpinner');
    });

    Likes.getLikers($rootScope.currentPosts, $scope, 'likesSpinner');

};

module.exports = likesCtrl;
