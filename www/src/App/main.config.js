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
                template: require("./Components/FreeComponents/LoginPage/login.html"),
                controller: "loginCtrl"
            })

            .state("signup", {
                url: "/signup",
                template: require("./Components/FreeComponents/SignupPage/signup.html"),
                controller: "signupCtrl"
            })

            .state("tab", {
                url: "/tab",
                abstract: true,
                template: require("./Components/FreeComponents/Tabs/tabs.html"),
                controller: "tabsCtrl"
            })

            .state("tab.admin", {
                url: "/admin",
                views: {
                    "tab-admin": {
                        template: require("./Components/MenuComponents/AdminPage/tab-home.html"),
                        controller: "adminCtrl"
                    }
                }
            })


            .state("tab.biblioteca", {
                url: "/biblioteca",
                views: {
                    "tab-biblioteca": {
                        template: require("./Components/MenuComponents/LibraryPage/tab-library.html"),
                        controller: "libraryCtrl"
                    }
                }
            })


            .state("tab.giornalino", {
                url: "/giornalino",
                views: {
                    "tab-giornalino": {
                        template: require("./Components/MenuComponents/ArticlesPage/tab-giornalino.html"),
                        controller: "giornalinoCtrl"
                    }
                }
            })


            .state("tab.orientamento", {
                url: "/orientamento",
                views: {
                    "tab-orientamento": {
                        template: require("./Components/MenuComponents/NewsPage/tabs-forum.html"),
                        controller: "orientamentoCtrl"
                    }
                }
            })

            .state("tab.forum", {
                url: "/forum",
                views: {
                    "tab-forum": {
                        template: require("./Components/MenuComponents/NewsPage/tabs-forum.html"),
                        controller: "newsCtrl"
                    }
                }
            })

            .state("tab.libera", {
                url: "/libera",
                views: {
                    "tab-libera": {
                        template: require("./Components/MenuComponents/NewsPage/tabs-forum.html"),
                        controller: "freeZoneCtrl"
                    }
                }
            })

            .state("tab.convenzioni", {
                url: "/convenzioni",
                views: {
                    "tab-convenzioni": {
                        template: require("./Components/MenuComponents/ConventionsPage/tab-conventions.html"),
                        controller: "conventionsCtrl"
                    }
                }
            })

            .state("tab.link", {
                url: "/link",
                views: {
                    "tab-link": {
                        template: require("./Components/MenuComponents/LinkPage/tab-link.html"),
                        controller: "linkCtrl"
                    }
                }
            })

            .state("tab.settings", {
                url: "/settings",
                views: {
                    "tab-settings": {
                        template: require("./Components/MenuComponents/SettingsPage/tab-settings.html"),
                        controller: "settingsCtrl"
                    }
                }
            })

            .state("addArticle", {
                url: "/addArticle",
                template: require("./Components/AdminComponents/AddArticlePage/addArticle.html"),
                controller: "addArticleCtrl"
            })

            .state("sendMessage", {
                url: "/sendMessage",
                template: require("./Components/AdminComponents/AddNewsPage/sendMessage.html"),
                controller: "addNewsCtrl"
            })

            .state("addTutor", {
                url: "/addTutor",
                template: require("./Components/AdminComponents/AddTutorPage/addTutor.html"),
                controller: "addTutorCtrl"
            })

            .state("readReports", {
                url: "/readReports",
                template: require("./Components/AdminComponents/ReadReportsPage/readReports.html"),
                controller: "readReportsCtrl"
            })

            .state("comments", {
                url: "/comments",
                template: require("./Components/BarComponents/CommentsPage/comments.html"),
                controller: "commentsCtrl"
            })

            .state("likes", {
                url: "/likes",
                template: require("./Components/BarComponents/LikesPage/likes.html"),
                controller: "likesCtrl"
            })

            .state("moderation", {
                url: "/moderation",
                template: require("./Components/AdminComponents/ModerationPage/moderation.html"),
                controller: "moderationCtrl"
            })

            .state("deletePosts", {
                url: "/deletePosts",
                template: require("./Components/AdminComponents/DeletePostsPage/deletePosts.html"),
                controller: "deletePostsCtrl"
            })

            .state("updateProfile", {
                url: "/updateProfile",
                template: require("./Components/BarComponents/UpdateProfilePage/updateProfile.html"),
                controller: "updateProfileCtrl"
            })

            .state("updateStatus", {
                url: "/updateStatus",
                template: require("./Components/BarComponents/UpdateStatusPage/updateStatus.html"),
                controller: "updateStatusCtrl"
            })

            .state("reportBug", {
                url: "/reportBug",
                template: require("./Components/BarComponents/ReportBugPage/reportBug.html"),
                controller: "reportBugCtrl"
            })

            .state("updateCredentials", {
                url: "/updateCredentials",
                template: require("./Components/BarComponents/UpdateCredentialsPage/updateCredentials.html"),
                controller: "updateCredentialsCtrl"
            });

        if (window.localStorage.getItem("RememberMe") == "true") {
            $urlRouterProvider.otherwise("/tab/forum");
        } else {
            $urlRouterProvider.otherwise("/login");
        }


    }
}

export default Config;