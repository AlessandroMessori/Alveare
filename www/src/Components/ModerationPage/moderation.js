var moderationCtrl = function ($scope, $rootScope, $state, $ionicPopup, Comments, Modals) {

    Comments.getComments($scope, $rootScope, $state, 'commentsSpinner', false);

    $scope.removeComment = function (commentId) {
        Comments.deleteComment($scope, commentId, 'commentList', Modals);
    };

    $scope.showConfirm = function (commentId) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Conferma Eliminazione',
            template: 'Vuoi davvero eliminare questo commento?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                $scope.removeComment(commentId);
            }
        });
    };
};

module.exports = moderationCtrl;

