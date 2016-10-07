import Firebase from "firebase";

class updateProfileCtrl {

    constructor($scope, Profile, CameraHandler) {

        const profileImage = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyBQcIrRUzpahFxeh3s3pzGNlP8QqyFsvn8:[DEFAULT]")).photoURL;
        $scope.profileImage = profileImage;
        console.log(profileImage);

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