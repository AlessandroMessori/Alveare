var addNewsCtrl = function ($scope) {
    $scope.test = function () {
        sendpost($("#messagetxt").val());
        $("#messagetxt").val("");
    };
};

module.exports = addNewsCtrl;