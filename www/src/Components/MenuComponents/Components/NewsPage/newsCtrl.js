import Firebase from "firebase";

class forumCtrl {
    constructor($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {


        $rootScope.userName = window.localStorage.getItem("Username");
        Messages.getPosts($scope, $rootScope, $state, "newsSpinner");

        $scope.$on("$ionicView.enter", () => {
            $scope.UserImage = Firebase.auth().currentUser.photoURL;
            $scope.$apply();
            if ($rootScope.userName != window.localStorage.getItem("Username")) {
                Messages.getPosts($scope, $rootScope, $state, "newsSpinner");
                $rootScope.userName = window.localStorage.getItem("Username");
            }
        });

        $scope.openFile = (file) => {
            FileHandler.openFile(file, $ionicLoading);
        };
    }
}

export default forumCtrl;
