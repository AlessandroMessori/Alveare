var mod = angular.module('appAS.controllers', ['ionic'])
var forumCtrl = mod.controller('forumCtrl', function ($scope, $state, $window) {

    $scope.Posts = getPosts($window, $state);


    $scope.doRefresh = function () {
        $scope.Posts = getPosts($window, $state);
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

});

module.exports = forumCtrl;