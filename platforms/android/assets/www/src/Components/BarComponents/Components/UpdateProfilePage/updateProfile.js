class updateProfileCtrl {

    constructor($scope, $rootScope, $state, Profile, CameraHandler) {

        $scope.$on("$ionicView.enter", () => {
            $scope.profileImage = $rootScope.currentProfile.avatar;
            $scope.userName = $rootScope.currentProfile.name;
            $scope.userMail = $rootScope.currentProfile.mail;
            Profile.getStatus($scope.userName, $scope);
        });

        $scope.getPic = ()=> {
            if ($rootScope.profileUpdatable) {
                CameraHandler.getPic((imgUrl) => {
                    document.getElementById("profileImg").src = imgUrl;
                    Profile.updateProfile(imgUrl);
                });
            }
        };

        $scope.goToUpdateStatus = ()=> {
            if ($rootScope.profileUpdatable) {
                $state.go("updateStatus");
            }
        };

    }

}

export default updateProfileCtrl;