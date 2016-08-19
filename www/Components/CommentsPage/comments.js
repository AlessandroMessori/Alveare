var commentsCtrl = function ($scope, $window, Comments) {
    $scope.send = function (comment) {
        Comments.sendComment(comment, $window.localStorage.getItem("currentPost"));
        comment = '';
        $scope.doRefresh();
    };

    $scope.$on('$ionicView.enter', function () {
        $scope.doRefresh();
    });

    $scope.Comments = Comments.getComments($window);

    $scope.doRefresh = function () {
        $scope.Comments = Comments.getComments($window);
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

};

module.exports = commentsCtrl;