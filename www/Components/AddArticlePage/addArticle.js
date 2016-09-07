var Firebase = require('firebase');
var addArticleCtrl = function ($scope, $window, $ionicLoading, Articles, InputFields, DateHandler) {

    document.getElementById('img-preview').style.display = 'none';

    $scope.GetPic = function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });

        function onSuccess(imageUrl) {
            $scope.imgData = imageUrl;
            document.getElementById('img-preview').style.display = 'inline';
            document.getElementById('img_1').src = imageUrl;
        }

        function onFail(message) {
            alert('Non sono riuscito a reperire la foto perchè ' + message);
        }

    };

    $scope.UploadArticle = function (title, text) {
        if (InputFields.filledFields([title, text, document.getElementById('img_1').src])) {

            $ionicLoading.show({
                template: 'Pubblicazione in Corso...'
            });


            var newData = {
                text: text,
                title: title,
                author: Firebase.auth().currentUser.displayName,
                date: DateHandler.GetCurrentDate()
            };

            Articles.sendArticle(newData, document.getElementById('img_1').src);
            title = '';
            text = '';
        }
        else {
            alert('Compila tutti i campi');
        }
    };


};

module.exports = addArticleCtrl;

