var addArticleCtrl = require('../Components/AddArticlePage/addArticle');
var addNewsCtrl = require('../Components/AddNewsPage/addNews');
var adminCtrl = require('../Components/AdminPage/admin');
var articlesCtrl = require('../Components/ArticlesPage/articles');
var commentsCtrl = require('../Components/CommentsPage/comments');
var linkCtrl = require('../Components/LinkPage/link');
var loginCtrl = require('../Components/LoginPage/login');
var newsCtrl = require('../Components/NewsPage/newsCtrl');
var readArticleCtrl = require('../Components/ReadArticlePage/readArticle');
var signupCtrl = require('../Components/SignupPage/signup');
var tabsCtrl = require('../Components/Tabs/tabs');

function declareControllers() {
    angular.module('appAS',['ionic']).controller('addArticleCtrl', addArticleCtrl);
    angular.module('appAS',['ionic']).controller('addNewsCtrl', addNewsCtrl);
    angular.module('appAS',['ionic']).controller('adminCtrl', adminCtrl);
    angular.module('appAS',['ionic']).controller('articlesCtrl', articlesCtrl);
    angular.module('appAS',['ionic']).controller('commentsCtrl', commentsCtrl);
    angular.module('appAS',['ionic']).controller('linkCtrl', linkCtrl);
    angular.module('appAS',['ionic']).controller('loginCtrl', loginCtrl);
    angular.module('appAS',['ionic']).controller('newsCtrl', newsCtrl);
    angular.module('appAS',['ionic']).controller('readArticleCtrl', readArticleCtrl);
    angular.module('appAS',['ionic']).controller('signupCtrl', signupCtrl);
    angular.module('appAS',['ionic']).controller('tabsCtrl', tabsCtrl);
}

function handleRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
    
    
        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "Components/Tabs/tabs.html",
            controller: 'tabsCtrl'
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

}

var initService = {
    declareControllers: declareControllers,
    handleRoutes: handleRoutes
};

module.exports = initService;