/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "www/Bundle/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var addArticleCtrl = __webpack_require__(1);
	var addNewsCtrl = __webpack_require__(2);
	var adminCtrl = __webpack_require__(3);
	var articlesCtrl = __webpack_require__(4);
	var commentsCtrl = __webpack_require__(5);
	var linkCtrl = __webpack_require__(6);
	var loginCtrl = __webpack_require__(7);
	var newsCtrl = __webpack_require__(8);
	var readArticleCtrl = __webpack_require__(9);
	var signupCtrl = __webpack_require__(10);
	var TabsCtrl = __webpack_require__(11);

	angular.module('appAS', ['ionic', 'appAS.controllers'])

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
	                templateUrl: "Components/Tabs/tabs.html",
	                controller: TabsCtrl
	            })


	            .state('tab.home', {
	                url: '/home',
	                views: {
	                    'tab-home': {
	                        templateUrl: 'Components/AdminPage/tab-home.html',
	                        controller: adminCtrl
	                    }
	                }
	            })

	            .state('tab.giornalino', {
	                url: '/giornalino',
	                views: {
	                    'tab-giornalino': {
	                        templateUrl: 'Components/ArticlesPage/tab-giornalino.html',
	                        controller: articlesCtrl
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
	                        controller: articlesCtrl
	                    }
	                }
	            })

	            .state('tab.forum', {
	                url: '/forum',
	                views: {
	                    'tabs-forum': {
	                        templateUrl: 'Components/NewsPage/tabs-forum.html',
	                        controller: newsCtrl
	                    }
	                }
	            })

	            .state('tab.link', {
	                url: '/link',
	                views: {
	                    'tabs-link': {
	                        templateUrl: 'Components/LinkPage/tab-link.html',
	                        controller: linkCtrl
	                    }
	                }
	            })

	            .state('tab.add_article', {
	                url: '/add_article',
	                views: {
	                    'tab-add_article': {
	                        templateUrl: 'Components/AddArticlePage/tab-addArticle.html',
	                        controller: addArticleCtrl

	                    }
	                }
	            })

	            .state('tab.send_message', {
	                url: '/send_message',
	                views: {
	                    'tab-send_message': {
	                        templateUrl: 'Components/AddNewsPage/tab-send_message.html',
	                        controller: addNewsCtrl

	                    }
	                }
	            })

	            .state('tab.article', {
	                url: '/article',
	                views: {
	                    'tab-article': {
	                        templateUrl: 'Components/ReadArticlePage/tab-article.html',
	                        controller: readArticleCtrl

	                    }
	                }
	            })

	            .state('tab.comments', {
	                url: '/comments',
	                views: {
	                    'tab-comments': {
	                        templateUrl: 'Components/CommentsPage/tab-comments.html',
	                        controller: commentsCtrl

	                    }
	                }
	            });



	        $urlRouterProvider.otherwise('/tab/link');

	    });


