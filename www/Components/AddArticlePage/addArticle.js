var Firebase = require('firebase');
var addArticleCtrl = function ($scope, $window, $ionicLoading, Articles, InputFields, DateHandler) {

    document.getElementById('img-preview').style.display = 'none';

    var imagesRef = Firebase.storage.ref().child('img');

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
        if (InputFields.filledFields([title, text, document.getElementById('img_1').src])) {

            $ionicLoading.show({
                template: 'Pubblicazione in Corso...'
            });

            var uploadTask = imagesRef.putString($scope.imgData, 'base64url');
            var downloadURL = null;

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function(snapshot) {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if ((progress == 25) || (progress == 50) || (progress == 75) || (progress == 100)) {
                        alert('Upload is ' + progress + '% done');
                    }
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            alert('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            alert('Upload is running');
                            break;
                    }
                }, function(error) {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            alert("Utente non autorizzato");
                            break;

                        case 'storage/canceled':
                            // User canceled the upload
                            alert("Upload interrotto dall'utente");
                            break;

                        case 'storage/unknown':
                            alert("Errore generico");
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                }, function() {
                    // Upload completed successfully, now we can get the download URL
                    downloadURL = uploadTask.snapshot.downloadURL;
                });

            var newData = {
                text: text,
                title: title,
                author: Firebase.auth().currentUser.displayName,
                date: DateHandler.GetCurrentDate(),
                img: downloadURL
            };

            Articles.sendArticle(newData);
            title = '';
            text = '';
        }
        else {
            alert('Compila tutti i campi');
        }
    };


};

module.exports = addArticleCtrl;

