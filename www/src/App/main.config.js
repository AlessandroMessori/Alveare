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
                template: require("./Components/FreeComponents/Components/LoginPage/login.html"),
                controller: "loginCtrl"
            })

            .state("signup", {
                url: "/signup",
                template: require("./Components/FreeComponents/Components/SignupPage/signup.html"),
                controller: "signupCtrl"
            })

            .state("tab", {
                url: "/tab",
                abstract: true,
                template: require("./Components/FreeComponents/Components/Tabs/tabs.html"),
                controller: "tabsCtrl"
            })

            .state("tab.admin", {
                url: "/admin",
                views: {
                    "tab-admin": {
                        template: require("./Components/MenuComponents/Components/AdminPage/tab-home.html"),
                        controller: "adminCtrl"
                    }
                }
            })


            .state("tab.biblioteca", {
                url: "/biblioteca",
                views: {
                    "tab-biblioteca": {
                        template: require("./Components/MenuComponents/Components/LibraryPage/tab-library.html"),
                        controller: "libraryCtrl"
                    }
                }
            })


            .state("tab.giornalino", {
                url: "/giornalino",
                views: {
                    "tab-giornalino": {
                        template: require("./Components/MenuComponents/Components/ArticlesPage/tab-giornalino.html"),
                        controller: "giornalinoCtrl"
                    }
                }
            })


            .state("tab.orientamento", {
                url: "/orientamento",
                views: {
                    "tab-orientamento": {
                        template: require("./Components/MenuComponents/Components/NewsPage/tabs-forum.html"),
                        controller: "orientamentoCtrl"
                    }
                }
            })

            .state("tab.forum", {
                url: "/forum",
                views: {
                    "tab-forum": {
                        template: require("./Components/MenuComponents/Components/NewsPage/tabs-forum.html"),
                        controller: "newsCtrl"
                    }
                }
            })

            .state("tab.libera", {
                url: "/libera",
                views: {
                    "tab-libera": {
                        template: require("./Components/MenuComponents/Components/NewsPage/tabs-forum.html"),
                        controller: "freeZoneCtrl"
                    }
                }
            })

            .state("tab.convenzioni", {
                url: "/convenzioni",
                views: {
                    "tab-convenzioni": {
                        template: require("./Components/MenuComponents/Components/ConventionsPage/tab-conventions.html"),
                        controller: "conventionsCtrl"
                    }
                }
            })

            .state("tab.link", {
                url: "/link",
                views: {
                    "tab-link": {
                        template: require("./Components/MenuComponents/Components/LinkPage/tab-link.html"),
                        controller: "linkCtrl"
                    }
                }
            })

            .state("tab.settings", {
                url: "/settings",
                views: {
                    "tab-settings": {
                        template: require("./Components/MenuComponents/Components/SettingsPage/tab-settings.html"),
                        controller: "settingsCtrl"
                    }
                }
            })

            .state("addArticle", {
                url: "/addArticle",
                template: require("./Components/BarComponents/Components/AddArticlePage/addArticle.html"),
                controller: "addArticleCtrl"
            })

            .state("sendMessage", {
                url: "/sendMessage",
                template: require("./Components/BarComponents/Components/AddNewsPage/sendMessage.html"),
                controller: "addNewsCtrl"
            })

            .state("readReports", {
                url: "/readReports",
                template: require("./Components/BarComponents/Components/ReadReportsPage/readReports.html"),
                controller: "readReportsCtrl"
            })

            .state("comments", {
                url: "/comments",
                template: require("./Components/BarComponents/Components/CommentsPage/comments.html"),
                controller: "commentsCtrl"
            })

            .state("likes", {
                url: "/likes",
                template: require("./Components/BarComponents/Components/LikesPage/likes.html"),
                controller: "likesCtrl"
            })

            .state("moderation", {
                url: "/moderation",
                template: require("./Components/BarComponents/Components/ModerationPage/moderation.html"),
                controller: "moderationCtrl"
            })

            .state("deletePosts", {
                url: "/deletePosts",
                template: require("./Components/BarComponents/Components/DeletePostsPage/deletePosts.html"),
                controller: "deletePostsCtrl"
            })

            .state("updateProfile", {
                url: "/updateProfile",
                template: require("./Components/BarComponents/Components/UpdateProfilePage/updateProfile.html"),
                controller: "updateProfileCtrl"
            })

            .state("updateStatus", {
                url: "/updateStatus",
                template: require("./Components/BarComponents/Components/UpdateStatusPage/updateStatus.html"),
                controller: "updateStatusCtrl"
            })

            .state("reportBug", {
                url: "/reportBug",
                template: require("./Components/BarComponents/Components/ReportBugPage/reportBug.html"),
                controller: "reportBugCtrl"
            });

        if (window.localStorage.getItem("RememberMe") == "true") {
            $urlRouterProvider.otherwise("/tab/forum");
        } else {
            $urlRouterProvider.otherwise("/login");
        }


    }
}

export default Config;