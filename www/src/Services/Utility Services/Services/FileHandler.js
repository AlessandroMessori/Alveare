import includes from "lodash/includes";
import pull from "lodash/pull";


class FileHandler {

    constructor(Modals, PlatformHandler) {

        this.getFileBlob = (url, cb) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.addEventListener("load", ()=> cb(xhr.response));
            xhr.send();
        };

        this.openFile = (file, loadingTemplate) => {
            PlatformHandler.is("iOS",
                () => cordova.InAppBrowser.open(file, "_system", "location=yes"),
                () => {
                    const fileURL = cordova.file.externalApplicationStorageDirectory + "file.pdf";
                    const fileTransfer = new FileTransfer();
                    loadingTemplate.show({
                        template: "Apertura File in Corso..."
                    });

                    fileTransfer.download(
                        file,
                        fileURL,
                        entry => {
                            cordova.plugins.fileOpener2.open(
                                entry.toURL(),
                                "application/pdf",
                                {
                                    error() {
                                        loadingTemplate.hide();
                                    },
                                    success() {
                                        loadingTemplate.hide();
                                    }
                                }
                            );
                        },
                        ()=> {
                        },
                        false
                    );
                });
        };

        this.loadFile = (ele, scope, multiple) => {
            ele.disabled = true;
            const filename = ele.files[ele.files.length - 1].name;
            const fileType = ele.files[ele.files.length - 1].type;

            if (fileType != "application/pdf") {
                Modals.ResultTemplate("puoi aggiungere solo file pdf");
                ele.disabled = false;
            }
            else if (multiple) {

                if (includes(scope.fileList, filename)) {
                    Modals.ResultTemplate("Hai già caricato questo File");
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

        this.removeFile = (file, fileList) => pull(fileList, file);
    }

}

export default FileHandler;