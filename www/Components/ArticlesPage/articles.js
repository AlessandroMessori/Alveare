var articlesCtrl = function ($scope, $rootScope, $state, $window, $ionicLoading, Articles, FileHandler, type) {

    Articles.getArticles($scope, $rootScope, $state, FileHandler, $ionicLoading, type, "articlesSpinner");

    $scope.doRefresh = function () {
        Articles.getArticles($scope, $rootScope, $state, FileHandler, $ionicLoading, type, "articlesSpinner");
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };
};

var attualitaCtrl = function ($scope, $rootScope, $state, $window, $ionicLoading, Articles, FileHandler) {
    return articlesCtrl($scope, $rootScope, $state, $window, $ionicLoading, Articles, FileHandler, 'Giornalino');
};

var orientamentoCtrl = function ($scope, $rootScope, $state, $window, $ionicLoading, Articles, FileHandler) {
    return articlesCtrl($scope, $rootScope, $state, $window, $ionicLoading, Articles, FileHandler, 'Orientamento');
};

module.exports = {
    attualitaCtrl: attualitaCtrl,
    orientamentoCtrl: orientamentoCtrl
};
