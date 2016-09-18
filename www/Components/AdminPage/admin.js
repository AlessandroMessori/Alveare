var adminCtrl = function ($scope, $rootScope, $state, $window) {

    $scope.title = "Sezione Amministratori ";

    $scope.Links = [
        {
            "name": "Scrivi Avviso",
            "icon": "icon ion-ios-bell",
            "url": "sendMessage",
            "direct": function () {
                $state.go(this.url);
            }
        },
        {
            "name": "Scrivi Articolo del Giornalino",
            "url": "addArticle",
            "icon": "icon ion-ios-paper",
            "direct": function () {
                $state.go(this.url);
                $rootScope.contentType = "Giornalino";
            }
        },
        {
            "name": "Scrivi Articolo d'orientamento",
            "url": "addArticle",
            "icon": "icon ion-ios-navigate",
            "direct": function () {
                $state.go(this.url);
                $rootScope.contentType = "Orientamento";
            }
        },
        {
            "name": "Modera Commenti",
            "url": "moderation",
            "icon": "icon ion-ios-trash",
            "direct": function () {
                $state.go(this.url);
            }
        }
    ];

};

module.exports = adminCtrl;