angular.module('appAS.controllers', ['ionic'])
    .controller('homeCtrl', function ($scope, $state, $window) {

        $scope.title = "Sezione Amministratori ";

        $scope.Links = [
            {
                "name": "Scrivi Avviso",
                "url": "tab.send_message",
                "direct": function () {
                    $state.go(this.url);
                },
            },
            {
                "name": "Scrivi Articolo d'attualità",
                "url": "tab.add_article",
                "direct": function () {
                    $state.go(this.url);
                    $window.localStorage.setItem("contentType", "Article");
                },
            },
            {
                "name": "Scrivi Articolo d'orientamento",
                "url": "tab.add_article",
                "direct": function () {
                    $state.go(this.url);
                    $window.localStorage.setItem("contentType", "Orientamento");
                },
            },
        ];

    })