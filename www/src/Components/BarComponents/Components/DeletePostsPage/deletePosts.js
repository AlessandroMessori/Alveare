class deletePostsCtrl {
    constructor($scope, $rootScope, $state, $ionicPopup, Messages, Modals) {

        Messages.getPosts($scope, $rootScope, $state, "newsSpinner", "Post");

        $scope.doRefresh = () => {
            Messages.getPosts($scope, $rootScope, $state, "newsSpinner", "Posts");
            $scope.$broadcast("scroll.refreshComplete");
            $scope.$apply();
        };

        $scope.removePost = postId => {
            Messages.deletePost($scope, postId, "postList", Modals);
        };

        $scope.showConfirm = postId => {
            const confirmPopup = $ionicPopup.confirm({
                title: "Conferma Eliminazione",
                template: "Vuoi davvero eliminare questo post?"
            });

            confirmPopup.then(res => {
                if (res) {
                    $scope.removePost(postId);
                }
            });
        };
    }
}
export default deletePostsCtrl ;


