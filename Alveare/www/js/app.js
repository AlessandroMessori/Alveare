// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
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
                        templateUrl: 'templates/tab-article.html',
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
            });



        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/forum');

    });
