class articlesCtrl {
    static create($scope, $rootScope, $state, Articles, type) {

        Articles.getArticles($scope, $rootScope, $state, type, "articlesSpinner");

        $scope.doRefresh = () => {
            Articles.getArticles($scope, $rootScope, $state, type, "articlesSpinner");
            $scope.$broadcast("scroll.refreshComplete");
            $scope.$apply();
        };
    }
}

export const attualitaCtrl = ($scope, $rootScope, $state, Articles) => {
    return articlesCtrl.create($scope, $rootScope, $state, Articles, "Giornalino");
};

export const orientamentoCtrl = ($scope, $rootScope, $state, Articles) => {
    return articlesCtrl.create($scope, $rootScope, $state, Articles, "Orientamento");
};

