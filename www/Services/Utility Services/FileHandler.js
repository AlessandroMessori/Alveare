var FileHandler = function (Modals) {
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

    this.loadFile = function (ele, scope, multiple) {
        ele.disabled = true;
        var fullPath = ele.value;
        var filename = ele.files[ele.files.length - 1].name;
        var fileType = ele.files[ele.files.length - 1].type;

        if (fileType != 'application/pdf') {
            Modals.ResultTemplate('puoi aggiungere solo file pdf');
            ele.disabled = false;
        }
        else if (multiple) {

            if (_.includes(scope.fileList, filename)) {
                Modals.ResultTemplate('Hai già caricato questo File');
                ele.disabled = false;
            }
            else {
                scope.fileList.push(filename.slice(0, -4));
                scope.binaryList.push({
                    binary: ele.files[ele.files.length - 1],
                    name: filename.slice(0, -4)
                });
                scope.$apply();
                ele.disabled = false;
            }
        }
        else {
            scope.pdf = {
                binary: ele.files[ele.files.length - 1],
                name: filename.slice(0, -4)
            };
            ele.disabled = false;
            scope.$apply();
        }
    };

    this.removeFile = function (file, fileList) {
        _.pull(fileList, file);
    };
};

module.exports = FileHandler;