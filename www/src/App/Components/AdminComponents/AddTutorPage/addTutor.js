import Firebase from "firebase";

class addTutorCtrl {
    constructor($scope, $ionicLoading, ionicTimePicker, Tutors, Users, Modals, StaticData) {

        $scope.checkBoxList = false;
        $scope.Subjects = StaticData.subjects;

        $scope.$on("$ionicView.enter", () => {
            $scope.description = "";
            if ($scope.Subjects.length > 0) {
                $scope.Subjects.map(sub => sub.value = false);
            }
            $scope.time = "";
            $scope.$apply();
        });

        $scope.showList = () => {

            $scope.checkBoxList = !$scope.checkBoxList;

            if ($scope.checkBoxList) document.getElementById("checkBoxList").style.display = "block";
            else document.getElementById("checkBoxList").style.display = "none";

        };

        $scope.onSubjectCheck = () => {
            $scope.description = $scope.getSubjects();
        };

        $scope.openPicker = () => {

            const ipObj1 = {
                callback(val) {
                    if (typeof (val) !== "undefined") {

                        const deadLine = new Date(val * 1000);
                        const now = new Date();
                        const selectedTime = {
                            hour: deadLine.getUTCHours(),
                            minutes: deadLine.getUTCMinutes()
                        };

                        if (selectedTime.hour < 10) selectedTime.hour = "0" + selectedTime.hour;
                        if (selectedTime.minutes < 10) selectedTime.minutes = "0" + selectedTime.minutes;

                        $scope.time = selectedTime.hour + ":" + selectedTime.minutes;

                        now.setUTCHours(deadLine.getUTCHours() - 1);
                        now.setMinutes(deadLine.getMinutes());
                        $scope.fullDate = now.toString();
                    }
                },
                setLabel: "Imposta",
                format: 24,
                step: 1
            };

            ionicTimePicker.openTimePicker(ipObj1);
        };

        $scope.sendTutor = (description, deadLine) => {

            if (description != "" && deadLine) {

                $ionicLoading.show({
                    template: "Pubblicazione in Corso..."
                });

                Users.GetUserData(Firebase.auth().currentUser, user => {
                    const newTutor = {
                        authorMail: Firebase.auth().currentUser.email,
                        authorName: Firebase.auth().currentUser.displayName,
                        cls: user.cls,
                        sect: user.sect,
                        description,
                        deadLine,
                        date: $scope.fullDate
                    };

                    Tutors.sendTutor(newTutor);
                });
            }
            else {
                Modals.ResultTemplate("Compila tutti i campi");
            }

        };

        $scope.getSubjects = () => {
            let subjects = "";
            $scope.Subjects.map(item => {
                if (item.value) subjects += item.name + ",";
            });
            return subjects.slice(0, -1);
        };
    }
}

export default addTutorCtrl;