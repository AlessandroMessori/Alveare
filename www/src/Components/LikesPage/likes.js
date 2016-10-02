var likesCtrl = function ($scope, $rootScope, Likes) {

    Likes.getLikers($rootScope.currentPosts, $scope, "likesSpinner");

    $scope.$on("$ionicView.enter", function () {
        Likes.getLikers($rootScope.currentPost, $scope, "likesSpinner");
    });

};

module.exports = likesCtrl;
