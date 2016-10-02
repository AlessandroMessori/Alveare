var Configs = {

    run: function ($ionicPlatform, $ionicPopup) {
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
    },

    config: function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

        $ionicConfigProvider.scrolling.jsScrolling(false);

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'src/Components/LoginPage/login.html',
                controller: 'loginCtrl'
            })

            .state('signup', {
                url: '/signup',
                templateUrl: 'src/Components/SignupPage/signup.html',
                controller: 'signupCtrl'
            })

            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "src/Components/Tabs/tabs.html",
                controller: 'tabsCtrl'
            })

            .state('tab.admin', {
                url: '/admin',
                views: {
                    'tab-admin': {
                        templateUrl: 'src/Components/AdminPage/tab-home.html',
                        controller: 'adminCtrl'
                    }
                }
            })

            .state('tab.giornalino', {
                url: '/giornalino',
                views: {
                    'tab-giornalino': {
                        templateUrl: 'src/Components/ArticlesPage/tab-giornalino.html',
                        controller: 'attualitaCtrl'
                    }
                }
            })

            .state('tab.orientamento', {
                url: '/orientamento',
                views: {
                    'tab-orientamento': {
                        templateUrl: 'src/Components/ArticlesPage/tab-giornalino.html',
                        controller: 'orientamentoCtrl'
                    }
                }
            })

            .state('tab.biblioteca', {
                url: '/biblioteca',
                views: {
                    'tab-biblioteca': {
                        templateUrl: 'src/Components/LibraryPage/tab-library.html',
                        controller: 'libraryCtrl'
                    }
                }
            })

            .state('tab.forum', {
                url: '/forum',
                views: {
                    'tab-forum': {
                        templateUrl: 'src/Components/NewsPage/tabs-forum.html',
                        controller: 'newsCtrl'
                    }
                }
            })

            .state('tab.libera', {
                url: '/libera',
                views: {
                    'tab-libera': {
                        templateUrl: 'src/Components/FreeZonePage/tab-freeZone.html',
                        controller: 'freeZoneCtrl'
                    }
                }
            })

            .state('tab.convenzioni', {
                url: '/convenzioni',
                views: {
                    'tab-convenzioni': {
                        templateUrl: 'src/Components/ConventionsPage/tab-conventions.html',
                        controller: 'conventionsCtrl'
                    }
                }
            })

            .state('tab.link', {
                url: '/link',
                views: {
                    'tab-link': {
                        templateUrl: 'src/Components/LinkPage/tab-link.html',
                        controller: 'linkCtrl'
                    }
                }
            })

            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'src/Components/SettingsPage/tab-settings.html',
                        controller: 'settingsCtrl'
                    }
                }
            })

            .state('addArticle', {
                url: '/addArticle',
                templateUrl: 'src/Components/AddArticlePage/addArticle.html',
                controller: 'addArticleCtrl'
            })

            .state('sendMessage', {
                url: '/sendMessage',
                templateUrl: 'src/Components/AddNewsPage/sendMessage.html',
                controller: 'addNewsCtrl'
            })

            .state('comments', {
                url: '/comments',
                templateUrl: 'src/Components/CommentsPage/comments.html',
                controller: 'commentsCtrl'
            })

            .state('likes', {
                url: '/likes',
                templateUrl: 'src/Components/LikesPage/likes.html',
                controller: 'likesCtrl'
            })

            .state('moderation', {
                url: '/moderation',
                templateUrl: 'src/Components/ModerationPage/moderation.html',
                controller: 'moderationCtrl'
            });


        if (window.localStorage.getItem("RememberMe") == "true") {
            $urlRouterProvider.otherwise('/tab/forum');
        } else {
            $urlRouterProvider.otherwise('/login');
        }


    }
};

module.exports = Configs;