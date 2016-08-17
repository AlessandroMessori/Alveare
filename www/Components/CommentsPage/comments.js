var commentsCtrl = function ($scope, $window,Comments) {
    $scope.send = function () {
        Comments.sendComment($("#commenttxt").val(), $window.localStorage.getItem("currentPost"));
        $("#commenttxt").val("");
        $scope.doRefresh();
    }

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