/***/ },
/* 1 */
/***/ function(module, exports) {

	var mod = angular.module('appAS.controllers', ['ionic'])
	var addArticleCtrl = mod.controller('addArticleCtrl', function ($scope, $window) {

	    $('#img-preview').hide();

	    $scope.GetPic = function () {
	        navigator.camera.getPicture(onSuccess, onFail, {
	            quality: 50,
	            destinationType: Camera.DestinationType.DATA_URL,
	            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	        });

	        function onSuccess(imageData) {
	            $scope.imgData = imageData;
	            $('#img-preview').show();
	            document.getElementById('img_1').src = "data:image/png;base64," + imageData;
	        }

	        function onFail(message) {
	            alert('Non sono riuscito a reperire la foto perchè ' + message);
	        }

	    }

	    $scope.UploadArticle = function () {
	        sendArticle($("#titletxt").val(), "autore", $("#texttxt").val(), $scope.imgData, $window.localStorage.getItem("contentType"));
	        $("#titletxt").val("");
	        $("#texttxt").val("");
	    }

	});

	module.exports = addArticleCtrl;



/***/ },
/* 2 */
/***/ function(module, exports) {

	var mod = angular.module('appAS.controllers', ['ionic'])
	var addNewsCtrl = mod.controller('addNewsCtrl', function ($scope) {
	    $scope.test = function () {
	        sendpost($("#messagetxt").val());
	        $("#messagetxt").val("");
	    };

	})

	module.exports = addNewsCtrl;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var mod= angular.module('appAS.controllers', ['ionic'])
	var adminCtrl = mod.controller('adminCtrl', function ($scope, $state, $window) {

	        $scope.title = "Sezione Amministratori ";

	        $scope.Links = [
	            {
	                "name": "Scrivi Avviso",
	                "url": "tab.send_message",
	                "direct": function () {
	                    $state.go(this.url);
	                },
	            },
	            {
	                "name": "Scrivi Articolo d'attualità",
	                "url": "tab.add_article",
	                "direct": function () {
	                    $state.go(this.url);
	                    $window.localStorage.setItem("contentType", "Article");
	                },
	            },
	            {
	                "name": "Scrivi Articolo d'orientamento",
	                "url": "tab.add_article",
	                "direct": function () {
	                    $state.go(this.url);
	                    $window.localStorage.setItem("contentType", "Orientamento");
	                },
	            },
	        ];

	    });

	    module.exports = adminCtrl;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var mod = angular.module('appAS.controllers', ['ionic'])
	var articlesCtrl = mod.controller('articlesCtrl', function ($scope, $state, $window) {

	    $scope.$on('$ionicView.enter', function () {
	        if ($scope.Articles != getArticles($state, $window, "Article")) { $scope.doRefresh(); }
	    });

	    $scope.Articles = getArticles($state, $window, "Article");

	    $scope.doRefresh = function () {
	        $scope.Articles = getArticles($state, $window, "Article");
	        $scope.$broadcast('scroll.refreshComplete');
	        $scope.$apply();
	    };

	});

	module.exports = articlesCtrl;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var mod = angular.module('appAS.controllers', ['ionic'])
	var commentsCtrl = mod.controller('commentsCtrl', function ($scope, $window) {
	    $scope.send = function () {
	        sendComment($("#commenttxt").val(), $window.localStorage.getItem("currentPost"));
	        $("#commenttxt").val("");
	        $scope.doRefresh();
	    }

	    $scope.$on('$ionicView.enter', function () {
	        $scope.doRefresh();
	    });

	    $scope.Comments = getComments($window);

	    $scope.doRefresh = function () {
	        $scope.Comments = getComments($window);
	        $scope.$broadcast('scroll.refreshComplete');
	        $scope.$apply();
	    };

	})

	module.exports = commentsCtrl;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var mod = angular.module('appAS.controllers', ['ionic'])
	var linkCtrl = mod.controller('linkCtrl', function ($scope, $window) {

	    $scope.OpenLink = function (url) {
	        cordova.InAppBrowser.open(url, '_system', 'location=yes');
	    }

	    $scope.Links = [
	        {
	            "name": "Registro Elettronico",
	            "url": "https://spallanzani-re-sito.registroelettronico.com/login/?next=/select-student/",
	            "icon": "icon ion-ios-book-outline"
	        },
	        {
	            "name": "Quaderno Elettronico",
	            "url": "http://2.229.79.199/quaderno/index.php",
	            "icon": "icon ion-ios-book"
	        },
	        {
	            "name": "Sito Web Della Scuola",
	            "url": "http://www.liceoariostospallanzani-re.gov.it/",
	            "icon": "icon ion-ios-world"
	        },
	    ];

	});

	module.exports = linkCtrl;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var mod = angular.module('appAS', ['ionic'])
	var loginCtrl = mod.controller('loginCtrl', function ($scope, $ionicLoading, $window) {

	        $scope.UserLogin = function () {
	            $ionicLoading.show({
	                template: 'Accesso in Corso...'
	            });
	            Login($scope.username, $scope.password, $ionicLoading);
	            $scope.SetRememberMe();
	        };

	        $scope.SetRememberMe = function () {

	            if ($scope.RememberMe) {
	                $window.localStorage.setItem("RememberMe", "true");
	            }

	        }
	        $scope.CheckRememberMe = function () {

	            if ($window.localStorage.getItem("RememberMe") == "true") {
	                document.location.href = "index.html";
	            }

	        }

	        $scope.changePassView = function () {

	            if ($scope.ShowPass)
	                $("#passtxt").attr("type", "text");
	            else {
	                $("#passtxt").attr("type", "password")
	            }
	        }

	    });

	    module.exports = loginCtrl;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var mod = angular.module('appAS.controllers', ['ionic'])
	var forumCtrl = mod.controller('forumCtrl', function ($scope, $state, $window) {

	    $scope.Posts = getPosts($window, $state);


	    $scope.doRefresh = function () {
	        $scope.Posts = getPosts($window, $state);
	        $scope.$broadcast('scroll.refreshComplete');
	        $scope.$apply();
	    };

	});

	module.exports = forumCtrl;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var mod = angular.module('appAS.controllers', ['ionic'])
	var articleCtrl = mod.controller('articleCtrl', function($scope,$stateParams,$state,$window,$ionicModal) {

	    $scope.$on('$ionicView.enter',function(e){

	     $scope.title = $window.localStorage.getItem("title");
	     $scope.text = $window.localStorage.getItem("text");
	     $scope.img = $window.localStorage.getItem("img");
	     $scope.date = $window.localStorage.getItem("date");

	    });

	    $ionicModal.fromTemplateUrl('image-modal.html', {
	         scope: $scope,
	         animation: 'slide-in-up'
	       }).then(function(modal) {
	         $scope.modal = modal;
	       });

	       $scope.openModal = function() {
	         $scope.modal.show();
	       };

	       $scope.closeModal = function() {
	         $scope.modal.hide();
	       };

	       $scope.$on('$destroy', function() {
	         $scope.modal.remove();
	       });

	});

	module.exports = articleCtrl;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var mod = angular.module('appAS', ['ionic'])
	var signupCtrl = mod.controller('signupCtrl', function ($scope, $ionicLoading, $location) {

	    $scope.UserSignup = function () {
	        $ionicLoading.show({
	            template: 'Registrazione in corso...'
	        });
	        Signup($scope.username, $scope.password, $scope.mail, $ionicLoading);
	    };

	    $scope.go = function () {
	        document.location.href = 'login.html'
	    };

	    $scope.changePassView = function () {

	        if ($scope.ShowPass)
	            $("#passtxt").attr("type", "text");
	        else {
	            $("#passtxt").attr("type", "password")
	        }
	    }
	});

	module.exports = signupCtrl;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var mod = angular.module('appAS', ['ionic'])
	var tabsCtrl = mod.controller('tabsCtrl', function ($scope, $ionicTabsDelegate, $ionicLoading, $window, $ionicPlatform) {

	    $scope.checkadmin = function () {

	        if (Parse.User.current()) {
	            if (Parse.User.current().get("isadmin")) {
	                return "ng-show";
	            } else {
	                return "ng-hide";
	            }
	        }
	    }

	    $scope.Disconnect = function () {
	        $ionicLoading.show({
	            template: 'Disconnessione in corso...'
	        });
	        Logout($ionicLoading);
	        $window.localStorage.setItem("RememberMe", "false");
	    }

	});

	module.exports = tabsCtrl;

/***/ }
/******/ ]);