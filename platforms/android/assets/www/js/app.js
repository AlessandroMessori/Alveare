angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

          if (device.name == "ios") {
            $ionicPlatform.ready(function() {
              ionic.Platform.fullScreen();
            });
          }

        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {


        $stateProvider


            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html",
                controller: "TabsCtrl"

            })

        // Each tab has its own nav history stack:

            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/tab-home.html',
                        controller: 'homeCtrl'
                    }
                }
            })

            .state('tab.giornalino', {
                url: '/giornalino',
                views: {
                    'tab-giornalino': {
                        templateUrl: 'templates/tab-giornalino.html',
                        controller: 'giornalinoCtrl'
                    }
                },
                params: {
                    post: null
                }
            })


            .state('tab.orientamento', {
                url: '/orientamento',
                views: {
                    'tab-orientamento': {
                        templateUrl: 'templates/tab-orientamento.html',
                        controller: 'orientamentoCtrl'
                    }
                }
            })

            .state('tab.forum', {
                url: '/forum',
                views: {
                    'tabs-forum': {
                        templateUrl: 'templates/tabs-forum.html',
                        controller: 'forumCtrl'
                    }
                }
            })

            .state('tab.link', {
                url: '/link',
                views: {
                    'tabs-link': {
                        templateUrl: 'templates/tab-link.html',
                        controller: 'linkCtrl'
                    }
                }
            })

            .state('tab.add_article', {
                url: '/add_article',
                views: {
                    'tab-add_article': {
                        templateUrl: 'templates/tab-add_article.html',
                        controller: "add_articleCtrl"

                    }
                }
            })

            .state('tab.send_message', {
                url: '/send_message',
                views: {
                    'tab-send_message': {
                        templateUrl: 'templates/tab-send_message.html',
                        controller: "send_messageCtrl"

                    }
                }
            })

            .state('tab.article', {
                url: '/article',
                views: {
                    'tab-article': {
                        templateUrl: 'templates/tab-article.html',
                        controller: "articleCtrl"

                    }
                }
            })

            .state('tab.comments', {
                url: '/comments',
                views: {
                    'tab-comments': {
                        templateUrl: 'templates/tab-comments.html',
                        controller: "commentsCtrl"

                    }
                }
            });



        $urlRouterProvider.otherwise('/tab/forum');

    });
