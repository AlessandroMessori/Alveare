class CameraHandler {

    getPic(callback) {
        navigator.camera.getPicture(
            imageUrl => {
                callback(imageUrl);
            },
            (message) => {
                Modals.ResultTemplate("Non sono riuscito a reperire la foto perchè " + message);
            },
            {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });
    }

}

export default CameraHandler;