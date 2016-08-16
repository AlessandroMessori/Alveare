var mod = angular.module('appAS.controllers', ['ionic'])
var addNewsCtrl = mod.controller('addNewsCtrl', function ($scope) {
    $scope.test = function () {
        sendpost($("#messagetxt").val());
        $("#messagetxt").val("");
    };

})

module.exports = addNewsCtrl;