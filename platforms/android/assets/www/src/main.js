var Firebase = require('firebase');
var addArticleCtrl = require('./Components/AddArticlePage/addArticle');
var addNewsCtrl = require('./Components/AddNewsPage/addNews');
var adminCtrl = require('./Components/AdminPage/admin');
var attualitaCtrl = require('./Components/ArticlesPage/articles').attualitaCtrl;
var orientamentoCtrl = require('./Components/ArticlesPage/articles').orientamentoCtrl;
var commentsCtrl = require('./Components/CommentsPage/comments');
var likesCtrl = require('./Components/LikesPage/likes');
var linkCtrl = require('./Components/LinkPage/link');
var loginCtrl = require('./Components/LoginPage/login');
var moderationCtrl = require('./Components/ModerationPage/moderation');
var newsCtrl = require('./Components/NewsPage/newsCtrl');
var signupCtrl = require('./Components/SignupPage/signup');
var tabsCtrl = require('./Components/Tabs/tabs');
var Messages = require('./Services/Data Services/Messages');
var Articles = require('./Services/Data Services/Articles');
var Comments = require('./Services/Data Services/Comments');
var Likes = require('./Services/Data Services/Likes');
var Auth = require('./Services/Data Services/Auth');
var StaticData = require('./Services/Data Services/StaticData');
var DateHandler = require('./Services/Utility Services/DateHandler');
var InputFields = require('./Services/Utility Services/InputFields');
var StringHandler = require('./Services/Utility Services/StringHandler');
var Modals = require('./Services/Utility Services/Modals');
var FileHandler = require('./Services/Utility Services/FileHandler');
var ActionBar = require('./Directives/ActionBar/actionBar');
var credentials = require('../credentials');

Firebase.initializeApp(credentials);

var appAS = angular.module('appAS', ['ionic', 'ionic.contrib.drawer']);
appAS.controller('addArticleCtrl', addArticleCtrl);
appAS.controller('addNewsCtrl', addNewsCtrl);
appAS.controller('adminCtrl', adminCtrl);
appAS.controller('attualitaCtrl', attualitaCtrl);
appAS.controller('orientamentoCtrl', orientamentoCtrl);
appAS.controller('commentsCtrl', commentsCtrl);
appAS.controller('likesCtrl', likesCtrl);
appAS.controller('linkCtrl', linkCtrl);
appAS.controller('loginCtrl', loginCtrl);
appAS.controller('moderationCtrl', moderationCtrl);
appAS.controller('newsCtrl', newsCtrl);
appAS.controller('signupCtrl', signupCtrl);
appAS.controller('tabsCtrl', tabsCtrl);
appAS.service('Messages', Messages);
appAS.service('Articles', Articles);
appAS.service('Comments', Comments);
appAS.service('Likes', Likes);
appAS.service('Auth', Auth);
appAS.service('DateHandler', DateHandler);
appAS.service('InputFields', InputFields);
appAS.service('StringHandler', StringHandler);
appAS.service('Modals', Modals);
appAS.service('StaticData', StaticData);
appAS.service('FileHandler', FileHandler);
appAS.directive('actionBar', ActionBar);

appAS.run(function ($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function () {

        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.Connection) {
            if (navigator.connection.type == Connection.NONE) {
                $ionicPopup.confirm({
                    title: 'Connessione a Internet assente',
                    content: 'Non è stata trovata nessuna connessione a Internet,collegati ad una rete e riprova.'
                })
                    .then(function (result) {
                        if (!result) {
                            ionic.Platform.exitApp();
                        }
                    });
            }
        }

    });
});

appAS.config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

    $ionicConfigProvider.scrolling.jsScrolling(false);

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

        .state('comments', {
            url: '/comments',
            templateUrl: 'Components/CommentsPage/comments.html',
            controller: 'commentsCtrl'
        })

        .state('likes', {
            url: '/likes',
            templateUrl: 'Components/LikesPage/likes.html',
            controller: 'likesCtrl'
        })

        .state('moderation', {
            url: '/moderation',
            templateUrl: 'Components/ModerationPage/moderation.html',
            controller: 'moderationCtrl'
        });


    if (window.localStorage.getItem("RememberMe") == "true") {
        $urlRouterProvider.otherwise('/tab/link');
    } else {
        $urlRouterProvider.otherwise('/login');
    }


});
