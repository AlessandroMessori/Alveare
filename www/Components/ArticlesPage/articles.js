var articlesCtrl = function ($scope, $state, $window,Articles) {

    $scope.$on('$ionicView.enter', function () {
        if ($scope.Articles != Articles.getArticles($state, $window, "Article")) { $scope.doRefresh(); }
    });

    $scope.Articles = Articles.getArticles($state, $window, "Article");

    $scope.doRefresh = function () {
        $scope.Articles = Articles.getArticles($state, $window, "Article");
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$apply();
    };

};

module.exports = articlesCtrl;