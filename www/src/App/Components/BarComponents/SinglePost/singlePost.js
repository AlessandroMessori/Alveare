class singlePostCtrl {

    constructor($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {


        $scope.$on("$ionicView.enter", () => {
            $scope.currentPost = $rootScope.singlePostID;
            Messages.getPosts($scope, $rootScope, $state, "singlePost", $rootScope.singlePostType)
        });

        $scope.openFile = file => FileHandler.openFile(file, $ionicLoading);

        $scope.openLink = link => cordova.InAppBrowser.open(link, "_system", "location=yes");

    }

}

export default singlePostCtrl;