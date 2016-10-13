class updateProfileCtrl {

    constructor($scope, $rootScope, Profile, CameraHandler) {

        $scope.$on("$ionicView.enter", () => {
            $scope.profileImage = $rootScope.currentProfile.avatar;
            $scope.userName = $rootScope.currentProfile.name;
            $scope.userMail = $rootScope.currentProfile.mail;
            $scope.inputDisabled = true;
        });

        $scope.getPic = ()=> {
            if ($rootScope.profileUpdatable) {
                CameraHandler.getPic((imgUrl) => {
                    document.getElementById("profileImg").src = imgUrl;
                    Profile.updateProfile(imgUrl);
                });
            }
        };

    }

}

export default updateProfileCtrl;