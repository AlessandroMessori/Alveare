var mod = angular.module('appAS.controllers', ['ionic'])
var commentsCtrl = mod.controller('commentsCtrl', function ($scope, $window) {
    $scope.send = function () {
        sendComment($("#commenttxt").val(), $window.localStorage.getItem("currentPost"));
        $("#commenttxt").val("");
        $scope.doRefresh();
    }

    $scope.$on('$ionicView.enter', function () {
        $scope.doRefresh();
    });

    $scope.Comments = getComments($window);

    $scope.doRefresh = function () {
        $scope.Comments = getComments($window);
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

})

module.exports = commentsCtrl;