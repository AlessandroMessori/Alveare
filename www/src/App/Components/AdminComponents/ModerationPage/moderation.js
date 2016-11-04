class moderationCtrl {
    constructor($scope, $rootScope, $state, $ionicPopup, Comments, Modals) {

        Comments.getComments($scope, $rootScope, $state, "commentsSpinner", false);

        $scope.doRefresh = () => {
            Comments.getComments($scope, $rootScope, $state, "commentsSpinner", false);
            $scope.$broadcast("scroll.refreshComplete");
            $scope.$apply();
        };

        $scope.removeComment = commentId => Comments.deleteComment($scope, commentId, "commentList", Modals);

        $scope.showConfirm = commentId => {
            const confirmPopup = $ionicPopup.confirm({
                title: "Conferma Eliminazione",
                template: "Vuoi davvero eliminare questo commento?"
            });

            confirmPopup.then(res => {
                if (res) {
                    $scope.removeComment(commentId);
                }
            });
        };
    }
}
export default moderationCtrl;

