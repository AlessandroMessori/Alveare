var Parse = require('parse');
var addArticleCtrl = function ($scope, $window, $ionicLoading, Articles, InputFields) {

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

    $scope.UploadArticle = function (title, text) {
        if (InputFields.filledFields([title, text])) {

            $ionicLoading.show({
                template: 'Pubblicazione in Corso...'
            });
            Articles.sendArticle(title, Parse.User.current().get("username"), text, '', $window.localStorage.getItem("contentType"), $ionicLoading);
            title = '';
            text = '';
        }
        else {
            alert('compila tutti i campi');
        }
    }

};

module.exports = addArticleCtrl;

