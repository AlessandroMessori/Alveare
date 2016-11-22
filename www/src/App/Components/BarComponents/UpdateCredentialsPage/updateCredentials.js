import Firebase from "firebase";

class updateCredentialsCtrl {

    constructor($scope, UpdateCred) {

        $scope.logoImg = require("../../../../Images/logo.jpg");
        $scope.userName = "";
        $scope.currentUser = Firebase.auth().currentUser;

        UpdateCred.GetUserData($scope.currentUser, (user)=> {
            $scope.mail = user.mail;
            $scope.userName = user.name + " " + user.surname;
            $scope.$apply();
        });
    }

}

export default updateCredentialsCtrl;