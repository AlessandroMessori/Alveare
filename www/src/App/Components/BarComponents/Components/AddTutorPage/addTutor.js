import Firebase from "firebase";
class addTutorCtrl {
    constructor($scope, $ionicLoading, ionicTimePicker, Tutors, Modals) {

        $scope.openPicker = () => {

            const ipObj1 = {
                callback(val) {
                    if (typeof (val) !== "undefined") {

                        const selectedTime = {
                            hour: new Date(val * 1000).getUTCHours(),
                            minutes: new Date(val * 1000).getUTCMinutes()
                        };

                        if (selectedTime.hour < 10) selectedTime.hour = "0" + selectedTime.hour;
                        if (selectedTime.minutes < 10) selectedTime.minutes = "0" + selectedTime.minutes;

                        $scope.time = selectedTime.hour + ":" + selectedTime.minutes;
                        $scope.fullDate = new Date(val * 1000);
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

                const newTutor = {
                    authorMail: Firebase.auth().currentUser.email,
                    authorName: Firebase.auth().currentUser.displayName,
                    description,
                    deadLine,
                    date: $scope.fullDate
                };

                Tutors.sendTutor(newTutor);
            }
            else {
                Modals.ResultTemplate("Compila tutti i campi");
            }

        };

    }
}
export default addTutorCtrl;