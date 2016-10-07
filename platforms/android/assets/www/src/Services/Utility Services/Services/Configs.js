class Config {

    static run($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(() => {

            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.Connection) {
                if (navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Connessione a Internet assente",
                        content: "Non è stata trovata nessuna connessione a Internet,collegati ad una rete e riprova."
                    })
                        .then(result => {
                            if (!result) {
                                ionic.Platform.exitApp();
                            }
                        });
                }
            }

        });
    }


    static config($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

        $ionicConfigProvider.scrolling.jsScrolling(false);

        $stateProvider

            .state("login", {
                url: "/login",
                templateUrl: "src/Components/FreeComponents/Components/LoginPage/login.html",
                controller: "loginCtrl"
            })

            .state("signup", {
                url: "/signup",
                templateUrl: "src/Components/FreeComponents/Components/SignupPage/signup.html",
                controller: "signupCtrl"
            })

            .state("tab", {
                url: "/tab",
                abstract: true,
                templateUrl: "src/Components/FreeComponents/Components/Tabs/tabs.html",
                controller: "tabsCtrl"
            })

            .state("tab.admin", {
                url: "/admin",
                views: {
                    "tab-admin": {
                        templateUrl: "src/Components/MenuComponents/Components/AdminPage/tab-home.html",
                        controller: "adminCtrl"
                    }
                }
            })

            .state("tab.giornalino", {
                url: "/giornalino",
                views: {
                    "tab-giornalino": {
                        templateUrl: "src/Components/MenuComponents/Components/ArticlesPage/tab-giornalino.html",
                        controller: "attualitaCtrl"
                    }
                }
            })

            .state("tab.orientamento", {
                url: "/orientamento",
                views: {
                    "tab-orientamento": {
                        templateUrl: "src/Components/MenuComponents/Components/ArticlesPage/tab-giornalino.html",
                        controller: "orientamentoCtrl"
                    }
                }
            })

            .state("tab.biblioteca", {
                url: "/biblioteca",
                views: {
                    "tab-biblioteca": {
                        templateUrl: "src/Components/MenuComponents/Components/LibraryPage/tab-library.html",
                        controller: "libraryCtrl"
                    }
                }
            })

            .state("tab.forum", {
                url: "/forum",
                views: {
                    "tab-forum": {
                        templateUrl: "src/Components/MenuComponents/Components/NewsPage/tabs-forum.html",
                        controller: "newsCtrl"
                    }
                }
            })

            .state("tab.libera", {
                url: "/libera",
                views: {
                    "tab-libera": {
                        templateUrl: "src/Components/MenuComponents/Components/NewsPage/tabs-forum.html",
                        controller: "freeZoneCtrl"
                    }
                }
            })

            .state("tab.convenzioni", {
                url: "/convenzioni",
                views: {
                    "tab-convenzioni": {
                        templateUrl: "src/Components/MenuComponents/Components/ConventionsPage/tab-conventions.html",
                        controller: "conventionsCtrl"
                    }
                }
            })

            .state("tab.link", {
                url: "/link",
                views: {
                    "tab-link": {
                        templateUrl: "src/Components/MenuComponents/Components/LinkPage/tab-link.html",
                        controller: "linkCtrl"
                    }
                }
            })

            .state("tab.settings", {
                url: "/settings",
                views: {
                    "tab-settings": {
                        templateUrl: "src/Components/MenuComponents/Components/SettingsPage/tab-settings.html",
                        controller: "settingsCtrl"
                    }
                }
            })

            .state("addArticle", {
                url: "/addArticle",
                templateUrl: "src/Components/BarComponents/Components/AddArticlePage/addArticle.html",
                controller: "addArticleCtrl"
            })

            .state("sendMessage", {
                url: "/sendMessage",
                templateUrl: "src/Components/BarComponents/Components/AddNewsPage/sendMessage.html",
                controller: "addNewsCtrl"
            })

            .state("comments", {
                url: "/comments",
                templateUrl: "src/Components/BarComponents/Components/CommentsPage/comments.html",
                controller: "commentsCtrl"
            })

            .state("likes", {
                url: "/likes",
                templateUrl: "src/Components/BarComponents/Components/LikesPage/likes.html",
                controller: "likesCtrl"
            })

            .state("moderation", {
                url: "/moderation",
                templateUrl: "src/Components/BarComponents/Components/ModerationPage/moderation.html",
                controller: "moderationCtrl"
            })

            .state("updateProfile", {
                url: "/updateProfile",
                templateUrl: "src/Components/BarComponents/Components/UpdateProfilePage/updateProfile.html",
                controller: "updateProfileCtrl"
            });

        if (window.localStorage.getItem("RememberMe") == "true") {
            $urlRouterProvider.otherwise("/tab/forum");
        } else {
            $urlRouterProvider.otherwise("/login");
        }


    }
}

export default Config;