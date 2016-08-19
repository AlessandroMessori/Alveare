var addArticleCtrl = function ($scope, $window) {

    $('#img-preview').hide();

    $scope.GetPic = function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });

        function onSuccess(imageData) {
            $scope.imgData = imageData;
            $('#img-preview').show();
            document.getElementById('img_1').src = "data:image/png;base64," + imageData;
        }

        function onFail(message) {
            alert('Non sono riuscito a reperire la foto perchè ' + message);
        }

    }

    $scope.UploadArticle = function () {
        sendArticle($("#titletxt").val(), "autore", $("#texttxt").val(), $scope.imgData, $window.localStorage.getItem("contentType"));
        $("#titletxt").val("");
        $("#texttxt").val("");
    }

};

module.exports = addArticleCtrl;

