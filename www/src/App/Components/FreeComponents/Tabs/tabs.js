import Firebase from "firebase";

class tabsCtrl {

    constructor($scope, $state, $rootScope, $ionicPlatform, $ionicScrollDelegate, $ionicHistory, Auth, PlatformHandler, Modals, ServiceWorker, Notifications) {

        $scope.View = "tab-link";
        $scope.showIcon = "ion-plus-round";
        $scope.addIcon = false;
        Auth.checkAdmins($scope, "adminPanel");

        window.onload = () => {
            Notifications.onMessage(data => {
                if (data.destination) {
                    $state.go(data.destination);
                } else if (data.post) {
                    $rootScope.singlePostID = data.post;
                    $rootScope.singlePostType = data.type;
                    $state.go("singlePost");
                }
            });

            ServiceWorker.register("/firebase-messaging-sw.js", Notifications.getToken(token => Notifications.saveToken(token)));
        };


        $scope.$on("$ionicView.enter", () => {

            const user = Firebase.auth().currentUser;
            if (user) {
                $scope.User = user.displayName;
                $scope.UserMail = user.email;
                $scope.UserImage = user.photoURL;
                if (!$scope.UserImage) {
                    $scope.UserImage = require("../../../../Images/user.jpg");
                }
                Auth.checkAdmins($scope, "adminPanel");
            }

            PlatformHandler.is("iOS", () => {
                if (document.getElementById("tabBar"))
                    document.getElementById("tabBar").style.marginTop = "-5%";

                if (document.getElementById("sideMenuHeader")) {
                    document.getElementById("sideMenuHeader").style.marginTop = "3%";
                    document.getElementById("sideMenuHeader").style.borderTopColor = "transparent";
                }
            });

        });

        $rootScope.$on("$stateChangeSuccess", (ev, to, toParams, from) => {

            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
            $ionicScrollDelegate.scrollTop();

            const view = to.name;

            if (view == "tab.libera" || view == "tab.biblioteca") {
                $scope.addIcon = true;
            }
            else {
                $scope.addIcon = false;
            }

        });

        $scope.backBtnClick = () => $ionicHistory.goBack();

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

        $scope.navigate = destination => {
            $scope.View = "tab-" + destination;
            const views = document.querySelectorAll(".nav-view");
            for (let i = 0; i < views.length; i++) {
                views[i].style.display = "none";
            }
            document.getElementById(destination + "-view").style.display = "block";
        };

        $scope.goToPublisher = () => {
            if ($ionicHistory.currentView().stateName == "tab.libera") {
                $state.go("sendMessage");
                $rootScope.contentType = "Post";
            }
            else if ($ionicHistory.currentView().stateName == "tab.biblioteca") {
                $state.go("addTutor");
            }
        };

        $scope.goToProfile = () => {

            let avatar = $scope.UserImage;

            if (!avatar) {
                avatar = require("../../../../Images/user.jpg");
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

        $ionicPlatform.registerBackButtonAction(e => {
            e.preventDefault();
            $ionicHistory.goBack();
            return false;
        }, 101);
    }

}

export default tabsCtrl;