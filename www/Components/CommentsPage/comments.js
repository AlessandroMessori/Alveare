var commentsCtrl = function ($scope, $window, Comments) {
    $scope.send = function (comment) {
        if (comment != undefined) {
            Comments.sendComment(comment, $window.localStorage.getItem("currentPost"));
            comment = '';
            $scope.doRefresh();
        }
        else {
            alert('non puoi pubblicare un commento vuoto');
        }
    };

    $scope.$on('$ionicView.enter', function () {
        $scope.doRefresh();
    });

    $scope.Comments = Comments.getComments($window, 'commentsSpinner');

    $scope.doRefresh = function () {
        $scope.Comments = Comments.getComments($window, 'commentsSpinner');
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

};

module.exports = commentsCtrl;