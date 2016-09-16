var articlesCtrl = function ($scope, $state, $window, Articles, FileHandler, type) {

    Articles.getArticles($scope, $state, FileHandler,type, "articlesSpinner");

    $scope.doRefresh = function () {
        Articles.getArticles($scope, $state,FileHandler, type, "articlesSpinner");
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };
};

var attualitaCtrl = function ($scope, $state, $window, Articles, FileHandler) {
    return articlesCtrl($scope, $state, $window, Articles, FileHandler, 'Giornalino');
};

var orientamentoCtrl = function ($scope, $state, $window, Articles, FileHandler) {
    return articlesCtrl($scope, $state, $window, Articles, FileHandler, 'Orientamento');
};

module.exports = {
    attualitaCtrl: attualitaCtrl,
    orientamentoCtrl: orientamentoCtrl
};
