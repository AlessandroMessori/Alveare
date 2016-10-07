import Firebase from "firebase";

class addArticleCtrl {

    constructor($scope, $rootScope, $ionicLoading, Articles, InputFields, DateHandler, Modals, FileHandler, CameraHandler) {

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

        $scope.GetPic = ()=> {
            CameraHandler.getPic((imageUrl)=> {
                $scope.imgData = imageUrl;
                document.getElementById("img-preview").style.display = "inline";
                document.getElementById("img_1").src = imageUrl;
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
                    pdf: pdf,
                    userMail: Firebase.auth().currentUser.email
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

