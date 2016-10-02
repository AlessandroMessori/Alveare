var Firebase = require("firebase");

var addNewsCtrl = function ($scope, $ionicLoading, Messages, DateHandler, Modals, FileHandler) {

    $scope.fileList = [];
    $scope.binaryList = [];

    $scope.$on("$ionicView.enter", function () {
        $scope.clearData();
    });

    $scope.clearData = function () {
        $scope.formScope.news = "";
        $scope.fileList = [];
        $scope.binaryList = [];
    };

    $scope.setNewsScope = function (scope) {
        $scope.formScope = scope;
    };

    $scope.sendNews = function (news) {

        if (news != "") {

            $ionicLoading.show({
                template: "Pubblicazione in Corso..."
            });

            var newData = {
                text: news,
                author: Firebase.auth().currentUser.displayName,
                date: DateHandler.GetCurrentDate(),
                files: $scope.fileList
            };

            Messages.sendPost(newData, $scope.binaryList);
            $scope.clearData();
        }
        else {
            Modals.ResultTemplate("compila il testo del messaggio");
        }
    };

    $scope.loadFile = function (ele) {
        FileHandler.loadFile(ele, $scope, true);
    };

    $scope.removeFile = function (file) {
        FileHandler.removeFile(file, $scope.fileList);
    };

};

module.exports = addNewsCtrl;