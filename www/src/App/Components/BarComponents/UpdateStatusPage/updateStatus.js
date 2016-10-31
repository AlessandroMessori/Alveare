class updateStatusCtrl {

    constructor($scope, $rootScope, $ionicLoading, Profile) {

        $scope.sendStatus = newStatus => {
            $ionicLoading.show({
                template: "Aggiornamento in Corso..."
            });
            Profile.updateStatus(newStatus, $rootScope.currentProfile.name);
        };

    }

}

export default updateStatusCtrl;
