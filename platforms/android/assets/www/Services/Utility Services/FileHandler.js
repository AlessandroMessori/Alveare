var FileHandler = function () {
    this.getFileBlob = function (url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function () {
            cb(xhr.response);
        });
        xhr.send();
    };

    this.openFile = function (file) {
        var fileURL = cordova.file.externalApplicationStorageDirectory + "file.pdf";

        var fileTransfer = new FileTransfer();

        fileTransfer.download(
            file,
            fileURL,
            function (entry) {
                cordova.plugins.fileOpener2.open(
                    entry.toURL(),
                    'application/pdf',
                    {
                        error: function (e) {
                        },
                        success: function () {
                        }
                    }
                );
            },
            function (error) {
            },
            false
        );
    }
};

module.exports = FileHandler;