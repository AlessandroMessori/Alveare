var articlesCtrl = function ($scope, $rootScope, $state, Articles, type) {

    Articles.getArticles($scope, $rootScope, $state, type, "articlesSpinner");

    $scope.doRefresh = function () {
        Articles.getArticles($scope, $rootScope, $state, type, "articlesSpinner");
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };
};

var attualitaCtrl = function ($scope, $rootScope, $state, Articles) {
    return articlesCtrl($scope, $rootScope, $state, Articles, 'Giornalino');
};

var orientamentoCtrl = function ($scope, $rootScope, $state, Articles) {
    return articlesCtrl($scope, $rootScope, $state, Articles, 'Orientamento');
};

module.exports = {
    attualitaCtrl: attualitaCtrl,
    orientamentoCtrl: orientamentoCtrl
};
