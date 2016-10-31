class giornalinoCtrl {
    constructor($scope, $rootScope, $state, Articles) {

        Articles.getArticles($scope, $rootScope, $state, "Giornalino", "articlesSpinner");

        $scope.doRefresh = () => {
            Articles.getArticles($scope, $rootScope, $state, "Giornalino", "articlesSpinner");
            $scope.$broadcast("scroll.refreshComplete");
            $scope.$apply();
        };
    }
}

export default giornalinoCtrl;
