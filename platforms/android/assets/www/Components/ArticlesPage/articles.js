var articlesCtrl = function ($scope, $state, $window, Articles, type) {

    Articles.getArticles($scope, $state, type, "articlesSpinner");

    $scope.doRefresh = function () {
        Articles.getArticles($scope, $state, type, "articlesSpinner");
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

};

var attualitaCtrl = function ($scope, $state, $window, Articles) {
    return articlesCtrl($scope, $state, $window, Articles, 'Giornalino');
};

var orientamentoCtrl = function ($scope, $state, $window, Articles) {
    return articlesCtrl($scope, $state, $window, Articles, 'Orientamento');
};

module.exports = {
    attualitaCtrl: attualitaCtrl,
    orientamentoCtrl: orientamentoCtrl
};