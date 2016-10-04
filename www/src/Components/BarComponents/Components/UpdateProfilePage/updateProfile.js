class updateProfileCtrl {

    constructor($scope, Profile, CameraHandler) {
        $scope.getPic = ()=> {
            CameraHandler.getPic((imgUrl) => {
                document.getElementById("profileImg").src = imgUrl;
            });
        };

        $scope.updateProfile = ()=> {
            Profile.updateProfile(document.getElementById("profileImg").src);
        };
    }

}

export default updateProfileCtrl;