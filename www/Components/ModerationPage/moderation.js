var moderationCtrl = function ($scope, Comments) {
    Comments.getComments($scope, 'commentsSpinner',false);
};

module.exports = moderationCtrl;
