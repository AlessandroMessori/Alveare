var _ = require('lodash');
var Firebase = require('firebase');
var addNewsCtrl = function ($scope, $ionicLoading, Messages, DateHandler, Modals, FileHandler) {

    $scope.fileList = [];
    $scope.binaryList = [];

    $scope.$on('$ionicView.enter', function () {
        $scope.formScope.news = '';
        $scope.fileList = [];
    });

    $scope.setNewsScope = function (scope) {
        $scope.formScope = scope;
    };

    $scope.sendNews = function (news) {
        var newData = {
            text: news,
            author: Firebase.auth().currentUser.displayName,
            date: DateHandler.GetCurrentDate(),
            files: $scope.fileList
        };

        if (news != undefined) {
            $ionicLoading.show({
                template: 'Pubblicazione in Corso...'
            });
            Messages.sendPost(newData, $scope.binaryList);
        }
        else {
            Modals.ResultTemplate('compila il testo del messaggio');
        }
        $scope.formScope.news = '';
        $scope.fileList = [];
    };

    $scope.loadFile = function (ele) {
        FileHandler.loadFile(ele, $scope, true);
    };

    $scope.removeFile = function (file) {
        FileHandler.removeFile(file, $scope.fileList);
    }

};

module.exports = addNewsCtrl;