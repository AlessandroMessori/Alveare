import Firebase from "firebase";

class addNewsCtrl {

    constructor($scope, $ionicLoading, Messages, DateHandler, Modals, FileHandler) {

        $scope.fileList = [];
        $scope.binaryList = [];

        $scope.$on("$ionicView.enter", () => {
            $scope.clearData();
        });

        $scope.clearData = () => {
            $scope.formScope.news = "";
            $scope.fileList = [];
            $scope.binaryList = [];
        };

        $scope.setNewsScope = (scope) => $scope.formScope = scope;

        $scope.sendNews = (news) => {

            if (news != "") {

                $ionicLoading.show({
                    template: "Pubblicazione in Corso..."
                });

                const newData = {
                    text: news,
                    author: Firebase.auth().currentUser.displayName,
                    date: DateHandler.GetCurrentDate(),
                    files: $scope.fileList,
                    userMail: Firebase.auth().currentUser.email
                };

                Messages.sendPost(newData, $scope.binaryList);
                $scope.clearData();
            }
            else {
                Modals.ResultTemplate("compila il testo del messaggio");
            }
        };

        $scope.loadFile = (ele) => FileHandler.loadFile(ele, $scope, true);

        $scope.removeFile = (file) => FileHandler.removeFile(file, $scope.fileList);

    }

}

export default addNewsCtrl;