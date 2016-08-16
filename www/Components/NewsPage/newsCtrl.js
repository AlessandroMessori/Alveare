angular.module('appAS.controllers', ['ionic'])
    .controller('forumCtrl', function ($scope, $state, $window) {

        $scope.Posts = getPosts($window, $state);


        $scope.doRefresh = function () {
            $scope.Posts = getPosts($window, $state);
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$apply();
        };

    })