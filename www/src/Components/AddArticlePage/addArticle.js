var Firebase = require("firebase");

var addArticleCtrl = function ($scope, $rootScope, $ionicLoading, Articles, InputFields, DateHandler, Modals, FileHandler) {

    $scope.$on("$ionicView.enter", function () {
        $scope.clearData();
    });

    $scope.clearData = function () {
        $scope.formScope.title = "";
        $scope.formScope.text = "";
        $scope.pdf = "";
        document.getElementById("img-preview").style.display = "none";
        $scope.$apply();
    };

    $scope.setFormScope = function (scope) {
        $scope.formScope = scope;
    };

    $scope.loadFile = function (ele) {
        FileHandler.loadFile(ele, $scope, false);
    };

    $scope.removeFile = function (file) {
        FileHandler.removeFile(file, $scope.fileList);
    };

    //convert to Service
    $scope.GetPic = function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });

        function onSuccess(imageUrl) {
            $scope.imgData = imageUrl;
            document.getElementById("img-preview").style.display = "inline";
            document.getElementById("img_1").src = imageUrl;
        }

        function onFail(message) {
            Modals.ResultTemplate("Non sono riuscito a reperire la foto perchè " + message);
        }

    };

    $scope.UploadArticle = function (title, text, pdf) {
        if (InputFields.filledFields([title, text, pdf, document.getElementById("img_1").src])) {

            $ionicLoading.show({
                template: "Pubblicazione in Corso..."
            });

            var newData = {
                text: text,
                title: title,
                author: Firebase.auth().currentUser.displayName,
                date: DateHandler.GetCurrentDate(),
                pdf: pdf
            };

            Articles.sendArticle(newData, document.getElementById("img_1").src, $rootScope.contentType);
        }
        else {
            Modals.ResultTemplate("Compila tutti i campi");
        }
    };


};

module.exports = addArticleCtrl;

