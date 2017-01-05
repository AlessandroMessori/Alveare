class singlePostCtrl {

    constructor($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {

        $scope.$on("$ionicView.enter", () => {
            Messages.getPost($rootScope.singlePostType, $rootScope.singlePostID)
                .then(data => {
                    console.log(data);
                    $scope.Post = data;
                    $scope.$apply();
                });
        });

        $scope.openFile = file => FileHandler.openFile(file, $ionicLoading);

        $scope.openLink = link => cordova.InAppBrowser.open(link, "_system", "location=yes");

    }

}

export default singlePostCtrl;