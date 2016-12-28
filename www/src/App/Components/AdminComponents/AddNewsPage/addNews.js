import Firebase from "firebase";

class addNewsCtrl {

    constructor($scope, $rootScope, $ionicLoading, $ionicModal, Messages, DateHandler, Modals, FileHandler) {

        $scope.fileList = [];
        $scope.binaryList = [];
        $scope.linkList = [];
        $scope.modal = $ionicModal.fromTemplate("<link-modal></link-modal>", {
            scope: $scope,
            animation: "slide-in-up"
        });

        $scope.$on("$ionicView.enter", () => $scope.clearData());

        $scope.clearData = () => {
            $scope.formScope.news = "";
            $scope.fileList = [];
            $scope.binaryList = [];
        };

        $scope.setNewsScope = (scope) => $scope.formScope = scope;

        $scope.sendNews = (news) => {

            if (news != "") {

                $ionicLoading.show({template: "Pubblicazione in Corso..."});

                const newData = {
                    text: news,
                    author: Firebase.auth().currentUser.displayName,
                    authorID: Firebase.auth().currentUser.uid,
                    date: DateHandler.GetCurrentDate(),
                    files: $scope.fileList,
                    links: $scope.linkList,
                    userMail: Firebase.auth().currentUser.email
                };

                Messages.sendPost(newData, $scope.binaryList, $rootScope.contentType);
                $scope.linkList = null;
                $scope.clearData();
            }
            else {
                Modals.ResultTemplate("compila il testo del messaggio");
            }
        };

        $scope.loadFile = (ele) => FileHandler.loadFile(ele, $scope, true);

        $scope.removeFile = (file) => FileHandler.removeFile(file, $scope.fileList);

        $scope.removeLink = (index) => $scope.linkList.splice(index, 1);


        $scope.$on("$destroy", () => $scope.modal.remove());

        $scope.openLinkModal = () => {
            $scope.modal = $ionicModal.fromTemplate("<link-modal></link-modal>", {
                scope: $scope,
                animation: "slide-in-up"
            });
            $scope.modal.show();
        };
    }


}

export default addNewsCtrl;