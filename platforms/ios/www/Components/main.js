var addArticleCtrl = require('./AddArticlePage/addArticle');
var addNewsCtrl = require('./AddNewsPage/addNews');
var adminCtrl = require('./AdminPage/admin');
var articlesCtrl = require('./ArticlesPage/articles');
var commentsCtrl = require('./CommentsPage/comments');
var linkCtrl = require('./LinkPage/link');
var loginCtrl = require('./LoginPage/login');
var newsCtrl = require('./NewsPage/newsCtrl');
var readArticleCtrl = require('./ReadArticlePage/readArticle');
var signupCtrl = require('./SignupPage/signup');
var TabsCtrl = require('./Tabs/tabs');

angular.module('appAS', ['ionic', 'appAS.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (device.name == "ios") {
                $ionicPlatform.ready(function () {
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
                templateUrl: "Components/Tabs/tabs.html",
                controller: 'TabsCtrl'
            })


            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'Components/AdminPage/tab-home.html',
                        controller: 'adminCtrl'
                    }
                }
            })

            .state('tab.giornalino', {
                url: '/giornalino',
                views: {
                    'tab-giornalino': {
                        templateUrl: 'Components/ArticlesPage/tab-giornalino.html',
                        controller: 'articlesCtrl'
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
                        templateUrl: 'Components/ArticlesPage/tab-giornalino.html',
                        controller: 'articlesCtrl'
                    }
                }
            })

            .state('tab.forum', {
                url: '/forum',
                views: {
                    'tabs-forum': {
                        templateUrl: 'Components/NewsPage/tabs-forum.html',
                        controller: 'newsCtrl'
                    }
                }
            })

            .state('tab.link', {
                url: '/link',
                views: {
                    'tabs-link': {
                        templateUrl: 'Components/LinkPage/tab-link.html',
                        controller: 'linkCtrl'
                    }
                }
            })

            .state('tab.add_article', {
                url: '/add_article',
                views: {
                    'tab-add_article': {
                        templateUrl: 'Components/AddArticlePage/tab-addArticle.html',
                        controller: 'addArticleCtrl'

                    }
                }
            })

            .state('tab.send_message', {
                url: '/send_message',
                views: {
                    'tab-send_message': {
                        templateUrl: 'Components/AddNewsPage/tab-send_message.html',
                        controller: 'addNewsCtrl'

                    }
                }
            })

            .state('tab.article', {
                url: '/article',
                views: {
                    'tab-article': {
                        templateUrl: 'Components/ReadArticlePage/tab-article.html',
                        controller: 'readArticleCtrl'

                    }
                }
            })

            .state('tab.comments', {
                url: '/comments',
                views: {
                    'tab-comments': {
                        templateUrl: 'Components/CommentsPage/tab-comments.html',
                        controller: 'commentsCtrl'
                    }
                }
            });



        $urlRouterProvider.otherwise('/tab/link');

    });
