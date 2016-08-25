var Firebase = require('firebase');
var Parse = require('parse');
var addArticleCtrl = require('./AddArticlePage/addArticle');
var addNewsCtrl = require('./AddNewsPage/addNews');
var adminCtrl = require('./AdminPage/admin');
var attualitaCtrl = require('./ArticlesPage/articles').attualitaCtrl;
var orientamentoCtrl = require('./ArticlesPage/articles').orientamentoCtrl;
var commentsCtrl = require('./CommentsPage/comments');
var linkCtrl = require('./LinkPage/link');
var loginCtrl = require('./LoginPage/login');
var newsCtrl = require('./NewsPage/newsCtrl');
var readArticleCtrl = require('./ReadArticlePage/readArticle');
var signupCtrl = require('./SignupPage/signup');
var tabsCtrl = require('./Tabs/tabs');
var Messages = require('../Services/Messages');
var Articles = require('../Services/Articles');
var Comments = require('../Services/Comments');
var Auth = require('../Services/Auth');
var DateHandler = require('../Services/DateHandler');
var InputFields = require('../Services/InputFields');
var credentials = require('../../credentials');

Parse.initialize("o0CJuvQWQY15h5QdIcv9cNexSI3v4QspAsTpkZVZ", "CwF1Y2TKwtlMdaDtrKsEh5yKSnzsjFL0GjZTYzkF");
Firebase.initializeApp(credentials);
var database = Firebase.database();

var appAS = angular.module('appAS', ['ionic', 'ionic.contrib.drawer']);
appAS.controller('addArticleCtrl', addArticleCtrl);
appAS.controller('addNewsCtrl', addNewsCtrl);
appAS.controller('adminCtrl', adminCtrl);
appAS.controller('attualitaCtrl', attualitaCtrl);
appAS.controller('orientamentoCtrl', orientamentoCtrl);
appAS.controller('commentsCtrl', commentsCtrl);
appAS.controller('linkCtrl', linkCtrl);
appAS.controller('loginCtrl', loginCtrl);
appAS.controller('newsCtrl', newsCtrl);
appAS.controller('readArticleCtrl', readArticleCtrl);
appAS.controller('signupCtrl', signupCtrl);
appAS.controller('tabsCtrl', tabsCtrl);
appAS.service('Messages', Messages);
appAS.service('Articles', Articles);
appAS.service('Comments', Comments);
appAS.service('Auth', Auth);
appAS.service('DateHandler', DateHandler);
appAS.service('InputFields', InputFields);

appAS.run(function ($ionicPlatform) {
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
});

appAS.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'Components/LoginPage/login.html',
            controller: 'loginCtrl'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'Components/SignupPage/signup.html',
            controller: 'signupCtrl'
        })

        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "Components/Tabs/tabs.html",
            controller: 'tabsCtrl'
        })

        .state('tab.admin', {
            url: '/admin',
            views: {
                'tab-admin': {
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
                    controller: 'attualitaCtrl'
                }
            }
        })

        .state('tab.orientamento', {
            url: '/orientamento',
            views: {
                'tab-orientamento': {
                    templateUrl: 'Components/ArticlesPage/tab-giornalino.html',
                    controller: 'orientamentoCtrl'
                }
            }
        })

        .state('tab.forum', {
            url: '/forum',
            views: {
                'tab-forum': {
                    templateUrl: 'Components/NewsPage/tabs-forum.html',
                    controller: 'newsCtrl'
                }
            }
        })

        .state('tab.link', {
            url: '/link',
            views: {
                'tab-link': {
                    templateUrl: 'Components/LinkPage/tab-link.html',
                    controller: 'linkCtrl'
                }
            }
        })

        .state('addArticle', {
            url: '/addArticle',
            templateUrl: 'Components/AddArticlePage/addArticle.html',
            controller: 'addArticleCtrl'
        })

        .state('sendMessage', {
            url: '/sendMessage',
            templateUrl: 'Components/AddNewsPage/sendMessage.html',
            controller: 'addNewsCtrl'
        })

        .state('article', {
            url: '/article',
            templateUrl: 'Components/ReadArticlePage/readArticle.html',
            controller: 'readArticleCtrl'
        })

        .state('comments', {
            url: '/comments',
            templateUrl: 'Components/CommentsPage/comments.html',
            controller: 'commentsCtrl'
        });

    if (window.localStorage.getItem("RememberMe") == "true") {
        $urlRouterProvider.otherwise('/tab/link');
    } else {
        $urlRouterProvider.otherwise('/login');
    }


});
