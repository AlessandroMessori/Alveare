var Firebase = require('firebase');
var commentsCtrl = function ($scope, $state, Comments, DateHandler, Modals) {

    $scope.$on('$ionicView.enter', function () {
        Comments.getComments($scope, $state, 'commentsSpinner');
    });

    $scope.send = function (comment) {
        if (comment != undefined) {
            var newData = {
                comment: comment,
                author: Firebase.auth().currentUser.displayName,
                father: localStorage.getItem('currentPost'),
                date: DateHandler.GetCurrentDate()
            };
            Comments.sendComment($scope, newData, 'commentList');
            comment = '';
            $scope.$apply();
        }
        else {
            Modals.ResultTemplate('non puoi pubblicare un commento vuoto');
        }
    };

    Comments.getComments($scope, $state, 'commentsSpinner');

};

module.exports = commentsCtrl;
