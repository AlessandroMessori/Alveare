var adminCtrl = function ($scope, $state, $window) {

    $scope.title = "Sezione Amministratori ";

    $scope.Links = [
        {
            "name": "Scrivi Avviso",
            "icon":"icon ion-ios-bell",
            "url": "sendMessage",
            "direct": function () {
                $state.go(this.url);
            }
        },
        {
            "name": "Scrivi Articolo d'attualità",
            "url": "addArticle",
            "icon":"icon ion-ios-paper",
            "direct": function () {
                $state.go(this.url);
                $window.localStorage.setItem("contentType", "Giornalino");
            }
        },
        {
            "name": "Scrivi Articolo d'orientamento",
            "url": "addArticle",
            "icon":"icon ion-ios-navigate",
            "direct": function () {
                $state.go(this.url);
                $window.localStorage.setItem("contentType", "Orientamento");
            }
        }
    ];

};

module.exports = adminCtrl;