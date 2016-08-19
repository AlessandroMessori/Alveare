var addArticleCtrl = function ($scope, $window,Articles) {

    document.getElementById('img-preview').style.display = 'none';


    $scope.GetPic = function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });

        function onSuccess(imageData) {
            $scope.imgData = imageData;
            document.getElementById('img-preview').style.display = 'inline';
            document.getElementById('img_1').src = "data:image/png;base64," + imageData;
        }

        function onFail(message) {
            alert('Non sono riuscito a reperire la foto perchè ' + message);
        }

    };

    $scope.UploadArticle = function (title,text) {
        Articles.sendArticle(title, "autore",text, '', $window.localStorage.getItem("contentType"));
        title = '';
        text= '';
    }

};

module.exports = addArticleCtrl;

