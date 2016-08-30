var moderationCtrl = function ($scope, Comments) {
    Comments.getComments($scope, 'commentsSpinner', false);

    $scope.removeComment = function (commentId) {
        Comments.deleteComment($scope, commentId, 'commentList');
    }
};

module.exports = moderationCtrl;
