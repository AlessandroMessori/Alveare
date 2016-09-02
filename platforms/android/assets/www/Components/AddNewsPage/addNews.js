var _ = require('lodash');
var Firebase = require('firebase');
var addNewsCtrl = function ($scope, $ionicLoading, Messages, DateHandler) {

    $scope.fileList = [];
    $scope.binaryList = [];

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
            alert('compila il testo del messaggio');
        }
    };

    $scope.loadFile = function (ele) {
        ele.disabled = true;
        var fullPath = ele.value;
        var filename = ele.files[ele.files.length - 1].name;
        var fileType = ele.files[ele.files.length - 1].type;

        if (fileType != 'application/pdf') {
            alert('puoi aggiungere solo file pdf');
            ele.disabled = false;
        }
        else if (_.includes($scope.fileList, filename)) {
            alert('Hai già caricato questo File');
            ele.disabled = false;
        }
        else {
            $scope.fileList.push(filename.slice(0, -4));
            $scope.binaryList.push({
                binary: ele.files[ele.files.length - 1],
                name: filename.slice(0, -4)
            });
            $scope.$apply();
            ele.disabled = false;
        }
    };

    $scope.removeFile = function (file) {
        _.pull($scope.fileList, file);
    };
};

module.exports = addNewsCtrl;