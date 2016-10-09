import Firebase from "firebase";

class tabsCtrl {

    constructor($scope, $state, $rootScope, $ionicScrollDelegate, $ionicSideMenuDelegate, Auth, PlatformHandler) {

        $scope.View = "tab-link";
        $scope.showIcon = "ion-plus-round";
        $ionicSideMenuDelegate.toggleLeft();
        $scope.UserImage = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyBQcIrRUzpahFxeh3s3pzGNlP8QqyFsvn8:[DEFAULT]")).photoURL;

        Auth.checkAdmins($scope, "adminPanel");

        PlatformHandler.is("iOS", ()=> {
            document.getElementById("tabBar").style.marginTop = "-5%";
        });

        $scope.$on("$ionicView.enter", () => {
            $scope.User = Firebase.auth().currentUser.displayName;
            $scope.UserMail = Firebase.auth().currentUser.email;
            $scope.UserImage = Firebase.auth().currentUser.photoURL;
            if ($scope.UserImage == undefined) {
                $scope.UserImage = "dist/Images/user.png";
            }
            Auth.checkAdmins($scope, "adminPanel");
        });

        $rootScope.$on("$stateChangeSuccess", (ev, to, toParams, from) => {

            $rootScope.previousState = from.name;

            if ($rootScope.previousState == "comments") {
                $rootScope.previousState = "tab.forum";
            } else {
                $ionicScrollDelegate.scrollTop();
            }

            if (to.name == "tab.libera") {
                document.getElementById("addIcon").style.display = "block";
            }
            else {
                document.getElementById("addIcon").style.display = "none";
            }


        });

        $scope.backBtnClick = () => {
            $state.go($rootScope.previousState);
        };

        $scope.ShowLinks = () => {
            if (document.getElementById("linkList").style.display == "block") {
                document.getElementById("linkList").style.display = "none";
                $scope.showIcon = "ion-plus-round";
            }
            else {
                document.getElementById("linkList").style.display = "block";
                $scope.showIcon = "ion-minus-round";
            }
        };

        //convert to Service
        $scope.navigate = (destination, ind) => {
            $scope.View = "tab-" + destination;
            for (let i = 1; i < 10; i++) {
                document.getElementById("MainView" + i).style.display = "none";
            }
            document.getElementById("MainView" + ind).style.display = "block";
        };

        $scope.goToPublisher = function () {
            $state.go("sendMessage");
            $rootScope.contentType = "Post";
        };
    }

}


export default tabsCtrl;