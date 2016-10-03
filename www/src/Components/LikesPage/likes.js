class likesCtrl {
    constructor($scope, $rootScope, Likes) {

        Likes.getLikers($rootScope.currentPosts, $scope, "likesSpinner");

        $scope.$on("$ionicView.enter", () => {
            Likes.getLikers($rootScope.currentPost, $scope, "likesSpinner");
        });

    }
}

export default likesCtrl;
