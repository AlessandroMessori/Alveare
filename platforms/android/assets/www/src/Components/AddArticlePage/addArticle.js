import Firebase from "firebase";

class addArticleCtrl {

    constructor($scope, $rootScope, $ionicLoading, Articles, InputFields, DateHandler, Modals, FileHandler) {

        $scope.$on("$ionicView.enter", () => $scope.clearData());

        $scope.clearData = () => {
            $scope.formScope.title = "";
            $scope.formScope.text = "";
            $scope.pdf = "";
            document.getElementById("img-preview").style.display = "none";
            $scope.$apply();
        };

        $scope.setFormScope = (scope) => $scope.formScope = scope;

        $scope.loadFile = (ele) => FileHandler.loadFile(ele, $scope, false);

        $scope.removeFile = (file) => FileHandler.removeFile(file, $scope.fileList);


        //convert to Service
        $scope.GetPic = () => {
            navigator.camera.getPicture(
                imageUrl => {
                    $scope.imgData = imageUrl;
                    document.getElementById("img-preview").style.display = "inline";
                    document.getElementById("img_1").src = imageUrl;
                },
                (message) => {
                    Modals.ResultTemplate("Non sono riuscito a reperire la foto perchè " + message);
                },
                {
                    quality: 50,
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                });

        };

        $scope.UploadArticle = (title, text, pdf) => {
            if (InputFields.filledFields([title, text, pdf, document.getElementById("img_1").src])) {

                $ionicLoading.show({
                    template: "Pubblicazione in Corso..."
                });

                const newData = {
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

    }
}


export default addArticleCtrl;

