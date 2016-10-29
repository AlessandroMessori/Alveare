class addTutorCtrl {
    constructor($scope, ionicTimePicker) {

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

                        $scope.time = selectedTime.hour + ':' + selectedTime.minutes;
                    }
                },
                setLabel: "Imposta",
                format: 24,
                step: 1
            };

            ionicTimePicker.openTimePicker(ipObj1);
        };

    }
}
export default addTutorCtrl;