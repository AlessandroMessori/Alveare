import Firebase from "firebase";

class reportBugCtrl {

    constructor($scope, $ionicLoading, Reports, DateHandler, Modals) {

        $scope.$on("$ionicView.enter", () => $scope.formScope.news = "");

        $scope.setReportScope = scope => $scope.formScope = scope;

        $scope.sendReport = report => {

            if (report != undefined) {

                $ionicLoading.show({template: "Invio Segnalazione in Corso..."});

                const newData = {
                    text: report,
                    author: Firebase.auth().currentUser.displayName,
                    date: DateHandler.GetCurrentDate(),
                    userMail: Firebase.auth().currentUser.email
                };

                Reports.sendReport(newData);
                $scope.formScope.news = "";
            }
            else {
                Modals.ResultTemplate("compila il testo della segnalazione");
            }
        };

    }

}

export default reportBugCtrl;