class forumCtrl {
    constructor($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {

        $rootScope.userName = window.localStorage.getItem("Username");
        Messages.getPosts($scope, $rootScope, $state, "newsSpinner");

        $scope.$on("$ionicView.enter", () => {
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
