var Firebase = require("firebase");
var commentsCtrl = function ($scope, $rootScope, $state, Comments, DateHandler, Modals) {

    Comments.getComments($scope, $rootScope, $state, "commentsSpinner");

    $scope.$on("$ionicView.enter", function () {
        $scope.comment = "";
        Comments.getComments($scope, $rootScope, $state, "commentsSpinner");
    });

    $scope.send = function (comment) {
        if (comment != undefined) {
            var newData = {
                comment: comment,
                author: Firebase.auth().currentUser.displayName,
                father: $rootScope.currentPost,
                date: DateHandler.GetCurrentDate()
            };
            Comments.sendComment($scope, newData, "commentList");
            $scope.comment = "";
            $scope.$apply();
        }
        else {
            Modals.ResultTemplate("non puoi pubblicare un commento vuoto");
        }
    };

};

module.exports = commentsCtrl;
