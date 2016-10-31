class libraryCtrl {
    constructor($scope, $rootScope, $state, Tutors) {


        $scope.doRefresh = () => {
            Tutors.getTutors($scope, $rootScope, $state, "tutorsSpinner");
            $scope.$broadcast("scroll.refreshComplete");
            $scope.$apply();
        };

        $scope.$on("$ionicView.enter", () => {
            $scope.Tutors = [];
            $scope.doRefresh();
        });
    }
}
export default libraryCtrl;