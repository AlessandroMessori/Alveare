var adminCtrl = function ($scope, $state, $window) {

    $scope.title = "Sezione Amministratori ";

    $scope.Links = [
        {
            "name": "Scrivi Avviso",
            "icon":"icon ion-ios-bell",
            "url": "tab.send_message",
            "direct": function () {
                $state.go(this.url);
            }
        },
        {
            "name": "Scrivi Articolo d'attualità",
            "url": "tab.add_article",
            "icon":"icon ion-ios-paper",
            "direct": function () {
                $state.go(this.url);
                $window.localStorage.setItem("contentType", "Article");
            }
        },
        {
            "name": "Scrivi Articolo d'orientamento",
            "url": "tab.add_article",
            "icon":"icon ion-ios-navigate",
            "direct": function () {
                $state.go(this.url);
                $window.localStorage.setItem("contentType", "Orientamento");
            }
        }
    ];

};

module.exports = adminCtrl;