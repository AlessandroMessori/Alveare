angular.module('appAS.controllers', ['ionic'])
    .controller('sendMessageCtrl', function ($scope) {
        $scope.test = function () {
            sendpost($("#messagetxt").val());
            $("#messagetxt").val("");
        };

    })