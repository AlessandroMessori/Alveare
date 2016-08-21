var articlesCtrl = function ($scope, $state, $window, Articles, type) {

    $scope.$on('$ionicView.enter', function () {
        if ($scope.Articles != Articles.getArticles($state, $window, type, 'articlesSpinners')) {
            $scope.doRefresh();
        }
    });

    $scope.Articles = Articles.getArticles($state, $window, type, 'articlesSpinners');

    $scope.doRefresh = function () {
        $scope.Articles = Articles.getArticles($state, $window, type, 'articlesSpinners');
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

};

var attualitaCtrl = function ($scope, $state, $window, Articles) {
    return articlesCtrl($scope, $state, $window, Articles, 'Article');
};

var orientamentoCtrl = function ($scope, $state, $window, Articles) {
    return articlesCtrl($scope, $state, $window, Articles, 'Orientamento');
};

module.exports = {
    attualitaCtrl: attualitaCtrl,
    orientamentoCtrl: orientamentoCtrl
};