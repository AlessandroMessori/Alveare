class updateProfileCtrl {

    constructor($scope, Profile, CameraHandler) {

        let {displayName, photoURL, email} = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyBQcIrRUzpahFxeh3s3pzGNlP8QqyFsvn8:[DEFAULT]"));

        if (photoURL == undefined) {
            photoURL = "dist/Images/user.png";
        }

        $scope.profileImage = photoURL;
        $scope.userName = displayName;
        $scope.userMail = email;

        $scope.getPic = ()=> {
            CameraHandler.getPic((imgUrl) => {
                document.getElementById("profileImg").src = imgUrl;
                Profile.updateProfile(imgUrl);
            });
        };

    }

}

export default updateProfileCtrl;