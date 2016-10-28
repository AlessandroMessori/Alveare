import Firebase from "firebase";

class settingsCtrl {
    constructor($scope, $rootScope, $state, Auth, Modals, SocialHandler) {

        if (window.localStorage.getItem("RememberMe") == "true") {
            $scope.RememberMe = true;
        }
        else {
            $scope.RememberMe = false;
        }

        $scope.updateRememberMe = (RememberMe) => {
            window.localStorage.setItem("RememberMe", RememberMe.toString());
            $scope.RememberMe = RememberMe;
        };

        $scope.shareApp = () => SocialHandler.shareApp();


        $scope.rateUs = () => SocialHandler.rateUs();

        $scope.goToProfile = () => {

            let avatar = Firebase.auth().currentUser.photoURL;

            if (avatar == undefined) {
                avatar = require("../../../../../Images/user.jpg");
            }

            $rootScope.currentProfile = {
                name: Firebase.auth().currentUser.displayName,
                avatar,
                mail: Firebase.auth().currentUser.email
            };
            $rootScope.profileUpdatable = true;
            $state.go("updateProfile");
        };

        $scope.Disconnect = () => Auth.Logout($state, $rootScope, Modals);
    }
}

export default settingsCtrl;
