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
/******/ 	__webpack_require__.p = "./www/Bundle/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Firebase = __webpack_require__(1);
	var Parse = __webpack_require__(3);
	var addArticleCtrl = __webpack_require__(133);
	var addNewsCtrl = __webpack_require__(134);
	var adminCtrl = __webpack_require__(135);
	var attualitaCtrl = __webpack_require__(136).attualitaCtrl;
	var orientamentoCtrl = __webpack_require__(136).orientamentoCtrl;
	var commentsCtrl = __webpack_require__(137);
	var linkCtrl = __webpack_require__(138);
	var loginCtrl = __webpack_require__(139);
	var newsCtrl = __webpack_require__(140);
	var readArticleCtrl = __webpack_require__(141);
	var signupCtrl = __webpack_require__(142);
	var tabsCtrl = __webpack_require__(143);
	var Messages = __webpack_require__(144);
	var Articles = __webpack_require__(145);
	var Comments = __webpack_require__(146);
	var Auth = __webpack_require__(147);
	var DateHandler = __webpack_require__(148);
	var InputFields = __webpack_require__(149);
	var StringHandler = __webpack_require__(150);
	var credentials = __webpack_require__(153);

	Parse.initialize("o0CJuvQWQY15h5QdIcv9cNexSI3v4QspAsTpkZVZ", "CwF1Y2TKwtlMdaDtrKsEh5yKSnzsjFL0GjZTYzkF");
	Firebase.initializeApp(credentials);

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
	appAS.service('StringHandler', StringHandler);

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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Firebase libraries for browser - npm package.
	 *
	 * Usage:
	 *
	 *   firebase = require('firebase');
	 */
	__webpack_require__(2);
	module.exports = firebase;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.3.0
	    Build: 3.3.0-rc.7
	    Terms: https://developers.google.com/terms */
	(function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,l=function(){l=function(){};h.Symbol||(h.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},p=function(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));
	"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});p=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){p();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
	if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a){return"function"==t(a)},ea=function(a,
	b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},v=function(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return v.apply(null,arguments)},w=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},x=function(a,b){function c(){}c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fa=function(a,c,g){for(var f=Array(arguments.length-2),k=2;k<arguments.length;k++)f[k-2]=arguments[k];return b.prototype[c].apply(a,f)}};var y="undefined"!==typeof window?window:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
	function __decorate(a,b,c,d){var e=arguments.length,g=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,f;f=y.Reflect;if("object"===typeof f&&"function"===typeof f.decorate)g=f.decorate(a,b,c,d);else for(var k=a.length-1;0<=k;k--)if(f=a[k])g=(3>e?f(g):3<e?f(b,c,g):f(b,c))||g;return 3<e&&g&&Object.defineProperty(b,c,g),g}function __metadata(a,b){var c=y.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
	var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,g){function f(a){try{n(d.next(a))}catch(b){g(b)}}function k(a){try{n(d.throw(a))}catch(b){g(b)}}function n(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(f,k)}n((d=d.apply(a,b)).next())})};"undefined"!==typeof y.L&&y.L||"undefined"===typeof global||(global.ca=__extends,global.ba=__decorate,global.da=__metadata,global.ea=__param,global.aa=__awaiter);var z=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};x(z,Error);z.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var A=function(a,b){b.unshift(a);z.call(this,ga.apply(null,b));b.shift()};x(A,z);A.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),g=d;else a&&(e+=": "+a,g=b);throw new A(""+e,g||[]);},B=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},C=function(a,b,c){u(a)||ha("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2))};var D=function(a,b,c){this.S=c;this.M=a;this.U=b;this.s=0;this.o=null};D.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.M();return a};D.prototype.put=function(a){this.U(a);this.s<this.S&&(this.s++,a.next=this.o,this.o=a)};var E;a:{var ia=q.navigator;if(ia){var ja=ia.userAgent;if(ja){E=ja;break a}}E=""};var ka=function(a){q.setTimeout(function(){throw a;},0)},F,la=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==E.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
	"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==E.indexOf("Trident")&&-1==E.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.F;c.F=null;a()}};return function(a){d.next={F:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
	document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};var G=function(){this.v=this.f=null},ma=new D(function(){return new H},function(a){a.reset()},100);G.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(B(!this.f),this.f=c);this.v=c};G.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var H=function(){this.next=this.scope=this.B=null};H.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
	H.prototype.reset=function(){this.next=this.scope=this.B=null};var L=function(a,b){I||na();K||(I(),K=!0);oa.add(a,b)},I,na=function(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);I=function(){a.then(pa)}}else I=function(){var a=pa;!u(q.setImmediate)||q.Window&&q.Window.prototype&&-1==E.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(F||(F=la()),F(a)):q.setImmediate(a)}},K=!1,oa=new G,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){ka(b)}ma.put(a)}K=!1};var N=function(a,b){this.b=0;this.K=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){M(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}M(c,3,a)})}catch(d){M(this,3,d)}},qa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
	var ra=new D(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.c=a;d.h=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||L(w(b,a))};N.prototype.then=function(a,b,c){null!=a&&C(a,"opt_onFulfilled should be a function.");null!=b&&C(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,u(a)?a:null,u(b)?b:null,c)};N.prototype.then=N.prototype.then;N.prototype.$goog_Thenable=!0;
	N.prototype.X=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.g||2!=a.b&&3!=a.b||wa(a);B(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new N(function(a,f){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(J){f(J)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(J){f(J)}}:f});e.child.u=a;xa(a,e);return e.child};N.prototype.Y=function(a){B(1==this.b);this.b=0;M(this,2,a)};N.prototype.Z=function(a){B(1==this.b);this.b=0;M(this,3,a)};
	var M=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.Y,a.Z,a)||(a.K=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof N)return null!=b&&C(b,"opt_onFulfilled should be a function."),null!=c&&C(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(f){e=!1}else e=!1;if(e)return a.then(b,c,d),
	!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var g=a.then;if(u(g))return za(a,g,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},za=function(a,b,c,d,e){var g=!1,f=function(a){g||(g=!0,c.call(e,a))},k=function(a){g||(g=!0,d.call(e,a))};try{b.call(a,f,k)}catch(n){k(n)}},wa=function(a){a.A||(a.A=!0,L(a.O,a))},Aa=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&B(null!=b.c);return b};
	N.prototype.O=function(){for(var a;a=Aa(this);){var b=this.b,c=this.K;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.c.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},ya=function(a,b){a.m=!0;L(function(){a.m&&Ca.call(null,b)})},Ca=ka;function O(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=O(a[c],b[c]));return a};var Da=Error.captureStackTrace,Q=function(a,b){this.code=a;this.message=b;if(Da)Da(this,P.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};Q.prototype=Object.create(Error.prototype);Q.prototype.constructor=Q;Q.prototype.name="FirebaseError";var P=function(a,b,c){this.V=a;this.W=b;this.N=c;this.pattern=/\{\$([^}]+)}/g};
	P.prototype.create=function(a,b){void 0===b&&(b={});var c=this.N[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+a+").",c=new Q(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};N.all=function(a){return new N(function(b,c){var d=a.length,e=[];if(d)for(var g=function(a,c){d--;e[a]=c;0==d&&b(e)},f=function(a){c(a)},k=0,n;k<a.length;k++)n=a[k],ua(n,w(g,k),f);else b(e)})};N.resolve=function(a){if(a instanceof N)return a;var b=new N(r);M(b,2,a);return b};N.reject=function(a){return new N(function(b,c){c(a)})};N.prototype["catch"]=N.prototype.X;var R=N;"undefined"!==typeof Promise&&(R=Promise);var Ea=R;function Fa(a,b){a=new S(a,b);return a.subscribe.bind(a)}var S=function(a,b){var c=this;this.a=[];this.J=0;this.task=Ea.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};S.prototype.next=function(a){T(this,function(b){b.next(a)})};S.prototype.error=function(a){T(this,function(b){b.error(a)});this.close(a)};S.prototype.complete=function(){T(this,function(a){a.complete()});this.close()};
	S.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Ga(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=U);void 0===e.error&&(e.error=U);void 0===e.complete&&(e.complete=U);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.G?e.error(d.G):e.complete()}catch(a){}});this.a.push(e);return a};
	S.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.J,0===this.J&&void 0!==this.D&&this.D(this))};var T=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ha(a,c,b)},Ha=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){}})};S.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.G=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
	function Ga(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];p();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function U(){};var V=R,W=function(a,b,c){var d=this;this.H=c;this.I=!1;this.i={};this.C=b;this.T=O(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){var b=c.INTERNAL.useAsService(d,a);null!==b&&(d[a]=d.R.bind(d,b))})};W.prototype.delete=function(){var a=this;return(new V(function(b){X(a);b()})).then(function(){a.H.INTERNAL.removeApp(a.C);return V.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.I=!0;a.i={}})};
	W.prototype.R=function(a){X(this);void 0===this.i[a]&&(this.i[a]=this.H.INTERNAL.factories[a](this,this.P.bind(this)));return this.i[a]};W.prototype.P=function(a){O(this,a)};var X=function(a){a.I&&Y(Ia("deleted",{name:a.C}))};h.Object.defineProperties(W.prototype,{name:{configurable:!0,enumerable:!0,get:function(){X(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){X(this);return this.T}}});W.prototype.name&&W.prototype.options||W.prototype.delete||console.log("dc");
	function Ja(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Y("noApp",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&g[d])g[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth");return c}var d={},e={},g={},f={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Y("bad-app-name",{name:c+""});void 0!==d[c]&&Y("dupApp",
	{name:c});a=new W(a,c,f);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||O(a,{INTERNAL:{getToken:function(){return V.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:V,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,Z){e[b]&&Y("dupService",{name:b});e[b]=c;Z&&(g[b]=Z);c=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&O(c,d);return f[b]=c},createFirebaseNamespace:Ja,extendNamespace:function(a){O(f,
	a)},createSubscribe:Fa,ErrorFactory:P,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:N,deepExtend:O}};f["default"]=f;Object.defineProperty(f,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=W;return f}function Y(a,b){throw Error(Ia(a,b));}
	function Ia(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered."}[a];return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof window&&(window.firebase=Ja()); })();
	firebase.SDK_VERSION = "3.3.0";
	(function(){var h,aa=aa||{},l=this,ba=function(){},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
	!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){return null===a},da=function(a){return"array"==m(a)},ea=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},fa=function(a){return"number"==typeof a},p=function(a){return"function"==m(a)},ga=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ha=function(a,b,
	c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return r.apply(null,arguments)},ja=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ka=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.Pc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ne=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var la=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},va=function(a,b){return a<b?-1:a>b?1:0};var wa=function(a,b){b.unshift(a);u.call(this,la.apply(null,b));b.shift()};t(wa,u);wa.prototype.name="AssertionError";
	var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},w=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){fa(a)||xa("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){n(a)||xa("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,
	2))},Ba=function(a,b,c){p(a)||xa("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Ca=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=function(a,b){for(var c=n(a)?
	a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ea=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Fa=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
	Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]},Ia=function(a,b){return 0<=Ca(a,b)},Ka=function(a,b){b=Ca(a,b);var c;(c=0<=b)&&Ja(a,b);return c},Ja=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++})},Ma=function(a){return Array.prototype.concat.apply(Array.prototype,
	arguments)},Na=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Pa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};var Qa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ta=function(a){for(var b in a)return!1;return!0},Ua=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Va=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Xa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Wa.length;f++)c=Wa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ya;a:{var Za=l.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a}}Ya=""}var y=function(a){return v(Ya,a)};var ab=function(a){ab[" "](a);return a};ab[" "]=ba;var cb=function(a,b){var c=bb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var db=y("Opera"),z=y("Trident")||y("MSIE"),eb=y("Edge"),fb=eb||z,gb=y("Gecko")&&!(v(Ya.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),hb=v(Ya.toLowerCase(),"webkit")&&!y("Edge"),ib=function(){var a=l.document;return a?a.documentMode:void 0},jb;
	a:{var kb="",lb=function(){var a=Ya;if(gb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hb)return/WebKit\/(\S+)/.exec(a);if(db)return/(?:Version)[ \/]?(\S+)/.exec(a)}();lb&&(kb=lb?lb[1]:"");if(z){var mb=ib();if(null!=mb&&mb>parseFloat(kb)){jb=String(mb);break a}}jb=kb}
	var nb=jb,bb={},A=function(a){return cb(a,function(){for(var b=0,c=ma(String(nb)).split("."),d=ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=va(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||va(0==g[2].length,0==k[2].length)||va(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},ob=l.document,
	pb=ob&&z?ib()||("CSS1Compat"==ob.compatMode?parseInt(nb,10):5):void 0;var qb=null,rb=null,tb=function(a){var b="";sb(a,function(a){b+=String.fromCharCode(a)});return b},sb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=rb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ub();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},ub=function(){if(!qb){qb={};rb={};for(var a=0;65>a;a++)qb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
	rb[qb[a]]=a,62<=a&&(rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var wb=function(){this.ec="";this.Md=vb};wb.prototype.Nb=!0;wb.prototype.Ib=function(){return this.ec};wb.prototype.toString=function(){return"Const{"+this.ec+"}"};var xb=function(a){if(a instanceof wb&&a.constructor===wb&&a.Md===vb)return a.ec;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"},vb={};var B=function(){this.ja="";this.Ld=yb};B.prototype.Nb=!0;B.prototype.Ib=function(){return this.ja};B.prototype.toString=function(){return"SafeUrl{"+this.ja+"}"};
	var zb=function(a){if(a instanceof B&&a.constructor===B&&a.Ld===yb)return a.ja;ya("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},Ab=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Cb=function(a){if(a instanceof B)return a;a=a.Nb?a.Ib():String(a);Ab.test(a)||(a="about:invalid#zClosurez");return Bb(a)},yb={},Bb=function(a){var b=new B;b.ja=a;return b};Bb("about:blank");var Eb=function(){this.Vb="";this.Nd=Db};Eb.prototype.Nb=!0;Eb.prototype.Ib=function(){return this.Vb};Eb.prototype.toString=function(){return"TrustedResourceUrl{"+this.Vb+"}"};var Db={};var Gb=function(){this.ja="";this.Kd=Fb};Gb.prototype.Nb=!0;Gb.prototype.Ib=function(){return this.ja};Gb.prototype.toString=function(){return"SafeHtml{"+this.ja+"}"};var Hb=function(a){if(a instanceof Gb&&a.constructor===Gb&&a.Kd===Fb)return a.ja;ya("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},Fb={};Gb.prototype.ne=function(a){this.ja=a;return this};var Ib=function(a,b){b=b instanceof B?b:Cb(b);a.href=zb(b)};var Jb=!z||9<=Number(pb),Kb=z&&!A("9");!hb||A("528");gb&&A("1.9b")||z&&A("8")||db&&A("9.5")||hb&&A("528");gb&&!A("8")||z&&A("9");var Lb=function(){this.ya=this.ya;this.Sb=this.Sb};Lb.prototype.ya=!1;Lb.prototype.isDisposed=function(){return this.ya};Lb.prototype.Oa=function(){if(this.Sb)for(;this.Sb.length;)this.Sb.shift()()};var Mb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Va=!1;this.ud=!0};Mb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ud=!1};var Nb=function(a,b){Mb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.kb=this.state=null;a&&this.init(a,b)};t(Nb,Mb);
	Nb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(gb){var e;a:{try{ab(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=hb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=hb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
	a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.kb=a;a.defaultPrevented&&
	this.preventDefault()};Nb.prototype.preventDefault=function(){Nb.Pc.preventDefault.call(this);var a=this.kb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Kb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Nb.prototype.ce=function(){return this.kb};var Ob="closure_listenable_"+(1E6*Math.random()|0),Pb=0;var Qb=function(a,b,c,d,e){this.listener=a;this.Wb=null;this.src=b;this.type=c;this.Bb=!!d;this.Kb=e;this.key=++Pb;this.$a=this.Ab=!1},Rb=function(a){a.$a=!0;a.listener=null;a.Wb=null;a.src=null;a.Kb=null};var Sb=function(a){this.src=a;this.w={};this.xb=0};Sb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.w[f];a||(a=this.w[f]=[],this.xb++);var g=Tb(a,b,d,e);-1<g?(b=a[g],c||(b.Ab=!1)):(b=new Qb(b,this.src,f,!!d,e),b.Ab=c,a.push(b));return b};Sb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.w))return!1;var e=this.w[a];b=Tb(e,b,c,d);return-1<b?(Rb(e[b]),Ja(e,b),0==e.length&&(delete this.w[a],this.xb--),!0):!1};
	var Ub=function(a,b){var c=b.type;c in a.w&&Ka(a.w[c],b)&&(Rb(b),0==a.w[c].length&&(delete a.w[c],a.xb--))};Sb.prototype.tc=function(a,b,c,d){a=this.w[a.toString()];var e=-1;a&&(e=Tb(a,b,c,d));return-1<e?a[e]:null};var Tb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.$a&&f.listener==b&&f.Bb==!!c&&f.Kb==d)return e}return-1};var Vb="closure_lm_"+(1E6*Math.random()|0),Wb={},Xb=0,Yb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Yb(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?a.listen(b,c,d,e):$b(a,b,c,!1,d,e)},$b=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=ac(a);k||(a[Vb]=k=new Sb(a));c=k.add(b,c,d,e,f);if(c.Wb)return;d=bc();c.Wb=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(cc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
	Xb++},bc=function(){var a=dc,b=Jb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},ec=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)ec(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?fc(a,b,c,d,e):$b(a,b,c,!0,d,e)},gc=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)gc(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?a.Y.remove(String(b),c,d,e):a&&(a=ac(a))&&(b=a.tc(b,c,!!d,e))&&hc(b)},hc=function(a){if(!fa(a)&&a&&!a.$a){var b=a.src;if(b&&b[Ob])Ub(b.Y,
	a);else{var c=a.type,d=a.Wb;b.removeEventListener?b.removeEventListener(c,d,a.Bb):b.detachEvent&&b.detachEvent(cc(c),d);Xb--;(c=ac(b))?(Ub(c,a),0==c.xb&&(c.src=null,b[Vb]=null)):Rb(a)}}},cc=function(a){return a in Wb?Wb[a]:Wb[a]="on"+a},jc=function(a,b,c,d){var e=!0;if(a=ac(a))if(b=a.w[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Bb==c&&!f.$a&&(f=ic(f,d),e=e&&!1!==f)}return e},ic=function(a,b){var c=a.listener,d=a.Kb||a.src;a.Ab&&hc(a);return c.call(d,b)},dc=function(a,b){if(a.$a)return!0;
	if(!Jb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Nb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Va&&0<=e;e--){b.currentTarget=d[e];var f=jc(d[e],a,!0,b),c=c&&f}for(e=0;!b.Va&&e<d.length;e++)b.currentTarget=d[e],f=jc(d[e],a,!1,
	b),c=c&&f}return c}return ic(a,new Nb(b,this))},ac=function(a){a=a[Vb];return a instanceof Sb?a:null},kc="__closure_events_fn_"+(1E9*Math.random()>>>0),Zb=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[kc]||(a[kc]=function(b){return a.handleEvent(b)});return a[kc]};var lc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var mc=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},pc=function(a){var b=[];nc(new oc,a,b);return b.join("")},oc=function(){this.$b=void 0},nc=function(a,b,c){if(null==
	b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],nc(a,a.$b?a.$b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),qc(d,c),c.push(":"),nc(a,a.$b?a.$b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":qc(b,
	c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},rc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,qc=function(a,b){b.push('"',a.replace(sc,function(a){var b=rc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
	rc[a]=b);return b}),'"')};var tc=function(){};tc.prototype.Tc=null;var uc=function(a){return a.Tc||(a.Tc=a.xc())};var vc,wc=function(){};t(wc,tc);wc.prototype.Cb=function(){var a=xc(this);return a?new ActiveXObject(a):new XMLHttpRequest};wc.prototype.xc=function(){var a={};xc(this)&&(a[0]=!0,a[1]=!0);return a};
	var xc=function(a){if(!a.gd&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.gd=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.gd};vc=new wc;var yc=function(){};t(yc,tc);yc.prototype.Cb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new zc;throw Error("Unsupported browser");};yc.prototype.xc=function(){return{}};
	var zc=function(){this.na=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.na.onload=r(this.ee,this);this.na.onerror=r(this.ed,this);this.na.onprogress=r(this.fe,this);this.na.ontimeout=r(this.ge,this)};h=zc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.na.open(a,b)};
	h.send=function(a){if(a)if("string"==typeof a)this.na.send(a);else throw Error("Only string data is supported");else this.na.send()};h.abort=function(){this.na.abort()};h.setRequestHeader=function(){};h.ee=function(){this.status=200;this.responseText=this.na.responseText;Ac(this,4)};h.ed=function(){this.status=500;this.responseText="";Ac(this,4)};h.ge=function(){this.ed()};h.fe=function(){this.status=200;Ac(this,1)};var Ac=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var C=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.h[d]=e,c=!1)}},Bc={},Cc=function(a){if(-128<=a&&128>a){var b=Bc[a];if(b)return b}b=new C([a|0],0>a?-1:0);-128<=a&&128>a&&(Bc[a]=b);return b},F=function(a){if(isNaN(a)||!isFinite(a))return D;if(0>a)return E(F(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=4294967296;return new C(b,0)},Dc=function(a,b){if(0==a.length)throw Error("number format error: empty string");b=b||10;if(2>b||36<b)throw Error("radix out of range: "+
	b);if("-"==a.charAt(0))return E(Dc(a.substring(1),b));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=F(Math.pow(b,8)),d=D,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);8>f?(f=F(Math.pow(b,f)),d=d.multiply(f).add(F(g))):(d=d.multiply(c),d=d.add(F(g)))}return d},D=Cc(0),Ec=Cc(1),Fc=Cc(16777216),Gc=function(a){if(-1==a.g)return-Gc(E(a));for(var b=0,c=1,d=0;d<a.h.length;d++)b+=Hc(a,d)*c,c*=4294967296;return b};
	C.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(G(this))return"0";if(-1==this.g)return"-"+E(this).toString(a);for(var b=F(Math.pow(a,6)),c=this,d="";;){var e=Ic(c,b),c=Jc(c,e.multiply(b)),f=((0<c.h.length?c.h[0]:c.g)>>>0).toString(a),c=e;if(G(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
	var H=function(a,b){return 0>b?0:b<a.h.length?a.h[b]:a.g},Hc=function(a,b){a=H(a,b);return 0<=a?a:4294967296+a},G=function(a){if(0!=a.g)return!1;for(var b=0;b<a.h.length;b++)if(0!=a.h[b])return!1;return!0};C.prototype.Eb=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c<b;c++)if(H(this,c)!=H(a,c))return!1;return!0};C.prototype.compare=function(a){a=Jc(this,a);return-1==a.g?-1:G(a)?0:1};
	var E=function(a){for(var b=a.h.length,c=[],d=0;d<b;d++)c[d]=~a.h[d];return(new C(c,~a.g)).add(Ec)};C.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e<=b;e++){var f=d+(H(this,e)&65535)+(H(a,e)&65535),g=(f>>>16)+(H(this,e)>>>16)+(H(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;c[e]=g<<16|f}return new C(c,c[c.length-1]&-2147483648?-1:0)};var Jc=function(a,b){return a.add(E(b))};
	C.prototype.multiply=function(a){if(G(this)||G(a))return D;if(-1==this.g)return-1==a.g?E(this).multiply(E(a)):E(E(this).multiply(a));if(-1==a.g)return E(this.multiply(E(a)));if(0>this.compare(Fc)&&0>a.compare(Fc))return F(Gc(this)*Gc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.h.length;d++)for(var e=0;e<a.h.length;e++){var f=H(this,d)>>>16,g=H(this,d)&65535,k=H(a,e)>>>16,q=H(a,e)&65535;c[2*d+2*e]+=g*q;Kc(c,2*d+2*e);c[2*d+2*e+1]+=f*q;Kc(c,2*d+2*e+1);c[2*d+2*e+1]+=
	g*k;Kc(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Kc(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new C(c,0)};
	var Kc=function(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535},Ic=function(a,b){if(G(b))throw Error("division by zero");if(G(a))return D;if(-1==a.g)return-1==b.g?Ic(E(a),E(b)):E(Ic(E(a),b));if(-1==b.g)return E(Ic(a,E(b)));if(30<a.h.length){if(-1==a.g||-1==b.g)throw Error("slowDivide_ only works with positive integers.");for(var c=Ec;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=Lc(c,1),e=Lc(b,1),f;b=Lc(b,2);for(c=Lc(c,2);!G(b);)f=e.add(b),0>=f.compare(a)&&(d=d.add(c),e=f),
	b=Lc(b,1),c=Lc(c,1);return d}for(c=D;0<=a.compare(b);){d=Math.max(1,Math.floor(Gc(a)/Gc(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=F(d);for(var g=f.multiply(b);-1==g.g||0<g.compare(a);)d-=e,f=F(d),g=f.multiply(b);G(f)&&(f=Ec);c=c.add(f);a=Jc(a,g)}return c},Mc=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e<c;e++)d[e]=H(a,e)|H(b,e);return new C(d,a.g|b.g)};
	C.prototype.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.h.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?H(this,e-b)<<a|H(this,e-b-1)>>>32-a:H(this,e-b);return new C(d,this.g)};var Lc=function(a,b){var c=b>>5;b%=32;for(var d=a.h.length-c,e=[],f=0;f<d;f++)e[f]=0<b?H(a,f+c)>>>b|H(a,f+c+1)<<32-b:H(a,f+c);return new C(e,a.g)};var Nc=function(a,b){this.ob=a;this.ma=b};Nc.prototype.Eb=function(a){return this.ma==a.ma&&this.ob.Eb(Va(a.ob))};
	var Qc=function(a){try{var b;if(b=0==a.lastIndexOf("[",0)){var c=a.length-1;b=0<=c&&a.indexOf("]",c)==c}return b?new Oc(a.substring(1,a.length-1)):new Pc(a)}catch(d){return null}},Pc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Rc))throw Error("The address does not look like an IPv4.");b=Va(a)}else{if(!Sc.test(a))throw Error(a+" does not look like an IPv4 address.");var c=a.split(".");if(4!=c.length)throw Error(a+" does not look like an IPv4 address.");for(var d=0;d<
	c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&&/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0>e||255<e||1!=c[d].length&&0==c[d].lastIndexOf("0",0))throw Error("In "+a+", octet "+d+" is not valid");e=F(e);b=Mc(b.shiftLeft(8),e)}}Nc.call(this,b,4)};t(Pc,Nc);var Sc=/^[0-9.]*$/,Rc=Jc(Ec.shiftLeft(32),Ec);Pc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=Hc(this.ob,0),b=[],c=3;0<=c;c--)b[c]=String(a&255),a>>>=8;return this.Ca=b.join(".")};
	var Oc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Tc))throw Error("The address does not look like a valid IPv6.");b=Va(a)}else{if(!Uc.test(a))throw Error(a+" is not a valid IPv6 address.");var c=a.split(":");if(-1!=c[c.length-1].indexOf(".")){a=Hc(Va((new Pc(c[c.length-1])).ob),0);var d=[];d.push((a>>>16&65535).toString(16));d.push((a&65535).toString(16));Ja(c,c.length-1);Pa(c,d);a=c.join(":")}d=a.split("::");if(2<d.length||1==d.length&&8!=c.length)throw Error(a+
	" is not a valid IPv6 address.");if(1<d.length){c=d[0].split(":");d=d[1].split(":");1==c.length&&""==c[0]&&(c=[]);1==d.length&&""==d[0]&&(d=[]);var e=8-(c.length+d.length);if(1>e)c=[];else{for(var f=[],g=0;g<e;g++)f[g]="0";c=Na(c,f,d)}}if(8!=c.length)throw Error(a+" is not a valid IPv6 address");for(d=0;d<c.length;d++){e=Dc(c[d],16);if(0>e.compare(D)||0<e.compare(Vc))throw Error(c[d]+" in "+a+" is not a valid hextet.");b=Mc(b.shiftLeft(16),e)}}Nc.call(this,b,6)};t(Oc,Nc);
	var Uc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Vc=Cc(65535),Tc=Jc(Ec.shiftLeft(128),Ec);Oc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=[],b=3;0<=b;b--){var c=Hc(this.ob,b),d=c&65535;a.push((c>>>16).toString(16));a.push(d.toString(16))}for(var c=b=-1,e=d=0,f=0;f<a.length;f++)"0"==a[f]?(e++,-1==c&&(c=f),e>d&&(d=e,b=c)):(c=-1,e=0);0<d&&(b+d==a.length&&a.push(""),a.splice(b,d,""),0==b&&(a=[""].concat(a)));return this.Ca=a.join(":")};!gb&&!z||z&&9<=Number(pb)||gb&&A("1.9.1");z&&A("9");var Xc=function(a,b){Qa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Wc.hasOwnProperty(d)?a.setAttribute(Wc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Wc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Yc=function(a,b,c){this.pe=c;this.Td=a;this.ye=b;this.Rb=0;this.Lb=null};Yc.prototype.get=function(){var a;0<this.Rb?(this.Rb--,a=this.Lb,this.Lb=a.next,a.next=null):a=this.Td();return a};Yc.prototype.put=function(a){this.ye(a);this.Rb<this.pe&&(this.Rb++,a.next=this.Lb,this.Lb=a)};var Zc=function(a){l.setTimeout(function(){throw a;},0)},$c,ad=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Xc;c.Xc=null;a()}};return function(a){d.next={Xc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var bd=function(){this.jc=this.Ja=null},dd=new Yc(function(){return new cd},function(a){a.reset()},100);bd.prototype.add=function(a,b){var c=dd.get();c.set(a,b);this.jc?this.jc.next=c:(w(!this.Ja),this.Ja=c);this.jc=c};bd.prototype.remove=function(){var a=null;this.Ja&&(a=this.Ja,this.Ja=this.Ja.next,this.Ja||(this.jc=null),a.next=null);return a};var cd=function(){this.next=this.scope=this.sc=null};cd.prototype.set=function(a,b){this.sc=a;this.scope=b;this.next=null};
	cd.prototype.reset=function(){this.next=this.scope=this.sc=null};var id=function(a,b){ed||fd();gd||(ed(),gd=!0);hd.add(a,b)},ed,fd=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);ed=function(){a.then(jd)}}else ed=function(){var a=jd;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?($c||($c=ad()),$c(a)):l.setImmediate(a)}},gd=!1,hd=new bd,jd=function(){for(var a;a=hd.remove();){try{a.sc.call(a.scope)}catch(b){Zc(b)}dd.put(a)}gd=!1};var kd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},ld=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var I=function(a,b){this.F=0;this.ka=void 0;this.Ma=this.fa=this.o=null;this.Jb=this.rc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){md(c,2,a)},function(a){if(!(a instanceof nd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}md(c,3,a)})}catch(d){md(this,3,d)}},od=function(){this.next=this.context=this.Sa=this.Ea=this.child=null;this.ib=!1};od.prototype.reset=function(){this.context=this.Sa=this.Ea=this.child=null;this.ib=!1};
	var pd=new Yc(function(){return new od},function(a){a.reset()},100),qd=function(a,b,c){var d=pd.get();d.Ea=a;d.Sa=b;d.context=c;return d},J=function(a){if(a instanceof I)return a;var b=new I(ba);md(b,2,a);return b},K=function(a){return new I(function(b,c){c(a)})},sd=function(a,b,c){rd(a,b,c,null)||id(ja(b,a))},td=function(a){return new I(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{be:!0,value:f}:{be:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],sd(g,ja(e,f,!0),
	ja(e,f,!1));else b(d)})};I.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return ud(this,p(a)?a:null,p(b)?b:null,c)};kd(I);var wd=function(a,b){b=qd(b,b,void 0);b.ib=!0;vd(a,b);return a};I.prototype.l=function(a,b){return ud(this,null,a,b)};I.prototype.cancel=function(a){0==this.F&&id(function(){var b=new nd(a);xd(this,b)},this)};
	var xd=function(a,b){if(0==a.F)if(a.o){var c=a.o;if(c.fa){for(var d=0,e=null,f=null,g=c.fa;g&&(g.ib||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.F&&1==d?xd(c,b):(f?(d=f,w(c.fa),w(null!=d),d.next==c.Ma&&(c.Ma=d),d.next=d.next.next):yd(c),zd(c,e,3,b)))}a.o=null}else md(a,3,b)},vd=function(a,b){a.fa||2!=a.F&&3!=a.F||Ad(a);w(null!=b.Ea);a.Ma?a.Ma.next=b:a.fa=b;a.Ma=b},ud=function(a,b,c,d){var e=qd(null,null,null);e.child=new I(function(a,g){e.Ea=b?function(c){try{var e=b.call(d,c);a(e)}catch(ra){g(ra)}}:
	a;e.Sa=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof nd?g(b):a(e)}catch(ra){g(ra)}}:g});e.child.o=a;vd(a,e);return e.child};I.prototype.He=function(a){w(1==this.F);this.F=0;md(this,2,a)};I.prototype.Ie=function(a){w(1==this.F);this.F=0;md(this,3,a)};
	var md=function(a,b,c){0==a.F&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.F=1,rd(c,a.He,a.Ie,a)||(a.ka=c,a.F=b,a.o=null,Ad(a),3!=b||c instanceof nd||Bd(a,c)))},rd=function(a,b,c,d){if(a instanceof I)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),vd(a,qd(b||ba,c||null,d)),!0;if(ld(a))return a.then(b,c,d),!0;if(ga(a))try{var e=a.then;if(p(e))return Cd(a,
	e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Cd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(q){k(q)}},Ad=function(a){a.rc||(a.rc=!0,id(a.Xd,a))},yd=function(a){var b=null;a.fa&&(b=a.fa,a.fa=b.next,b.next=null);a.fa||(a.Ma=null);null!=b&&w(null!=b.Ea);return b};I.prototype.Xd=function(){for(var a;a=yd(this);)zd(this,a,this.F,this.ka);this.rc=!1};
	var zd=function(a,b,c,d){if(3==c&&b.Sa&&!b.ib)for(;a&&a.Jb;a=a.o)a.Jb=!1;if(b.child)b.child.o=null,Dd(b,c,d);else try{b.ib?b.Ea.call(b.context):Dd(b,c,d)}catch(e){Ed.call(null,e)}pd.put(b)},Dd=function(a,b,c){2==b?a.Ea.call(a.context,c):a.Sa&&a.Sa.call(a.context,c)},Bd=function(a,b){a.Jb=!0;id(function(){a.Jb&&Ed.call(null,b)})},Ed=Zc,nd=function(a){u.call(this,a)};t(nd,u);nd.prototype.name="cancel";/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var Fd=function(a,b){this.ac=[];this.nd=a;this.Zc=b||null;this.mb=this.Qa=!1;this.ka=void 0;this.Nc=this.Sc=this.mc=!1;this.hc=0;this.o=null;this.nc=0};Fd.prototype.cancel=function(a){if(this.Qa)this.ka instanceof Fd&&this.ka.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.nc--,0>=b.nc&&b.cancel())}this.nd?this.nd.call(this.Zc,this):this.Nc=!0;this.Qa||Gd(this,new Hd)}};Fd.prototype.Yc=function(a,b){this.mc=!1;Id(this,a,b)};
	var Id=function(a,b,c){a.Qa=!0;a.ka=c;a.mb=!b;Jd(a)},Ld=function(a){if(a.Qa){if(!a.Nc)throw new Kd;a.Nc=!1}};Fd.prototype.callback=function(a){Ld(this);Md(a);Id(this,!0,a)};
	var Gd=function(a,b){Ld(a);Md(b);Id(a,!1,b)},Md=function(a){w(!(a instanceof Fd),"An execution sequence may not be initiated with a blocking Deferred.")},Qd=function(a){var b=Nd("https://apis.google.com/js/client.js?onload="+Od);Pd(b,null,a,void 0)},Pd=function(a,b,c,d){w(!a.Sc,"Blocking Deferreds can not be re-used");a.ac.push([b,c,d]);a.Qa&&Jd(a)};Fd.prototype.then=function(a,b,c){var d,e,f=new I(function(a,b){d=a;e=b});Pd(this,d,function(a){a instanceof Hd?f.cancel():e(a)});return f.then(a,b,c)};
	kd(Fd);
	var Rd=function(a){return Fa(a.ac,function(a){return p(a[1])})},Jd=function(a){if(a.hc&&a.Qa&&Rd(a)){var b=a.hc,c=Sd[b];c&&(l.clearTimeout(c.nb),delete Sd[b]);a.hc=0}a.o&&(a.o.nc--,delete a.o);for(var b=a.ka,d=c=!1;a.ac.length&&!a.mc;){var e=a.ac.shift(),f=e[0],g=e[1],e=e[2];if(f=a.mb?g:f)try{var k=f.call(e||a.Zc,b);void 0!==k&&(a.mb=a.mb&&(k==b||k instanceof Error),a.ka=b=k);if(ld(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.mc=!0}catch(q){b=q,a.mb=!0,Rd(a)||(c=!0)}}a.ka=b;d&&
	(k=r(a.Yc,a,!0),d=r(a.Yc,a,!1),b instanceof Fd?(Pd(b,k,d),b.Sc=!0):b.then(k,d));c&&(b=new Td(b),Sd[b.nb]=b,a.hc=b.nb)},Kd=function(){u.call(this)};t(Kd,u);Kd.prototype.message="Deferred has already fired";Kd.prototype.name="AlreadyCalledError";var Hd=function(){u.call(this)};t(Hd,u);Hd.prototype.message="Deferred was canceled";Hd.prototype.name="CanceledError";var Td=function(a){this.nb=l.setTimeout(r(this.Ge,this),0);this.J=a};
	Td.prototype.Ge=function(){w(Sd[this.nb],"Cannot throw an error that is not scheduled.");delete Sd[this.nb];throw this.J;};var Sd={};var Nd=function(a){var b=new Eb;b.Vb=a;return Ud(b)},Ud=function(a){var b={},c=b.document||document,d;a instanceof Eb&&a.constructor===Eb&&a.Nd===Db?d=a.Vb:(ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={vd:e,wb:void 0};var f=new Fd(Vd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Wd(e,!0);Gd(f,new Xd(1,"Timeout reached for loading script "+d))},k),a.wb=g);e.onload=
	e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Wd(e,b.Oe||!1,g),f.callback(null))};e.onerror=function(){Wd(e,!0,g);Gd(f,new Xd(0,"Error while loading script "+d))};a=b.attributes||{};Xa(a,{type:"text/javascript",charset:"UTF-8",src:d});Xc(e,a);Yd(c).appendChild(e);return f},Yd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Vd=function(){if(this&&this.vd){var a=this.vd;a&&"SCRIPT"==a.tagName&&
	Wd(a,!0,this.wb)}},Wd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Xd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};t(Xd,u);var Zd=function(){Lb.call(this);this.Y=new Sb(this);this.Qd=this;this.Cc=null};t(Zd,Lb);Zd.prototype[Ob]=!0;h=Zd.prototype;h.addEventListener=function(a,b,c,d){Yb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){gc(this,a,b,c,d)};
	h.dispatchEvent=function(a){$d(this);var b,c=this.Cc;if(c){b=[];for(var d=1;c;c=c.Cc)b.push(c),w(1E3>++d,"infinite loop")}c=this.Qd;d=a.type||a;if(n(a))a=new Mb(a,c);else if(a instanceof Mb)a.target=a.target||c;else{var e=a;a=new Mb(d,c);Xa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Va&&0<=g;g--)f=a.currentTarget=b[g],e=ae(f,d,!0,a)&&e;a.Va||(f=a.currentTarget=c,e=ae(f,d,!0,a)&&e,a.Va||(e=ae(f,d,!1,a)&&e));if(b)for(g=0;!a.Va&&g<b.length;g++)f=a.currentTarget=b[g],e=ae(f,d,!1,a)&&e;return e};
	h.Oa=function(){Zd.Pc.Oa.call(this);if(this.Y){var a=this.Y,b=0,c;for(c in a.w){for(var d=a.w[c],e=0;e<d.length;e++)++b,Rb(d[e]);delete a.w[c];a.xb--}}this.Cc=null};h.listen=function(a,b,c,d){$d(this);return this.Y.add(String(a),b,!1,c,d)};
	var fc=function(a,b,c,d,e){a.Y.add(String(b),c,!0,d,e)},ae=function(a,b,c,d){b=a.Y.w[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.$a&&g.Bb==c){var k=g.listener,q=g.Kb||g.src;g.Ab&&Ub(a.Y,g);e=!1!==k.call(q,d)&&e}}return e&&0!=d.ud};Zd.prototype.tc=function(a,b,c,d){return this.Y.tc(String(a),b,c,d)};var $d=function(a){w(a.Y,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var be="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},ce=function(){};ce.prototype.next=function(){throw be;};ce.prototype.Pd=function(){return this};var de=function(a,b){this.Z={};this.s=[];this.ma=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=de.prototype;h.dd=function(){return this.i};h.T=function(){ee(this);for(var a=[],b=0;b<this.s.length;b++)a.push(this.Z[this.s[b]]);return a};h.ha=function(){ee(this);return this.s.concat()};h.jb=function(a){return fe(this.Z,a)};
	h.Eb=function(a,b){if(this===a)return!0;if(this.i!=a.dd())return!1;b=b||ge;ee(this);for(var c,d=0;c=this.s[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};var ge=function(a,b){return a===b};de.prototype.remove=function(a){return fe(this.Z,a)?(delete this.Z[a],this.i--,this.ma++,this.s.length>2*this.i&&ee(this),!0):!1};
	var ee=function(a){if(a.i!=a.s.length){for(var b=0,c=0;b<a.s.length;){var d=a.s[b];fe(a.Z,d)&&(a.s[c++]=d);b++}a.s.length=c}if(a.i!=a.s.length){for(var e={},c=b=0;b<a.s.length;)d=a.s[b],fe(e,d)||(a.s[c++]=d,e[d]=1),b++;a.s.length=c}};h=de.prototype;h.get=function(a,b){return fe(this.Z,a)?this.Z[a]:b};h.set=function(a,b){fe(this.Z,a)||(this.i++,this.s.push(a),this.ma++);this.Z[a]=b};
	h.addAll=function(a){var b;a instanceof de?(b=a.ha(),a=a.T()):(b=Sa(a),a=Ra(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ha(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new de(this)};h.Pd=function(a){ee(this);var b=0,c=this.ma,d=this,e=new ce;e.next=function(){if(c!=d.ma)throw Error("The map has changed since the iterator was created");if(b>=d.s.length)throw be;var e=d.s[b++];return a?e:d.Z[e]};return e};
	var fe=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var he=function(a){if(a.T&&"function"==typeof a.T)return a.T();if(n(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ra(a)},ie=function(a){if(a.ha&&"function"==typeof a.ha)return a.ha();if(!a.T||"function"!=typeof a.T){if(ea(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Sa(a)}},je=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||n(a))x(a,b,void 0);else for(var c=ie(a),d=he(a),e=
	d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var ke=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ke.prototype.ad=null;var le=0;ke.prototype.reset=function(a,b,c,d,e){"number"==typeof e||le++;d||ka();this.qb=a;this.re=b;delete this.ad};ke.prototype.yd=function(a){this.qb=a};var me=function(a){this.se=a;this.fd=this.oc=this.qb=this.o=null},ne=function(a,b){this.name=a;this.value=b};ne.prototype.toString=function(){return this.name};var oe=new ne("SEVERE",1E3),pe=new ne("CONFIG",700),qe=new ne("FINE",500);me.prototype.getParent=function(){return this.o};me.prototype.yd=function(a){this.qb=a};var re=function(a){if(a.qb)return a.qb;if(a.o)return re(a.o);ya("Root logger has no level set.");return null};
	me.prototype.log=function(a,b,c){if(a.value>=re(this).value)for(p(b)&&(b=b()),a=new ke(a,String(b),this.se),c&&(a.ad=c),c="log:"+a.re,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.fd)for(var e=0,f;f=b.fd[e];e++)f(d);c=c.getParent()}};
	var se={},te=null,ue=function(a){te||(te=new me(""),se[""]=te,te.yd(pe));var b;if(!(b=se[a])){b=new me(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ue(a.substr(0,c));c.oc||(c.oc={});c.oc[d]=b;b.o=c;se[a]=b}return b};var L=function(a,b){a&&a.log(qe,b,void 0)};var ve=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},we=function(a){var b=null;return(new I(function(c,d){b=ve(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).l(function(a){l.clearTimeout(b);throw a;})};var xe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ye=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var M=function(a){Zd.call(this);this.headers=new de;this.lc=a||null;this.oa=!1;this.kc=this.a=null;this.pb=this.ld=this.Qb="";this.Ba=this.wc=this.Ob=this.qc=!1;this.fb=0;this.gc=null;this.td="";this.ic=this.xe=this.Gd=!1};t(M,Zd);var ze=M.prototype,Ae=ue("goog.net.XhrIo");ze.P=Ae;var Be=/^https?$/i,Ce=["POST","PUT"];
	M.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Qb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Qb=a;this.pb="";this.ld=b;this.qc=!1;this.oa=!0;this.a=this.lc?this.lc.Cb():vc.Cb();this.kc=this.lc?uc(this.lc):uc(vc);this.a.onreadystatechange=r(this.qd,this);this.xe&&"onprogress"in this.a&&(this.a.onprogress=r(function(a){this.pd(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=r(this.pd,this)));try{L(this.P,De(this,"Opening Xhr")),
	this.wc=!0,this.a.open(b,String(a),!0),this.wc=!1}catch(f){L(this.P,De(this,"Error opening Xhr: "+f.message));this.J(5,f);return}a=c||"";var e=this.headers.clone();d&&je(d,function(a,b){e.set(b,a)});d=Ha(e.ha());c=l.FormData&&a instanceof l.FormData;!Ia(Ce,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.td&&(this.a.responseType=this.td);"withCredentials"in this.a&&this.a.withCredentials!==this.Gd&&(this.a.withCredentials=
	this.Gd);try{Ee(this),0<this.fb&&(this.ic=Fe(this.a),L(this.P,De(this,"Will abort after "+this.fb+"ms if incomplete, xhr2 "+this.ic)),this.ic?(this.a.timeout=this.fb,this.a.ontimeout=r(this.wb,this)):this.gc=ve(this.wb,this.fb,this)),L(this.P,De(this,"Sending request")),this.Ob=!0,this.a.send(a),this.Ob=!1}catch(f){L(this.P,De(this,"Send error: "+f.message)),this.J(5,f)}};var Fe=function(a){return z&&A(9)&&fa(a.timeout)&&void 0!==a.ontimeout},Ga=function(a){return"content-type"==a.toLowerCase()};
	M.prototype.wb=function(){"undefined"!=typeof aa&&this.a&&(this.pb="Timed out after "+this.fb+"ms, aborting",L(this.P,De(this,this.pb)),this.dispatchEvent("timeout"),this.abort(8))};M.prototype.J=function(a,b){this.oa=!1;this.a&&(this.Ba=!0,this.a.abort(),this.Ba=!1);this.pb=b;Ge(this);He(this)};var Ge=function(a){a.qc||(a.qc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
	M.prototype.abort=function(){this.a&&this.oa&&(L(this.P,De(this,"Aborting")),this.oa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),He(this))};M.prototype.Oa=function(){this.a&&(this.oa&&(this.oa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1),He(this,!0));M.Pc.Oa.call(this)};M.prototype.qd=function(){this.isDisposed()||(this.wc||this.Ob||this.Ba?Ie(this):this.ve())};M.prototype.ve=function(){Ie(this)};
	var Ie=function(a){if(a.oa&&"undefined"!=typeof aa)if(a.kc[1]&&4==Je(a)&&2==Ke(a))L(a.P,De(a,"Local request error detected and ignored"));else if(a.Ob&&4==Je(a))ve(a.qd,0,a);else if(a.dispatchEvent("readystatechange"),4==Je(a)){L(a.P,De(a,"Request complete"));a.oa=!1;try{var b=Ke(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Qb).match(xe)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
	f=g.substr(0,g.length-1);e=!Be.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<Je(a)?a.a.statusText:""}catch(q){L(a.P,"Can not get status: "+q.message),k=""}a.pb=k+" ["+Ke(a)+"]";Ge(a)}}finally{He(a)}}};M.prototype.pd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Le(a,"progress"));this.dispatchEvent(Le(a,b?"downloadprogress":"uploadprogress"))};
	var Le=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},He=function(a,b){if(a.a){Ee(a);var c=a.a,d=a.kc[0]?ba:null;a.a=null;a.kc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.P)&&a.log(oe,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Ee=function(a){a.a&&a.ic&&(a.a.ontimeout=null);fa(a.gc)&&(l.clearTimeout(a.gc),a.gc=null)},Je=function(a){return a.a?a.a.readyState:0},Ke=function(a){try{return 2<Je(a)?
	a.a.status:-1}catch(b){return-1}},Me=function(a){try{return a.a?a.a.responseText:""}catch(b){return L(a.P,"Can not get responseText: "+b.message),""}},De=function(a,b){return b+" ["+a.ld+" "+a.Qb+" "+Ke(a)+"]"};var Ne=function(a,b){this.ga=this.Ia=this.la="";this.Ua=null;this.Aa=this.qa="";this.M=this.oe=!1;var c;a instanceof Ne?(this.M=void 0!==b?b:a.M,Oe(this,a.la),c=a.Ia,N(this),this.Ia=c,Pe(this,a.ga),Qe(this,a.Ua),Re(this,a.qa),Se(this,a.aa.clone()),a=a.Aa,N(this),this.Aa=a):a&&(c=String(a).match(xe))?(this.M=!!b,Oe(this,c[1]||"",!0),a=c[2]||"",N(this),this.Ia=Te(a),Pe(this,c[3]||"",!0),Qe(this,c[4]),Re(this,c[5]||"",!0),Se(this,c[6]||"",!0),a=c[7]||"",N(this),this.Aa=Te(a)):(this.M=!!b,this.aa=new O(null,
	0,this.M))};Ne.prototype.toString=function(){var a=[],b=this.la;b&&a.push(Ue(b,Ve,!0),":");var c=this.ga;if(c||"file"==b)a.push("//"),(b=this.Ia)&&a.push(Ue(b,Ve,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Ua,null!=c&&a.push(":",String(c));if(c=this.qa)this.ga&&"/"!=c.charAt(0)&&a.push("/"),a.push(Ue(c,"/"==c.charAt(0)?We:Xe,!0));(c=this.aa.toString())&&a.push("?",c);(c=this.Aa)&&a.push("#",Ue(c,Ye));return a.join("")};
	Ne.prototype.resolve=function(a){var b=this.clone(),c=!!a.la;c?Oe(b,a.la):c=!!a.Ia;if(c){var d=a.Ia;N(b);b.Ia=d}else c=!!a.ga;c?Pe(b,a.ga):c=null!=a.Ua;d=a.qa;if(c)Qe(b,a.Ua);else if(c=!!a.qa){if("/"!=d.charAt(0))if(this.ga&&!this.qa)d="/"+d;else{var e=b.qa.lastIndexOf("/");-1!=e&&(d=b.qa.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
	1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Re(b,d):c=""!==a.aa.toString();c?Se(b,Te(a.aa.toString())):c=!!a.Aa;c&&(a=a.Aa,N(b),b.Aa=a);return b};Ne.prototype.clone=function(){return new Ne(this)};
	var Oe=function(a,b,c){N(a);a.la=c?Te(b,!0):b;a.la&&(a.la=a.la.replace(/:$/,""))},Pe=function(a,b,c){N(a);a.ga=c?Te(b,!0):b},Qe=function(a,b){N(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ua=b}else a.Ua=null},Re=function(a,b,c){N(a);a.qa=c?Te(b,!0):b},Se=function(a,b,c){N(a);b instanceof O?(a.aa=b,a.aa.Mc(a.M)):(c||(b=Ue(b,Ze)),a.aa=new O(b,0,a.M))},P=function(a,b,c){N(a);a.aa.set(b,c)},N=function(a){if(a.oe)throw Error("Tried to modify a read-only Uri");};
	Ne.prototype.Mc=function(a){this.M=a;this.aa&&this.aa.Mc(a);return this};
	var $e=function(a){return a instanceof Ne?a.clone():new Ne(a,void 0)},af=function(a,b){var c=new Ne(null,void 0);Oe(c,"https");a&&Pe(c,a);b&&Re(c,b);return c},Te=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Ue=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,bf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},bf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ve=/[#\/\?@]/g,Xe=/[\#\?:]/g,We=/[\#\?]/g,Ze=/[\#\?@]/g,
	Ye=/#/g,O=function(a,b,c){this.i=this.j=null;this.I=a||null;this.M=!!c},cf=function(a){a.j||(a.j=new de,a.i=0,a.I&&ye(a.I,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},ef=function(a){var b=ie(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new O(null,0,void 0);a=he(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];da(f)?df(c,e,f):c.add(e,f)}return c};h=O.prototype;h.dd=function(){cf(this);return this.i};
	h.add=function(a,b){cf(this);this.I=null;a=this.K(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=za(this.i)+1;return this};h.remove=function(a){cf(this);a=this.K(a);return this.j.jb(a)?(this.I=null,this.i=za(this.i)-this.j.get(a).length,this.j.remove(a)):!1};h.jb=function(a){cf(this);a=this.K(a);return this.j.jb(a)};h.ha=function(){cf(this);for(var a=this.j.T(),b=this.j.ha(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
	h.T=function(a){cf(this);var b=[];if(n(a))this.jb(a)&&(b=Ma(b,this.j.get(this.K(a))));else{a=this.j.T();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};h.set=function(a,b){cf(this);this.I=null;a=this.K(a);this.jb(a)&&(this.i=za(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=za(this.i)+1;return this};h.get=function(a,b){a=a?this.T(a):[];return 0<a.length?String(a[0]):b};var df=function(a,b,c){a.remove(b);0<c.length&&(a.I=null,a.j.set(a.K(b),Oa(c)),a.i=za(a.i)+c.length)};
	O.prototype.toString=function(){if(this.I)return this.I;if(!this.j)return"";for(var a=[],b=this.j.ha(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.T(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.I=a.join("&")};O.prototype.clone=function(){var a=new O;a.I=this.I;this.j&&(a.j=this.j.clone(),a.i=this.i);return a};O.prototype.K=function(a){a=String(a);this.M&&(a=a.toLowerCase());return a};
	O.prototype.Mc=function(a){a&&!this.M&&(cf(this),this.I=null,this.j.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),df(this,d,a))},this));this.M=a};var gf=function(){var a=ff();return z&&!!pb&&11==pb||/Edge\/\d+/.test(a)},hf=function(){return l.window&&l.window.location.href||""},jf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):da(a[d])?Ua(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<jf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},lf=function(){var a;a=ff();a="Chrome"!=kf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],
	10):null;return a&&30>a?!1:!z||!pb||9<pb},mf=function(a){(a||l.window).close()},nf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};d&&(b.target=d);"Firefox"==kf(ff())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof B?c:Cb("undefined"!=typeof c.href?
	c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),b=b instanceof B?b:Cb(b),g.href=zb(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),
	d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=zb(b),g&&(fb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=new wb,a.ec="b/12014412, meta tag with sanitized URL",ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(na,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(oa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(pa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(qa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,
	"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(xb(a),"must provide justification"),w(!/^[\s\xa0]*$/.test(xb(a)),"must provide non-empty justification"),g.document.write(Hb((new Gb).ne(d))),g.document.close())):g=a.open(zb(b),c,g);if(g)try{g.focus()}catch(k){}return g},of=function(a){return new I(function(b){var c=function(){we(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},pf=function(){var a=null;return(new I(function(b){"complete"==l.document.readyState?
	b():(a=function(){b()},ec(window,"load",a))})).l(function(b){gc(window,"load",a);throw b;})},qf=function(a){switch(a||l.navigator&&l.navigator.product||""){case "ReactNative":return"ReactNative";default:return"undefined"!==typeof l.process?"Node":"Browser"}},rf=function(){var a=qf();return"ReactNative"===a||"Node"===a},kf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,
	"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},sf=function(a){var b=qf(void 0);return("Browser"===b?kf(ff()):b)+
	"/JsCore/"+a},ff=function(){return l.navigator&&l.navigator.userAgent||""},tf=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},vf=function(){var a;if(!(a=!l.location||!l.location.protocol||"http:"!=l.location.protocol&&"https:"!=l.location.protocol||rf())){var b;a:{try{var c=l.localStorage,d=uf();if(c){c.setItem(d,"1");c.removeItem(d);b=gf()?!!l.indexedDB:!0;break a}}catch(e){}b=!1}a=!b}return!a},wf=function(a){a=a||
	ff();var b=(a||ff()).toLowerCase();return b.match(/android/)||b.match(/webos/)||b.match(/iphone|ipad|ipod/)||b.match(/blackberry/)||b.match(/windows phone/)||b.match(/iemobile/)||"Firefox"==kf(a)?!1:!0},xf=function(a){return"undefined"===typeof a?null:pc(a)},yf=function(a){if(null!==a){var b;try{b=mc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},uf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},zf=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=
	a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null};var Af;try{var Bf={};Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:2});Af=2==Bf.abcd}catch(a){Af=!1}
	var Q=function(a,b,c){Af?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Cf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&Q(a,c,b[c])},Df=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Ef=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0};var Ff={Hd:{tb:985,sb:735,providerId:"facebook.com"},Id:{tb:500,sb:620,providerId:"github.com"},Jd:{tb:515,sb:680,providerId:"google.com"},Od:{tb:485,sb:705,providerId:"twitter.com"}},Gf=function(a){for(var b in Ff)if(Ff[b].providerId==a)return Ff[b];return null};var R=function(a,b){this.code="auth/"+a;this.message=b||Hf[a]||""};t(R,Error);R.prototype.G=function(){return{name:this.code,code:this.code,message:this.message}};
	var Hf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
	"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
	"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
	"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
	"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
	"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
	"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported."};var If=function(a,b,c,d,e){this.ua=a;this.za=b||null;this.hb=c||null;this.bc=d||null;this.J=e||null;if(this.hb||this.J){if(this.hb&&this.J)throw new R("invalid-auth-event");if(this.hb&&!this.bc)throw new R("invalid-auth-event");}else throw new R("invalid-auth-event");};If.prototype.getError=function(){return this.J};If.prototype.G=function(){return{type:this.ua,eventId:this.za,urlResponse:this.hb,sessionId:this.bc,error:this.J&&this.J.G()}};var Jf=function(a){var b="unauthorized-domain",c=void 0,d=$e(a);a=d.ga;d=d.la;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);R.call(this,b,c)};t(Jf,R);var Kf=function(a){this.qe=a.sub;ka();this.Db=a.email||null};var Lf=function(a,b,c,d){var e={};ga(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)Q(this,"accessToken",e.oauthToken),Q(this,"secret",e.oauthTokenSecret);else{if(b)throw new R("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new R("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&Q(this,
	"idToken",e.idToken),e.accessToken&&Q(this,"accessToken",e.accessToken);Q(this,"provider",a)};Lf.prototype.Gb=function(a){var b=Mf(this);return S(a,Nf,b)};Lf.prototype.md=function(a,b){var c=Mf(this);c.idToken=b;return S(a,Of,c)};var Mf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:ef(b).toString(),requestUri:vf()?hf():"http://localhost"}};
	Lf.prototype.G=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
	var Pf=function(a,b){var c=!!b;b=function(){Cf(this,{providerId:a,isOAuthProvider:!0});this.Lc=[];"google.com"==a&&this.addScope("profile")};c||(b.prototype.addScope=function(a){Ia(this.Lc,a)||this.Lc.push(a)});b.prototype.Hb=function(){return Oa(this.Lc)};b.credential=function(b,e){return new Lf(a,c,b,e)};Cf(b,{PROVIDER_ID:a});return b},Qf=Pf("facebook.com");Qf.prototype.addScope=Qf.prototype.addScope||void 0;var Rf=Pf("github.com");Rf.prototype.addScope=Rf.prototype.addScope||void 0;var Sf=Pf("google.com");
	Sf.prototype.addScope=Sf.prototype.addScope||void 0;Sf.credential=function(a,b){if(!a&&!b)throw new R("argument-error","credential failed: must provide the ID token and/or the access token.");return new Lf("google.com",!1,ga(a)?a:{idToken:a||null,accessToken:b||null})};var Tf=Pf("twitter.com",!0),Uf=function(a,b){this.Db=a;this.Dc=b;Q(this,"provider","password")};Uf.prototype.Gb=function(a){return S(a,Vf,{email:this.Db,password:this.Dc})};
	Uf.prototype.md=function(a,b){return S(a,Wf,{idToken:b,email:this.Db,password:this.Dc})};Uf.prototype.G=function(){return{email:this.Db,password:this.Dc}};var Xf=function(){Cf(this,{providerId:"password",isOAuthProvider:!1})};Cf(Xf,{PROVIDER_ID:"password"});
	var Yf={Me:Xf,Hd:Qf,Jd:Sf,Id:Rf,Od:Tf},Zf=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Yf)if(Yf[e].PROVIDER_ID==b)try{return Yf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var $f=function(a,b,c){R.call(this,"account-exists-with-different-credential",c);Q(this,"email",a);Q(this,"credential",b)};t($f,R);$f.prototype.G=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.G();b&&(Xa(a,b),a.providerId=b.provider,delete a.provider);return a};var ag=function(a){this.Le=a};t(ag,tc);ag.prototype.Cb=function(){return new this.Le};ag.prototype.xc=function(){return{}};
	var T=function(a,b,c){var d;d="Node"==qf();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new R("internal-error","The XMLHttpRequest compatibility library was not found.");this.v=a;a=b||{};this.Ae=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Be=a.secureTokenTimeout||1E4;this.wd=Va(a.secureTokenHeaders||bg);this.$d=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.ae=a.firebaseTimeout||
	1E4;this.cd=Va(a.firebaseHeaders||cg);c&&(this.cd["X-Client-Version"]=c,this.wd["X-Client-Version"]=c);this.Sd=new yc;this.Ke=new ag(d)},dg,bg={"Content-Type":"application/x-www-form-urlencoded"},cg={"Content-Type":"application/json"},fg=function(a,b,c,d,e,f,g){lf()?a=r(a.De,a):(dg||(dg=new I(function(a,b){eg(a,b)})),a=r(a.Ce,a));a(b,c,d,e,f,g)};
	T.prototype.De=function(a,b,c,d,e,f){var g="Node"==qf(),k=rf()?g?new M(this.Ke):new M:new M(this.Sd),q;f&&(k.fb=Math.max(0,f),q=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){q&&clearTimeout(q);var a=null;try{var c;c=this.a?mc(this.a.responseText):void 0;a=c||null}catch(d){try{a=JSON.parse(Me(this))||null}catch(e){a=null}}b&&b(a)});fc(k,"ready",function(){q&&clearTimeout(q);this.ya||(this.ya=!0,this.Oa())});fc(k,"timeout",function(){q&&clearTimeout(q);this.ya||
	(this.ya=!0,this.Oa());b&&b(null)});k.send(a,c,d,e)};var Od="__fcb"+Math.floor(1E6*Math.random()).toString(),eg=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Od]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Qd(function(){b(Error("CORS_UNSUPPORTED"))}))};
	T.prototype.Ce=function(a,b,c,d,e){var f=this;dg.then(function(){window.gapi.client.setApiKey(f.v);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).l(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
	var hg=function(a,b){return new I(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?fg(a,a.Ae+"?key="+encodeURIComponent(a.v),function(a){a?a.error?d(gg(a)):a.access_token&&a.refresh_token?c(a):d(new R("internal-error")):d(new R("network-request-failed"))},"POST",ef(b).toString(),a.wd,a.Be):d(new R("internal-error"))})},ig=function(a){var b={},c;for(c in a)null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return pc(b)},jg=function(a,b,c,d,e){var f=a.$d+
	b+"?key="+encodeURIComponent(a.v);e&&(f+="&cb="+ka().toString());return new I(function(b,e){fg(a,f,function(a){a?a.error?e(gg(a)):b(a):e(new R("network-request-failed"))},c,ig(d),a.cd,a.ae)})},kg=function(a){if(!lc.test(a.email))throw new R("invalid-email");},lg=function(a){"email"in a&&kg(a)},ng=function(a,b){var c=vf()?hf():"http://localhost";return S(a,mg,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},pg=function(a){return S(a,og,{}).then(function(a){return a.authorizedDomains||
	[]})},qg=function(a){if(!a.idToken)throw new R("internal-error");};T.prototype.signInAnonymously=function(){return S(this,rg,{})};T.prototype.updateEmail=function(a,b){return S(this,sg,{idToken:a,email:b})};T.prototype.updatePassword=function(a,b){return S(this,Wf,{idToken:a,password:b})};var tg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
	T.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Qa(tg,function(a,f){var g=b[f];null===g?d.push(a):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return S(this,sg,c)};T.prototype.sendPasswordResetEmail=function(a){return S(this,ug,{requestType:"PASSWORD_RESET",email:a})};T.prototype.sendEmailVerification=function(a){return S(this,vg,{requestType:"VERIFY_EMAIL",idToken:a})};
	var xg=function(a,b,c){return S(a,wg,{idToken:b,deleteProvider:c})},yg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new R("internal-error");},zg=function(a){if(a.needConfirmation)throw(a&&a.email?new $f(a.email,Zf(a),a.message):null)||new R("account-exists-with-different-credential");if(!a.idToken)throw new R("internal-error");},Ag=function(a){if(!a.oobCode)throw new R("invalid-action-code");};T.prototype.confirmPasswordReset=function(a,b){return S(this,Bg,{oobCode:a,newPassword:b})};
	T.prototype.checkActionCode=function(a){return S(this,Cg,{oobCode:a})};T.prototype.applyActionCode=function(a){return S(this,Dg,{oobCode:a})};
	var Dg={endpoint:"setAccountInfo",D:Ag,cb:"email"},Cg={endpoint:"resetPassword",D:Ag,sa:function(a){if(!lc.test(a.email))throw new R("internal-error");}},Eg={endpoint:"signupNewUser",D:function(a){kg(a);if(!a.password)throw new R("weak-password");},sa:qg,ta:!0},mg={endpoint:"createAuthUri"},Fg={endpoint:"deleteAccount",ab:["idToken"]},wg={endpoint:"setAccountInfo",ab:["idToken","deleteProvider"],D:function(a){if(!da(a.deleteProvider))throw new R("internal-error");}},Gg={endpoint:"getAccountInfo"},
	vg={endpoint:"getOobConfirmationCode",ab:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new R("internal-error");},cb:"email"},ug={endpoint:"getOobConfirmationCode",ab:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new R("internal-error");kg(a)},cb:"email"},og={Rd:!0,endpoint:"getProjectConfig",je:"GET"},Bg={endpoint:"resetPassword",D:Ag,cb:"email"},sg={endpoint:"setAccountInfo",ab:["idToken"],D:lg,ta:!0},Wf={endpoint:"setAccountInfo",ab:["idToken"],
	D:function(a){lg(a);if(!a.password)throw new R("weak-password");},sa:qg,ta:!0},rg={endpoint:"signupNewUser",sa:qg,ta:!0},Nf={endpoint:"verifyAssertion",D:yg,sa:zg,ta:!0},Of={endpoint:"verifyAssertion",D:function(a){yg(a);if(!a.idToken)throw new R("internal-error");},sa:zg,ta:!0},Hg={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new R("invalid-custom-token");},sa:qg,ta:!0},Vf={endpoint:"verifyPassword",D:function(a){kg(a);if(!a.password)throw new R("wrong-password");},sa:qg,ta:!0},S=
	function(a,b,c){if(!Ef(c,b.ab))return K(new R("internal-error"));var d=b.je||"POST",e;return J(c).then(b.D).then(function(){b.ta&&(c.returnSecureToken=!0);return jg(a,b.endpoint,d,c,b.Rd||!1)}).then(function(a){return e=a}).then(b.sa).then(function(){if(!b.cb)return e;if(!(b.cb in e))throw new R("internal-error");return e[b.cb]})},gg=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?
	new R(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
	FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed"};
	b=(b=c.match(/:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new R(d[e],b);!b&&a&&(b=xf(a));return new R("internal-error",b)};var Ig=function(a){this.R=a};Ig.prototype.value=function(){return this.R};Ig.prototype.zd=function(a){this.R.style=a;return this};var Jg=function(a){this.R=a||{}};Jg.prototype.value=function(){return this.R};Jg.prototype.zd=function(a){this.R.style=a;return this};var Lg=function(a){this.Je=a;this.vc=null;this.od=Kg(this)};Lg.prototype.Bc=function(){return this.od};
	var Mg=function(a){var b=new Jg;b.R.where=document.body;b.R.url=a.Je;b.R.messageHandlersFilter=tf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.R.attributes=b.R.attributes||{};(new Ig(b.R.attributes)).zd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.R.dontclear=!0;return b},Kg=function(a){return Ng().then(function(){return new I(function(b,c){tf("gapi.iframes.getContext")().open(Mg(a).value(),function(d){a.vc=d;a.vc.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error("Network Error"))},
	5E3),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})},Og=function(a,b){a.od.then(function(){a.vc.register("authEvent",b,tf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Pg="__iframefcb"+Math.floor(1E6*Math.random()).toString(),Ng=function(){return new I(function(a,b){var c=function(){zf();tf("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){zf();b(Error("Network Error"))},timeout:3E3})};tf("gapi.iframes.Iframe")?a():tf("gapi.load")?c():
	(l[Pg]=function(){tf("gapi.load")?c():b(Error("Network Error"))},J(Nd("https://apis.google.com/js/api.js?onload="+Pg)).l(function(){b(Error("Network Error"))}))})};var Rg=function(a,b,c,d){this.X=a;this.v=b;this.ea=c;d=this.xa=d||null;a=af(a,"/__/auth/iframe");P(a,"apiKey",b);P(a,"appName",c);d&&P(a,"v",d);this.ke=a.toString();this.hd=new Lg(this.ke);this.yb=[];Qg(this)};Rg.prototype.Bc=function(){return this.hd.Bc()};
	var Sg=function(a,b,c,d,e,f,g,k,q){a=af(a,"/__/auth/handler");P(a,"apiKey",b);P(a,"appName",c);P(a,"authType",d);P(a,"providerId",e);f&&f.length&&P(a,"scopes",f.join(","));g&&P(a,"redirectUrl",g);k&&P(a,"eventId",k);q&&P(a,"v",q);return a.toString()},Qg=function(a){Og(a.hd,function(b){var c={};if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new R(e.substring(5),c.message):null;b=new If(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=
	null;for(c=0;c<a.yb.length;c++)d=a.yb[c](b)||d;c={};c.status=d?"ACK":"ERROR";return J(c)}c.status="ERROR";return J(c)})},Tg=function(a,b){La(a.yb,function(a){return a==b})};var Ug=function(a){this.u=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.u)throw new R("internal-error","The React Native compatibility library was not found.");};h=Ug.prototype;h.get=function(a){return J(this.u.getItem(a)).then(function(a){return a&&yf(a)})};h.set=function(a,b){return J(this.u.setItem(a,xf(b)))};h.remove=function(a){return J(this.u.removeItem(a))};h.Ka=function(){};h.Za=function(){};var Vg=function(){this.u={}};h=Vg.prototype;h.get=function(a){return J(this.u[a])};h.set=function(a,b){this.u[a]=b;return J()};h.remove=function(a){delete this.u[a];return J()};h.Ka=function(){};h.Za=function(){};var Xg=function(){if(!Wg()){if("Node"==qf())throw new R("internal-error","The LocalStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.localStorage||firebase.INTERNAL.node.localStorage},Wg=function(){var a="Node"==qf(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Xg.prototype;
	h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return yf(c)})};h.set=function(a,b){var c=this;return J().then(function(){var d=xf(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a)})};h.Ka=function(a){l.window&&Yb(l.window,"storage",a)};h.Za=function(a){l.window&&gc(l.window,"storage",a)};var Yg=function(){this.u={}};h=Yg.prototype;h.get=function(){return J(null)};h.set=function(){return J()};h.remove=function(){return J()};h.Ka=function(){};h.Za=function(){};var $g=function(){if(!Zg()){if("Node"==qf())throw new R("internal-error","The SessionStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},Zg=function(){var a="Node"==qf(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=$g.prototype;
	h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return yf(c)})};h.set=function(a,b){var c=this;return J().then(function(){var d=xf(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a)})};h.Ka=function(){};h.Za=function(){};var ah=function(a,b,c,d,e,f){if(!window.indexedDB)throw new R("web-storage-unsupported");this.Ud=a;this.Ac=b;this.pc=c;this.Fd=d;this.ma=e;this.O={};this.ub=[];this.rb=0;this.le=f||l.indexedDB},bh,ch=function(a){return new I(function(b,c){var d=a.le.open(a.Ud,a.ma);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Ac,{keyPath:a.pc})}catch(d){c(d)}};d.onsuccess=function(a){b(a.target.result)}})},dh=function(a){a.jd||(a.jd=
	ch(a));return a.jd},eh=function(a,b){return b.objectStore(a.Ac)},fh=function(a,b,c){return b.transaction([a.Ac],c?"readwrite":"readonly")},gh=function(a){return new I(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=ah.prototype;
	h.set=function(a,b){var c=!1,d,e=this;return wd(dh(this).then(function(b){d=b;b=eh(e,fh(e,d,!0));return gh(b.get(a))}).then(function(f){var g=eh(e,fh(e,d,!0));if(f)return f.value=b,gh(g.put(f));e.rb++;c=!0;f={};f[e.pc]=a;f[e.Fd]=b;return gh(g.add(f))}).then(function(){e.O[a]=b}),function(){c&&e.rb--})};h.get=function(a){var b=this;return dh(this).then(function(c){return gh(eh(b,fh(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
	h.remove=function(a){var b=!1,c=this;return wd(dh(this).then(function(d){b=!0;c.rb++;return gh(eh(c,fh(c,d,!0))["delete"](a))}).then(function(){delete c.O[a]}),function(){b&&c.rb--})};
	h.Fe=function(){var a=this;return dh(this).then(function(b){var c=eh(a,fh(a,b,!1));return c.getAll?gh(c.getAll()):new I(function(a,b){var f=[],g=c.openCursor();g.onsuccess=function(b){(b=b.target.result)?(f.push(b.value),b["continue"]()):a(f)};g.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.rb){for(d=0;d<b.length;d++)c[b[d][a.pc]]=b[d][a.Fd];d=jf(a.O,c);a.O=c}return d})};h.Ka=function(a){0==this.ub.length&&this.Oc();this.ub.push(a)};
	h.Za=function(a){La(this.ub,function(b){return b==a});0==this.ub.length&&this.dc()};h.Oc=function(){var a=this;this.dc();var b=function(){a.Fc=we(800).then(r(a.Fe,a)).then(function(b){0<b.length&&x(a.ub,function(a){a(b)})}).then(b).l(function(a){"STOP_EVENT"!=a.message&&b()});return a.Fc};b()};h.dc=function(){this.Fc&&this.Fc.cancel("STOP_EVENT")};var kh=function(){this.$c={Browser:hh,Node:ih,ReactNative:jh}[qf()]},lh,hh={V:Xg,Qc:$g},ih={V:Xg,Qc:$g},jh={V:Ug,Qc:Yg};var mh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),U=function(a,b){return{name:a||"",ca:"a valid string",optional:!!b,da:n}},nh=function(a){return{name:a||"",ca:"a valid object",optional:!1,da:ga}},oh=function(a,b){return{name:a||"",ca:"a function",optional:!!b,da:p}},ph=function(){return{name:"",ca:"null",optional:!1,da:ca}},qh=function(){return{name:"credential",ca:"a valid credential",optional:!1,da:function(a){return!(!a||!a.Gb)}}},rh=function(){return{name:"authProvider",
	ca:"a valid Auth provider",optional:!1,da:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},sh=function(a,b,c,d){return{name:c||"",ca:a.ca+" or "+b.ca,optional:!!d,da:function(c){return a.da(c)||b.da(c)}}};var uh=function(a,b){for(var c in b){var d=b[c].name;a[d]=th(d,a[c],b[c].b)}},V=function(a,b,c,d){a[b]=th(b,c,d)},th=function(a,b,c){if(!c)return b;var d=vh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var q=!1,ra=0;ra<c.length;ra++)if(c[ra].optional)q=!0;else{if(q)throw new R("internal-error","Argument validator encountered a required argument after an optional argument.");k++}q=c.length;if(e.length<k||q<e.length)e="Expected "+(k==
	q?1==k?"1 argument":k+" arguments":k+"-"+q+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(q=c[k].optional&&void 0===e[k],!c[k].da(e[k])&&!q){e=c[k];if(0>k||k>=mh.length)throw new R("internal-error","Argument validator received an unsupported number of arguments.");e=mh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.ca+".";break a}e=null}}if(e)throw new R("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
	b.prototype[e];return a},vh=function(a){a=a.split(".");return a[a.length-1]};var wh=function(a,b,c,d){this.te=a;this.xd=b;this.ze=c;this.eb=d;this.N={};lh||(lh=new kh);a=lh;try{var e;gf()?(bh||(bh=new ah("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=bh):e=new a.$c.V;this.Ta=e}catch(f){this.Ta=new Vg,this.eb=!0}try{this.fc=new a.$c.Qc}catch(f){this.fc=new Vg}this.Ad=r(this.Bd,this);this.O={}},xh,yh=function(){xh||(xh=new wh("firebase",":","Safari"==kf(ff())&&l.window&&l.window!=l.window.top?!0:!1,wf()));return xh};h=wh.prototype;
	h.K=function(a,b){return this.te+this.xd+a.name+(b?this.xd+b:"")};h.get=function(a,b){return(a.V?this.Ta:this.fc).get(this.K(a,b))};h.remove=function(a,b){b=this.K(a,b);a.V&&!this.eb&&(this.O[b]=null);return(a.V?this.Ta:this.fc).remove(b)};h.set=function(a,b,c){var d=this.K(a,c),e=this,f=a.V?this.Ta:this.fc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.V&&!this.eb&&(e.O[d]=b)})};
	h.addListener=function(a,b,c){a=this.K(a,b);this.eb||(this.O[a]=l.localStorage.getItem(a));Ta(this.N)&&this.Oc();this.N[a]||(this.N[a]=[]);this.N[a].push(c)};h.removeListener=function(a,b,c){a=this.K(a,b);this.N[a]&&(La(this.N[a],function(a){return a==c}),0==this.N[a].length&&delete this.N[a]);Ta(this.N)&&this.dc()};h.Oc=function(){this.Ta.Ka(this.Ad);this.eb||zh(this)};
	var zh=function(a){Ah(a);a.zc=setInterval(function(){for(var b in a.N){var c=l.localStorage.getItem(b);c!=a.O[b]&&(a.O[b]=c,c=new Nb({type:"storage",key:b,target:window,oldValue:a.O[b],newValue:c}),a.Bd(c))}},1E3)},Ah=function(a){a.zc&&(clearInterval(a.zc),a.zc=null)};wh.prototype.dc=function(){this.Ta.Za(this.Ad);this.eb||Ah(this)};
	wh.prototype.Bd=function(a){if(a&&a.ce){var b=a.kb.key;if(this.ze){var c=l.localStorage.getItem(b);a=a.kb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.O[b]=l.localStorage.getItem(b);this.Vc(b)}else x(a,r(this.Vc,this))};wh.prototype.Vc=function(a){this.N[a]&&x(this.N[a],function(a){a()})};var Bh=function(a){this.B=a;this.A=yh()},Ch={name:"pendingRedirect",V:!1},Dh=function(a){return a.A.set(Ch,"pending",a.B)},Eh=function(a){return a.A.remove(Ch,a.B)},Fh=function(a){return a.A.get(Ch,a.B).then(function(a){return"pending"==a})};var Ih=function(a,b,c){var d=this,e=(this.xa=firebase.SDK_VERSION||null)?sf(this.xa):null;this.f=new T(b,null,e);this.pa=null;this.X=a;this.v=b;this.ea=c;this.vb=[];this.Pb=!1;this.Rc=r(this.de,this);this.Wa=new Gh(this);this.rd=new Hh(this);this.Ec=new Bh(this.v+":"+this.ea);this.gb={};this.gb.unknown=this.Wa;this.gb.signInViaRedirect=this.Wa;this.gb.linkViaRedirect=this.Wa;this.gb.signInViaPopup=this.rd;this.gb.linkViaPopup=this.rd;this.Zb=this.bb=null;this.Tb=new I(function(a,b){d.bb=a;d.Zb=b})};
	Ih.prototype.reset=function(){var a=this;this.pa=null;this.Tb.cancel();this.Pb=!1;this.Zb=this.bb=null;this.Mb&&Tg(this.Mb,this.Rc);this.Tb=new I(function(b,c){a.bb=b;a.Zb=c})};
	var Jh=function(a){var b=hf();return pg(a).then(function(a){a:{for(var d=$e(b).ga,e=0;e<a.length;e++){var f;var g=a[e];f=d;var k=Qc(g);k?f=(f=Qc(f))?k.Eb(f):!1:(k=g.split(".").join("\\."),f=(new RegExp("^(.+\\."+k+"|"+k+")$","i")).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new Jf(hf());})},Kh=function(a){a.Pb||(a.Pb=!0,pf().then(function(){a.Mb=new Rg(a.X,a.v,a.ea,a.xa);a.Mb.Bc().l(function(){a.Zb(new R("network-request-failed"));a.reset()});a.Mb.yb.push(a.Rc)}));return a.Tb};
	Ih.prototype.subscribe=function(a){Ia(this.vb,a)||this.vb.push(a);if(!this.Pb){var b=this,c=function(){var a=ff(),c;(c=wf(a))||(a=a||ff(),c="Safari"==kf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0);c?Lh(b.Wa):Kh(b)};Fh(this.Ec).then(function(a){a?Eh(b.Ec).then(function(){Kh(b)}):c()}).l(function(){c()})}};Ih.prototype.unsubscribe=function(a){La(this.vb,function(b){return b==a})};
	Ih.prototype.de=function(a){if(!a)throw new R("invalid-auth-event");this.bb&&(this.bb(),this.bb=null);for(var b=!1,c=0;c<this.vb.length;c++){var d=this.vb[c];if(d.Wc(a.ua,a.za)){(b=this.gb[a.ua])&&b.sd(a,d);b=!0;break}}Lh(this.Wa);return b};Ih.prototype.getRedirectResult=function(){return this.Wa.getRedirectResult()};
	var Nh=function(a,b,c,d,e,f){if(!b)return K(new R("popup-blocked"));if(f)return Kh(a),J();a.pa||(a.pa=Jh(a.f));return a.pa.then(function(){return Kh(a)}).then(function(){Mh(d);var f=Sg(a.X,a.v,a.ea,c,d.providerId,d.Hb(),null,e,a.xa);Ib((b||l.window).location,f)}).l(function(b){"auth/network-request-failed"==b.code&&(a.pa=null);throw b;})},Oh=function(a,b,c,d){a.pa||(a.pa=Jh(a.f));return a.pa.then(function(){Mh(c);var e=Sg(a.X,a.v,a.ea,b,c.providerId,c.Hb(),hf(),d,a.xa);Dh(a.Ec).then(function(){Ib(l.window.location,
	e)})})},Ph=function(a,b,c,d,e){var f=new R("popup-closed-by-user");return a.Tb.l(function(){}).then(function(){return of(d)}).then(function(){return we(2E3).then(function(){b.Ha(c,null,f,e)})})},Mh=function(a){if(!a.isOAuthProvider)throw new R("invalid-oauth-provider");},Qh={},Rh=function(a,b,c){var d=b+":"+c;Qh[d]||(Qh[d]=new Ih(a,b,c));return Qh[d]},Gh=function(a){this.A=a;this.Jc=this.Yb=this.Xa=this.W=null;this.Ic=!1};
	Gh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));this.Ic=!0;var c=a.ua,d=a.za;"unknown"==c?(this.W||Sh(this,!1,null,null),a=J()):a=a.J?this.Gc(a,b):b.lb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"));return a};var Lh=function(a){a.Ic||(a.Ic=!0,Sh(a,!1,null,null))};Gh.prototype.Gc=function(a){this.W||Sh(this,!0,null,a.getError());return J()};
	Gh.prototype.Hc=function(a,b){var c=this,d=a.ua;b=b.lb(d,a.za);var e=a.hb;a=a.bc;var f="signInViaRedirect"==d||"linkViaRedirect"==d;return this.W?J():b(e,a).then(function(a){c.W||Sh(c,f,a,null)}).l(function(a){c.W||Sh(c,f,null,a)})};var Sh=function(a,b,c,d){b?d?(a.W=function(){return K(d)},a.Yb&&a.Yb(d)):(a.W=function(){return J(c)},a.Xa&&a.Xa(c)):(a.W=function(){return J({user:null})},a.Xa&&a.Xa({user:null}));a.Xa=null;a.Yb=null};
	Gh.prototype.getRedirectResult=function(){var a=this;this.Uc||(this.Uc=new I(function(b,c){a.W?a.W().then(b,c):(a.Xa=b,a.Yb=c,Th(a))}));return this.Uc};var Th=function(a){var b=new R("timeout");a.Jc&&a.Jc.cancel();a.Jc=we(1E4).then(function(){a.W||Sh(a,!0,null,b)})},Hh=function(a){this.A=a};Hh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));var c=a.ua,d=a.za;return a.J?this.Gc(a,b):b.lb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"))};
	Hh.prototype.Gc=function(a,b){b.Ha(a.ua,null,a.getError(),a.za);return J()};Hh.prototype.Hc=function(a,b){var c=a.za,d=a.ua;return b.lb(d,c)(a.hb,a.bc).then(function(a){b.Ha(d,a,null,c)}).l(function(a){b.Ha(d,null,a,c)})};var Uh=function(a){this.f=a;this.wa=this.S=null;this.Pa=0};Uh.prototype.G=function(){return{apiKey:this.f.v,refreshToken:this.S,accessToken:this.wa,expirationTime:this.Pa}};
	var Wh=function(a,b){var c=b.idToken,d=b.refreshToken;b=Vh(b.expiresIn);a.wa=c;a.Pa=b;a.S=d},Vh=function(a){return ka()+1E3*parseInt(a,10)},Xh=function(a,b){return hg(a.f,b).then(function(b){a.wa=b.access_token;a.Pa=Vh(b.expires_in);a.S=b.refresh_token;return{accessToken:a.wa,expirationTime:a.Pa,refreshToken:a.S}}).l(function(b){"auth/user-token-expired"==b.code&&(a.S=null);throw b;})},Yh=function(a){return!(!a.wa||a.S)};
	Uh.prototype.getToken=function(a){a=!!a;return Yh(this)?K(new R("user-token-expired")):a||!this.wa||ka()>this.Pa-3E4?this.S?Xh(this,{grant_type:"refresh_token",refresh_token:this.S}):J(null):J({accessToken:this.wa,expirationTime:this.Pa,refreshToken:this.S})};var Zh=function(a,b,c,d,e){Cf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},$h=function(a,b){Mb.call(this,a);for(var c in b)this[c]=b[c]};t($h,Mb);
	var W=function(a,b,c){this.U=[];this.v=a.apiKey;this.ea=a.appName;this.X=a.authDomain||null;a=firebase.SDK_VERSION?sf(firebase.SDK_VERSION):null;this.f=new T(this.v,null,a);this.ba=new Uh(this.f);ai(this,b.idToken);Wh(this.ba,b);Q(this,"refreshToken",this.ba.S);bi(this,c||{});Zd.call(this);this.Ub=!1;this.X&&vf()&&(this.m=Rh(this.X,this.v,this.ea));this.cc=[]};t(W,Zd);
	var ai=function(a,b){a.kd=b;Q(a,"_lat",b)},ci=function(a,b){La(a.cc,function(a){return a==b})},di=function(a){for(var b=[],c=0;c<a.cc.length;c++)b.push(a.cc[c](a));return td(b).then(function(){return a})},ei=function(a){a.m&&!a.Ub&&(a.Ub=!0,a.m.subscribe(a))},bi=function(a,b){Cf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};Q(W.prototype,"providerId","firebase");
	var fi=function(){},gi=function(a){return J().then(function(){if(a.Vd)throw new R("app-deleted");})},hi=function(a){return Ea(a.providerData,function(a){return a.providerId})},ji=function(a,b){b&&(ii(a,b.providerId),a.providerData.push(b))},ii=function(a,b){La(a.providerData,function(a){return a.providerId==b})},ki=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&Q(a,b,c)};
	W.prototype.copy=function(a){var b=this;b!=a&&(Cf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){ji(b,a)}),this.ba=a.ba,Q(this,"refreshToken",this.ba.S))};W.prototype.reload=function(){var a=this;return gi(this).then(function(){return li(a).then(function(){return di(a)}).then(fi)})};
	var li=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return mi(a,b).then(function(){c||ki(a,"isAnonymous",!1);return b}).l(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new $h("userDeleted")),ni(a));throw b;})})};
	W.prototype.getToken=function(a){var b=this,c=Yh(this.ba);return gi(this).then(function(){return b.ba.getToken(a)}).then(function(a){if(!a)throw new R("internal-error");a.accessToken!=b.kd&&(ai(b,a.accessToken),b.Da());ki(b,"refreshToken",a.refreshToken);return a.accessToken}).l(function(a){if("auth/user-token-expired"==a.code&&!c)return di(b).then(function(){ki(b,"refreshToken",null);throw a;});throw a;})};
	var oi=function(a,b){b.idToken&&a.kd!=b.idToken&&(Wh(a.ba,b),a.Da(),ai(a,b.idToken),ki(a,"refreshToken",a.ba.S))};W.prototype.Da=function(){this.dispatchEvent(new $h("tokenChanged"))};var mi=function(a,b){return S(a.f,Gg,{idToken:b}).then(r(a.we,a))};
	W.prototype.we=function(a){a=a.users;if(!a||!a.length)throw new R("internal-error");a=a[0];bi(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=pi(a),c=0;c<b.length;c++)ji(this,b[c]);ki(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
	var pi=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new Zh(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Gb(this.f).then(function(a){var d;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=mc(tb(e));if(k.sub&&k.iss&&k.aud&&k.exp){d=new Kf(k);break a}}catch(q){}}d=null}if(!d||b.uid!=d.qe)throw new R("user-mismatch");oi(b,a);return b.reload()}))};
	var qi=function(a,b){return li(a).then(function(){if(Ia(hi(a),b))return di(a).then(function(){throw new R("provider-already-linked");})})};h=W.prototype;h.link=function(a){var b=this;return this.c(qi(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.md(b.f,c)}).then(r(this.bd,this)))};h.bd=function(a){oi(this,a);var b=this;return this.reload().then(function(){return b})};
	h.updateEmail=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){oi(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){oi(b,a);return b.reload()}))};
	h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return gi(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){oi(b,a);ki(b,"displayName",a.displayName||null);ki(b,"photoURL",a.photoUrl||null);return di(b)}).then(fi))};
	h.unlink=function(a){var b=this;return this.c(li(this).then(function(c){return Ia(hi(b),a)?xg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(hi(b),function(a){c[a]||ii(b,a)});return di(b)}):di(b).then(function(){throw new R("no-such-provider");})}))};h.delete=function(){var a=this;return this.c(this.getToken().then(function(b){return S(a.f,Fg,{idToken:b})}).then(function(){a.dispatchEvent(new $h("userDeleted"))})).then(function(){ni(a)})};
	h.Wc=function(a,b){return"linkViaPopup"==a&&(this.ia||null)==b&&this.$||"linkViaRedirect"==a&&(this.Xb||null)==b?!0:!1};h.Ha=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ia||null)&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa)};h.lb=function(a,b){return"linkViaPopup"==a&&b==(this.ia||null)||"linkViaRedirect"==a&&(this.Xb||null)==b?r(this.Yd,this):null};h.Fb=function(){return uf(this.uid+":::")};
	h.linkWithPopup=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gf(a.providerId),d=this.Fb(),e=null;!wf()&&this.X&&a.isOAuthProvider&&(e=Sg(this.X,this.v,this.ea,"linkViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=nf(e,c&&c.tb,c&&c.sb),c=qi(this,a.providerId).then(function(){return di(b)}).then(function(){ri(b);return b.getToken()}).then(function(){return Nh(b.m,f,"linkViaPopup",a,d,!!e)}).then(function(){return new I(function(a,
	c){b.Ha("linkViaPopup",null,new R("cancelled-popup-request"),b.ia||null);b.$=a;b.Fa=c;b.ia=d;b.C=Ph(b.m,b,"linkViaPopup",f,d)})}).then(function(a){f&&mf(f);return a}).l(function(a){f&&mf(f);throw a;});return this.c(c)};
	h.linkWithRedirect=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Fb(),e=qi(this,a.providerId).then(function(){ri(b);return b.getToken()}).then(function(){b.Xb=d;return di(b)}).then(function(a){b.Ga&&(a=b.Ga,a=a.A.set(si,b.G(),a.B));return a}).then(function(){return Oh(b.m,"linkViaRedirect",a,d)}).l(function(a){c=a;if(b.Ga)return ti(b.Ga);throw c;}).then(function(){if(c)throw c;});return this.c(e)};
	var ri=function(a){if(a.m&&a.Ub)return;if(a.m&&!a.Ub)throw new R("internal-error");throw new R("auth-domain-config-required");};W.prototype.Yd=function(a,b){var c=this;this.C&&(this.C.cancel(),this.C=null);var d=null,e=this.getToken().then(function(d){return S(c.f,Of,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Zf(a);return c.bd(a)}).then(function(a){return{user:a,credential:d}});return this.c(e)};
	W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var ni=function(a){for(var b=0;b<a.U.length;b++)a.U[b].cancel("app-deleted");a.U=[];a.Vd=!0;Q(a,"refreshToken",null);a.m&&a.m.unsubscribe(a)};W.prototype.c=function(a){var b=this;this.U.push(a);wd(a,function(){Ka(b.U,a)});return a};W.prototype.toJSON=function(){return this.G()};
	W.prototype.G=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.v,appName:this.ea,authDomain:this.X,stsTokenManager:this.ba.G(),redirectEventId:this.Xb||null};x(this.providerData,function(b){a.providerData.push(Df(b))});return a};
	var ui=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ka())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};Cf(b,a);ji(d,b)}});a.redirectEventId&&(d.Xb=a.redirectEventId);
	return d},vi=function(a,b,c){var d=new W(a,b);c&&(d.Ga=c);return d.reload().then(function(){return d})};var wi=function(a){this.B=a;this.A=yh()},si={name:"redirectUser",V:!1},ti=function(a){return a.A.remove(si,a.B)},xi=function(a,b){return a.A.get(si,a.B).then(function(a){a&&b&&(a.authDomain=b);return ui(a||{})})};var yi=function(a){this.B=a;this.A=yh()},zi={name:"authUser",V:!0},Ai=function(a){return a.A.remove(zi,a.B)},Bi=function(a,b){return a.A.get(zi,a.B).then(function(a){a&&b&&(a.authDomain=b);return ui(a||{})})};var Y=function(a){this.Na=!1;Q(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?sf(firebase.SDK_VERSION):null,this.f=new T(X(this).options&&X(this).options.apiKey,null,a);else throw new R("invalid-api-key");this.U=[];this.La=[];this.ue=firebase.INTERNAL.createSubscribe(r(this.me,this));Ci(this,null);this.va=new yi(X(this).options.apiKey+":"+X(this).name);this.Ya=new wi(X(this).options.apiKey+":"+X(this).name);this.zb=this.c(Di(this));this.ra=this.c(Ei(this));this.yc=
	!1;this.uc=r(this.Ee,this);this.Dd=r(this.Ra,this);this.Ed=r(this.ie,this);this.Cd=r(this.he,this);Fi(this);this.INTERNAL={};this.INTERNAL.delete=r(this.delete,this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).G()}};
	var Gi=function(a){return a.Wd||K(new R("auth-domain-config-required"))},Fi=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&vf()&&(a.Wd=a.zb.then(function(){if(!a.Na)return a.m=Rh(b,c,X(a).name),a.m.subscribe(a),Z(a)&&ei(Z(a)),a.Kc&&(ei(a.Kc),a.Kc=null),a.m}))};h=Y.prototype;h.Wc=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ia==b&&!!this.$;default:return!1}};
	h.Ha=function(a,b,c,d){"signInViaPopup"==a&&this.ia==d&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa)};h.lb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ia==b&&this.$?r(this.Zd,this):null};
	h.Zd=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.C&&(this.C.cancel(),this.C=null);var d=null,e=S(c.f,Nf,a).then(function(a){d=Zf(a);return a});a=c.zb.then(function(){return e}).then(function(a){return Hi(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.c(a)};h.Fb=function(){return uf()};
	h.signInWithPopup=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gf(a.providerId),d=this.Fb(),e=null;!wf()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=Sg(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=nf(e,c&&c.tb,c&&c.sb),c=Gi(this).then(function(b){return Nh(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new I(function(a,c){b.Ha("signInViaPopup",
	null,new R("cancelled-popup-request"),b.ia);b.$=a;b.Fa=c;b.ia=d;b.C=Ph(b.m,b,"signInViaPopup",f,d)})}).then(function(a){f&&mf(f);return a}).l(function(a){f&&mf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gi(this).then(function(){return Oh(b.m,"signInViaRedirect",a)});return this.c(c)};
	h.getRedirectResult=function(){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var a=this,b=Gi(this).then(function(){return a.m.getRedirectResult()});return this.c(b)};
	var Hi=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.zb.then(function(){return vi(c,b,a.Ya)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ra(b);Ci(a,b);ei(b);return a.Ra(b)}).then(function(){a.Da()})},Ci=function(a,b){Z(a)&&(ci(Z(a),a.Dd),gc(Z(a),"tokenChanged",a.Ed),gc(Z(a),"userDeleted",a.Cd));b&&(b.cc.push(a.Dd),Yb(b,"tokenChanged",a.Ed),Yb(b,"userDeleted",a.Cd));Q(a,"currentUser",b)};
	Y.prototype.signOut=function(){var a=this,b=this.ra.then(function(){if(!Z(a))return J();Ci(a,null);return Ai(a.va).then(function(){a.Da()})});return this.c(b)};
	var Ii=function(a){var b=xi(a.Ya,X(a).options.authDomain).then(function(b){if(a.Kc=b)b.Ga=a.Ya;return ti(a.Ya)});return a.c(b)},Di=function(a){var b=X(a).options.authDomain,c=Ii(a).then(function(){return Bi(a.va,b)}).then(function(b){return b?(b.Ga=a.Ya,b.reload().then(function(){return b}).l(function(c){return"auth/network-request-failed"==c.code?b:Ai(a.va)})):null}).then(function(b){Ci(a,b||null)});return a.c(c)},Ei=function(a){return a.zb.then(function(){return a.getRedirectResult()}).l(function(){}).then(function(){if(!a.Na)return a.uc()}).l(function(){}).then(function(){if(!a.Na){a.yc=
	!0;var b=a.va;b.A.addListener(zi,b.B,a.uc)}})};Y.prototype.Ee=function(){var a=this;return Bi(this.va,X(this).options.authDomain).then(function(b){if(!a.Na){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)Ci(a,b),b&&(ei(b),b.Ga=a.Ya),a.m&&a.m.subscribe(a),a.Da()}})};Y.prototype.Ra=function(a){var b=this.va;return b.A.set(zi,a.G(),b.B)};Y.prototype.ie=function(){this.Da();this.Ra(Z(this))};
	Y.prototype.he=function(){this.signOut()};var Ji=function(a,b){return a.c(b.then(function(b){return Hi(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.me=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.yc&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.ue(a,b,c)};
	h.getToken=function(a){var b=this,c=this.ra.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.ra.then(function(){return Ji(b,S(b.f,Hg,{token:a}))}).then(function(a){ki(a,"isAnonymous",!1);return b.Ra(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return Ji(c,S(c.f,Vf,{email:a,password:b}))})};
	h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return Ji(c,S(c.f,Eg,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.ra.then(function(){return Ji(b,a.Gb(b.f))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?J(a):this.ra.then(function(){return Ji(b,b.f.signInAnonymously())}).then(function(a){ki(a,"isAnonymous",!0);return b.Ra(a)}).then(function(){return Z(b)})};
	var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Da=function(){if(this.yc)for(var a=0;a<this.La.length;a++)if(this.La[a])this.La[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.La.push(a);this.c(this.ra.then(function(){b.Na||Ia(b.La,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){La(this.La,function(b){return b==a})};
	h.delete=function(){this.Na=!0;for(var a=0;a<this.U.length;a++)this.U[a].cancel("app-deleted");this.U=[];this.va&&(a=this.va,a.A.removeListener(zi,a.B,this.uc));this.m&&this.m.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.U.push(a);wd(a,function(){Ka(b.U,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(ng(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
	h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return{data:{email:a.email}}}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}))};uh(Y.prototype,{applyActionCode:{name:"applyActionCode",b:[U("code")]},checkActionCode:{name:"checkActionCode",b:[U("code")]},confirmPasswordReset:{name:"confirmPasswordReset",b:[U("code"),U("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",b:[U("email"),U("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",b:[U("email")]},getRedirectResult:{name:"getRedirectResult",b:[]},onAuthStateChanged:{name:"onAuthStateChanged",b:[sh(nh(),oh(),"nextOrObserver"),
	oh("opt_error",!0),oh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",b:[U("email")]},signInAnonymously:{name:"signInAnonymously",b:[]},signInWithCredential:{name:"signInWithCredential",b:[qh()]},signInWithCustomToken:{name:"signInWithCustomToken",b:[U("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",b:[U("email"),U("password")]},signInWithPopup:{name:"signInWithPopup",b:[rh()]},signInWithRedirect:{name:"signInWithRedirect",b:[rh()]},signOut:{name:"signOut",
	b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",b:[U("code")]}});
	uh(W.prototype,{"delete":{name:"delete",b:[]},getToken:{name:"getToken",b:[{name:"opt_forceRefresh",ca:"a boolean",optional:!0,da:function(a){return"boolean"==typeof a}}]},link:{name:"link",b:[qh()]},linkWithPopup:{name:"linkWithPopup",b:[rh()]},linkWithRedirect:{name:"linkWithRedirect",b:[rh()]},reauthenticate:{name:"reauthenticate",b:[qh()]},reload:{name:"reload",b:[]},sendEmailVerification:{name:"sendEmailVerification",b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},unlink:{name:"unlink",b:[U("provider")]},
	updateEmail:{name:"updateEmail",b:[U("email")]},updatePassword:{name:"updatePassword",b:[U("password")]},updateProfile:{name:"updateProfile",b:[nh("profile")]}});uh(I.prototype,{l:{name:"catch"},then:{name:"then"}});V(Xf,"credential",function(a,b){return new Uf(a,b)},[U("email"),U("password")]);uh(Qf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Qf,"credential",Qf.credential,[sh(U(),nh(),"token")]);uh(Rf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});
	V(Rf,"credential",Rf.credential,[sh(U(),nh(),"token")]);uh(Sf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Sf,"credential",Sf.credential,[sh(U(),sh(nh(),ph()),"idToken"),sh(U(),ph(),"accessToken",!0)]);V(Tf,"credential",Tf.credential,[sh(U(),nh(),"token"),U("secret",!0)]);
	(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:R};V(a,"EmailAuthProvider",Xf,[]);V(a,"FacebookAuthProvider",Qf,[]);V(a,"GithubAuthProvider",Rf,[]);V(a,"GoogleAuthProvider",Sf,[]);V(a,"TwitterAuthProvider",Tf,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:r(a.getToken,a),addAuthTokenListener:r(a.addAuthTokenListener,a),removeAuthTokenListener:r(a.removeAuthTokenListener,a)}});return a},
	a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
	(function() {var h,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Wb=function(){return a.bf?a.bf:a.bf=new a}}
	function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){return"function"==ca(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
	function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments)}
	function ka(a,b){function c(){}c.prototype=b.prototype;a.Ig=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eg=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function la(){this.Ya=-1};function ma(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.Jf=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset()}ka(ma,la);ma.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0};
	function na(a,b,c){c||(c=0);var d=a.Jf;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var g=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),l=1518500249):(f=c^g^k,l=1859775393):60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,l=3395469782),f=(b<<
	5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+g&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+m&4294967295}
	ma.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d<b;){if(0==f)for(;d<=c;)na(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){na(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){na(this,e);f=0;break}}this.ac=f;this.Pd+=b}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function oa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function pa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function qa(a){var b=0,c;for(c in a)b++;return b}function ra(a){for(var b in a)return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ua(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function va(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function wa(a,b){var c=va(a,b,void 0);return c&&a[c]}function xa(a){for(var b in a)return!1;return!0}function ya(a){var b={},c;for(c in a)b[c]=a[c];return b};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Fd=void 0}
	function Ba(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),
	c.push(":"),Ba(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16)}),'"')};var v;a:{var Fa=n.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){v=Ga;break a}}v=""};function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(Ha,Error);Ha.prototype.name="CustomError";var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?
	a.split(""):a,k=0;k<d;k++)if(k in g){var m=g[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},La=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ma=w.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=r(b,d));return w.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Na=w.every?function(a,b,
	c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&w.splice.call(a,c,1)}function Ra(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
	function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a>b?1:a<b?-1:0};var Ua=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),Va=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Wa=-1!=v.indexOf("Gecko")&&-1==v.toLowerCase().indexOf("webkit")&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE")),Xa=-1!=v.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(Ua&&n.opera)return a=n.opera.version,ga(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(v))?a[1]:"");return Va&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,g||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
	function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a){n.setTimeout(function(){throw a;},0)}var db;
	function eb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==
	d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Le;c.Le=null;a()}};return function(a){d.next={Le:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
	document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);jb.push(new kb(a,b))}var gb;function hb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();gb=function(){a.then(lb)}}else gb=function(){var a=lb;!ga(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(db||(db=eb()),db(a)):n.setImmediate(a)}}var ib=!1,jb=[];[].push(function(){ib=!1;jb=[]});
	function lb(){for(;jb.length;){var a=jb;jb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.Wf.call(c.scope)}catch(d){cb(d)}}}ib=!1}function kb(a,b){this.Wf=a;this.scope=b};function mb(a,b){this.L=nb;this.uf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==ob)pb(this,qb,b);else try{var c=this;a.call(b,function(a){pb(c,qb,a)},function(a){if(!(a instanceof rb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}pb(c,sb,a)})}catch(d){pb(this,sb,d)}}var nb=0,qb=2,sb=3;function ob(){}mb.prototype.then=function(a,b,c){return tb(this,ga(a)?a:null,ga(b)?b:null,c)};mb.prototype.then=mb.prototype.then;mb.prototype.$goog_Thenable=!0;h=mb.prototype;
	h.Ag=function(a,b){return tb(this,null,a,b)};h.cancel=function(a){this.L==nb&&fb(function(){var b=new rb(a);ub(this,b)},this)};function ub(a,b){if(a.L==nb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,g;g=c.Ca[f];f++)if(g=g.m)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.L==nb&&1==d?ub(c,b):(d=c.Ca.splice(e,1)[0],vb(c,d,sb,b)))}a.Ha=null}else pb(a,sb,b)}function wb(a,b){a.Ca&&a.Ca.length||a.L!=qb&&a.L!=sb||xb(a);a.Ca||(a.Ca=[]);a.Ca.push(b)}
	function tb(a,b,c,d){var e={m:null,hf:null,kf:null};e.m=new mb(function(a,g){e.hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.kf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof rb?g(b):a(e)}catch(l){g(l)}}:g});e.m.Ha=a;wb(a,e);return e.m}h.Cf=function(a){this.L=nb;pb(this,qb,a)};h.Df=function(a){this.L=nb;pb(this,sb,a)};
	function pb(a,b,c){if(a.L==nb){if(a==c)b=sb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.L=1;c.then(a.Cf,a.Df,a);return}if(ha(c))try{var f=c.then;if(ga(f)){yb(a,c,f);return}}catch(g){b=sb,c=g}}a.uf=c;a.L=b;a.Ha=null;xb(a);b!=sb||c instanceof rb||zb(a,c)}}function yb(a,b,c){function d(b){f||(f=!0,a.Df(b))}function e(b){f||(f=!0,a.Cf(b))}a.L=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}
	function xb(a){a.be||(a.be=!0,fb(a.Uf,a))}h.Uf=function(){for(;this.Ca&&this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b<a.length;b++)vb(this,a[b],this.L,this.uf)}this.be=!1};function vb(a,b,c,d){if(c==qb)b.hf(d);else{if(b.m)for(;a&&a.jd;a=a.Ha)a.jd=!1;b.kf(d)}}function zb(a,b){a.jd=!0;fb(function(){a.jd&&Ab.call(null,b)})}var Ab=cb;function rb(a){Ha.call(this,a)}ka(rb,Ha);rb.prototype.name="cancel";function Bb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function x(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Cb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function Db(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function A(a,b,c,d){if((!d||p(c))&&!ga(c))throw Error(Db(a,b,d)+"must be a valid function.");}function Eb(a,b,c){if(p(c)&&(!ha(c)||null===c))throw Error(Db(a,b,!0)+"must be a valid context object.");};function Fb(a){var b=[];Cb(a,function(a,d){da(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var Gb=n.Promise||mb;mb.prototype["catch"]=mb.prototype.Ag;function Hb(){var a=this;this.reject=this.resolve=null;this.ra=new Gb(function(b,c){a.resolve=b;a.reject=c})}function Ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&&(Jb(a.ra),1===b.length?b(c):b(c,d))}}function Jb(a){a.then(void 0,aa)};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function Ob(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a)}function B(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join("")}return a};function Pb(a,b){this.committed=a;this.snapshot=b};function Qb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function Rb(a){this.te=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null}function Sb(a,b,c){a.Yd=b;a.Gb=c;a.Yd<a.Rb&&(a.Gb(),a.Gb=null)}function Tb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Ub(function(){f.te(d[e])})}if(a.Rb===a.Yd){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Rb++}};function Vb(){this.qc={}}Vb.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b};Vb.prototype.get=function(a){return Bb(this.qc,a)?this.qc[a]:null};Vb.prototype.remove=function(a){delete this.qc[a]};Vb.prototype.cf=!0;function Wb(a){this.vc=a;this.Cd="firebase:"}h=Wb.prototype;h.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b))};h.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Ob(a)};h.remove=function(a){this.vc.removeItem(this.Cd+a)};h.cf=!1;h.toString=function(){return this.vc.toString()};function Xb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Wb(b)}}catch(c){}return new Vb}var Yb=Xb("localStorage"),Zb=Xb("sessionStorage");function $b(a,b,c){this.type=ac;this.source=a;this.path=b;this.Ja=c}$b.prototype.Nc=function(a){return this.path.e()?new $b(this.source,C,this.Ja.R(a)):new $b(this.source,D(this.path),this.Ja)};$b.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function bc(a,b){this.type=cc;this.source=a;this.path=b}bc.prototype.Nc=function(){return this.path.e()?new bc(this.source,C):new bc(this.source,D(this.path))};bc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function dc(a){this.He=a}dc.prototype.getToken=function(a){return this.He.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function ec(a,b){a.He.INTERNAL.addAuthTokenListener(b)};function fc(){this.Jd=F}fc.prototype.j=function(a){return this.Jd.Q(a)};fc.prototype.toString=function(){return this.Jd.toString()};function gc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.Cg=d;this.nf=e||"";this.bb=Yb.get("host:"+a)||this.host}function hc(a,b){b!==a.bb&&(a.bb=b,"s-"===a.bb.substr(0,2)&&Yb.set("host:"+a.host,a.bb))}
	function ic(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.bb+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.bb+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.bb&&(c.ns=a.pe);var d=[];t(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
	gc.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.nf&&(a+="<"+this.nf+">");return a};function jc(a,b){this.zf={};this.Vc=new kc(a);this.va=b;var c=1E4+2E4*Math.random();setTimeout(r(this.rf,this),Math.floor(c))}jc.prototype.rf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&Bb(this.zf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);setTimeout(r(this.rf,this),Math.floor(6E5*Math.random()))};function lc(){this.uc={}}function mc(a,b,c){p(c)||(c=1);Bb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}lc.prototype.get=function(){return ya(this.uc)};function kc(a){this.Nf=a;this.rd=null}kc.prototype.get=function(){var a=this.Nf.get(),b=ya(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var nc={},oc={};function pc(a){a=a.toString();nc[a]||(nc[a]=new lc);return nc[a]}function qc(a,b){var c=a.toString();oc[c]||(oc[c]=b());return oc[c]};function rc(){this.wb=[]}function sc(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.wb.push(c),c=null);null===c&&(c=new tc(f));c.add(e)}c&&a.wb.push(c)}function uc(a,b,c){sc(a,c);vc(a,function(a){return a.ca(b)})}function wc(a,b,c){sc(a,c);vc(a,function(a){return a.contains(b)||b.contains(a)})}
	function vc(a,b){for(var c=!0,d=0;d<a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f<e.hd.length;f++){var g=e.hd[f];if(null!==g){e.hd[f]=null;var k=g.Ub();xc&&E("event: "+g.toString());Ub(k)}}a.wb[d]=null}else c=!1}c&&(a.wb=[])}function tc(a){this.qa=a;this.hd=[]}tc.prototype.add=function(a){this.hd.push(a)};tc.prototype.Zb=function(){return this.qa};function yc(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a}yc.prototype.Zb=function(){var a=this.Md.xb();return"value"===this.gd?a.path:a.getParent().path};yc.prototype.ge=function(){return this.gd};yc.prototype.Ub=function(){return this.ae.Ub(this)};yc.prototype.toString=function(){return this.Zb().toString()+":"+this.gd+":"+B(this.Md.Ue())};function zc(a,b,c){this.ae=a;this.error=b;this.path=c}zc.prototype.Zb=function(){return this.path};zc.prototype.ge=function(){return"cancel"};
	zc.prototype.Ub=function(){return this.ae.Ub(this)};zc.prototype.toString=function(){return this.path.toString()+":cancel"};function Ac(){}Ac.prototype.Xe=function(){return null};Ac.prototype.fe=function(){return null};var Bc=new Ac;function Cc(a,b,c){this.Gf=a;this.Na=b;this.yd=c}Cc.prototype.Xe=function(a){var b=this.Na.O;if(Dc(b,a))return b.j().R(a);b=null!=this.yd?new Ec(this.yd,!0,!1):this.Na.u();return this.Gf.rc(a,b)};Cc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:Fc(this.Na);a=this.Gf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.qe=d;this.Dd=void 0}function Gc(a){return new I(Hc,a)}var Hc="value";function Ec(a,b,c){this.A=a;this.ea=b;this.Tb=c}function Ic(a){return a.ea}function Jc(a){return a.Tb}function Kc(a,b){return b.e()?a.ea&&!a.Tb:Dc(a,J(b))}function Dc(a,b){return a.ea&&!a.Tb||a.A.Fa(b)}Ec.prototype.j=function(){return this.A};function Lc(a,b){return Mc(a.name,b.name)}function Nc(a,b){return Mc(a,b)};function K(a,b){this.name=a;this.S=b}function Oc(a,b){return new K(a,b)};function Pc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Qc(a,b){var c=new Rc;Sc(a,new L(""),function(a,e){Tc(c,a,Uc(e,b))});return c}function Uc(a,b){var c=a.C().H(),c=Pc(c,b),d;if(a.J()){var e=Pc(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Vc(e,M(c)):a}d=a;c!==a.C().H()&&(d=d.ga(new Vc(c)));a.P(N,function(a,c){var e=Uc(c,b);e!==c&&(d=d.U(a,e))});return d};var Wc=function(){var a=1;return function(){return a++}}(),H=Kb,Xc=Lb;
	function Yc(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==m)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a}return b}catch(l){E("base64Decode failed: ",
	l)}return null}function Zc(a){var b=Mb(a);a=new ma;a.update(b);var b=[],c=8*a.Pd;56>a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56<=d;d--)a.Wd[d]=c&255,c/=256;na(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return ab(b)}function $c(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+$c.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var xc=null,ad=!0;
	function bd(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?xc=r(console.log,console):"object"===typeof console.log&&(xc=function(a){console.log(a)})),b&&Zb.set("logging_enabled",!0)):ga(a)?xc=a:(xc=null,Zb.remove("logging_enabled"))}function E(a){!0===ad&&(ad=!1,null===xc&&!0===Zb.get("logging_enabled")&&bd(!0));if(xc){var b=$c.apply(null,arguments);xc(b)}}
	function cd(a){return function(){E(a,arguments)}}function dd(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+$c.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function ed(a){var b=$c.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+$c.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function fd(a){var b,c,d,e,f,g=a;f=c=a=b="";d=!0;e="https";if(q(g)){var k=g.indexOf("//");0<=k&&(e=g.substring(0,k-1),g=g.substring(k+2));k=g.indexOf("/");-1===k&&(k=g.length);b=g.substring(0,k);f="";g=g.substring(k).split("/");for(k=0;k<g.length;k++)if(0<g[k].length){var m=g[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}g=b.split(".");3===g.length?(a=g[1],c=g[0].toLowerCase()):2===g.length&&(a=g[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&ed(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
	c&&"undefined"!=c||ed("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{kc:new gc(b,d,c,"ws"===e||"wss"===e),path:new L(f)}}function gd(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function hd(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function Mc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=id(a),d=id(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function jd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
	function kd(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=kd(a[b[d]]);return c+"}"}function ld(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function md(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else t(a,b)}
	function nd(a){H(!gd(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var od=/^-?\d{1,10}$/;function id(a){return od.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Ub(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function pd(a,b,c){Object.defineProperty(a,b,{get:c})};function qd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Ob(Yc(f[0])||""),c=Ob(Yc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Fg:b,Me:c,data:d,xg:e}}function rd(a){a=qd(a);var b=a.Me;return!!a.xg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function sd(a){a=qd(a).Me;return"object"===typeof a&&!0===x(a,"admin")};var ud=null;"undefined"!==typeof MozWebSocket?ud=MozWebSocket:"undefined"!==typeof WebSocket&&(ud=WebSocket);function vd(a,b,c,d){this.Zd=a;this.f=cd(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Fe=0;this.Xa=pc(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ne=ic(b,"websocket",a)}var wd;
	vd.prototype.open=function(a,b){this.kb=b;this.hg=a;this.f("Websocket connecting to "+this.Ne);this.xc=!1;Yb.set("previous_websocket_failure",!0);try{this.La=new ud(this.Ne)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.fb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.xc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.fb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=
	a.length,mc(e.Xa,"bytes_received",a.length),xd(e),null!==e.frames)yd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&yd(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.fb()}};vd.prototype.start=function(){};
	vd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ud&&!wd};vd.responsesRequiredToBeHealthy=2;vd.healthyTimeout=3E4;h=vd.prototype;h.sd=function(){Yb.remove("previous_websocket_failure")};function yd(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=Ob(c);a.hg(c)}}
	h.send=function(a){xd(this);a=B(a);this.rb+=a.length;mc(this.Xa,"bytes_sent",a.length);a=ld(a,16384);1<a.length&&zd(this,String(a.length));for(var b=0;b<a.length;b++)zd(this,a[b])};h.Tc=function(){this.Bb=!0;this.Ac&&(clearInterval(this.Ac),this.Ac=null);this.La&&(this.La.close(),this.La=null)};h.fb=function(){this.Bb||(this.f("WebSocket is closing itself"),this.Tc(),this.kb&&(this.kb(this.xc),this.kb=null))};h.close=function(){this.Bb||(this.f("WebSocket is being closed"),this.Tc())};
	function xd(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&&zd(a,"0");xd(a)},Math.floor(45E3))}function zd(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(r(a.fb,a),0)}};function Ad(a,b,c){this.f=cd("p:rest:");this.M=a;this.Hb=b;this.Vd=c;this.$={}}function Bd(a,b){if(p(b))return"tag$"+b;H(Cd(a.n),"should have a tag if it's not a default query.");return a.path.toString()}h=Ad.prototype;
	h.df=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ya());var f=Bd(a,c),g={};this.$[f]=g;a=Dd(a.n);var k=this;Ed(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Hb(e,u,!1,c);x(k.$,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.Ef=function(a,b){var c=Bd(a,b);delete this.$[c]};h.qf=function(){};h.re=function(){};h.gf=function(){};h.xd=function(){};h.put=function(){};h.ef=function(){};h.ye=function(){};
	function Ed(a,b,c,d){c=c||{};c.format="export";a.Vd.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.M.Sc?"https://":"http://")+a.M.host+b+"?"+Fb(c);a.f("Sending REST request for "+f);var g=new XMLHttpRequest;g.onreadystatechange=function(){if(d&&4===g.readyState){a.f("REST Response for "+f+" received. status:",g.status,"response:",g.responseText);var b=null;if(200<=g.status&&300>g.status){try{b=Ob(g.responseText)}catch(c){O("Failed to parse JSON response for "+f+": "+g.responseText)}d(null,
	b)}else 401!==g.status&&404!==g.status&&O("Got unsuccessful REST response for "+f+" Status: "+g.status),d(g.status);d=null}};g.open("GET",f,!0);g.send()})};function Fd(a,b,c){this.type=Gd;this.source=a;this.path=b;this.children=c}Fd.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new $b(this.source,C,a.value):new Fd(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Fd(this.source,D(this.path),this.children)};Fd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Hd(){this.hb={}}
	function Id(a,b){var c=b.type,d=b.Za;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=x(a.hb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.Ma);else if("child_removed"==c&&"child_added"==f)delete a.hb[d];else if("child_removed"==c&&"child_changed"==f)a.hb[d]=new I("child_removed",e.qe,d);else if("child_changed"==c&&
	"child_added"==f)a.hb[d]=new I("child_added",b.Ma,d);else if("child_changed"==c&&"child_changed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.qe);else throw Xc("Illegal combination of changes: "+b+" occurred after "+e);}else a.hb[d]=b};function Jd(a){this.W=a;this.g=a.n.g}function Kd(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.nd(b.qe,b.Ma)&&f.push(new I("child_moved",b.Ma,b.Za))});Ld(a,e,"child_removed",b,d,c);Ld(a,e,"child_added",b,d,c);Ld(a,e,"child_moved",f,d,c);Ld(a,e,"child_changed",b,d,c);Ld(a,e,Hc,b,d,c);return e}function Ld(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,r(a.Of,a));Ja(d,function(c){var d=Md(a,c,f);Ja(e,function(e){e.tf(c.type)&&b.push(e.createEvent(d,a.W))})})}
	function Md(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ze(b.Za,b.Ma,a.g));return b}Jd.prototype.Of=function(a,b){if(null==a.Za||null==b.Za)throw Xc("Should only compare child_ events.");return this.g.compare(new K(a.Za,a.Ma),new K(b.Za,b.Ma))};function Nd(a,b){this.Sd=a;this.Mf=b}function Od(a){this.V=a}
	Od.prototype.gb=function(a,b,c,d){var e=new Hd,f;if(b.type===ac)b.source.ee?c=Pd(this,a,b.path,b.Ja,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Jc(a.u())&&!b.path.e(),c=Qd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===Gd)b.source.ee?c=Rd(this,a,b.path,b.children,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Jc(a.u()),c=Sd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Td)if(b.Id)if(b=b.path,null!=c.mc(b))c=a;else{f=new Cc(c,a,d);d=a.O.j();if(b.e()||".priority"===J(b))Ic(a.u())?
	b=c.Ba(Fc(a)):(b=a.u().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.sc(b)),b=this.V.za(d,b,e);else{var g=J(b),k=c.rc(g,a.u());null==k&&Dc(a.u(),g)&&(k=d.R(g));b=null!=k?this.V.F(d,g,k,D(b),f,e):a.O.j().Fa(g)?this.V.F(d,g,F,D(b),f,e):d;b.e()&&Ic(a.u())&&(d=c.Ba(Fc(a)),d.J()&&(b=this.V.za(b,d,e)))}d=Ic(a.u())||null!=c.mc(C);c=Ud(a,b,d,this.V.Qa())}else c=Vd(this,a,b.path,b.Pb,c,d,e);else if(b.type===cc)d=b.path,b=a.u(),f=b.j(),g=b.ea||d.e(),c=Wd(this,new Xd(a.O,new Ec(f,
	g,b.Tb)),d,c,Bc,e);else throw Xc("Unknown operation type: "+b.type);e=sa(e.hb);d=c;b=d.O;b.ea&&(f=b.j().J()||b.j().e(),g=Yd(a),(0<e.length||!a.O.ea||f&&!b.j().ca(g)||!b.j().C().ca(g.C()))&&e.push(Gc(Yd(d))));return new Nd(c,e)};
	function Wd(a,b,c,d,e,f){var g=b.O;if(null!=d.mc(c))return b;var k;if(c.e())H(Ic(b.u()),"If change path is empty, we must have complete server data"),Jc(b.u())?(e=Fc(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(Fc(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(".priority"==m)H(1==Zd(c),"Can't have a priority with additional path components"),f=g.j(),k=b.u().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):g.j();else{var l=D(c);Dc(g,m)?(k=b.u().j(),d=d.$c(c,g.j(),k),d=null!=d?g.j().R(m).F(l,d):g.j().R(m)):d=d.rc(m,
	b.u());f=null!=d?a.V.F(g.j(),m,d,l,e,f):g.j()}}return Ud(b,f,g.ea||c.e(),a.V.Qa())}function Qd(a,b,c,d,e,f,g,k){var m=b.u();g=g?a.V:a.V.Vb();if(c.e())d=g.za(m.j(),d,null);else if(g.Qa()&&!m.Tb)d=m.j().F(c,d),d=g.za(m.j(),d,null);else{var l=J(c);if(!Kc(m,c)&&1<Zd(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=".priority"==l?g.ga(m.j(),d):g.F(m.j(),l,d,u,Bc,null)}m=m.ea||c.e();b=new Xd(b.O,new Ec(d,m,g.Qa()));return Wd(a,b,c,e,new Cc(e,b,f),k)}
	function Pd(a,b,c,d,e,f,g){var k=b.O;e=new Cc(e,b,f);if(c.e())g=a.V.za(b.O.j(),d,g),a=Ud(b,g,!0,a.V.Qa());else if(f=J(c),".priority"===f)g=a.V.ga(b.O.j(),d),a=Ud(b,g,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.Xe(f);d=null!=l?".priority"===$d(c)&&l.Q(c.parent()).e()?l:l.F(c,d):F}m.ca(d)?a=b:(g=a.V.F(k.j(),f,d,c,e,g),a=Ud(b,g,k.ea,a.V.Qa()))}return a}
	function Rd(a,b,c,d,e,f,g){var k=b;ae(d,function(d,l){var u=c.m(d);Dc(b.O,J(u))&&(k=Pd(a,k,u,l,e,f,g))});ae(d,function(d,l){var u=c.m(d);Dc(b.O,J(u))||(k=Pd(a,k,u,l,e,f,g))});return k}function be(a,b){ae(b,function(b,d){a=a.F(b,d)});return a}
	function Sd(a,b,c,d,e,f,g,k){if(b.u().j().e()&&!Ic(b.u()))return b;var m=b;c=c.e()?d:ce(Q,c,d);var l=b.u().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.u().j().R(c),G=be(G,d);m=Qd(a,m,new L(c),G,e,f,g,k)}});c.children.ia(function(c,d){var G=!Dc(b.u(),c)&&null==d.value;l.Fa(c)||G||(G=b.u().j().R(c),G=be(G,d),m=Qd(a,m,new L(c),G,e,f,g,k))});return m}
	function Vd(a,b,c,d,e,f,g){if(null!=e.mc(c))return b;var k=Jc(b.u()),m=b.u();if(null!=d.value){if(c.e()&&m.ea||Kc(m,c))return Qd(a,b,c,m.j().Q(c),e,f,k,g);if(c.e()){var l=Q;m.j().P(de,function(a,b){l=l.set(new L(a),b)});return Sd(a,b,c,l,e,f,k,g)}return b}l=Q;ae(d,function(a){var b=c.m(a);Kc(m,b)&&(l=l.set(a,m.j().Q(b)))});return Sd(a,b,c,l,e,f,k,g)};function ee(a){this.g=a}h=ee.prototype;h.F=function(a,b,c,d,e,f){H(a.zc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).ca(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Id(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Id(f,new I("child_added",c,b)):Id(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.U(b,c).ob(this.g)};
	h.za=function(a,b,c){null!=c&&(a.J()||a.P(N,function(a,e){b.Fa(a)||Id(c,new I("child_removed",e,a))}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.ca(e)||Id(c,new I("child_changed",e,b,f))}else Id(c,new I("child_added",e,b))}));return b.ob(this.g)};h.ga=function(a,b){return a.e()?F:a.ga(b)};h.Qa=function(){return!1};h.Vb=function(){return this};function fe(a){this.he=new ee(a.g);this.g=a.g;var b;a.ka?(b=ge(a),b=a.g.Fc(he(a),b)):b=a.g.Ic();this.Uc=b;a.na?(b=ie(a),a=a.g.Fc(je(a),b)):a=a.g.Gc();this.wc=a}h=fe.prototype;h.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.wc)};h.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=F);return this.he.F(a,b,c,d,e,f)};
	h.za=function(a,b,c){b.J()&&(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new K(a,b))||(d=d.U(a,F))});return this.he.za(a,d,c)};h.ga=function(a){return a};h.Qa=function(){return!0};h.Vb=function(){return this.he};function ke(a){this.sa=new fe(a);this.g=a.g;H(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Jb=!le(a)}h=ke.prototype;h.F=function(a,b,c,d,e,f){this.sa.matches(new K(b,c))||(c=F);return a.R(b).ca(c)?a:a.Fb()<this.oa?this.sa.Vb().F(a,b,c,d,e,f):me(this,a,b,c,e,f)};
	h.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.oa<b.Fb()&&b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.sa.wc,this.g):b.Yb(this.sa.Uc,this.g);for(var e=0;0<b.Sa.length&&e<this.oa;){var f=R(b),g;if(g=this.Jb?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.wc))d=d.U(f.name,f.S),e++;else break}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.$e(this.g);k=this.sa.wc;m=this.sa.Uc;var u=ne(this.g);l=function(a,b){return u(b,a)}}else b=d.Xb(this.g),k=this.sa.Uc,
	m=this.sa.wc,l=ne(this.g);for(var e=0,z=!1;0<b.Sa.length;)f=R(b),!z&&0>=l(k,f)&&(z=!0),(g=z&&e<this.oa&&0>=l(f,m))?e++:d=d.U(f.name,F)}return this.sa.Vb().za(a,d,c)};h.ga=function(a){return a};h.Qa=function(){return!0};h.Vb=function(){return this.sa.Vb()};
	function me(a,b,c,d,e,f){var g;if(a.Jb){var k=ne(a.g);g=function(a,b){return k(b,a)}}else g=ne(a.g);H(b.Fb()==a.oa,"");var m=new K(c,d),l=a.Jb?oe(b,a.g):pe(b,a.g),u=a.sa.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:g(l,m);if(u&&!d.e()&&0<=e)return null!=f&&Id(f,new I("child_changed",d,c,z)),b.U(c,d);null!=f&&Id(f,new I("child_removed",z,c));b=b.U(c,F);return null!=l&&a.sa.matches(l)?(null!=f&&Id(f,new I("child_added",
	l.S,l.name)),b.U(l.name,l.S)):b}return d.e()?b:u&&0<=g(l,m)?(null!=f&&(Id(f,new I("child_removed",l.S,l.name)),Id(f,new I("child_added",d,c))),b.U(c,d).U(l.name,F)):b};function Vc(a,b){this.B=a;H(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||F;qe(this.aa);this.Eb=null}var re=["object","boolean","number","string"];h=Vc.prototype;h.J=function(){return!0};h.C=function(){return this.aa};h.ga=function(a){return new Vc(this.B,a)};h.R=function(a){return".priority"===a?this.aa:F};h.Q=function(a){return a.e()?this:".priority"===J(a)?this.aa:F};h.Fa=function(){return!1};h.Ze=function(){return null};
	h.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:F.U(a,b).ga(this.aa)};h.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===Zd(a),".priority must be the last token in a path");return this.U(c,F.F(D(a),b))};h.e=function(){return!1};h.Fb=function(){return 0};h.P=function(){return!1};h.H=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().H()}:this.Ea()};
	h.hash=function(){if(null===this.Eb){var a="";this.aa.e()||(a+="priority:"+se(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+nd(this.B):a+this.B;this.Eb=Zc(a)}return this.Eb};h.Ea=function(){return this.B};h.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(re,b),e=Ia(re,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	h.ob=function(){return this};h.zc=function(){return!0};h.ca=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.ca(a.aa):!1};h.toString=function(){return B(this.H(!0))};function te(){}var ue={};function ne(a){return r(a.compare,a)}te.prototype.nd=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b))};te.prototype.Ic=function(){return ve};function we(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ka(we,te);h=we.prototype;h.yc=function(a){return!a.Q(this.cc).e()};h.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?Mc(a.name,b.name):c};
	h.Fc=function(a,b){var c=M(a),c=F.F(this.cc,c);return new K(b,c)};h.Gc=function(){var a=F.F(this.cc,xe);return new K("[MAX_NAME]",a)};h.toString=function(){return this.cc.slice().join("/")};function ye(){}ka(ye,te);h=ye.prototype;h.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?Mc(a.name,b.name):c};h.yc=function(a){return!a.C().e()};h.nd=function(a,b){return!a.C().ca(b.C())};h.Ic=function(){return ve};h.Gc=function(){return new K("[MAX_NAME]",new Vc("[PRIORITY-POST]",xe))};
	h.Fc=function(a,b){var c=M(a);return new K(b,new Vc("[PRIORITY-POST]",c))};h.toString=function(){return".priority"};var N=new ye;function ze(){}ka(ze,te);h=ze.prototype;h.compare=function(a,b){return Mc(a.name,b.name)};h.yc=function(){throw Xc("KeyIndex.isDefinedOn not expected to be called.");};h.nd=function(){return!1};h.Ic=function(){return ve};h.Gc=function(){return new K("[MAX_NAME]",F)};h.Fc=function(a){H(q(a),"KeyIndex indexValue must always be a string.");return new K(a,F)};h.toString=function(){return".key"};
	var de=new ze;function Ae(){}ka(Ae,te);h=Ae.prototype;h.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?Mc(a.name,b.name):c};h.yc=function(){return!0};h.nd=function(a,b){return!a.ca(b)};h.Ic=function(){return ve};h.Gc=function(){return Be};h.Fc=function(a,b){var c=M(a);return new K(b,c)};h.toString=function(){return".value"};var Ce=new Ae;function De(){this.Sb=this.na=this.Lb=this.ka=this.xa=!1;this.oa=0;this.oc="";this.ec=null;this.Ab="";this.bc=null;this.yb="";this.g=N}var Ee=new De;function le(a){return""===a.oc?a.ka:"l"===a.oc}function he(a){H(a.ka,"Only valid if start has been set");return a.ec}function ge(a){H(a.ka,"Only valid if start has been set");return a.Lb?a.Ab:"[MIN_NAME]"}function je(a){H(a.na,"Only valid if end has been set");return a.bc}
	function ie(a){H(a.na,"Only valid if end has been set");return a.Sb?a.yb:"[MAX_NAME]"}function Fe(a){var b=new De;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.na=a.na;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b}h=De.prototype;h.ne=function(a){var b=Fe(this);b.xa=!0;b.oa=a;b.oc="l";return b};h.oe=function(a){var b=Fe(this);b.xa=!0;b.oa=a;b.oc="r";return b};h.Nd=function(a,b){var c=Fe(this);c.ka=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab="");return c};
	h.fd=function(a,b){var c=Fe(this);c.na=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Hg=!1,c.yb="");return c};function Ge(a,b){var c=Fe(a);c.g=b;return c}function He(a){var b={};a.ka&&(b.sp=a.ec,a.Lb&&(b.sn=a.Ab));a.na&&(b.ep=a.bc,a.Sb&&(b.en=a.yb));if(a.xa){b.l=a.oa;var c=a.oc;""===c&&(c=le(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function S(a){return!(a.ka||a.na||a.xa)}function Cd(a){return S(a)&&a.g==N}
	function Dd(a){var b={};if(Cd(a))return b;var c;a.g===N?c="$priority":a.g===Ce?c="$value":a.g===de?c="$key":(H(a.g instanceof we,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.Ab)));a.na&&(b.endAt=B(a.bc),a.Sb&&(b.endAt+=","+B(a.yb)));a.xa&&(le(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}h.toString=function(){return B(He(this))};function Ie(a,b){this.od=a;this.dc=b}Ie.prototype.get=function(a){var b=x(this.od,a);if(!b)throw Error("No index defined for "+a);return b===ue?null:b};function Je(a,b,c){var d=oa(a.od,function(d,f){var g=x(a.dc,f);H(g,"Missing index implementation for "+f);if(d===ue){if(g.yc(b.S)){for(var k=[],m=c.Xb(Oc),l=R(m);l;)l.name!=b.name&&k.push(l),l=R(m);k.push(b);return Ke(k,ne(g))}return ue}g=c.get(b.name);k=d;g&&(k=k.remove(new K(b.name,g)));return k.Ra(b,b.S)});return new Ie(d,a.dc)}
	function Le(a,b,c){var d=oa(a.od,function(a){if(a===ue)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new Ie(d,a.dc)}var Me=new Ie({".priority":ue},{".priority":N});function Ne(){this.set={}}h=Ne.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return Bb(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return xa(this.set)};h.count=function(){return qa(this.set)};function Oe(a,b){t(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];t(this.set,function(b,c){a.push(c)});return a};function Pe(a,b,c,d){this.Zd=a;this.f=cd(a);this.kc=b;this.qb=this.rb=0;this.Xa=pc(b);this.Bf=c;this.xc=!1;this.Db=d;this.Yc=function(a){return ic(b,"long_polling",a)}}var Qe,Re;
	Pe.prototype.open=function(a,b){this.Qe=0;this.ja=b;this.ff=new Rb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f("Timed out trying to connect.");c.fb();c.tb=null},Math.floor(3E4));hd(function(){if(!c.Bb){c.Wa=new Se(function(a,b,d,k,m){Te(c,arguments);if(c.Wa)if(c.tb&&(clearTimeout(c.tb),c.tb=null),c.xc=!0,"start"==a)c.id=b,c.mf=d;else if("close"===a)b?(c.Wa.Kd=!1,Sb(c.ff,b,function(){c.fb()})):c.fb();else throw Error("Unrecognized command received: "+a);},function(a,b){Te(c,arguments);
	Tb(c.ff,a,b)},function(){c.fb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&&(a.cb=c.Wa.Qd);a.v="5";c.Bf&&(a.s=c.Bf);c.Db&&(a.ls=c.Db);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);Ue(c.Wa,a,function(){})}})};
	Pe.prototype.start=function(){var a=this.Wa,b=this.mf;a.fg=this.id;a.gg=b;for(a.Ud=!0;Ve(a););a=this.id;b=this.mf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
	Pe.isAvailable=function(){return Qe||!Re&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Dg)&&!0};h=Pe.prototype;h.sd=function(){};h.Tc=function(){this.Bb=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.tb&&(clearTimeout(this.tb),this.tb=null)};
	h.fb=function(){this.Bb||(this.f("Longpoll is closing itself"),this.Tc(),this.ja&&(this.ja(this.xc),this.ja=null))};h.close=function(){this.Bb||(this.f("Longpoll is being closed."),this.Tc())};h.send=function(a){a=B(a);this.rb+=a.length;mc(this.Xa,"bytes_sent",a.length);a=Mb(a);a=ab(a,!0);a=ld(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.Qc.push({ug:this.Qe,Bg:a.length,Se:a[b]});c.Ud&&Ve(c);this.Qe++}};function Te(a,b){var c=B(b).length;a.qb+=c;mc(a.Xa,"bytes_received",c)}
	function Se(a,b,c,d){this.Yc=d;this.kb=c;this.ve=new Ne;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Wc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&&(a.ib=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close()}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f)}}
	Se.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.kb;b&&(this.kb=null,b())};
	function Ve(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.fg;b.pw=a.gg;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Se.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.ug+"&ts"+d+"="+e.Bg+"&d"+d+"="+e.Se;d++}else break;We(a,b+c,a.$d);return!0}return!1}function We(a,b,c){function d(){a.ve.remove(c);Ve(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));Ue(a,b,function(){clearTimeout(e);d()})}
	function Ue(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ga.ib.body.appendChild(d)}}catch(e){}},Math.floor(1))};function Xe(a){Ye(this,a)}var Ze=[Pe,vd];function Ye(a,b){var c=vd&&vd.isAvailable(),d=c&&!(Yb.cf||!0===Yb.get("previous_websocket_failure"));b.Cg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[vd];else{var e=a.Wc=[];md(Ze,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function $e(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function af(a,b,c,d,e,f,g){this.id=a;this.f=cd("c:"+this.id+":");this.te=c;this.Mc=d;this.ja=e;this.se=f;this.M=b;this.Ad=[];this.Oe=0;this.Af=new Xe(b);this.L=0;this.Db=g;this.f("Connection created");bf(this)}
	function bf(a){var b=$e(a.Af);a.I=new b("c:"+a.id+":"+a.Oe++,a.M,void 0,a.Db);a.xe=b.responsesRequiredToBeHealthy||0;var c=cf(a,a.I),d=df(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=setTimeout(function(){a.md=null;a.Cb||(a.I&&102400<a.I.qb?(a.f("Connection exceeded healthy timeout but has received "+a.I.qb+" bytes.  Marking connection healthy."),a.Cb=!0,a.I.sd()):a.I&&10240<a.I.rb?a.f("Connection exceeded healthy timeout but has sent "+
	a.I.rb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function df(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.M.bb.substr(0,2)&&(Yb.remove("host:"+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
	function cf(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=jd("t",c);c=jd("d",c);if("c"==d){if(d=jd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.yf=c.s;hc(a.M,f);0==a.L&&(a.I.start(),ef(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.Af,(c=1<c.Wc.length?c.Wc[1]:null)&&ff(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];gf(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.se&&(a.se(c),a.se=null),a.ja=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),hc(a.M,c),1===a.L?a.close():(hf(a),bf(a))):"e"===d?dd("Server Error: "+c):"o"===d?(a.f("got pong on primary."),jf(a),kf(a)):dd("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=jd("t",c),c=jd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?lf(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.xf--,lf(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}af.prototype.ua=function(a){mf(this,{t:"d",d:a})};function gf(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
	function lf(a){0>=a.xf?(a.f("Secondary connection is healthy."),a.Cb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,gf(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}af.prototype.wd=function(a){jf(this);this.te(a)};function jf(a){a.Cb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Cb=!0,a.I.sd()))}
	function ff(a,b){a.D=new b("c:"+a.id+":"+a.Oe++,a.M,a.yf);a.xf=b.responsesRequiredToBeHealthy||0;a.D.open(cf(a,a.D),df(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function ef(a,b,c){a.f("Realtime connection established.");a.I=b;a.L=1;a.Mc&&(a.Mc(c,a.yf),a.Mc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Cb=!0):setTimeout(function(){kf(a)},Math.floor(5E3))}
	function kf(a){a.Cb||1!==a.L||(a.f("sending ping on primary."),mf(a,{t:"c",d:{t:"p",d:{}}}))}function mf(a,b){if(1!==a.L)throw"Connection is not connected";a.Xc.send(b)}af.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,hf(this),this.ja&&(this.ja(),this.ja=null))};function hf(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function nf(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=Mc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Z>=a.o.length?null:a.o[a.Z]}function Zd(a){return a.o.length-a.Z}function D(a){var b=a.Z;b<a.o.length&&b++;return new L(a.o,b)}function $d(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}h=L.prototype;
	h.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};h.slice=function(a){return this.o.slice(this.Z+(a||0))};h.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
	h.m=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};h.e=function(){return this.Z>=this.o.length};h.ca=function(a){if(Zd(this)!==Zd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
	h.contains=function(a){var b=this.Z,c=a.Z;if(Zd(this)>Zd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L("");function of(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Te=b;for(var c=0;c<this.Ta.length;c++)this.Ka+=Nb(this.Ta[c]);pf(this)}of.prototype.push=function(a){0<this.Ta.length&&(this.Ka+=1);this.Ta.push(a);this.Ka+=Nb(a);pf(this)};of.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Nb(a);0<this.Ta.length&&--this.Ka};
	function pf(a){if(768<a.Ka)throw Error(a.Te+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ta.length)throw Error(a.Te+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+qf(a));}function qf(a){return 0==a.Ta.length?"":"in property '"+a.Ta.join(".")+"'"};function rf(a){a instanceof sf||ed("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,C);this.INTERNAL=new tf(this)}var uf={TIMESTAMP:{".sv":"timestamp"}};h=rf.prototype;h.app=null;h.pf=function(a){vf(this,"ref");y("database.ref",0,1,arguments.length);return p(a)?this.ba.m(a):this.ba};
	h.rg=function(a){vf(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=fd(a);wf("database.refFromURL",b);var c=b.kc;c.host!==this.ta.M.host&&ed("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.M.host+")");return this.pf(b.path.toString())};function vf(a,b){null===a.ta&&ed("Cannot call "+b+" on a deleted database.")}h.$f=function(){y("database.goOffline",0,0,arguments.length);vf(this,"goOffline");this.ta.eb()};
	h.ag=function(){y("database.goOnline",0,0,arguments.length);vf(this,"goOnline");this.ta.lc()};Object.defineProperty(rf.prototype,"app",{get:function(){return this.ta.app}});function tf(a){this.$a=a}tf.prototype.delete=function(){vf(this.$a,"delete");var a=xf.Wb(),b=this.$a.ta;x(a.nb,b.app.name)!==b&&ed("Database "+b.app.name+" has already been deleted.");b.eb();delete a.nb[b.app.name];this.$a.ta=null;this.$a.ba=null;this.$a=this.$a.INTERNAL=null;return firebase.Promise.resolve()};
	rf.prototype.ref=rf.prototype.pf;rf.prototype.refFromURL=rf.prototype.rg;rf.prototype.goOnline=rf.prototype.ag;rf.prototype.goOffline=rf.prototype.$f;tf.prototype["delete"]=tf.prototype.delete;function Rc(){this.k=this.B=null}Rc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Tc(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Ne);var d=J(b);a.k.contains(d)||a.k.add(d,new Rc);a=a.k.get(d);b=D(b);Tc(a,b,c)}}
	function yf(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Tc(a,new L(b),c)});return yf(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&yf(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Sc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+"/"+a);Sc(e,f,c)})}Rc.prototype.P=function(a){null!==this.k&&Oe(this.k,function(b,c){a(b,c)})};var zf=/[\[\].#$\/\u0000-\u001F\u007F]/,Af=/[\[\].#$\u0000-\u001F\u007F]/;function Bf(a){return q(a)&&0!==a.length&&!zf.test(a)}function Cf(a){return null===a||q(a)||fa(a)&&!gd(a)||ha(a)&&Bb(a,".sv")}function Df(a,b,c,d){d&&!p(b)||Ef(Db(a,1,d),b,c)}
	function Ef(a,b,c){c instanceof L&&(c=new of(c,a));if(!p(b))throw Error(a+"contains undefined "+qf(c));if(ga(b))throw Error(a+"contains a function "+qf(c)+" with contents: "+b.toString());if(gd(b))throw Error(a+"contains "+b.toString()+" "+qf(c));if(q(b)&&b.length>10485760/3&&10485760<Nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+qf(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;Cb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!Bf(b)))throw Error(a+" contains an invalid key ("+b+") "+qf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Ef(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+qf(c)+" in addition to actual children.");}}
	function Ff(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Bf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(nf);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function Gf(a,b,c){var d=Db(a,1,!1);if(!ha(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Cb(b,function(a,b){var k=new L(a);Ef(d,b,c.m(k));if(".priority"===$d(k)&&!Cf(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Ff(d,e)}
	function Hf(a,b,c){if(gd(c))throw Error(Db(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Cf(c))throw Error(Db(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function If(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(Db(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Jf(a,b){if(p(b)&&!Bf(b))throw Error(Db(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function Kf(a,b){if(!q(b)||0===b.length||Af.test(b))throw Error(Db(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Lf(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
	function wf(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!Bf(b.kc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(q(c)&&0!==c.length&&!Af.test(c)));if(d)throw Error(Db(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ta=a;this.qa=b}V.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new Hb;this.ta.xd(this.qa,Ib(b,a));return b.ra};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Lf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);var b=new Hb;Mf(this.ta,this.qa,null,Ib(b,a));return b.ra};
	V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Lf("Firebase.onDisconnect().set",this.qa);Df("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new Hb;Mf(this.ta,this.qa,a,Ib(c,b));return c.ra};V.prototype.set=V.prototype.set;
	V.prototype.Kb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Lf("Firebase.onDisconnect().setWithPriority",this.qa);Df("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Hf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new Hb;Nf(this.ta,this.qa,a,b,Ib(d,c));return d.ra};V.prototype.setWithPriority=V.prototype.Kb;
	V.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Lf("Firebase.onDisconnect().update",this.qa);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Gf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
	c=new Hb;Of(this.ta,this.qa,a,Ib(c,b));return c.ra};V.prototype.update=V.prototype.update;function Pf(a){H(da(a)&&0<a.length,"Requires a non-empty array");this.Kf=a;this.Ec={}}Pf.prototype.Ge=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ke.apply(c[d].Pa,Array.prototype.slice.call(arguments,1))};Pf.prototype.hc=function(a,b,c){Qf(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Ke:b,Pa:c});(a=this.Ye(a))&&b.apply(c,a)};
	Pf.prototype.Jc=function(a,b,c){Qf(this,a);a=this.Ec[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ke===b&&(!c||c===a[d].Pa)){a.splice(d,1);break}};function Qf(a,b){H(Oa(a.Kf,function(a){return a===b}),"Unknown event: "+b)};function Rf(){Pf.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!Qb()){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.Ge("online",!1))},!1)}}ka(Rf,Pf);Rf.prototype.Ye=function(a){H("online"===a,"Unknown event type: "+a);return[this.ic]};ba(Rf);function Sf(){Pf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Nb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Nb&&(c.Nb=b,c.Ge("visible",b))},!1)}}ka(Sf,Pf);Sf.prototype.Ye=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Nb]};ba(Sf);var Tf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function Uf(a,b){this.Oa=a;this.ba=b?b:Vf}h=Uf.prototype;h.Ra=function(a,b){return new Uf(this.Oa,this.ba.Ra(a,b,this.Oa).Y(null,null,!1,null,null))};h.remove=function(a){return new Uf(this.Oa,this.ba.remove(a,this.Oa).Y(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.ba;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Wf(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.ba.e()};h.count=function(){return this.ba.count()};h.Hc=function(){return this.ba.Hc()};h.fc=function(){return this.ba.fc()};h.ia=function(a){return this.ba.ia(a)};
	h.Xb=function(a){return new Xf(this.ba,null,this.Oa,!1,a)};h.Yb=function(a,b){return new Xf(this.ba,a,this.Oa,!1,b)};h.$b=function(a,b){return new Xf(this.ba,a,this.Oa,!0,b)};h.$e=function(a){return new Xf(this.ba,null,this.Oa,!0,a)};function Xf(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Sa.push(a);break}else this.Sa.push(a),a=this.le?a.right:a.left}
	function R(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c}function Yf(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function Zf(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Vf;this.right=null!=e?e:Vf}h=Zf.prototype;
	h.Y=function(a,b,c,d,e){return new Zf(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function $f(a){return a.left.e()?a:$f(a.left)}h.Hc=function(){return $f(this).key};h.fc=function(){return this.right.e()?this.key:this.right.fc()};
	h.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return ag(e)};function bg(a){if(a.left.e())return Vf;a.left.fa()||a.left.left.fa()||(a=cg(a));a=a.Y(null,null,null,bg(a.left),null);return ag(a)}
	h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=cg(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=dg(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=eg(c),c.left.left.fa()&&(c=dg(c),c=eg(c)));if(0===b(a,c.key)){if(c.right.e())return Vf;d=$f(c.right);c=c.Y(d.key,d.value,null,null,bg(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return ag(c)};h.fa=function(){return this.color};
	function ag(a){a.right.fa()&&!a.left.fa()&&(a=fg(a));a.left.fa()&&a.left.left.fa()&&(a=dg(a));a.left.fa()&&a.right.fa()&&(a=eg(a));return a}function cg(a){a=eg(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,dg(a.right)),a=fg(a),a=eg(a));return a}function fg(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function dg(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
	function eg(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function gg(){}h=gg.prototype;h.Y=function(){return this};h.Ra=function(a,b){return new Zf(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ia=function(){return!1};h.Hc=function(){return null};h.fc=function(){return null};h.fa=function(){return!1};var Vf=new gg;function P(a,b,c){this.k=a;(this.aa=b)&&qe(this.aa);a.e()&&H(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.zb=c;this.Eb=null}h=P.prototype;h.J=function(){return!1};h.C=function(){return this.aa||F};h.ga=function(a){return this.k.e()?this:new P(this.k,a,this.zb)};h.R=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?F:a};h.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a))};h.Fa=function(a){return null!==this.k.get(a)};
	h.U=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new K(a,b),d,e;b.e()?(d=this.k.remove(a),c=Le(this.zb,c,this.k)):(d=this.k.Ra(a,b),c=Je(this.zb,c,this.k));e=d.e()?F:this.aa;return new P(d,e,c)};h.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===Zd(a),".priority must be the last token in a path");var d=this.R(c).F(D(a),b);return this.U(c,d)};h.e=function(){return this.k.e()};h.Fb=function(){return this.k.count()};
	var hg=/^(0|[1-9]\d*)$/;h=P.prototype;h.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,g){b[f]=g.H(a);c++;e&&hg.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};h.hash=function(){if(null===this.Eb){var a="";this.C().e()||(a+="priority:"+se(this.C().H())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Eb=""===a?"":Zc(a)}return this.Eb};
	h.Ze=function(a,b,c){return(c=ig(this,c))?(a=Wf(c,new K(a,b)))?a.name:null:Wf(this.k,a)};function oe(a,b){var c;c=(c=ig(a,b))?(c=c.Hc())&&c.name:a.k.Hc();return c?new K(c,a.k.get(c)):null}function pe(a,b){var c;c=(c=ig(a,b))?(c=c.fc())&&c.name:a.k.fc();return c?new K(c,a.k.get(c)):null}h.P=function(a,b){var c=ig(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.k.ia(b)};h.Xb=function(a){return this.Yb(a.Ic(),a)};
	h.Yb=function(a,b){var c=ig(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.k.Yb(a.name,Oc),d=Yf(c);null!=d&&0>b.compare(d,a);)R(c),d=Yf(c);return c};h.$e=function(a){return this.$b(a.Gc(),a)};h.$b=function(a,b){var c=ig(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.k.$b(a.name,Oc),d=Yf(c);null!=d&&0<b.compare(d,a);)R(c),d=Yf(c);return c};h.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===xe?-1:0};
	h.ob=function(a){if(a===de||ua(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.k;H(a!==de,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Oc),f=R(c);f;)e=e||a.yc(f.S),d.push(f),f=R(c);d=e?Ke(d,ne(a)):ue;e=a.toString();c=ya(b.dc);c[e]=a;a=ya(b.od);a[e]=d;return new P(this.k,this.aa,new Ie(a,c))};h.zc=function(a){return a===de||ua(this.zb.dc,a.toString())};
	h.ca=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().ca(a.C())&&this.k.count()===a.k.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=R(b);d=R(a)}return null===c&&null===d}return!1};function ig(a,b){return b===de?null:a.zb.get(b.toString())}h.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return F;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Vc(a,M(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Bb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=
	d.U(b,c)}});return d.ga(M(c))}var f=[],g=!1,k=a;Cb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(g=g||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return F;var m=Ke(f,Lc,function(a){return a.name},Nc);if(g){var l=Ke(f,ne(N));return new P(m,M(c),new Ie({".priority":l},{".priority":N}))}return new P(m,M(c),Me)}var jg=Math.log(2);
	function kg(a){this.count=parseInt(Math.log(a+1)/jg,10);this.Re=this.count-1;this.Lf=a+1&parseInt(Array(this.count+1).join("1"),2)}function lg(a){var b=!(a.Lf&1<<a.Re);a.Re--;return b}
	function Ke(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new Zf(u,l.S,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new Zf(u,l.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,g){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new Zf(G,k.S,g,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var G=lg(b),td=Math.pow(2,b.count-(z+1));G?d(td,!1):(d(td,!1),d(td,!0))}return l}(new kg(a.length));
	return null!==f?new Uf(d||b,f):new Uf(d||b)}function se(a){return"number"===typeof a?"number:"+nd(a):"string:"+a}function qe(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&Bb(b,".sv"),"Priority must be a string or number.")}else H(a===xe||a.e(),"priority of unexpected type.");H(a===xe||a.C().e(),"Priority nodes can't have a priority of their own.")}var F=new P(new Uf(Nc),null,Me);function mg(){P.call(this,new Uf(Nc),F,Me)}ka(mg,P);h=mg.prototype;
	h.tc=function(a){return a===this?0:1};h.ca=function(a){return a===this};h.C=function(){return this};h.R=function(){return F};h.e=function(){return!1};var xe=new mg,ve=new K("[MIN_NAME]",F),Be=new K("[MAX_NAME]",xe);function W(a,b,c){this.A=a;this.W=b;this.g=c}W.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Ue=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Ue;W.prototype.Vf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Vf;
	W.prototype.m=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));Kf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.W.m(b);return new W(this.A.Q(b),c,N)};W.prototype.child=W.prototype.m;W.prototype.Fa=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Kf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.Q(b).e()};W.prototype.hasChild=W.prototype.Fa;
	W.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new W(d,b.W.m(c),N))})};W.prototype.forEach=W.prototype.forEach;
	W.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.getKey()};pd(W.prototype,"key",W.prototype.getKey);W.prototype.Fb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Fb()};W.prototype.numChildren=W.prototype.Fb;
	W.prototype.xb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};pd(W.prototype,"ref",W.prototype.xb);function Xd(a,b){this.O=a;this.Ld=b}function Ud(a,b,c,d){return new Xd(new Ec(b,c,d),a.Ld)}function Yd(a){return a.O.ea?a.O.j():null}Xd.prototype.u=function(){return this.Ld};function Fc(a){return a.Ld.ea?a.Ld.j():null};function ng(a,b){this.W=a;var c=a.n,d=new ee(c.g),c=S(c)?new ee(c.g):c.xa?new ke(c):new fe(c);this.of=new Od(c);var e=b.u(),f=b.O,g=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Xd(new Ec(k,f.ea,c.Qa()),new Ec(g,e.ea,d.Qa()));this.ab=[];this.Sf=new Jd(a)}function og(a){return a.W}h=ng.prototype;h.u=function(){return this.Na.u().j()};h.jb=function(a){var b=Fc(this.Na);return b&&(S(this.W.n)||!a.e()&&!b.R(J(a)).e())?b.Q(a):null};h.e=function(){return 0===this.ab.length};h.Ob=function(a){this.ab.push(a)};
	h.mb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ja(this.ab,function(a){(a=a.Pe(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ab.length;++f){var g=this.ab[f];if(!g.matches(a))e.push(g);else if(a.af()){e=e.concat(this.ab.slice(f+1));break}}this.ab=e}else this.ab=[];return c};
	h.gb=function(a,b,c){a.type===Gd&&null!==a.source.Ib&&(H(Fc(this.Na),"We should always have a full cache before handling merges"),H(Yd(this.Na),"Missing event cache, even though we have a server cache"));var d=this.Na;a=this.of.gb(d,a,b,c);b=this.of;c=a.Sd;H(c.O.j().zc(b.V.g),"Event snap not indexed");H(c.u().j().zc(b.V.g),"Server snap not indexed");H(Ic(a.Sd.u())||!Ic(d.u()),"Once a server snap is complete, it should never go back");this.Na=a.Sd;return pg(this,a.Mf,a.Sd.O.j(),null)};
	function qg(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new I("child_added",b,a))});c.ea&&d.push(Gc(c.j()));return pg(a,d,c.j(),b)}function pg(a,b,c,d){return Kd(a.Sf,b,c,d?[d]:a.ab)};function rg(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null}h=rg.prototype;h.tf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new yc("value",this,new W(a.Ma,b.xb(),c))};h.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.Qb;return function(){d.call(b,a.Md)}};h.Pe=function(a,b){return this.sb?new zc(this,a,b):null};
	h.matches=function(a){return a instanceof rg?a.Qb&&this.Qb?a.Qb===this.Qb&&a.ub===this.ub:!0:!1};h.af=function(){return null!==this.Qb};function sg(a,b,c){this.ha=a;this.sb=b;this.ub=c}h=sg.prototype;h.tf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};h.Pe=function(a,b){return this.sb?new zc(this,a,b):null};
	h.createEvent=function(a,b){H(null!=a.Za,"Child events should have a childName.");var c=b.xb().m(a.Za);return new yc(a.type,this,new W(a.Ma,c,b.n.g),a.Dd)};h.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd)}};
	h.matches=function(a){if(a instanceof sg){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=qa(a.ha);if(b===qa(this.ha)){if(1===b){var b=ra(a.ha),c=ra(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return pa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};h.af=function(){return null!==this.ha};function X(a,b,c,d){this.w=a;this.path=b;this.n=c;this.Oc=d}
	function tg(a){var b=null,c=null;a.ka&&(b=he(a));a.na&&(c=je(a));if(a.g===de){if(a.ka){if("[MIN_NAME]"!=ge(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=ie(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!Cf(b)||null!=c&&!Cf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof we||a.g===Ce,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function ug(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function vg(a,b){if(!0===a.Oc)throw Error(b+": You can't combine multiple orderBy calls.");}h=X.prototype;h.xb=function(){y("Query.ref",0,0,arguments.length);return new U(this.w,this.path)};
	h.hc=function(a,b,c,d){y("Query.on",2,4,arguments.length);If("Query.on",a,!1);A("Query.on",2,b,!1);var e=wg("Query.on",c,d);if("value"===a)xg(this.w,this,new rg(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;xg(this.w,this,new sg(f,e.cancel,e.Pa))}return b};
	h.Jc=function(a,b,c){y("Query.off",0,3,arguments.length);If("Query.off",a,!0);A("Query.off",2,b,!0);Eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new rg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new sg(e,null,c||null));e=this.w;d=".info"===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);uc(e.da,this.path,d)};
	h.kg=function(a,b){function c(k){f&&(f=!1,e.Jc(a,c),b&&b.call(d.Pa,k),g.resolve(k))}y("Query.once",1,4,arguments.length);If("Query.once",a,!1);A("Query.once",2,b,!0);var d=wg("Query.once",arguments[2],arguments[3]),e=this,f=!0,g=new Hb;Jb(g.ra);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&&d.cancel.call(d.Pa,b);g.reject(b)});return g.ra};
	h.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.ne(a),this.Oc)};
	h.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.oe(a),this.Oc)};
	h.lg=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Kf("Query.orderByChild",a);vg(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new we(b);b=Ge(this.n,b);tg(b);return new X(this.w,this.path,b,!0)};h.mg=function(){y("Query.orderByKey",0,0,arguments.length);vg(this,"Query.orderByKey");var a=Ge(this.n,de);tg(a);return new X(this.w,this.path,a,!0)};h.ng=function(){y("Query.orderByPriority",0,0,arguments.length);vg(this,"Query.orderByPriority");var a=Ge(this.n,N);tg(a);return new X(this.w,this.path,a,!0)};
	h.og=function(){y("Query.orderByValue",0,0,arguments.length);vg(this,"Query.orderByValue");var a=Ge(this.n,Ce);tg(a);return new X(this.w,this.path,a,!0)};h.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Df("Query.startAt",a,this.path,!0);Jf("Query.startAt",b);var c=this.n.Nd(a,b);ug(c);tg(c);if(this.n.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new X(this.w,this.path,c,this.Oc)};
	h.fd=function(a,b){y("Query.endAt",0,2,arguments.length);Df("Query.endAt",a,this.path,!0);Jf("Query.endAt",b);var c=this.n.fd(a,b);ug(c);tg(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.w,this.path,c,this.Oc)};
	h.Rf=function(a,b){y("Query.equalTo",1,2,arguments.length);Df("Query.equalTo",a,this.path,!1);Jf("Query.equalTo",b);if(this.n.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).fd(a,b)};
	h.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.w.toString()+(b||"/")};h.ya=function(){var a=kd(He(this.n));return"{}"===a?"default":a};
	function wg(a,b,c){var d={cancel:null,Pa:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Pa=c,Eb(a,4,d.Pa);else if(b)if("object"===typeof b&&null!==b)d.Pa=b;else if("function"===typeof b)d.cancel=b;else throw Error(Db(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.kg;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.lg;
	X.prototype.orderByKey=X.prototype.mg;X.prototype.orderByPriority=X.prototype.ng;X.prototype.orderByValue=X.prototype.og;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Rf;X.prototype.toString=X.prototype.toString;pd(X.prototype,"ref",X.prototype.xb);function yg(a,b){this.value=a;this.children=b||zg}var zg=new Uf(function(a,b){return a===b?0:a<b?-1:1});function Ag(a){var b=Q;t(a,function(a,d){b=b.set(new L(d),a)});return b}h=yg.prototype;h.e=function(){return null===this.value&&this.children.e()};function Bg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=Bg(a,D(b),c),null!=b?{path:(new L(d)).m(b.path),value:b.value}:null):null}
	function Cg(a,b){return Bg(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};h.set=function(a,b){if(a.e())return new yg(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new yg(this.value,c)};
	h.remove=function(a){if(a.e())return this.children.e()?Q:new yg(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&&b.e()?Q:new yg(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
	function ce(a,b,c){if(b.e())return c;var d=J(b);b=ce(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new yg(a.value,d)}function Dg(a,b){return Eg(a,C,b)}function Eg(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Eg(f,b.m(a),c)});return c(b,a.value,d)}function Fg(a,b,c){return Gg(a,b,C,c)}function Gg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?Gg(a,D(b),c.m(e),d):null}
	function Hg(a,b,c){Ig(a,b,C,c)}function Ig(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?Ig(a,D(b),c.m(e),d):Q}function ae(a,b){Jg(a,C,b)}function Jg(a,b,c){a.children.ia(function(a,e){Jg(e,b.m(a),c)});a.value&&c(b,a.value)}function Kg(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Q=new yg(null);yg.prototype.toString=function(){var a={};ae(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Lg(a,b,c){this.type=Td;this.source=Mg;this.path=a;this.Pb=b;this.Id=c}Lg.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return H(this.Pb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Pb.subtree(new L(a));return new Lg(C,a,this.Id)}H(J(this.path)===a,"operationForChild called for unrelated child.");return new Lg(D(this.path),this.Pb,this.Id)};
	Lg.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Pb+")"};var ac=0,Gd=1,Td=2,cc=3;function Ng(a,b,c,d){this.ee=a;this.We=b;this.Ib=c;this.Ee=d;H(!d||b,"Tagged queries must be from server.")}var Mg=new Ng(!0,!1,null,!1),Og=new Ng(!1,!0,null,!1);Ng.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Ib+")":"server"};function Pg(a){this.X=a}var Qg=new Pg(new yg(null));function Rg(a,b,c){if(b.e())return new Pg(new yg(c));var d=Cg(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new Pg(a.X.set(e,d))}a=ce(a.X,b,new yg(c));return new Pg(a)}function Sg(a,b,c){var d=a;Cb(c,function(a,c){d=Rg(d,b.m(a),c)});return d}Pg.prototype.Ed=function(a){if(a.e())return Qg;a=ce(this.X,a,Q);return new Pg(a)};function Tg(a,b){var c=Cg(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null}
	function Ug(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new K(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new K(a,c.value))});return b}function Vg(a,b){if(b.e())return a;var c=Tg(a,b);return null!=c?new Pg(new yg(c)):new Pg(a.X.subtree(b))}Pg.prototype.e=function(){return this.X.e()};Pg.prototype.apply=function(a){return Wg(C,this.X,a)};
	function Wg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Wg(a.m(b),f,c)});c.Q(a).e()||null===d||(c=c.F(a.m(".priority"),d));return c};function Xg(){this.Aa={}}h=Xg.prototype;h.e=function(){return xa(this.Aa)};h.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=x(this.Aa,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c))});return e};h.Ob=function(a,b,c,d,e){var f=a.ya(),g=x(this.Aa,f);if(!g){var g=c.Ba(e?d:null),k=!1;g?k=!0:(g=d instanceof P?c.sc(d):F,k=!1);g=new ng(a,new Xd(new Ec(g,k,!1),new Ec(d,e,!1)));this.Aa[f]=g}g.Ob(b);return qg(g,b)};
	h.mb=function(a,b,c){var d=a.ya(),e=[],f=[],g=null!=Yg(this);if("default"===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&&(delete k.Aa[d],S(a.W.n)||e.push(a.W))})}else{var m=x(this.Aa,d);m&&(f=f.concat(m.mb(b,c)),m.e()&&(delete this.Aa[d],S(m.W.n)||e.push(m.W)))}g&&null==Yg(this)&&e.push(new U(a.w,a.path));return{sg:e,Tf:f}};function Zg(a){return Ka(sa(a.Aa),function(a){return!S(a.W.n)})}h.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a)});return b};
	function $g(a,b){if(S(b.n))return Yg(a);var c=b.ya();return x(a.Aa,c)}function Yg(a){return wa(a.Aa,function(a){return S(a.W.n)})||null};function ah(){this.T=Qg;this.la=[];this.Cc=-1}function bh(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}h=ah.prototype;
	h.Ed=function(a){var b=Pa(this.la,function(b){return b.Zc===a});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var g=this.la[f];g.visible&&(f>=b&&ch(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.T=dh(this.la,eh,C),this.Cc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.m(b))})}return!0}return!1};
	h.Ba=function(a,b,c,d){if(c||d){var e=Vg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Tg(e,C)?(e=dh(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||F,e.apply(b)):null}e=Tg(this.T,a);if(null!=e)return e;e=Vg(this.T,a);return e.e()?b:null!=b||null!=Tg(e,C)?(b=b||F,e.apply(b)):null};
	h.sc=function(a,b){var c=F,d=Tg(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=Vg(this.T,a);b.P(N,function(a,b){var d=Vg(e,new L(a)).apply(b);c=c.U(a,d)});Ja(Ug(e),function(a){c=c.U(a.name,a.S)})}else e=Vg(this.T,a),Ja(Ug(e),function(a){c=c.U(a.name,a.S)});return c};h.$c=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.m(b);if(null!=Tg(this.T,a))return null;a=Vg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
	h.rc=function(a,b,c){a=a.m(b);var d=Tg(this.T,a);return null!=d?d:Dc(c,b)?Vg(this.T,a).apply(c.j().R(b)):null};h.mc=function(a){return Tg(this.T,a)};h.Xd=function(a,b,c,d,e,f){var g;a=Vg(this.T,a);g=Tg(a,C);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.ob(f);if(g.e()||g.J())return[];b=[];a=ne(f);e=e?g.$b(c,f):g.Yb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b};
	function ch(a,b){return a.Ja?a.path.contains(b):!!va(a.children,function(c,d){return a.path.m(d).contains(b)})}function eh(a){return a.visible}
	function dh(a,b,c){for(var d=Qg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ja)c.contains(g)?(g=T(c,g),d=Rg(d,g,f.Ja)):g.contains(c)&&(g=T(g,c),d=Rg(d,C,f.Ja.Q(g)));else if(f.children)if(c.contains(g))g=T(c,g),d=Sg(d,g,f.children);else{if(g.contains(c))if(g=T(g,c),g.e())d=Sg(d,C,f.children);else if(f=x(f.children,J(g)))f=f.Q(D(g)),d=Rg(d,C,f)}else throw Xc("WriteRecord should have .snap or .children");}}return d}function fh(a,b){this.Mb=a;this.X=b}h=fh.prototype;
	h.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c)};h.sc=function(a){return this.X.sc(this.Mb,a)};h.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c)};h.mc=function(a){return this.X.mc(this.Mb.m(a))};h.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e)};h.rc=function(a,b){return this.X.rc(this.Mb,a,b)};h.m=function(a){return new fh(this.Mb.m(a),this.X)};function gh(){this.children={};this.ad=0;this.value=null}function hh(a,b,c){this.ud=a?a:"";this.Ha=b?b:null;this.A=c?c:new gh}function ih(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new hh(e,d,x(d.A.children,e)||new gh),c=D(c);return d}h=hh.prototype;h.Ea=function(){return this.A.value};function jh(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;kh(a)}h.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;kh(this)};
	h.kd=function(){return 0<this.A.ad};h.e=function(){return null===this.Ea()&&!this.kd()};h.P=function(a){var b=this;t(this.A.children,function(c,d){a(new hh(d,b,c))})};function lh(a,b,c,d){c&&!d&&b(a);a.P(function(a){lh(a,b,!0,d)});c&&d&&b(a)}function mh(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new L(null===this.Ha?this.ud:this.Ha.path()+"/"+this.ud)};h.name=function(){return this.ud};h.parent=function(){return this.Ha};
	function kh(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Bb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.ad--,kh(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,kh(b))}};function nh(a,b,c,d,e,f){this.id=oh++;this.f=cd("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Pc=0;this.Lc=[];this.ma=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.ue=d;this.M=a;this.pb=this.Ia=this.Db=this.ze=null;this.Vd=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Je=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.tg=0;this.Ve=!0;this.Bc=this.me=null;ph(this,0);Sf.Wb().hc("visible",this.jg,this);-1===
	a.host.indexOf("fblocal")&&Rf.Wb().hc("online",this.ig,this)}var oh=0,qh=0;h=nh.prototype;h.ua=function(a,b,c){var d=++this.tg;a={r:d,a:a,b:b};this.f(B(a));H(this.ma,"sendRequest call when we're not connected not allowed.");this.Ia.ua(a);c&&(this.Gd[d]=c)};
	h.df=function(a,b,c,d){var e=a.ya(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};H(Cd(a.n)||!S(a.n),"listen() called for non-default but complete query");H(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,pg:a,tag:c};this.$[f][e]=a;this.ma&&rh(this,a)};
	function rh(a,b){var c=b.pg,d=c.path.toString(),e=c.ya();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=He(c.n),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&Bb(k,"w")){var l=x(k,"w");da(l)&&0<=Ia(l,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&sh(a,d,e),b.G&&b.G(m,
	k))})}h.qf=function(a){this.pb=a;this.f("Auth token refreshed");this.pb?th(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||sd(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function th(a){if(a.ma&&a.pb){var b=a.pb,c=rd(b)?"auth":"gauth",d={cred:b};a.Je&&(d.authvar=a.Je);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.pb===b&&("ok"===d?this.ke=0:uh(a,d,c))})}}
	h.Ef=function(a,b){var c=a.path.toString(),d=a.ya();this.f("Unlisten called for "+c+" "+d);H(Cd(a.n)||!S(a.n),"unlisten() called for non-default but complete query");if(sh(this,c,d)&&this.ma){var e=He(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};h.re=function(a,b,c){this.ma?vh(this,"o",a,b,c):this.Lc.push({we:a,action:"o",data:b,G:c})};h.gf=function(a,b,c){this.ma?vh(this,"om",a,b,c):this.Lc.push({we:a,action:"om",data:b,G:c})};
	h.xd=function(a,b){this.ma?vh(this,"oc",a,null,b):this.Lc.push({we:a,action:"oc",data:null,G:b})};function vh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){wh(this,"p",a,b,c,d)};h.ef=function(a,b,c,d){wh(this,"m",a,b,c,d)};function wh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.pa.push({action:b,sf:d,G:e});a.Pc++;b=a.pa.length-1;a.ma?xh(a,b):a.f("Buffering put: "+c)}
	function xh(a,b){var c=a.pa[b].action,d=a.pa[b].sf,e=a.pa[b].G;a.pa[b].qg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Pc--;0===a.Pc&&(a.pa=[]);e&&e(d.s,d.d)})}h.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	h.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Hb(a.p,a.d,!1,a.t):"m"===b?this.Hb(a.p,a.d,!0,a.t):"c"===b?yh(this,a.p,a.q):"ac"===b?uh(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):dd("Unrecognized action received from server: "+
	B(b)+"\nAre you using the latest client?"))}};h.Mc=function(a,b){this.f("connection ready");this.ma=!0;this.Bc=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Db=b;if(this.Ve){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;Qb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}zh(this);this.Ve=!1;this.Kc(!0)};
	function ph(a,b){H(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.vb&&clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;Ah(a)},Math.floor(b))}h.jg=function(a){a&&!this.Nb&&this.Va===this.td&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.Ia||ph(this,0));this.Nb=a};h.ig=function(a){a?(this.f("Browser went online."),this.Va=1E3,this.Ia||ph(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
	h.jf=function(){this.f("data client disconnected");this.ma=!1;this.Ia=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.sf&&b.qg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Pc--)}0===this.Pc&&(this.pa=[]);this.Gd={};Bh(this)&&(this.Nb?this.Bc&&(3E4<(new Date).getTime()-this.Bc&&(this.Va=1E3),this.Bc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),ph(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1)};
	function Ah(a){if(Bh(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.jf,a),e=a.id+":"+qh++,f=a.Db,g=!1,k=null,m=function(){k?k.close():(g=!0,d())};a.Ia={close:m,ua:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){g?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.pb=l&&l.accessToken,k=new af(e,a.M,b,c,d,function(b){O(b+
	" ("+a.M.toString()+")");a.eb("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);g||m()})}}h.eb=function(a){E("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&&(clearTimeout(this.vb),this.vb=null),this.ma&&this.jf())};h.lc=function(a){E("Resuming connection for reason: "+a);delete this.qd[a];xa(this.qd)&&(this.Va=1E3,this.Ia||ph(this,0))};
	function yh(a,b,c){c=c?La(c,function(a){return kd(a)}).join("$"):"default";(a=sh(a,b,c))&&a.G&&a.G("permission_denied")}function sh(a,b,c){b=(new L(b)).toString();var d;p(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===qa(a.$[b])&&delete a.$[b]):d=void 0;return d}
	function uh(a,b,c){E("Auth token revoked: "+b+"/"+c);a.pb=null;a.de=!0;a.Ia.close();"invalid_token"===b&&(a.ke++,3<=a.ke&&(a.Va=3E4,O("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")))}
	function zh(a){th(a);t(a.$,function(b){t(b,function(b){rh(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&xh(a,b);for(;a.Lc.length;)b=a.Lc.shift(),vh(a,b.action,b.we,b.data,b.G)}function Bh(a){var b;b=Rf.Wb().ic;return xa(a.qd)&&b};var Y={Xf:function(){Qe=wd=!0}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){Re=!0};Y.forceWebSockets=Y.Yf;Y.dg=function(){return vd.isAvailable()};Y.isWebSocketsAvailable=Y.dg;Y.wg=function(a,b){a.w.Ua.ze=b};Y.setSecurityDebugCallback=Y.wg;Y.Be=function(a,b){a.w.Be(b)};Y.stats=Y.Be;Y.Ce=function(a,b){a.w.Ce(b)};Y.statsIncrementCounter=Y.Ce;Y.ed=function(a){return a.w.ed};Y.dataUpdateCount=Y.ed;Y.cg=function(a,b){a.w.je=b};Y.interceptServerData=Y.cg;function Ch(a){this.wa=Q;this.lb=new ah;this.De={};this.jc={};this.Dc=a}function Dh(a,b,c,d,e){var f=a.lb,g=e;H(d>f.Cc,"Stacking an older write on top of newer ones");p(g)||(g=!0);f.la.push({path:b,Ja:c,Zc:d,visible:g});g&&(f.T=Rg(f.T,b,c));f.Cc=d;return e?Eh(a,new $b(Mg,b,c)):[]}function Fh(a,b,c,d){var e=a.lb;H(d>e.Cc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.T=Sg(e.T,b,c);e.Cc=d;c=Ag(c);return Eh(a,new Fd(Mg,b,c))}
	function Gh(a,b,c){c=c||!1;var d=bh(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Cb(d.children,function(a,b){e=e.set(new L(a),b)});return Eh(a,new Lg(d.path,e,c))}return[]}function Hh(a,b,c){c=Ag(c);return Eh(a,new Fd(Og,b,c))}function Ih(a,b,c,d){d=Jh(a,d);if(null!=d){var e=Kh(d);d=e.path;e=e.Ib;b=T(d,b);c=new $b(new Ng(!1,!0,e,!0),b,c);return Lh(a,d,c)}return[]}
	function Mh(a,b,c,d){if(d=Jh(a,d)){var e=Kh(d);d=e.path;e=e.Ib;b=T(d,b);c=Ag(c);c=new Fd(new Ng(!1,!0,e,!0),b,c);return Lh(a,d,c)}return[]}
	Ch.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Hg(this.wa,c,function(a,b){var f=T(a,c);d=d||b.jb(f);e=e||null!=Yg(b)});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.jb(C)):(f=new Xg,this.wa=this.wa.set(c,f));var g;null!=d?g=!0:(g=!1,d=F,Kg(this.wa.subtree(c),function(a,b){var c=b.jb(C);c&&(d=d.U(a,c))}));var k=null!=$g(f,a);if(!k&&!S(a.n)){var m=Nh(a);H(!(m in this.jc),"View does not exist, but we have a tag");var l=Oh++;this.jc[m]=l;this.De["_"+l]=m}g=f.Ob(a,b,new fh(c,this.lb),d,g);k||
	e||(f=$g(f,a),g=g.concat(Ph(this,a,f)));return g};
	Ch.prototype.mb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ya()||null!=$g(e,a))){f=e.mb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.sg;f=f.Tf;b=-1!==Pa(e,function(a){return S(a.n)});var g=Fg(this.wa,d,function(a,b){return null!=Yg(b)});if(b&&!g&&(d=this.wa.subtree(d),!d.e()))for(var d=Qh(d),k=0;k<d.length;++k){var m=d[k],l=m.W,m=Rh(this,m);this.Dc.Ae(Sh(l),Th(this,l),m.ld,m.G)}if(!g&&0<e.length&&!c)if(b)this.Dc.Od(Sh(a),null);else{var u=this;Ja(e,function(a){a.ya();
	var b=u.jc[Nh(a)];u.Dc.Od(Sh(a),b)})}Uh(this,e)}return f};Ch.prototype.Ba=function(a,b){var c=this.lb,d=Fg(this.wa,a,function(b,c){var d=T(b,a);if(d=c.jb(d))return d});return c.Ba(a,d,b,!0)};function Qh(a){return Dg(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));t(d,function(a){e=e.concat(a)});return e})}function Uh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.n)){var d=Nh(d),e=a.jc[d];delete a.jc[d];delete a.De["_"+e]}}}
	function Sh(a){return S(a.n)&&!Cd(a.n)?a.xb():a}function Ph(a,b,c){var d=b.path,e=Th(a,b);c=Rh(a,c);b=a.Dc.Ae(Sh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)H(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Dg(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[og(Yg(b))];var d=[];b&&(d=d.concat(La(Zg(b),function(a){return a.W})));t(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Dc.Od(Sh(c),Th(a,c));return b}
	function Rh(a,b){var c=b.W,d=Th(a,c);return{ld:function(){return(b.u()||F).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=Jh(a,d)){var g=Kh(b);b=g.path;g=g.Ib;f=T(b,f);f=new bc(new Ng(!1,!0,g,!0),f);b=Lh(a,b,f)}else b=[]}else b=Eh(a,new bc(Og,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.mb(c,null,f)}}}function Nh(a){return a.path.toString()+"$"+a.ya()}function Kh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new L(a.substr(0,b))}}function Jh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function Th(a,b){var c=Nh(b);return x(a.jc,c)}var Oh=1;
	function Lh(a,b,c){var d=a.wa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new fh(b,a.lb),null)}function Eh(a,b){return Vh(a,b,a.wa,null,new fh(C,a.lb))}function Vh(a,b,c,d,e){if(b.path.e())return Wh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var g=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&&m)var l=d?d.R(k):null,k=e.m(k),g=g.concat(Vh(a,m,c,l,k));f&&(g=g.concat(f.gb(b,e,d)));return g}
	function Wh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var g=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.m(c),z=b.Nc(c);z&&(g=g.concat(Wh(a,z,f,l,u)))});f&&(g=g.concat(f.gb(b,e,d)));return g};function sf(a,b,c){this.app=c;var d=new dc(c);this.M=a;this.Xa=pc(a);this.Vc=null;this.da=new rc;this.vd=1;this.Ua=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Ad(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
	try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ua=new nh(this.M,r(this.Hb,this),r(this.Kc,this),r(this.ue,this),d,b)}var f=this;ec(d,function(a){f.va.qf(a)});this.zg=qc(a,r(function(){return new jc(this.Xa,this.va)},this));this.nc=new hh;this.ie=new fc;this.pd=new Ch({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=Eh(f.pd,new $b(Og,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:aa});Xh(this,"connected",!1);this.ja=new Rc;this.$a=new rf(this);this.ed=
	0;this.je=null;this.K=new Ch({Ae:function(a,b,c,d){f.va.df(a,c,b,function(b,c){var e=d(b,c);wc(f.da,a.path,e)});return[]},Od:function(a,b){f.va.Ef(a,b)}})}h=sf.prototype;h.toString=function(){return(this.M.Sc?"https://":"http://")+this.M.host};h.name=function(){return this.M.pe};function Yh(a){a=a.ie.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Zh(a){a=a={timestamp:Yh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	h.Hb=function(a,b,c,d){this.ed++;var e=new L(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=oa(b,function(a){return M(a)}),a=Mh(this.K,e,b,d)):(b=M(b),a=Ih(this.K,e,b,d)):c?(d=oa(b,function(a){return M(a)}),a=Hh(this.K,e,d)):(d=M(b),a=Eh(this.K,new $b(Og,e,d)));d=e;0<a.length&&(d=$h(this,e));wc(this.da,d,a)};h.Kc=function(a){Xh(this,"connected",a);!1===a&&ai(this)};h.ue=function(a){var b=this;md(a,function(a,d){Xh(b,d,a)})};
	function Xh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=Eh(a.pd,new $b(Og,b,c));wc(a.da,b,c)}h.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Gg:c});var e=Zh(this);b=M(b,c);var e=Uc(b,e),f=this.vd++,e=Dh(this.K,a,e,f,!0);sc(this.da,e);var g=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=Gh(g.K,f,!e);wc(g.da,a,e);bi(d,b,c)});e=ci(this,a);$h(this,e);wc(this.da,e,[])};
	h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Zh(this),f={};t(b,function(a,b){d=!1;var c=M(a);f[b]=Uc(c,e)});if(d)E("update() called with empty data.  Don't do anything."),bi(c,"ok");else{var g=this.vd++,k=Fh(this.K,a,f,g);sc(this.da,k);var m=this;this.va.ef(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=Gh(m.K,g,!e),f=a;0<e.length&&(f=$h(m,a));wc(m.da,f,e);bi(c,b,d)});b=ci(this,a);$h(this,b);wc(this.da,a,[])}};
	function ai(a){a.f("onDisconnectEvents");var b=Zh(a),c=[];Sc(Qc(a.ja,b),C,function(b,e){c=c.concat(Eh(a.K,new $b(Og,b,e)));var f=ci(a,b);$h(a,f)});a.ja=new Rc;wc(a.da,C,c)}h.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&yf(c.ja,a);bi(b,d,e)})};function Mf(a,b,c,d){var e=M(c);a.va.re(b.toString(),e.H(!0),function(c,g){"ok"===c&&Tc(a.ja,b,e);bi(d,c,g)})}function Nf(a,b,c,d,e){var f=M(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Tc(a.ja,b,f);bi(e,c,d)})}
	function Of(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),bi(d,"ok")):a.va.gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=M(c[m]);Tc(a.ja,b.m(m),l)}bi(d,e,f)})}function xg(a,b,c){c=".info"===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);uc(a.da,b.path,c)}h.eb=function(){this.Ua&&this.Ua.eb("repo_interrupt")};h.lc=function(){this.Ua&&this.Ua.lc("repo_interrupt")};
	h.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new kc(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ma(ta(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Ce=function(a){mc(this.Xa,a);this.zg.zf[a]=!0};h.f=function(a){var b="";this.Ua&&(b=this.Ua.id+":");E(b,arguments)};
	function bi(a,b,c){a&&Ub(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function di(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new U(a,b);g.hc("value",f);c={path:b,update:c,G:d,status:null,lf:Wc(),Ie:e,wf:0,Rd:function(){g.Jc("value",f)},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Ef("transaction failed: Data returned ",d,c.path);c.status=1;e=ih(a.nc,b);var k=e.Ea()||[];k.push(c);jh(e,k);"object"===typeof d&&null!==d&&Bb(d,".priority")?(k=x(d,".priority"),H(Cf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.K.Ba(b)||F).C().H();e=Zh(a);d=M(d,k);e=Uc(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=Dh(a.K,b,e,c.Da,c.Ie);wc(a.da,b,c);ei(a)}else c.Rd(),c.cd=null,c.dd=null,c.G&&(a=new W(c.bd,new U(a,c.path),N),c.G(null,!1,a))}function ei(a,b){var c=b||a.nc;b||fi(a,c);if(null!==c.Ea()){var d=gi(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&hi(a,c.path(),d)}else c.kd()&&c.P(function(b){ei(a,b)})}
	function hi(a,b,c){for(var d=La(c,function(a){return a.Da}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];H(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.wf++;var k=T(b,g.path),d=d.F(k,g.cd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(Gh(a.K,c[f].Da));if(c[f].G){var g=c[f].dd,k=new U(a,c[f].path);d.push(r(c[f].G,
	null,null,!0,new W(g,k,N)))}c[f].Rd()}fi(a,ih(a.nc,b));ei(a);wc(a.da,b,e);for(f=0;f<d.length;f++)Ub(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;$h(a,b)}},e)}function $h(a,b){var c=ii(a,b),d=c.path(),c=gi(a,c);ji(a,c,d);return d}
	function ji(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status}),f=La(f,function(a){return a.Da}),g=0;g<b.length;g++){var k=b[g],m=T(c,k.path),l=!1,u;H(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(Gh(a.K,k.Da,!0));else if(1===k.status)if(25<=k.wf)l=!0,u="maxretry",e=e.concat(Gh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[g].update(z.H());p(G)?(Ef("transaction failed: Data returned ",G,
	k.path),m=M(G),"object"===typeof G&&null!=G&&Bb(G,".priority")||(m=m.ga(z.C())),z=k.Da,G=Zh(a),G=Uc(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Qa(f,z),e=e.concat(Dh(a.K,k.path,G,k.Da,k.Ie)),e=e.concat(Gh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(Gh(a.K,k.Da,!0)))}wc(a.da,c,e);e=[];l&&(b[g].status=3,setTimeout(b[g].Rd,Math.floor(0)),b[g].G&&("nodata"===u?(k=new U(a,b[g].path),d.push(r(b[g].G,null,null,!1,new W(b[g].bd,k,N)))):d.push(r(b[g].G,null,Error(u),!1,null))))}fi(a,a.nc);for(g=0;g<d.length;g++)Ub(d[g]);ei(a)}}
	function ii(a,b){for(var c,d=a.nc;null!==(c=J(b))&&null===d.Ea();)d=ih(d,c),b=D(b);return d}function gi(a,b){var c=[];ki(a,b,c);c.sort(function(a,b){return a.lf-b.lf});return c}function ki(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){ki(a,b,c)})}function fi(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;jh(b,0<c.length?c:null)}b.P(function(b){fi(a,b)})}
	function ci(a,b){var c=ii(a,b).path(),d=ih(a.nc,b);mh(d,function(b){li(a,b)});li(a,d);lh(d,function(b){li(a,b)});return c}
	function li(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(H(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].Td="set"):(H(1===c[g].status,"Unexpected transaction status in abort"),c[g].Rd(),e=e.concat(Gh(a.K,c[g].Da,!0)),c[g].G&&d.push(r(c[g].G,null,Error("set"),!1,null))));-1===f?jh(b,null):c.length=f+1;wc(a.da,b.path(),e);for(g=0;g<d.length;g++)Ub(d[g])}};function xf(){this.nb={};this.Ff=!1}xf.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb()};xf.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc()};xf.prototype.ce=function(a){this.Ff=a};ba(xf);xf.prototype.interrupt=xf.prototype.eb;xf.prototype.resume=xf.prototype.lc;var Z={};Z.pc=nh;Z.DataConnection=Z.pc;nh.prototype.yg=function(a,b){this.ua("q",{p:a},b)};Z.pc.prototype.simpleListen=Z.pc.prototype.yg;nh.prototype.Qf=function(a,b){this.ua("echo",{d:a},b)};Z.pc.prototype.echo=Z.pc.prototype.Qf;nh.prototype.interrupt=nh.prototype.eb;Z.If=af;Z.RealTimeConnection=Z.If;af.prototype.sendRequest=af.prototype.ua;af.prototype.close=af.prototype.close;
	Z.bg=function(a){var b=nh.prototype.put;nh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){nh.prototype.put=b}};Z.hijackHash=Z.bg;Z.Hf=gc;Z.ConnectionTarget=Z.Hf;Z.ya=function(a){return a.ya()};Z.queryIdentifier=Z.ya;Z.eg=function(a){return a.w.Ua.$};Z.listens=Z.eg;Z.ce=function(a){xf.Wb().ce(a)};Z.forceRestClient=Z.ce;Z.Context=xf;function U(a,b){if(!(a instanceof sf))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,Ee,!1);this.then=void 0;this["catch"]=void 0}ka(U,X);h=U.prototype;h.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:$d(this.path)};
	h.m=function(a){y("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Kf("Firebase.child",b)}else Kf("Firebase.child",a);return new U(this.w,this.path.m(a))};h.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.w,a)};
	h.Zf=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};h.Pf=function(){return this.w.$a};h.set=function(a,b){y("Firebase.set",1,2,arguments.length);Lf("Firebase.set",this.path);Df("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new Hb;this.w.Kb(this.path,a,null,Ib(c,b));return c.ra};
	h.update=function(a,b){y("Firebase.update",1,2,arguments.length);Lf("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Gf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new Hb;this.w.update(this.path,a,Ib(c,b));return c.ra};
	h.Kb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Lf("Firebase.setWithPriority",this.path);Df("Firebase.setWithPriority",a,this.path,!1);Hf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new Hb;this.w.Kb(this.path,a,b,Ib(d,c));return d.ra};
	h.remove=function(a){y("Firebase.remove",0,1,arguments.length);Lf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a)};
	h.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Lf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(Db("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Hb;ga(b)&&Jb(d.ra);di(this.w,this.path,a,function(a,c,
	g){a?d.reject(a):d.resolve(new Pb(c,g));ga(b)&&b(a,c,g)},c);return d.ra};h.vg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Lf("Firebase.setPriority",this.path);Hf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new Hb;this.w.Kb(this.path.m(".priority"),a,null,Ib(c,b));return c.ra};
	h.push=function(a,b){y("Firebase.push",0,2,arguments.length);Lf("Firebase.push",this.path);Df("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Yh(this.w),d=Tf(c),c=this.m(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.m(d)});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);ga(b)&&Jb(f)}return c};h.kb=function(){Lf("Firebase.onDisconnect",this.path);return new V(this.w,this.path)};U.prototype.child=U.prototype.m;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;
	U.prototype.setWithPriority=U.prototype.Kb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.vg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.kb;pd(U.prototype,"database",U.prototype.Pf);pd(U.prototype,"key",U.prototype.getKey);pd(U.prototype,"parent",U.prototype.getParent);pd(U.prototype,"root",U.prototype.Zf);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
	try{firebase.INTERNAL.registerService("database",function(a){var b=xf.Wb(),c=a.options.databaseURL;p(c)||ed("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=fd(c),c=d.kc;wf("Invalid Firebase Database URL",d);d.path.e()||ed("Database URL must point to the root of a Firebase Database (not including a child path).");(d=x(b.nb,a.name))&&ed("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new sf(c,b.Ff,a);b.nb[a.name]=
	d;return d.$a},{Reference:U,Query:X,Database:rf,enableLogging:bd,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:uf})}catch(mi){ed("Failed to register the Firebase Database Service ("+mi+")")};})();

	(function() {var k,aa=aa||{},m=this,n=function(a){return void 0!==a},ba=function(){},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=
	typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){return"string"==typeof a},r=function(a){return"function"==p(a)},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ga=function(a,b,c){return a.call.apply(a.bind,
	arguments)},ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return t.apply(null,arguments)},ia=Date.now||function(){return+new Date},u=function(a,b){function c(){}
	c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.La=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ja=function(a,b,c){function d(){ya||(ya=!0,b.apply(null,arguments))}function e(b){l=setTimeout(function(){l=null;a(f,2===N)},b)}function f(a,b){if(!ya)if(a)d.apply(null,arguments);else if(2===N||F)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===N?(N=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){cc||(cc=!0,ya||(null!==l?(a||(N=2),clearTimeout(l),e(0)):a||(N=1)))}var h=1,l=null,F=!1,N=0,ya=!1,cc=!1;e(0);setTimeout(function(){F=!0;g(!0)},c);return g};var ka="https://firebasestorage.googleapis.com";var v=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};u(v,Error);
	var la=function(){return new v("unknown","An unknown error occurred, please check the error payload for server response.")},ma=function(){return new v("canceled","User canceled the upload/download.")},na=function(){return new v("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},oa=function(a,b,c){return new v("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},pa=function(){return new v("app-deleted","The Firebase app was deleted.")},qa=function(a,b){return new v("invalid-format",
	"String does not match format '"+a+"': "+b)};var ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){var b={};ra(a,function(a,d){b[a]=d});return b};var w=function(a,b,c,d){this.l=a;this.f={};this.i=b;this.b={};this.c="";this.M=c;this.g=this.a=null;this.h=[200];this.j=d};var ta={STATE_CHANGED:"state_changed"},ua={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},va=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var x=function(a){return n(a)&&null!==a},wa=function(a){return"string"===typeof a||a instanceof String},xa=function(){return"undefined"!==typeof Blob};var za=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};za.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var Aa=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var Ba=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(Ba,Error);Ba.prototype.name="CustomError";var Ca=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Ca.prototype.a=null;var Da=0;Ca.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Da++;d||ia();this.b=b;delete this.a};var Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Fa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ha=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ia=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Ja=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Ka=function(a){Ka[" "](a);return a};Ka[" "]=ba;var Ma=function(a,b){var c=La;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Na=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},Oa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Pa=function(a,b){return a<b?-1:a>b?1:0};var Qa=function(a,b){this.a=a;this.b=b};var y=function(a,b){this.bucket=a;this.path=b},Ra=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Sa=function(a){for(var b=null,c=[{ia:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,ba:{bucket:1,path:3},ha:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{ia:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,ba:{bucket:1,path:3},ha:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
	c[d],f=e.ia.exec(a);if(f){b=f[e.ba.bucket];(f=f[e.ba.path])||(f="");b=new y(b,f);e.ha(b);break}}if(null==b)throw new v("invalid-url","Invalid URL '"+a+"'.");return b};var Ta=function(a,b,c){r(a)||x(b)||x(c)?(this.next=a,this.a=b||null,this.b=c||null):(this.next=a.next||null,this.a=a.error||null,this.b=a.complete||null)};var Ua={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Va=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},Wa=function(a,b){this.data=a;this.a=b||null},$a=function(a,b){switch(a){case "raw":return new Wa(Xa(b));case "base64":case "base64url":return new Wa(Ya(a,b));case "data_url":return a=new Za(b),a=a.a?Ya("base64",a.c):Xa(a.c),new Wa(a,(new Za(b)).b)}throw la();
	},Xa=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},Ya=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),
	d=-1!==b.indexOf("_");if(c||d)throw qa(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw qa(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(f){throw qa(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);return a},Za=function(a){var b=a.match(/^data:([^,]+)?,/);
	if(null===b)throw qa("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var bb=function(a){var b=encodeURIComponent,c="?";ra(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var z=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=z.prototype;k.oa=function(){return this.b};k.Ka=function(){return this.h};k.Ha=function(){return this.f};k.Ca=function(){return this.a};k.qa=function(){if(x(this.a)){var a=this.a.downloadURLs;return x(a)&&x(a[0])?a[0]:null}return null};k.Ja=function(){return this.g};k.Fa=function(){return this.c};var cb=function(a,b){b.unshift(a);Ba.call(this,Na.apply(null,b));b.shift()};u(cb,Ba);cb.prototype.name="AssertionError";
	var db=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new cb(""+e,f||[]);},A=function(a,b,c){a||db("",null,b,Array.prototype.slice.call(arguments,2))},eb=function(a,b){throw new cb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},fb=function(a,b,c){r(a)||db("Expected function but got %s: %s.",[p(a),a],b,Array.prototype.slice.call(arguments,2))};var B=function(){this.g=this.g;this.o=this.o};B.prototype.g=!1;B.prototype.ea=function(){this.g||(this.g=!0,this.C())};B.prototype.C=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var gb="closure_listenable_"+(1E6*Math.random()|0),hb=0;var ib;a:{var jb=m.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=""}var C=function(a){return-1!=ib.indexOf(a)};var lb=function(){};lb.prototype.a=null;var nb=function(a){var b;(b=a.a)||(b={},mb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var ob=Array.prototype.indexOf?function(a,b,c){A(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pb=Array.prototype.forEach?function(a,b,c){A(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},qb=Array.prototype.filter?function(a,
	b,c){A(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(e[f++]=l)}return e},rb=Array.prototype.map?function(a,b,c){A(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},sb=Array.prototype.some?function(a,b,c){A(null!=a.length);return Array.prototype.some.call(a,
	b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},ub=function(a){var b;a:{b=tb;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]},vb=function(a){if("array"!=p(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},wb=function(a,b){b=ob(a,b);var c;if(c=0<=b)A(null!=a.length),Array.prototype.splice.call(a,b,1);return c},xb=function(a){var b=
	a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var zb=new za(function(){return new yb},function(a){a.reset()},100),Bb=function(){var a=Ab,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},yb=function(){this.next=this.b=this.a=null};yb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};yb.prototype.reset=function(){this.next=this.b=this.a=null};var Cb=function(a,b){this.type=a;this.a=this.target=b;this.ja=!0};Cb.prototype.b=function(){this.ja=!1};var Db=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.V=!!d;this.M=e;++hb;this.N=this.U=!1},Eb=function(a){a.N=!0;a.listener=null;a.a=null;a.src=null;a.M=null};var Fb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Gb=function(a,b){b=qb(b.split("/"),function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Hb=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var Ib=function(a){this.src=a;this.a={};this.b=0},Kb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Jb(b,c,e,f);-1<h?(a=b[h],d||(a.U=!1)):(a=new Db(c,a.src,g,!!e,f),a.U=d,b.push(a));return a},Lb=function(a,b){var c=b.type;c in a.a&&wb(a.a[c],b)&&(Eb(b),0==a.a[c].length&&(delete a.a[c],a.b--))},Jb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.N&&f.listener==b&&f.V==!!c&&f.M==d)return e}return-1};var Mb,Nb=function(){};u(Nb,lb);var Ob=function(a){return(a=mb(a))?new ActiveXObject(a):new XMLHttpRequest},mb=function(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b};Mb=new Nb;var Pb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Pb){if(b=a.H(),a=a.A(),0>=this.b()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Qa(b[d],a[d]));break a}}else b=Fa(a),a=Ea(a);for(d=0;d<b.length;d++)Qb(this,b[d],a[d])}},Qb=function(a,b,c){var d=a.a;d.push(new Qa(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c};Pb.prototype.A=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
	Pb.prototype.H=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};Pb.prototype.b=function(){return this.a.length};var Rb=function(){this.c=[];this.a=[]},Sb=function(a){0==a.c.length&&(a.c=a.a,a.c.reverse(),a.a=[]);return a.c.pop()};Rb.prototype.b=function(){return this.c.length+this.a.length};Rb.prototype.A=function(){for(var a=[],b=this.c.length-1;0<=b;--b)a.push(this.c[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a};var Tb=function(a){if(a.A&&"function"==typeof a.A)return a.A();if(q(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ea(a)},Ub=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||q(a))pb(a,b,void 0);else{var c;if(a.H&&"function"==typeof a.H)c=a.H();else if(a.A&&"function"==typeof a.A)c=void 0;else if(ca(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Fa(a);for(var d=Tb(a),e=d.length,f=0;f<e;f++)b.call(void 0,
	d[f],c&&c[f],a)}};var Vb=function(a){m.setTimeout(function(){throw a;},0)},Wb,Xb=function(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.da;c.da=null;a()}};return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}};var Yb="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},Zb=function(){};Zb.prototype.next=function(){throw Yb;};Zb.prototype.h=function(){return this};var $b=function(){Pb.call(this)};u($b,Pb);var ac=C("Opera"),D=C("Trident")||C("MSIE"),bc=C("Edge"),dc=C("Gecko")&&!(-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),ec=-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"),fc=function(){var a=m.document;return a?a.documentMode:void 0},gc;
	a:{var hc="",ic=function(){var a=ib;if(dc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bc)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ec)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ic&&(hc=ic?ic[1]:"");if(D){var jc=fc();if(null!=jc&&jc>parseFloat(hc)){gc=String(jc);break a}}gc=hc}
	var kc=gc,La={},E=function(a){return Ma(a,function(){for(var b=0,c=Oa(String(kc)).split("."),d=Oa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Pa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Pa(0==g[2].length,0==h[2].length)||Pa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},lc=m.document,
	mc=lc&&D?fc()||("CSS1Compat"==lc.compatMode?parseInt(kc,10):5):void 0;var qc=function(a,b){nc||oc();pc||(nc(),pc=!0);var c=Ab,d=zb.get();d.set(a,b);c.b?c.b.next=d:(A(!c.a),c.a=d);c.b=d},nc,oc=function(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);nc=function(){a.then(rc)}}else nc=function(){var a=rc;!r(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Wb||(Wb=Xb()),Wb(a)):m.setImmediate(a)}},pc=!1,Ab=new function(){this.b=this.a=null},rc=function(){for(var a;a=Bb();){try{a.a.call(a.b)}catch(b){Vb(b)}Aa(zb,
	a)}pc=!1};var sc;(sc=!D)||(sc=9<=Number(mc));var tc=sc,uc=D&&!E("9");!ec||E("528");dc&&E("1.9b")||D&&E("8")||ac&&E("9.5")||ec&&E("528");dc&&!E("8")||D&&E("9");var G=function(a,b){this.c={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof G?(c=a.H(),d=a.A()):(c=Fa(a),d=Ea(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};G.prototype.b=function(){return this.f};G.prototype.A=function(){vc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a};G.prototype.H=function(){vc(this);return this.a.concat()};
	var wc=function(a,b){return Object.prototype.hasOwnProperty.call(a.c,b)?(delete a.c[b],a.f--,a.g++,a.a.length>2*a.f&&vc(a),!0):!1},vc=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.c,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};
	G.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.c,a)?this.c[a]:b};G.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.f++,this.a.push(a),this.g++);this.c[a]=b};G.prototype.forEach=function(a,b){for(var c=this.H(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
	G.prototype.h=function(a){vc(this);var b=0,c=this.g,d=this,e=new Zb;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Yb;var e=d.a[b++];return a?e:d.c[e]};return e};var xc=function(a,b){Cb.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&&dc)try{Ka(b.nodeName)}catch(c){}this.c=a;a.defaultPrevented&&this.b()}};u(xc,Cb);xc.prototype.b=function(){xc.I.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var H=function(a,b){this.a=0;this.i=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){yc(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}yc(c,3,a)})}catch(d){yc(this,3,d)}},zc=function(){this.next=this.f=this.c=this.a=this.b=null;this.g=!1};zc.prototype.reset=function(){this.f=this.c=this.a=this.b=null;this.g=!1};
	var Ac=new za(function(){return new zc},function(a){a.reset()},100),Bc=function(a,b,c){var d=Ac.get();d.a=a;d.c=b;d.f=c;return d},Cc=function(a){if(a instanceof H)return a;var b=new H(ba);yc(b,2,a);return b},Dc=function(a){return new H(function(b,c){c(a)})};
	H.prototype.then=function(a,b,c){null!=a&&fb(a,"opt_onFulfilled should be a function.");null!=b&&fb(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ec(this,r(a)?a:null,r(b)?b:null,c)};Ia(H);H.prototype.l=function(a,b){return Ec(this,null,a,b)};
	var Gc=function(a,b){a.b||2!=a.a&&3!=a.a||Fc(a);A(null!=b.a);a.c?a.c.next=b:a.b=b;a.c=b},Ec=function(a,b,c,d){var e=Bc(null,null,null);e.b=new H(function(a,g){e.a=b?function(c){try{var e=b.call(d,c);a(e)}catch(F){g(F)}}:a;e.c=c?function(b){try{var e=c.call(d,b);a(e)}catch(F){g(F)}}:g});e.b.f=a;Gc(a,e);return e.b};H.prototype.o=function(a){A(1==this.a);this.a=0;yc(this,2,a)};H.prototype.m=function(a){A(1==this.a);this.a=0;yc(this,3,a)};
	var yc=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.o,g=a.m;if(e instanceof H)null!=f&&fb(f,"opt_onFulfilled should be a function."),null!=g&&fb(g,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Gc(e,Bc(f||ba,g||null,a)),d=!0;else if(Ja(e))e.then(f,g,a),d=!0;else{if(da(e))try{var h=e.then;if(r(h)){Hc(e,h,f,g,a);d=!0;break a}}catch(l){g.call(a,l);d=!0;break a}d=!1}}d||
	(a.i=c,a.a=b,a.f=null,Fc(a),3!=b||Ic(a,c))}},Hc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(l){h(l)}},Fc=function(a){a.h||(a.h=!0,qc(a.j,a))},Jc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);null!=b&&A(null!=b.a);return b};
	H.prototype.j=function(){for(var a;a=Jc(this);){var b=this.a,c=this.i;if(3==b&&a.c&&!a.g){var d;for(d=this;d&&d.g;d=d.f)d.g=!1}if(a.b)a.b.f=null,Kc(a,b,c);else try{a.g?a.a.call(a.f):Kc(a,b,c)}catch(e){Lc.call(null,e)}Aa(Ac,a)}this.h=!1};var Kc=function(a,b,c){2==b?a.a.call(a.f,c):a.c&&a.c.call(a.f,c)},Ic=function(a,b){a.g=!0;qc(function(){a.g&&Lc.call(null,b)})},Lc=Vb;var Nc=function(a){this.a=new G;if(a){a=Tb(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(Mc(d),d)}}},Mc=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[ea]||(a[ea]=++fa)):b.substr(0,1)+a};Nc.prototype.b=function(){return this.a.b()};Nc.prototype.A=function(){return this.a.A()};Nc.prototype.h=function(){return this.a.h(!1)};var Oc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);Cc(!0).then(function(){a.apply(null,b)})}};var Pc="closure_lm_"+(1E6*Math.random()|0),Qc={},Rc=0,Sc=function(a,b,c,d,e){if("array"==p(b)){for(var f=0;f<b.length;f++)Sc(a,b[f],c,d,e);return null}c=Tc(c);a&&a[gb]?(Uc(a),a=Kb(a.b,String(b),c,!1,d,e)):a=Vc(a,b,c,!1,d,e);return a},Vc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Wc(a);h||(a[Pc]=h=new Ib(a));c=Kb(h,b,c,d,e,f);if(c.a)return c;d=Xc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Yc(b.toString()),
	d);else throw Error("addEventListener and attachEvent are unavailable.");Rc++;return c},Xc=function(){var a=Zc,b=tc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},$c=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)$c(a,b[f],c,d,e);else c=Tc(c),a&&a[gb]?Kb(a.b,String(b),c,!0,d,e):Vc(a,b,c,!0,d,e)},ad=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)ad(a,b[f],c,d,e);else(c=Tc(c),a&&a[gb])?(a=a.b,b=String(b).toString(),
	b in a.a&&(f=a.a[b],c=Jb(f,c,d,e),-1<c&&(Eb(f[c]),A(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Wc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Jb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&bd(c))},bd=function(a){if("number"!=typeof a&&a&&!a.N){var b=a.src;if(b&&b[gb])Lb(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.V):b.detachEvent&&b.detachEvent(Yc(c),d);Rc--;(c=Wc(b))?(Lb(c,a),0==c.b&&(c.src=null,b[Pc]=null)):Eb(a)}}},Yc=function(a){return a in
	Qc?Qc[a]:Qc[a]="on"+a},dd=function(a,b,c,d){var e=!0;if(a=Wc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.V==c&&!f.N&&(f=cd(f,d),e=e&&!1!==f)}return e},cd=function(a,b){var c=a.listener,d=a.M||a.src;a.U&&bd(a);return c.call(d,b)},Zc=function(a,b){if(a.N)return!0;if(!tc){if(!b)a:{b=["window","event"];for(var c=m,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new xc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=
	-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=dd(d[e],a,!0,b),c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=dd(d[e],a,!1,b),c=c&&f}return c}return cd(a,new xc(b,this))},Wc=function(a){a=a[Pc];return a instanceof Ib?a:null},ed="__closure_events_fn_"+(1E9*Math.random()>>>0),Tc=function(a){A(a,"Listener can not be null.");if(r(a))return a;A(a.handleEvent,"An object listener must have handleEvent method.");
	a[ed]||(a[ed]=function(b){return a.handleEvent(b)});return a[ed]};var I=function(a,b){B.call(this);this.m=a||0;this.f=b||10;if(this.m>this.f)throw Error("[goog.structs.Pool] Min can not be greater than max");this.a=new Rb;this.c=new Nc;this.j=null;this.T()};u(I,B);I.prototype.X=function(){var a=ia();if(!(null!=this.j&&0>a-this.j)){for(var b;0<this.a.b()&&(b=Sb(this.a),!this.l(b));)this.T();!b&&this.b()<this.f&&(b=this.i());b&&(this.j=a,this.c.a.set(Mc(b),b));return b}};var gd=function(a){var b=fd;wc(b.c.a,Mc(a))&&b.$(a)};
	I.prototype.$=function(a){wc(this.c.a,Mc(a));this.l(a)&&this.b()<this.f?this.a.a.push(a):hd(a)};I.prototype.T=function(){for(var a=this.a;this.b()<this.m;){var b=this.i();a.a.push(b)}for(;this.b()>this.f&&0<this.a.b();)hd(Sb(a))};I.prototype.i=function(){return{}};var hd=function(a){if("function"==typeof a.ea)a.ea();else for(var b in a)a[b]=null};I.prototype.l=function(a){return"function"==typeof a.pa?a.pa():!0};I.prototype.b=function(){return this.a.b()+this.c.b()};
	I.prototype.C=function(){I.I.C.call(this);if(0<this.c.b())throw Error("[goog.structs.Pool] Objects not released");delete this.c;for(var a=this.a;0!=a.c.length||0!=a.a.length;)hd(Sb(a));delete this.a};/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var id=function(a,b){this.c=[];this.m=b||null;this.a=this.h=!1;this.b=void 0;this.j=this.g=!1;this.f=0;this.i=null;this.o=0};id.prototype.l=function(a,b){this.g=!1;this.h=!0;this.b=b;this.a=!a;jd(this)};var kd=function(a,b,c){A(!a.j,"Blocking Deferreds can not be re-used");a.c.push([b,c,void 0]);a.h&&jd(a)};id.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});kd(this,d,function(a){e(a)});return f.then(a,b,c)};Ia(id);
	var ld=function(a){return sb(a.c,function(a){return r(a[1])})},jd=function(a){if(a.f&&a.h&&ld(a)){var b=a.f,c=md[b];c&&(m.clearTimeout(c.a),delete md[b]);a.f=0}a.i&&(a.i.o--,delete a.i);for(var b=a.b,d=c=!1;a.c.length&&!a.g;){var e=a.c.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.m,b);n(h)&&(a.a=a.a&&(h==b||h instanceof Error),a.b=b=h);if(Ja(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.g=!0}catch(l){b=l,a.a=!0,ld(a)||(c=!0)}}a.b=b;d&&(h=t(a.l,a,!0),d=t(a.l,a,
	!1),b instanceof id?(kd(b,h,d),b.j=!0):b.then(h,d));c&&(b=new nd(b),md[b.a]=b,a.f=b.a)},nd=function(a){this.a=m.setTimeout(t(this.c,this),0);this.b=a};nd.prototype.c=function(){A(md[this.a],"Cannot throw an error that is not scheduled.");delete md[this.a];throw this.b;};var md={};var od=function(a){this.f=a;this.b=this.c=this.a=null},pd=function(a,b){this.name=a;this.value=b};pd.prototype.toString=function(){return this.name};var qd=new pd("SEVERE",1E3),rd=new pd("CONFIG",700),sd=new pd("FINE",500),td=function(a){if(a.c)return a.c;if(a.a)return td(a.a);eb("Root logger has no level set.");return null};
	od.prototype.log=function(a,b,c){if(a.value>=td(this).value)for(r(b)&&(b=b()),a=new Ca(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;)c=c.a};
	var ud={},vd=null,wd=function(a){vd||(vd=new od(""),ud[""]=vd,vd.c=rd);var b;if(!(b=ud[a])){b=new od(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=wd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;ud[a]=b}return b};var xd=function(){B.call(this);this.b=new Ib(this);this.Z=this;this.G=null};u(xd,B);xd.prototype[gb]=!0;xd.prototype.removeEventListener=function(a,b,c,d){ad(this,a,b,c,d)};
	var J=function(a,b){Uc(a);var c,d=a.G;if(d){c=[];for(var e=1;d;d=d.G)c.push(d),A(1E3>++e,"infinite loop")}a=a.Z;d=b.type||b;q(b)?b=new Cb(b,a):b instanceof Cb?b.target=b.target||a:(e=b,b=new Cb(d,a),Ha(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.a=c[g],e=yd(f,d,!0,b)&&e;f=b.a=a;e=yd(f,d,!0,b)&&e;e=yd(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.a=c[g],e=yd(f,d,!1,b)&&e};
	xd.prototype.C=function(){xd.I.C.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Eb(d[e]);delete a.a[c];a.b--}}this.G=null};var yd=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.N&&g.V==c){var h=g.listener,l=g.M||g.src;g.U&&Lb(a.b,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.ja},Uc=function(a){A(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var K=function(a,b){this.h=new $b;I.call(this,a,b)};u(K,I);k=K.prototype;k.X=function(a,b){if(!a)return K.I.X.call(this);Qb(this.h,n(b)?b:100,a);this.aa()};k.aa=function(){for(var a=this.h;0<a.b();){var b=this.X();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)vb(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e<f>>1;){var h=2*e+1,l=2*e+2,h=l<f&&d[l].a<d[h].a?l:h;if(d[h].a>g.a)break;d[e]=d[h];e=h}d[e]=g}c=c.b}c.apply(this,[b])}else break}};
	k.$=function(a){K.I.$.call(this,a);this.aa()};k.T=function(){K.I.T.call(this);this.aa()};k.C=function(){K.I.C.call(this);m.clearTimeout(void 0);vb(this.h.a);this.h=null};var L=function(a,b){a&&a.log(sd,b,void 0)};var zd=function(a,b,c){if(r(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)};var M=function(a){xd.call(this);this.K=new G;this.B=a||null;this.c=!1;this.w=this.a=null;this.O=this.l="";this.J=0;this.h="";this.f=this.F=this.j=this.D=!1;this.i=0;this.m=null;this.S="";this.u=this.ca=this.Y=!1};u(M,xd);var Ad=M.prototype,Bd=wd("goog.net.XhrIo");Ad.v=Bd;var Cd=/^https?$/i,Dd=["POST","PUT"];
	M.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+a);b=b?b.toUpperCase():"GET";this.l=a;this.h="";this.J=0;this.O=b;this.D=!1;this.c=!0;this.a=this.B?Ob(this.B):Ob(Mb);this.w=this.B?nb(this.B):nb(Mb);this.a.onreadystatechange=t(this.R,this);this.ca&&"onprogress"in this.a&&(this.a.onprogress=t(function(a){this.P(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=t(this.P,this)));try{L(this.v,O(this,"Opening Xhr")),
	this.F=!0,this.a.open(b,String(a),!0),this.F=!1}catch(f){L(this.v,O(this,"Error opening Xhr: "+f.message));Ed(this,f);return}a=c||"";var e=new G(this.K);d&&Ub(d,function(a,b){e.set(b,a)});d=ub(e.H());c=m.FormData&&a instanceof m.FormData;!(0<=ob(Dd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.S&&(this.a.responseType=this.S);"withCredentials"in this.a&&this.a.withCredentials!==this.Y&&(this.a.withCredentials=
	this.Y);try{Fd(this),0<this.i&&(this.u=Gd(this.a),L(this.v,O(this,"Will abort after "+this.i+"ms if incomplete, xhr2 "+this.u)),this.u?(this.a.timeout=this.i,this.a.ontimeout=t(this.L,this)):this.m=zd(this.L,this.i,this)),L(this.v,O(this,"Sending request")),this.j=!0,this.a.send(a),this.j=!1}catch(f){L(this.v,O(this,"Send error: "+f.message)),Ed(this,f)}};var Gd=function(a){return D&&E(9)&&"number"==typeof a.timeout&&n(a.ontimeout)},tb=function(a){return"content-type"==a.toLowerCase()};
	M.prototype.L=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.i+"ms, aborting",this.J=8,L(this.v,O(this,this.h)),J(this,"timeout"),Hd(this,8))};var Ed=function(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.J=5;Id(a);Kd(a)},Id=function(a){a.D||(a.D=!0,J(a,"complete"),J(a,"error"))},Hd=function(a,b){a.a&&a.c&&(L(a.v,O(a,"Aborting")),a.c=!1,a.f=!0,a.a.abort(),a.f=!1,a.J=b||7,J(a,"complete"),J(a,"abort"),Kd(a))};
	M.prototype.C=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Kd(this,!0));M.I.C.call(this)};M.prototype.R=function(){this.g||(this.F||this.j||this.f?Ld(this):this.la())};M.prototype.la=function(){Ld(this)};
	var Ld=function(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==Md(a)&&2==P(a))L(a.v,O(a,"Local request error detected and ignored"));else if(a.j&&4==Md(a))zd(a.R,0,a);else if(J(a,"readystatechange"),4==Md(a)){L(a.v,O(a,"Request complete"));a.c=!1;try{if(Nd(a))J(a,"complete"),J(a,"success");else{a.J=6;var b;try{b=2<Md(a)?a.a.statusText:""}catch(c){L(a.v,"Can not get status: "+c.message),b=""}a.h=b+" ["+P(a)+"]";Id(a)}}finally{Kd(a)}}};
	M.prototype.P=function(a,b){A("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");J(this,Od(a,"progress"));J(this,Od(a,b?"downloadprogress":"uploadprogress"))};
	var Od=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Kd=function(a,b){if(a.a){Fd(a);var c=a.a,d=a.w[0]?ba:null;a.a=null;a.w=null;b||J(a,"ready");try{c.onreadystatechange=d}catch(e){(a=a.v)&&a.log(qd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Fd=function(a){a.a&&a.u&&(a.a.ontimeout=null);"number"==typeof a.m&&(m.clearTimeout(a.m),a.m=null)},Nd=function(a){var b=P(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=
	!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(Fb)[1]||null,!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1)),b=!Cd.test(a?a.toLowerCase():"");c=b}return c},Md=function(a){return a.a?a.a.readyState:0},P=function(a){try{return 2<Md(a)?a.a.status:-1}catch(b){return-1}},Pd=function(a){try{return a.a?a.a.responseText:""}catch(b){return L(a.v,"Can not get responseText: "+b.message),""}},Qd=function(a,b){return a.a&&4==Md(a)?a.a.getResponseHeader(b):void 0},
	O=function(a,b){return b+" ["+a.O+" "+a.l+" "+P(a)+"]"};var Rd=function(a,b,c,d){this.u=a;this.w=!!d;K.call(this,b,c)};u(Rd,K);Rd.prototype.i=function(){var a=new M,b=this.u;b&&b.forEach(function(b,d){a.K.set(d,b)});this.w&&(a.Y=!0);return a};Rd.prototype.l=function(a){return!a.g&&!a.a};var fd=new Rd;var Td=function(a,b,c,d,e,f,g,h,l,F){this.K=a;this.F=b;this.w=c;this.m=d;this.G=e.slice();this.l=this.o=this.f=this.c=null;this.h=this.i=!1;this.u=f;this.j=g;this.g=l;this.L=F;this.D=h;var N=this;this.B=new H(function(a,b){N.o=a;N.l=b;Sd(N)})},Ud=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Sd=function(a){function b(a,b){b?a(!1,new Ud(!1,null,!0)):fd.X(function(b){b.Y=d.L;d.c=b;var c=null;null!==d.g&&(b.ca=!0,c=Sc(b,"uploadprogress",function(a){d.g(a.loaded,a.lengthComputable?a.total:-1)}),b.ca=
	null!==d.g);b.send(d.K,d.F,d.m,d.w);$c(b,"complete",function(b){null!==c&&bd(c);d.c=null;b=b.target;var f=6===b.J&&100<=P(b),f=Nd(b)||f,g=P(b);!f||500<=g&&600>g||429===g?(f=7===b.J,gd(b),a(!1,new Ud(!1,null,f))):(f=0<=ob(d.G,g),a(!0,new Ud(f,b)))})})}function c(a,b){var c=d.o;a=d.l;var h=b.c;if(b.b)try{var l=d.u(h,Pd(h));n(l)?c(l):c()}catch(F){a(F)}else null!==h?(b=la(),l=Pd(h),b.serverResponse=l,d.j?a(d.j(h,b)):a(b)):(b=b.a?d.h?pa():ma():new v("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),
	a(b));gd(h)}var d=a;a.i?c(0,new Ud(!1,null,!0)):a.f=ja(b,c,a.D)};Td.prototype.a=function(){return this.B};Td.prototype.b=function(a){this.i=!0;this.h=a||!1;null!==this.f&&(0,this.f)(!1);null!==this.c&&Hd(this.c)};var Vd=function(a,b,c){var d=bb(a.f),d=a.l+d,e=a.b?sa(a.b):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new Td(d,a.i,e,a.c,a.h,a.M,a.a,a.j,a.g,c)};var Wd=function(a){var b=m.BlobBuilder||m.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=xb(arguments);c=m.BlobBuilder||m.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(m.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},Xd=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,
	c):a.slice?dc&&!E("13.0")||ec&&!E("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var Q=function(a,b){xa()&&a instanceof Blob?(this.s=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.s=new Uint8Array(a):(this.s=new Uint8Array(a.byteLength),this.s.set(new Uint8Array(a))),b=this.s.length):(b?this.s=a:(this.s=new Uint8Array(a.length),this.s.set(a)),b=a.length),a="");this.a=b;this.b=a};Q.prototype.type=function(){return this.b};
	Q.prototype.slice=function(a,b){if(xa()&&this.s instanceof Blob)return a=Xd(this.s,a,b),null===a?null:new Q(a);a=new Uint8Array(this.s.buffer,a,b-a);return new Q(a,!0)};
	var Yd=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(xa())return b=rb(b,function(a){return a instanceof Q?a.s:a}),new Q(Wd.apply(null,b));var b=rb(b,function(a){return wa(a)?$a("raw",a).data.buffer:a.s.buffer}),c=0;pb(b,function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;pb(b,function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new Q(d,!0)};var Zd=function(a){this.c=Dc(a)};Zd.prototype.a=function(){return this.c};Zd.prototype.b=function(){};var $d=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},ae=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},be=function(a){ra(a.a,function(a,c){c&&c.b(!0)});a.a={}};var ce=function(a,b,c,d){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,x(a))){a=a.storageBucket||null;if(null==a)a=null;else{var e=null;try{e=Sa(a)}catch(f){}if(null!==e){if(""!==e.path)throw new v("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=e.bucket}}this.g=a}this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new $d;this.f=!1},de=function(a){return null!==a.a&&x(a.a.INTERNAL)&&x(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return x(a)?a.accessToken:
	null},function(){return null}):Cc(null)};ce.prototype.bucket=function(){if(this.f)throw pa();return this.g};var R=function(a,b,c){if(a.f)return new Zd(pa());b=a.j(b,c,null===a.a);ae(a.h,b);return b};var ee=function(a,b){return b},S=function(a,b,c,d){this.c=a;this.b=b||a;this.f=!!c;this.a=d||ee},fe=null,ge=function(){if(fe)return fe;var a=[];a.push(new S("bucket"));a.push(new S("generation"));a.push(new S("metageneration"));a.push(new S("name","fullPath",!0));var b=new S("name");b.a=function(a,b){return!wa(b)||2>b.length?b:Hb(b)};a.push(b);b=new S("size");b.a=function(a,b){return x(b)?+b:b};a.push(b);a.push(new S("timeCreated"));a.push(new S("updated"));a.push(new S("md5Hash",null,!0));a.push(new S("cacheControl",
	null,!0));a.push(new S("contentDisposition",null,!0));a.push(new S("contentEncoding",null,!0));a.push(new S("contentLanguage",null,!0));a.push(new S("contentType",null,!0));a.push(new S("metadata","customMetadata",!0));a.push(new S("downloadTokens","downloadURLs",!1,function(a,b){if(!(wa(b)&&0<b.length))return[];var e=encodeURIComponent;return rb(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+e(a.bucket)+"/o/"+e(d));b=bb({alt:"media",token:b});return d+
	b})}));return fe=a},he=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.l(b,new y(a.bucket,a.fullPath))}})},ie=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.f&&(c[f.c]=a[f.b])}return JSON.stringify(c)},je=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new v("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw oa(f,a,g.message);throw oa(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b)};
	this.b=!!b},ke=function(a,b){return function(c){a(c);b(c)}},le=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=ke(c,a):d=c;return new U(d,b)},me=function(){return new U(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||xa()&&a instanceof Blob))throw"Expected Blob or File.";})},ne=function(){return new U(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},oe=function(a,
	b){return new U(function(b){if(!(null===b||x(b)&&b instanceof Object))throw"Expected an Object.";x(a)&&a(b)},b)},pe=function(){return new U(function(a){if(null!==a&&!r(a))throw"Expected a Function.";},!0)};var qe=function(a){if(!a)throw la();},re=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d)}catch(h){c=null;break a}c=da(e)?e:null}if(null===c)c=null;else{d={type:"file"};e=b.length;for(var f=0;f<e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c])}he(d,a);c=d}qe(null!==c);return c}},se=function(a){return function(b,c){b=401===P(b)?new v("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===P(b)?new v("quota-exceeded","Quota for bucket '"+
	a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===P(b)?new v("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},te=function(a){var b=se(a);return function(c,d){var e=b(c,d);404===P(c)&&(e=new v("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},ue=function(a,b,c){var d=Ra(b);a=new w(ka+"/v0"+d,"GET",re(a,c),a.c);a.a=te(b);return a},ve=function(a,
	b){var c=Ra(b);a=new w(ka+"/v0"+c,"DELETE",function(){},a.c);a.h=[200,204];a.a=te(b);return a},we=function(a,b,c){c=c?sa(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},xe=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var l=0;2>l;l++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+h;e=we(b,d,e);l=ie(e,c);d=Yd("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+
	l+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw na();a=new w(ka+"/v0"+f,"POST",re(a,c),a.b);a.f={name:e.fullPath};a.b=g;a.c=d.s;a.a=se(b);return a},ye=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null},ze=function(a,b){var c;try{c=Qd(a,"X-Goog-Upload-Status")}catch(d){qe(!1)}a=0<=ob(b||["active"],c);qe(a);return c},Ae=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=we(b,d,e);e={name:g.fullPath};f=ka+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable",
	"X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=ie(g,c);a=new w(f,"POST",function(a){ze(a);var b;try{b=Qd(a,"X-Goog-Upload-URL")}catch(c){qe(!1)}qe(wa(b));return b},a.b);a.f=e;a.b=d;a.c=c;a.a=se(b);return a},Be=function(a,b,c,d){a=new w(c,"POST",function(a){var b=ze(a,["active","final"]),c;try{c=Qd(a,"X-Goog-Upload-Size-Received")}catch(h){qe(!1)}a=c;isFinite(a)&&(a=String(a));
	a=q(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;qe(!isNaN(a));return new ye(a,d.a,"final"===b)},a.b);a.b={"X-Goog-Upload-Command":"query"};a.a=se(b);return a},Ce=function(a,b,c,d,e,f){var g=new ye(0,0);f?(g.a=f.a,g.total=f.total):(g.a=0,g.total=d.a);if(d.a!==g.total)throw new v("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var h=f=g.total-g.a,h=Math.min(h,262144),l=g.a;f={"X-Goog-Upload-Command":h===f?"upload, finalize":"upload","X-Goog-Upload-Offset":g.a};
	l=d.slice(l,l+h);if(null===l)throw na();c=new w(c,"POST",function(a,c){var f=ze(a,["active","final"]),l=g.a+h,Jd=d.a,ab;"final"===f?ab=re(b,e)(a,c):ab=null;return new ye(l,Jd,"final"===f,ab)},b.b);c.b=f;c.c=l.s;c.g=null;c.a=se(a);return c};var W=function(a,b,c,d,e,f){this.K=a;this.c=b;this.i=c;this.f=e;this.h=f||null;this.o=d;this.j=0;this.G=this.m=!1;this.B=[];this.Z=262144<this.f.a;this.b="running";this.a=this.u=this.g=null;var g=this;this.W=function(a){g.a=null;"storage/canceled"===a.code?(g.m=!0,De(g)):(g.g=a,V(g,"error"))};this.S=function(a){g.a=null;"storage/canceled"===a.code?De(g):(g.g=a,V(g,"error"))};this.w=this.l=null;this.F=new H(function(a,b){g.l=a;g.w=b;Ee(g)});this.F.then(null,function(){})},Ee=function(a){"running"===
	a.b&&null===a.a&&(a.Z?null===a.u?Fe(a):a.m?Ge(a):a.G?He(a):Ie(a):Je(a))},Ke=function(a,b){de(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":V(a,"canceled");break;case "pausing":V(a,"paused")}})},Fe=function(a){Ke(a,function(b){var c=Ae(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.u=b;a.m=!1;De(a)},this.W)})},Ge=function(a){var b=a.u;Ke(a,function(c){var d=Be(a.c,a.i,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;Le(a,b.a);a.m=!1;b.b&&
	(a.G=!0);De(a)},a.W)})},Ie=function(a){var b=new ye(a.j,a.f.a),c=a.u;Ke(a,function(d){var e;try{e=Ce(a.i,a.c,c,a.f,a.o,b)}catch(f){a.g=f;V(a,"error");return}a.a=R(a.c,e,d);a.a.a().then(function(b){a.a=null;Le(a,b.a);b.b?(a.h=b.c,V(a,"success")):De(a)},a.W)})},He=function(a){Ke(a,function(b){var c=ue(a.c,a.i,a.o);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,"success")},a.S)})},Je=function(a){Ke(a,function(b){var c=xe(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;
	a.h=b;Le(a,a.f.a);V(a,"success")},a.W)})},Le=function(a,b){var c=a.j;a.j=b;a.j>c&&Me(a)},V=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.b();break;case "pausing":a.b=b;null!==a.a&&a.a.b();break;case "running":var c="paused"===a.b;a.b=b;c&&(Me(a),Ee(a));break;case "paused":a.b=b;Me(a);break;case "canceled":a.g=ma();a.b=b;Me(a);break;case "error":a.b=b;Me(a);break;case "success":a.b=b,Me(a)}},De=function(a){switch(a.b){case "pausing":V(a,"paused");break;case "canceling":V(a,
	"canceled");break;case "running":Ee(a)}};W.prototype.D=function(){return new z(this.j,this.f.a,va(this.b),this.h,this,this.K)};
	W.prototype.O=function(a,b,c,d){function e(a){try{g(a);return}catch(b){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(b){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&T("on",a,arguments);var e=new Ta(b,c,d);Ne(l,e);return function(){wb(l.B,e)}}}var g=pe().a,h=oe(null,!0).a;T("on",[le(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";}),oe(e,!0),
	pe(),pe()],arguments);var l=this,F=[oe(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),pe(),pe()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(F)};W.prototype.then=function(a,b){return this.F.then(a,b)};
	var Ne=function(a,b){a.B.push(b);Oe(a,b)},Me=function(a){Pe(a);var b=xb(a.B);pb(b,function(b){Oe(a,b)})},Pe=function(a){if(null!==a.l){var b=!0;switch(va(a.b)){case "success":Oc(a.l.bind(null,a.D()))();break;case "canceled":case "error":Oc(a.w.bind(null,a.g))();break;default:b=!1}b&&(a.l=null,a.w=null)}},Oe=function(a,b){switch(va(a.b)){case "running":case "paused":null!==b.next&&Oc(b.next.bind(b,a.D()))();break;case "success":null!==b.b&&Oc(b.b.bind(b))();break;case "canceled":case "error":null!==
	b.a&&Oc(b.a.bind(b,a.g))();break;default:null!==b.a&&Oc(b.a.bind(b,a.g))()}};W.prototype.R=function(){T("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&V(this,"running");return a};W.prototype.P=function(){T("pause",[],arguments);var a="running"===this.b;a&&V(this,"pausing");return a};W.prototype.L=function(){T("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&V(this,"canceling");return a};var X=function(a,b){this.b=a;if(b)this.a=b instanceof y?b:Sa(b);else if(a=a.bucket(),null!==a)this.a=new y(a,"");else throw new v("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};X.prototype.toString=function(){T("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Qe=function(a,b){return new X(a,b)};k=X.prototype;
	k.fa=function(a){T("child",[le()],arguments);var b=Gb(this.a.path,a);return Qe(this.b,new y(this.a.bucket,b))};k.Ea=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Qe(this.b,new y(this.a.bucket,a))};k.Ga=function(){return Qe(this.b,new y(this.a.bucket,""))};k.na=function(){return this.a.bucket};k.za=function(){return this.a.path};k.Da=function(){return Hb(this.a.path)};k.Ia=function(){return this.b.i};
	k.sa=function(a,b){T("put",[me(),new U(je,!0)],arguments);Re(this,"put");return new W(this,this.b,this.a,ge(),new Q(a),b)};k.ta=function(a,b,c){T("putString",[le(),le(Va,!0),new U(je,!0)],arguments);Re(this,"putString");var d=$a(x(b)?b:"raw",a),e=c?sa(c):{};e.contentType=d.a;return new W(this,this.b,this.a,ge(),new Q(d.data,!0),e)};k.delete=function(){T("delete",[],arguments);Re(this,"delete");var a=this;return de(this.b).then(function(b){var c=ve(a.b,a.a);return R(a.b,c,b).a()})};
	k.ga=function(){T("getMetadata",[],arguments);Re(this,"getMetadata");var a=this;return de(this.b).then(function(b){var c=ue(a.b,a.a,ge());return R(a.b,c,b).a()})};k.ua=function(a){T("updateMetadata",[new U(je,void 0)],arguments);Re(this,"updateMetadata");var b=this;return de(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=ge(),h=Ra(e),h=ka+"/v0"+h,f=ie(f,g),d=new w(h,"PATCH",re(d,g),d.c);d.b={"Content-Type":"application/json; charset=utf-8"};d.c=f;d.a=te(e);return R(b.b,d,c).a()})};
	k.ra=function(){T("getDownloadURL",[],arguments);Re(this,"getDownloadURL");return this.ga().then(function(a){a=a.downloadURLs[0];if(x(a))return a;throw new v("no-download-url","The given file does not have any download URLs.");})};var Re=function(a,b){if(""===a.a.path)throw new v("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a){this.a=new ce(a,function(a,c){return new X(a,c)},Vd,this);this.b=a;this.c=new Se(this)};k=Y.prototype;k.va=function(a){T("ref",[le(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new X(this.a);return n(a)?b.fa(a):b};
	k.wa=function(a){T("refFromURL",[le(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Sa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new X(this.a,a)};k.Ba=function(){return this.a.b};k.ya=function(a){T("setMaxUploadRetryTime",[ne()],arguments);this.a.b=a};k.Aa=function(){return this.a.c};k.xa=function(a){T("setMaxOperationRetryTime",[ne()],arguments);this.a.c=a};k.ma=function(){return this.b};
	k.ka=function(){return this.c};var Se=function(a){this.a=a};Se.prototype.delete=function(){var a=this.a.a;a.f=!0;a.a=null;be(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.fa;X.prototype.put=X.prototype.sa;X.prototype.putString=X.prototype.ta;X.prototype["delete"]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ga;X.prototype.updateMetadata=X.prototype.ua;X.prototype.getDownloadURL=X.prototype.ra;Z(X.prototype,"parent",X.prototype.Ea);Z(X.prototype,"root",X.prototype.Ga);Z(X.prototype,"bucket",X.prototype.na);
	Z(X.prototype,"fullPath",X.prototype.za);Z(X.prototype,"name",X.prototype.Da);Z(X.prototype,"storage",X.prototype.Ia);Y.prototype.ref=Y.prototype.va;Y.prototype.refFromURL=Y.prototype.wa;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.Aa);Y.prototype.setMaxOperationRetryTime=Y.prototype.xa;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.Ba);Y.prototype.setMaxUploadRetryTime=Y.prototype.ya;Z(Y.prototype,"app",Y.prototype.ma);Z(Y.prototype,"INTERNAL",Y.prototype.ka);Se.prototype["delete"]=Se.prototype.delete;
	Y.prototype.capi_=function(a){ka=a};W.prototype.on=W.prototype.O;W.prototype.resume=W.prototype.R;W.prototype.pause=W.prototype.P;W.prototype.cancel=W.prototype.L;Z(W.prototype,"snapshot",W.prototype.D);Z(z.prototype,"bytesTransferred",z.prototype.oa);Z(z.prototype,"totalBytes",z.prototype.Ka);Z(z.prototype,"state",z.prototype.Ha);Z(z.prototype,"metadata",z.prototype.Ca);Z(z.prototype,"downloadURL",z.prototype.qa);Z(z.prototype,"task",z.prototype.Ja);Z(z.prototype,"ref",z.prototype.Fa);
	ta.STATE_CHANGED="state_changed";ua.RUNNING="running";ua.PAUSED="paused";ua.SUCCESS="success";ua.CANCELED="canceled";ua.ERROR="error";Ua.RAW="raw";Ua.BASE64="base64";Ua.BASE64URL="base64url";Ua.DATA_URL="data_url";H.prototype["catch"]=H.prototype.l;H.prototype.then=H.prototype.then;
	(function(){function a(a){return new Y(a)}var b={TaskState:ua,TaskEvent:ta,StringFormat:Ua,Storage:Y,Reference:X};if(window.firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	var _interopRequireWildcard = __webpack_require__(6)['default'];

	var _decode = __webpack_require__(7);

	var _decode2 = _interopRequireDefault(_decode);

	var _encode = __webpack_require__(81);

	var _encode2 = _interopRequireDefault(_encode);

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _InstallationController = __webpack_require__(113);

	var _InstallationController2 = _interopRequireDefault(_InstallationController);

	var _ParseOp = __webpack_require__(79);

	var ParseOp = _interopRequireWildcard(_ParseOp);

	var _RESTController = __webpack_require__(114);

	var _RESTController2 = _interopRequireDefault(_RESTController);

	/**
	 * Contains all Parse API classes and functions.
	 * @class Parse
	 * @static
	 */
	var Parse = {
	  /**
	   * Call this method first to set up your authentication tokens for Parse.
	   * You can get your keys from the Data Browser on parse.com.
	   * @method initialize
	   * @param {String} applicationId Your Parse Application ID.
	   * @param {String} javaScriptKey (optional) Your Parse JavaScript Key (Not needed for parse-server)
	   * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
	   * @static
	   */
	  initialize: function initialize(applicationId, javaScriptKey) {
	    if ('browser' === 'browser' && _CoreManager2['default'].get('IS_NODE')) {
	      console.log('It looks like you\'re using the browser version of the SDK in a ' + 'node.js environment. You should require(\'parse/node\') instead.');
	    }
	    Parse._initialize(applicationId, javaScriptKey);
	  },

	  _initialize: function _initialize(applicationId, javaScriptKey, masterKey) {
	    _CoreManager2['default'].set('APPLICATION_ID', applicationId);
	    _CoreManager2['default'].set('JAVASCRIPT_KEY', javaScriptKey);
	    _CoreManager2['default'].set('MASTER_KEY', masterKey);
	    _CoreManager2['default'].set('USE_MASTER_KEY', false);
	  }
	};

	/** These legacy setters may eventually be deprecated **/
	Object.defineProperty(Parse, 'applicationId', {
	  get: function get() {
	    return _CoreManager2['default'].get('APPLICATION_ID');
	  },
	  set: function set(value) {
	    _CoreManager2['default'].set('APPLICATION_ID', value);
	  }
	});
	Object.defineProperty(Parse, 'javaScriptKey', {
	  get: function get() {
	    return _CoreManager2['default'].get('JAVASCRIPT_KEY');
	  },
	  set: function set(value) {
	    _CoreManager2['default'].set('JAVASCRIPT_KEY', value);
	  }
	});
	Object.defineProperty(Parse, 'masterKey', {
	  get: function get() {
	    return _CoreManager2['default'].get('MASTER_KEY');
	  },
	  set: function set(value) {
	    _CoreManager2['default'].set('MASTER_KEY', value);
	  }
	});
	Object.defineProperty(Parse, 'serverURL', {
	  get: function get() {
	    return _CoreManager2['default'].get('SERVER_URL');
	  },
	  set: function set(value) {
	    _CoreManager2['default'].set('SERVER_URL', value);
	  }
	});
	Object.defineProperty(Parse, 'liveQueryServerURL', {
	  get: function get() {
	    return _CoreManager2['default'].get('LIVEQUERY_SERVER_URL');
	  },
	  set: function set(value) {
	    _CoreManager2['default'].set('LIVEQUERY_SERVER_URL', value);
	  }
	});
	/** End setters **/

	Parse.ACL = __webpack_require__(8);
	Parse.Analytics = __webpack_require__(115);
	Parse.Cloud = __webpack_require__(116);
	Parse.CoreManager = __webpack_require__(48);
	Parse.Config = __webpack_require__(117);
	Parse.Error = __webpack_require__(43);
	Parse.FacebookUtils = __webpack_require__(118);
	Parse.File = __webpack_require__(51);
	Parse.GeoPoint = __webpack_require__(82);
	Parse.Installation = __webpack_require__(119);
	Parse.Object = __webpack_require__(44);
	Parse.Op = {
	  Set: ParseOp.SetOp,
	  Unset: ParseOp.UnsetOp,
	  Increment: ParseOp.IncrementOp,
	  Add: ParseOp.AddOp,
	  Remove: ParseOp.RemoveOp,
	  AddUnique: ParseOp.AddUniqueOp,
	  Relation: ParseOp.RelationOp
	};
	Parse.Promise = __webpack_require__(52);
	Parse.Push = __webpack_require__(120);
	Parse.Query = __webpack_require__(84);
	Parse.Relation = __webpack_require__(78);
	Parse.Role = __webpack_require__(26);
	Parse.Session = __webpack_require__(110);
	Parse.Storage = __webpack_require__(111);
	Parse.User = __webpack_require__(108);
	Parse.LiveQuery = __webpack_require__(121);
	Parse.LiveQueryClient = __webpack_require__(124);

	Parse._request = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return _CoreManager2['default'].getRESTController().request.apply(null, args);
	};
	Parse._ajax = function () {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  return _CoreManager2['default'].getRESTController().ajax.apply(null, args);
	};
	// We attempt to match the signatures of the legacy versions of these methods
	Parse._decode = function (_, value) {
	  return (0, _decode2['default'])(value);
	};
	Parse._encode = function (value, _, disallowObjects) {
	  return (0, _encode2['default'])(value, disallowObjects);
	};
	Parse._getInstallationId = function () {
	  return _CoreManager2['default'].getInstallationController().currentInstallationId();
	};

	_CoreManager2['default'].setInstallationController(_InstallationController2['default']);
	_CoreManager2['default'].setRESTController(_RESTController2['default']);

	// For legacy requires, of the form `var Parse = require('parse').Parse`
	Parse.Parse = Parse;

	module.exports = Parse;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = decode;

	var _ParseACL = __webpack_require__(8);

	var _ParseACL2 = _interopRequireDefault(_ParseACL);

	var _ParseFile = __webpack_require__(51);

	var _ParseFile2 = _interopRequireDefault(_ParseFile);

	var _ParseGeoPoint = __webpack_require__(82);

	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParseOp = __webpack_require__(79);

	var _ParseRelation = __webpack_require__(78);

	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);

	function decode(value) {
	  if (value === null || typeof value !== 'object') {
	    return value;
	  }
	  if (Array.isArray(value)) {
	    var dup = [];
	    value.forEach(function (v, i) {
	      dup[i] = decode(v);
	    });
	    return dup;
	  }
	  if (typeof value.__op === 'string') {
	    return (0, _ParseOp.opFromJSON)(value);
	  }
	  if (value.__type === 'Pointer' && value.className) {
	    return _ParseObject2['default'].fromJSON(value);
	  }
	  if (value.__type === 'Object' && value.className) {
	    return _ParseObject2['default'].fromJSON(value);
	  }
	  if (value.__type === 'Relation') {
	    // The parent and key fields will be populated by the parent
	    var relation = new _ParseRelation2['default'](null, null);
	    relation.targetClassName = value.className;
	    return relation;
	  }
	  if (value.__type === 'Date') {
	    return new Date(value.iso);
	  }
	  if (value.__type === 'File') {
	    return _ParseFile2['default'].fromJSON(value);
	  }
	  if (value.__type === 'GeoPoint') {
	    return new _ParseGeoPoint2['default']({
	      latitude: value.latitude,
	      longitude: value.longitude
	    });
	  }
	  var copy = {};
	  for (var k in value) {
	    copy[k] = decode(value[k]);
	  }
	  return copy;
	}

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _Object$keys = __webpack_require__(14)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _ParseRole = __webpack_require__(26);

	var _ParseRole2 = _interopRequireDefault(_ParseRole);

	var _ParseUser = __webpack_require__(108);

	var _ParseUser2 = _interopRequireDefault(_ParseUser);

	var PUBLIC_KEY = '*';

	/**
	 * Creates a new ACL.
	 * If no argument is given, the ACL has no permissions for anyone.
	 * If the argument is a Parse.User, the ACL will have read and write
	 *   permission for only that user.
	 * If the argument is any other JSON object, that object will be interpretted
	 *   as a serialized ACL created with toJSON().
	 * @class Parse.ACL
	 * @constructor
	 *
	 * <p>An ACL, or Access Control List can be added to any
	 * <code>Parse.Object</code> to restrict access to only a subset of users
	 * of your application.</p>
	 */

	var ParseACL = (function () {
	  function ParseACL(arg1) {
	    _classCallCheck(this, ParseACL);

	    this.permissionsById = {};
	    if (arg1 && typeof arg1 === 'object') {
	      if (arg1 instanceof _ParseUser2['default']) {
	        this.setReadAccess(arg1, true);
	        this.setWriteAccess(arg1, true);
	      } else {
	        for (var userId in arg1) {
	          var accessList = arg1[userId];
	          if (typeof userId !== 'string') {
	            throw new TypeError('Tried to create an ACL with an invalid user id.');
	          }
	          this.permissionsById[userId] = {};
	          for (var permission in accessList) {
	            var allowed = accessList[permission];
	            if (permission !== 'read' && permission !== 'write') {
	              throw new TypeError('Tried to create an ACL with an invalid permission type.');
	            }
	            if (typeof allowed !== 'boolean') {
	              throw new TypeError('Tried to create an ACL with an invalid permission value.');
	            }
	            this.permissionsById[userId][permission] = allowed;
	          }
	        }
	      }
	    } else if (typeof arg1 === 'function') {
	      throw new TypeError('ParseACL constructed with a function. Did you forget ()?');
	    }
	  }

	  /**
	   * Returns a JSON-encoded version of the ACL.
	   * @method toJSON
	   * @return {Object}
	   */

	  _createClass(ParseACL, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      var permissions = {};
	      for (var p in this.permissionsById) {
	        permissions[p] = this.permissionsById[p];
	      }
	      return permissions;
	    }

	    /**
	     * Returns whether this ACL is equal to another object
	     * @method equals
	     * @param other The other object to compare to
	     * @return {Boolean}
	     */
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      if (!(other instanceof ParseACL)) {
	        return false;
	      }
	      var users = _Object$keys(this.permissionsById);
	      var otherUsers = _Object$keys(other.permissionsById);
	      if (users.length !== otherUsers.length) {
	        return false;
	      }
	      for (var u in this.permissionsById) {
	        if (!other.permissionsById[u]) {
	          return false;
	        }
	        if (this.permissionsById[u].read !== other.permissionsById[u].read) {
	          return false;
	        }
	        if (this.permissionsById[u].write !== other.permissionsById[u].write) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: '_setAccess',
	    value: function _setAccess(accessType, userId, allowed) {
	      if (userId instanceof _ParseUser2['default']) {
	        userId = userId.id;
	      } else if (userId instanceof _ParseRole2['default']) {
	        var _name = userId.getName();
	        if (!_name) {
	          throw new TypeError('Role must have a name');
	        }
	        userId = 'role:' + _name;
	      }
	      if (typeof userId !== 'string') {
	        throw new TypeError('userId must be a string.');
	      }
	      if (typeof allowed !== 'boolean') {
	        throw new TypeError('allowed must be either true or false.');
	      }
	      var permissions = this.permissionsById[userId];
	      if (!permissions) {
	        if (!allowed) {
	          // The user already doesn't have this permission, so no action is needed
	          return;
	        } else {
	          permissions = {};
	          this.permissionsById[userId] = permissions;
	        }
	      }

	      if (allowed) {
	        this.permissionsById[userId][accessType] = true;
	      } else {
	        delete permissions[accessType];
	        if (_Object$keys(permissions).length === 0) {
	          delete this.permissionsById[userId];
	        }
	      }
	    }
	  }, {
	    key: '_getAccess',
	    value: function _getAccess(accessType, userId) {
	      if (userId instanceof _ParseUser2['default']) {
	        userId = userId.id;
	        if (!userId) {
	          throw new Error('Cannot get access for a ParseUser without an ID');
	        }
	      } else if (userId instanceof _ParseRole2['default']) {
	        var _name2 = userId.getName();
	        if (!_name2) {
	          throw new TypeError('Role must have a name');
	        }
	        userId = 'role:' + _name2;
	      }
	      var permissions = this.permissionsById[userId];
	      if (!permissions) {
	        return false;
	      }
	      return !!permissions[accessType];
	    }

	    /**
	     * Sets whether the given user is allowed to read this object.
	     * @method setReadAccess
	     * @param userId An instance of Parse.User or its objectId.
	     * @param {Boolean} allowed Whether that user should have read access.
	     */
	  }, {
	    key: 'setReadAccess',
	    value: function setReadAccess(userId, allowed) {
	      this._setAccess('read', userId, allowed);
	    }

	    /**
	     * Get whether the given user id is *explicitly* allowed to read this object.
	     * Even if this returns false, the user may still be able to access it if
	     * getPublicReadAccess returns true or a role that the user belongs to has
	     * write access.
	     * @method getReadAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getReadAccess',
	    value: function getReadAccess(userId) {
	      return this._getAccess('read', userId);
	    }

	    /**
	     * Sets whether the given user id is allowed to write this object.
	     * @method setWriteAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role..
	     * @param {Boolean} allowed Whether that user should have write access.
	     */
	  }, {
	    key: 'setWriteAccess',
	    value: function setWriteAccess(userId, allowed) {
	      this._setAccess('write', userId, allowed);
	    }

	    /**
	     * Gets whether the given user id is *explicitly* allowed to write this object.
	     * Even if this returns false, the user may still be able to write it if
	     * getPublicWriteAccess returns true or a role that the user belongs to has
	     * write access.
	     * @method getWriteAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getWriteAccess',
	    value: function getWriteAccess(userId) {
	      return this._getAccess('write', userId);
	    }

	    /**
	     * Sets whether the public is allowed to read this object.
	     * @method setPublicReadAccess
	     * @param {Boolean} allowed
	     */
	  }, {
	    key: 'setPublicReadAccess',
	    value: function setPublicReadAccess(allowed) {
	      this.setReadAccess(PUBLIC_KEY, allowed);
	    }

	    /**
	     * Gets whether the public is allowed to read this object.
	     * @method getPublicReadAccess
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getPublicReadAccess',
	    value: function getPublicReadAccess() {
	      return this.getReadAccess(PUBLIC_KEY);
	    }

	    /**
	     * Sets whether the public is allowed to write this object.
	     * @method setPublicWriteAccess
	     * @param {Boolean} allowed
	     */
	  }, {
	    key: 'setPublicWriteAccess',
	    value: function setPublicWriteAccess(allowed) {
	      this.setWriteAccess(PUBLIC_KEY, allowed);
	    }

	    /**
	     * Gets whether the public is allowed to write this object.
	     * @method getPublicWriteAccess
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getPublicWriteAccess',
	    value: function getPublicWriteAccess() {
	      return this.getWriteAccess(PUBLIC_KEY);
	    }

	    /**
	     * Gets whether users belonging to the given role are allowed
	     * to read this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has read access.
	     *
	     * @method getRoleReadAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has read access. false otherwise.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'getRoleReadAccess',
	    value: function getRoleReadAccess(role) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      return this.getReadAccess('role:' + role);
	    }

	    /**
	     * Gets whether users belonging to the given role are allowed
	     * to write this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has write access.
	     *
	     * @method getRoleWriteAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has write access. false otherwise.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'getRoleWriteAccess',
	    value: function getRoleWriteAccess(role) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      return this.getWriteAccess('role:' + role);
	    }

	    /**
	     * Sets whether users belonging to the given role are allowed
	     * to read this object.
	     *
	     * @method setRoleReadAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can read this object.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'setRoleReadAccess',
	    value: function setRoleReadAccess(role, allowed) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      this.setReadAccess('role:' + role, allowed);
	    }

	    /**
	     * Sets whether users belonging to the given role are allowed
	     * to write this object.
	     *
	     * @method setRoleWriteAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can write this object.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'setRoleWriteAccess',
	    value: function setRoleWriteAccess(role, allowed) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      this.setWriteAccess('role:' + role, allowed);
	    }
	  }]);

	  return ParseACL;
	})();

	exports['default'] = ParseACL;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(10)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	module.exports = __webpack_require__(22).Object.keys;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(17);

	__webpack_require__(19)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(18);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(20)
	  , core    = __webpack_require__(22)
	  , fails   = __webpack_require__(25);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(21)
	  , core      = __webpack_require__(22)
	  , ctx       = __webpack_require__(23)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 21 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(24);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	/**
	 * Represents a Role on the Parse server. Roles represent groupings of
	 * Users for the purposes of granting permissions (e.g. specifying an ACL
	 * for an Object). Roles are specified by their sets of child users and
	 * child roles, all of which are granted any permissions that the parent
	 * role has.
	 *
	 * <p>Roles must have a name (which cannot be changed after creation of the
	 * role), and must specify an ACL.</p>
	 * @class Parse.Role
	 * @constructor
	 * @param {String} name The name of the Role to create.
	 * @param {Parse.ACL} acl The ACL for this role. Roles must have an ACL.
	 * A Parse.Role is a local representation of a role persisted to the Parse
	 * cloud.
	 */
	'use strict';

	var _get = __webpack_require__(27)['default'];

	var _inherits = __webpack_require__(34)['default'];

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _ParseACL = __webpack_require__(8);

	var _ParseACL2 = _interopRequireDefault(_ParseACL);

	var _ParseError = __webpack_require__(43);

	var _ParseError2 = _interopRequireDefault(_ParseError);

	var _ParseObject2 = __webpack_require__(44);

	var _ParseObject3 = _interopRequireDefault(_ParseObject2);

	var ParseRole = (function (_ParseObject) {
	  _inherits(ParseRole, _ParseObject);

	  function ParseRole(name, acl) {
	    _classCallCheck(this, ParseRole);

	    _get(Object.getPrototypeOf(ParseRole.prototype), 'constructor', this).call(this, '_Role');
	    if (typeof name === 'string' && acl instanceof _ParseACL2['default']) {
	      this.setName(name);
	      this.setACL(acl);
	    }
	  }

	  /**
	   * Gets the name of the role.  You can alternatively call role.get("name")
	   *
	   * @method getName
	   * @return {String} the name of the role.
	   */

	  _createClass(ParseRole, [{
	    key: 'getName',
	    value: function getName() {
	      var name = this.get('name');
	      if (name == null || typeof name === 'string') {
	        return name;
	      }
	      return '';
	    }

	    /**
	     * Sets the name for a role. This value must be set before the role has
	     * been saved to the server, and cannot be set once the role has been
	     * saved.
	     *
	     * <p>
	     *   A role's name can only contain alphanumeric characters, _, -, and
	     *   spaces.
	     * </p>
	     *
	     * <p>This is equivalent to calling role.set("name", name)</p>
	     *
	     * @method setName
	     * @param {String} name The name of the role.
	     * @param {Object} options Standard options object with success and error
	     *     callbacks.
	     */
	  }, {
	    key: 'setName',
	    value: function setName(name, options) {
	      return this.set('name', name, options);
	    }

	    /**
	     * Gets the Parse.Relation for the Parse.Users that are direct
	     * children of this role. These users are granted any privileges that this
	     * role has been granted (e.g. read or write access through ACLs). You can
	     * add or remove users from the role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("users")</p>
	     *
	     * @method getUsers
	     * @return {Parse.Relation} the relation for the users belonging to this
	     *     role.
	     */
	  }, {
	    key: 'getUsers',
	    value: function getUsers() {
	      return this.relation('users');
	    }

	    /**
	     * Gets the Parse.Relation for the Parse.Roles that are direct
	     * children of this role. These roles' users are granted any privileges that
	     * this role has been granted (e.g. read or write access through ACLs). You
	     * can add or remove child roles from this role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("roles")</p>
	     *
	     * @method getRoles
	     * @return {Parse.Relation} the relation for the roles belonging to this
	     *     role.
	     */
	  }, {
	    key: 'getRoles',
	    value: function getRoles() {
	      return this.relation('roles');
	    }
	  }, {
	    key: 'validate',
	    value: function validate(attrs, options) {
	      var isInvalid = _get(Object.getPrototypeOf(ParseRole.prototype), 'validate', this).call(this, attrs, options);
	      if (isInvalid) {
	        return isInvalid;
	      }

	      if ('name' in attrs && attrs.name !== this.getName()) {
	        var newName = attrs.name;
	        if (this.id && this.id !== attrs.objectId) {
	          // Check to see if the objectId being set matches this.id
	          // This happens during a fetch -- the id is set before calling fetch
	          // Let the name be set in this case
	          return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name can only be set before it has been saved.');
	        }
	        if (typeof newName !== 'string') {
	          return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name must be a String.');
	        }
	        if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
	          return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name can be only contain alphanumeric characters, _, ' + '-, and spaces.');
	        }
	      }
	      return false;
	    }
	  }]);

	  return ParseRole;
	})(_ParseObject3['default']);

	exports['default'] = ParseRole;

	_ParseObject3['default'].registerSubclass('_Role', ParseRole);
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(28)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	__webpack_require__(30);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(31);

	__webpack_require__(19)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32)
	  , defined = __webpack_require__(18);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(35)["default"];

	var _Object$setPrototypeOf = __webpack_require__(37)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(39);
	module.exports = __webpack_require__(22).Object.setPrototypeOf;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(20);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(40).set});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(12).getDesc
	  , isObject = __webpack_require__(41)
	  , anObject = __webpack_require__(42);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(23)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Constructs a new Parse.Error object with the given code and message.
	 * @class Parse.Error
	 * @constructor
	 * @param {Number} code An error code constant from <code>Parse.Error</code>.
	 * @param {String} message A detailed description of the error.
	 */
	"use strict";

	var _classCallCheck = __webpack_require__(13)["default"];

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var ParseError = function ParseError(code, message) {
	  _classCallCheck(this, ParseError);

	  this.code = code;
	  this.message = message;
	}

	/**
	 * Error code indicating some error other than those enumerated here.
	 * @property OTHER_CAUSE
	 * @static
	 * @final
	 */
	;

	exports["default"] = ParseError;
	ParseError.OTHER_CAUSE = -1;

	/**
	 * Error code indicating that something has gone wrong with the server.
	 * If you get this error code, it is Parse's fault. Contact us at
	 * https://parse.com/help
	 * @property INTERNAL_SERVER_ERROR
	 * @static
	 * @final
	 */
	ParseError.INTERNAL_SERVER_ERROR = 1;

	/**
	 * Error code indicating the connection to the Parse servers failed.
	 * @property CONNECTION_FAILED
	 * @static
	 * @final
	 */
	ParseError.CONNECTION_FAILED = 100;

	/**
	 * Error code indicating the specified object doesn't exist.
	 * @property OBJECT_NOT_FOUND
	 * @static
	 * @final
	 */
	ParseError.OBJECT_NOT_FOUND = 101;

	/**
	 * Error code indicating you tried to query with a datatype that doesn't
	 * support it, like exact matching an array or object.
	 * @property INVALID_QUERY
	 * @static
	 * @final
	 */
	ParseError.INVALID_QUERY = 102;

	/**
	 * Error code indicating a missing or invalid classname. Classnames are
	 * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
	 * only valid characters.
	 * @property INVALID_CLASS_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_CLASS_NAME = 103;

	/**
	 * Error code indicating an unspecified object id.
	 * @property MISSING_OBJECT_ID
	 * @static
	 * @final
	 */
	ParseError.MISSING_OBJECT_ID = 104;

	/**
	 * Error code indicating an invalid key name. Keys are case-sensitive. They
	 * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
	 * @property INVALID_KEY_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_KEY_NAME = 105;

	/**
	 * Error code indicating a malformed pointer. You should not see this unless
	 * you have been mucking about changing internal Parse code.
	 * @property INVALID_POINTER
	 * @static
	 * @final
	 */
	ParseError.INVALID_POINTER = 106;

	/**
	 * Error code indicating that badly formed JSON was received upstream. This
	 * either indicates you have done something unusual with modifying how
	 * things encode to JSON, or the network is failing badly.
	 * @property INVALID_JSON
	 * @static
	 * @final
	 */
	ParseError.INVALID_JSON = 107;

	/**
	 * Error code indicating that the feature you tried to access is only
	 * available internally for testing purposes.
	 * @property COMMAND_UNAVAILABLE
	 * @static
	 * @final
	 */
	ParseError.COMMAND_UNAVAILABLE = 108;

	/**
	 * You must call Parse.initialize before using the Parse library.
	 * @property NOT_INITIALIZED
	 * @static
	 * @final
	 */
	ParseError.NOT_INITIALIZED = 109;

	/**
	 * Error code indicating that a field was set to an inconsistent type.
	 * @property INCORRECT_TYPE
	 * @static
	 * @final
	 */
	ParseError.INCORRECT_TYPE = 111;

	/**
	 * Error code indicating an invalid channel name. A channel name is either
	 * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
	 * characters and starts with a letter.
	 * @property INVALID_CHANNEL_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_CHANNEL_NAME = 112;

	/**
	 * Error code indicating that push is misconfigured.
	 * @property PUSH_MISCONFIGURED
	 * @static
	 * @final
	 */
	ParseError.PUSH_MISCONFIGURED = 115;

	/**
	 * Error code indicating that the object is too large.
	 * @property OBJECT_TOO_LARGE
	 * @static
	 * @final
	 */
	ParseError.OBJECT_TOO_LARGE = 116;

	/**
	 * Error code indicating that the operation isn't allowed for clients.
	 * @property OPERATION_FORBIDDEN
	 * @static
	 * @final
	 */
	ParseError.OPERATION_FORBIDDEN = 119;

	/**
	 * Error code indicating the result was not found in the cache.
	 * @property CACHE_MISS
	 * @static
	 * @final
	 */
	ParseError.CACHE_MISS = 120;

	/**
	 * Error code indicating that an invalid key was used in a nested
	 * JSONObject.
	 * @property INVALID_NESTED_KEY
	 * @static
	 * @final
	 */
	ParseError.INVALID_NESTED_KEY = 121;

	/**
	 * Error code indicating that an invalid filename was used for ParseFile.
	 * A valid file name contains only a-zA-Z0-9_. characters and is between 1
	 * and 128 characters.
	 * @property INVALID_FILE_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_FILE_NAME = 122;

	/**
	 * Error code indicating an invalid ACL was provided.
	 * @property INVALID_ACL
	 * @static
	 * @final
	 */
	ParseError.INVALID_ACL = 123;

	/**
	 * Error code indicating that the request timed out on the server. Typically
	 * this indicates that the request is too expensive to run.
	 * @property TIMEOUT
	 * @static
	 * @final
	 */
	ParseError.TIMEOUT = 124;

	/**
	 * Error code indicating that the email address was invalid.
	 * @property INVALID_EMAIL_ADDRESS
	 * @static
	 * @final
	 */
	ParseError.INVALID_EMAIL_ADDRESS = 125;

	/**
	 * Error code indicating a missing content type.
	 * @property MISSING_CONTENT_TYPE
	 * @static
	 * @final
	 */
	ParseError.MISSING_CONTENT_TYPE = 126;

	/**
	 * Error code indicating a missing content length.
	 * @property MISSING_CONTENT_LENGTH
	 * @static
	 * @final
	 */
	ParseError.MISSING_CONTENT_LENGTH = 127;

	/**
	 * Error code indicating an invalid content length.
	 * @property INVALID_CONTENT_LENGTH
	 * @static
	 * @final
	 */
	ParseError.INVALID_CONTENT_LENGTH = 128;

	/**
	 * Error code indicating a file that was too large.
	 * @property FILE_TOO_LARGE
	 * @static
	 * @final
	 */
	ParseError.FILE_TOO_LARGE = 129;

	/**
	 * Error code indicating an error saving a file.
	 * @property FILE_SAVE_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_SAVE_ERROR = 130;

	/**
	 * Error code indicating that a unique field was given a value that is
	 * already taken.
	 * @property DUPLICATE_VALUE
	 * @static
	 * @final
	 */
	ParseError.DUPLICATE_VALUE = 137;

	/**
	 * Error code indicating that a role's name is invalid.
	 * @property INVALID_ROLE_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_ROLE_NAME = 139;

	/**
	 * Error code indicating that an application quota was exceeded.  Upgrade to
	 * resolve.
	 * @property EXCEEDED_QUOTA
	 * @static
	 * @final
	 */
	ParseError.EXCEEDED_QUOTA = 140;

	/**
	 * Error code indicating that a Cloud Code script failed.
	 * @property SCRIPT_FAILED
	 * @static
	 * @final
	 */
	ParseError.SCRIPT_FAILED = 141;

	/**
	 * Error code indicating that a Cloud Code validation failed.
	 * @property VALIDATION_ERROR
	 * @static
	 * @final
	 */
	ParseError.VALIDATION_ERROR = 142;

	/**
	 * Error code indicating that invalid image data was provided.
	 * @property INVALID_IMAGE_DATA
	 * @static
	 * @final
	 */
	ParseError.INVALID_IMAGE_DATA = 143;

	/**
	 * Error code indicating an unsaved file.
	 * @property UNSAVED_FILE_ERROR
	 * @static
	 * @final
	 */
	ParseError.UNSAVED_FILE_ERROR = 151;

	/**
	 * Error code indicating an invalid push time.
	 * @property INVALID_PUSH_TIME_ERROR
	 * @static
	 * @final
	 */
	ParseError.INVALID_PUSH_TIME_ERROR = 152;

	/**
	 * Error code indicating an error deleting a file.
	 * @property FILE_DELETE_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_DELETE_ERROR = 153;

	/**
	 * Error code indicating that the application has exceeded its request
	 * limit.
	 * @property REQUEST_LIMIT_EXCEEDED
	 * @static
	 * @final
	 */
	ParseError.REQUEST_LIMIT_EXCEEDED = 155;

	/**
	 * Error code indicating an invalid event name.
	 * @property INVALID_EVENT_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_EVENT_NAME = 160;

	/**
	 * Error code indicating that the username is missing or empty.
	 * @property USERNAME_MISSING
	 * @static
	 * @final
	 */
	ParseError.USERNAME_MISSING = 200;

	/**
	 * Error code indicating that the password is missing or empty.
	 * @property PASSWORD_MISSING
	 * @static
	 * @final
	 */
	ParseError.PASSWORD_MISSING = 201;

	/**
	 * Error code indicating that the username has already been taken.
	 * @property USERNAME_TAKEN
	 * @static
	 * @final
	 */
	ParseError.USERNAME_TAKEN = 202;

	/**
	 * Error code indicating that the email has already been taken.
	 * @property EMAIL_TAKEN
	 * @static
	 * @final
	 */
	ParseError.EMAIL_TAKEN = 203;

	/**
	 * Error code indicating that the email is missing, but must be specified.
	 * @property EMAIL_MISSING
	 * @static
	 * @final
	 */
	ParseError.EMAIL_MISSING = 204;

	/**
	 * Error code indicating that a user with the specified email was not found.
	 * @property EMAIL_NOT_FOUND
	 * @static
	 * @final
	 */
	ParseError.EMAIL_NOT_FOUND = 205;

	/**
	 * Error code indicating that a user object without a valid session could
	 * not be altered.
	 * @property SESSION_MISSING
	 * @static
	 * @final
	 */
	ParseError.SESSION_MISSING = 206;

	/**
	 * Error code indicating that a user can only be created through signup.
	 * @property MUST_CREATE_USER_THROUGH_SIGNUP
	 * @static
	 * @final
	 */
	ParseError.MUST_CREATE_USER_THROUGH_SIGNUP = 207;

	/**
	 * Error code indicating that an an account being linked is already linked
	 * to another user.
	 * @property ACCOUNT_ALREADY_LINKED
	 * @static
	 * @final
	 */
	ParseError.ACCOUNT_ALREADY_LINKED = 208;

	/**
	 * Error code indicating that the current session token is invalid.
	 * @property INVALID_SESSION_TOKEN
	 * @static
	 * @final
	 */
	ParseError.INVALID_SESSION_TOKEN = 209;

	/**
	 * Error code indicating that a user cannot be linked to an account because
	 * that account's id could not be found.
	 * @property LINKED_ID_MISSING
	 * @static
	 * @final
	 */
	ParseError.LINKED_ID_MISSING = 250;

	/**
	 * Error code indicating that a user with a linked (e.g. Facebook) account
	 * has an invalid session.
	 * @property INVALID_LINKED_SESSION
	 * @static
	 * @final
	 */
	ParseError.INVALID_LINKED_SESSION = 251;

	/**
	 * Error code indicating that a service being linked (e.g. Facebook or
	 * Twitter) is unsupported.
	 * @property UNSUPPORTED_SERVICE
	 * @static
	 * @final
	 */
	ParseError.UNSUPPORTED_SERVICE = 252;

	/**
	 * Error code indicating that there were multiple errors. Aggregate errors
	 * have an "errors" property, which is an array of error objects with more
	 * detail about each error that occurred.
	 * @property AGGREGATE_ERROR
	 * @static
	 * @final
	 */
	ParseError.AGGREGATE_ERROR = 600;

	/**
	 * Error code indicating the client was unable to read an input file.
	 * @property FILE_READ_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_READ_ERROR = 601;

	/**
	 * Error code indicating a real error code is unavailable because
	 * we had to use an XDomainRequest object to allow CORS requests in
	 * Internet Explorer, which strips the body from HTTP responses that have
	 * a non-2XX status code.
	 * @property X_DOMAIN_REQUEST
	 * @static
	 * @final
	 */
	ParseError.X_DOMAIN_REQUEST = 602;
	module.exports = exports["default"];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _Object$keys = __webpack_require__(14)['default'];

	var _Object$freeze = __webpack_require__(45)['default'];

	var _Object$create = __webpack_require__(35)['default'];

	var _Object$defineProperty = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	var _interopRequireWildcard = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _canBeSerialized = __webpack_require__(50);

	var _canBeSerialized2 = _interopRequireDefault(_canBeSerialized);

	var _decode = __webpack_require__(7);

	var _decode2 = _interopRequireDefault(_decode);

	var _encode = __webpack_require__(81);

	var _encode2 = _interopRequireDefault(_encode);

	var _equals = __webpack_require__(85);

	var _equals2 = _interopRequireDefault(_equals);

	var _escape2 = __webpack_require__(86);

	var _escape3 = _interopRequireDefault(_escape2);

	var _ParseACL = __webpack_require__(8);

	var _ParseACL2 = _interopRequireDefault(_ParseACL);

	var _parseDate = __webpack_require__(87);

	var _parseDate2 = _interopRequireDefault(_parseDate);

	var _ParseError = __webpack_require__(43);

	var _ParseError2 = _interopRequireDefault(_ParseError);

	var _ParseFile = __webpack_require__(51);

	var _ParseFile2 = _interopRequireDefault(_ParseFile);

	var _ParseOp = __webpack_require__(79);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _ParseQuery = __webpack_require__(84);

	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);

	var _ParseRelation = __webpack_require__(78);

	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);

	var _SingleInstanceStateController = __webpack_require__(88);

	var SingleInstanceStateController = _interopRequireWildcard(_SingleInstanceStateController);

	var _unique = __webpack_require__(83);

	var _unique2 = _interopRequireDefault(_unique);

	var _UniqueInstanceStateController = __webpack_require__(91);

	var UniqueInstanceStateController = _interopRequireWildcard(_UniqueInstanceStateController);

	var _unsavedChildren = __webpack_require__(107);

	var _unsavedChildren2 = _interopRequireDefault(_unsavedChildren);

	// Mapping of class names to constructors, so we can populate objects from the
	// server with appropriate subclasses of ParseObject
	var classMap = {};

	// Global counter for generating unique local Ids
	var localCount = 0;
	// Global counter for generating unique Ids for non-single-instance objects
	var objectCount = 0;
	// On web clients, objects are single-instance: any two objects with the same Id
	// will have the same attributes. However, this may be dangerous default
	// behavior in a server scenario
	var singleInstance = !_CoreManager2['default'].get('IS_NODE');
	if (singleInstance) {
	  _CoreManager2['default'].setObjectStateController(SingleInstanceStateController);
	} else {
	  _CoreManager2['default'].setObjectStateController(UniqueInstanceStateController);
	}

	function getServerUrlPath() {
	  var serverUrl = _CoreManager2['default'].get('SERVER_URL');
	  if (serverUrl[serverUrl.length - 1] !== '/') {
	    serverUrl += '/';
	  }
	  var url = serverUrl.replace(/https?:\/\//, '');
	  return url.substr(url.indexOf('/'));
	}

	/**
	 * Creates a new model with defined attributes.
	 *
	 * <p>You won't normally call this method directly.  It is recommended that
	 * you use a subclass of <code>Parse.Object</code> instead, created by calling
	 * <code>extend</code>.</p>
	 *
	 * <p>However, if you don't want to use a subclass, or aren't sure which
	 * subclass is appropriate, you can use this form:<pre>
	 *     var object = new Parse.Object("ClassName");
	 * </pre>
	 * That is basically equivalent to:<pre>
	 *     var MyClass = Parse.Object.extend("ClassName");
	 *     var object = new MyClass();
	 * </pre></p>
	 *
	 * @class Parse.Object
	 * @constructor
	 * @param {String} className The class name for the object
	 * @param {Object} attributes The initial set of data to store in the object.
	 * @param {Object} options The options for this object instance.
	 */

	var ParseObject = (function () {
	  function ParseObject(className, attributes, options) {
	    _classCallCheck(this, ParseObject);

	    // Enable legacy initializers
	    if (typeof this.initialize === 'function') {
	      this.initialize.apply(this, arguments);
	    }

	    var toSet = null;
	    this._objCount = objectCount++;
	    if (typeof className === 'string') {
	      this.className = className;
	      if (attributes && typeof attributes === 'object') {
	        toSet = attributes;
	      }
	    } else if (className && typeof className === 'object') {
	      this.className = className.className;
	      toSet = {};
	      for (var attr in className) {
	        if (attr !== 'className') {
	          toSet[attr] = className[attr];
	        }
	      }
	      if (attributes && typeof attributes === 'object') {
	        options = attributes;
	      }
	    }
	    if (toSet && !this.set(toSet, options)) {
	      throw new Error('Can\'t create an invalid Parse Object');
	    }
	  }

	  /** Prototype getters / setters **/

	  _createClass(ParseObject, [{
	    key: '_getId',

	    /** Private methods **/

	    /**
	     * Returns a local or server Id used uniquely identify this object
	     */
	    value: function _getId() {
	      if (typeof this.id === 'string') {
	        return this.id;
	      }
	      if (typeof this._localId === 'string') {
	        return this._localId;
	      }
	      var localId = 'local' + String(localCount++);
	      this._localId = localId;
	      return localId;
	    }

	    /**
	     * Returns a unique identifier used to pull data from the State Controller.
	     */
	  }, {
	    key: '_getStateIdentifier',
	    value: function _getStateIdentifier() {
	      if (singleInstance) {
	        var _id = this.id;
	        if (!_id) {
	          _id = this._getId();
	        }
	        return {
	          id: _id,
	          className: this.className
	        };
	      } else {
	        return this;
	      }
	    }
	  }, {
	    key: '_getServerData',
	    value: function _getServerData() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      return stateController.getServerData(this._getStateIdentifier());
	    }
	  }, {
	    key: '_clearServerData',
	    value: function _clearServerData() {
	      var serverData = this._getServerData();
	      var unset = {};
	      for (var attr in serverData) {
	        unset[attr] = undefined;
	      }
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.setServerData(this._getStateIdentifier(), unset);
	    }
	  }, {
	    key: '_getPendingOps',
	    value: function _getPendingOps() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      return stateController.getPendingOps(this._getStateIdentifier());
	    }
	  }, {
	    key: '_clearPendingOps',
	    value: function _clearPendingOps() {
	      var pending = this._getPendingOps();
	      var latest = pending[pending.length - 1];
	      var keys = _Object$keys(latest);
	      keys.forEach(function (key) {
	        delete latest[key];
	      });
	    }
	  }, {
	    key: '_getDirtyObjectAttributes',
	    value: function _getDirtyObjectAttributes() {
	      var attributes = this.attributes;
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var objectCache = stateController.getObjectCache(this._getStateIdentifier());
	      var dirty = {};
	      for (var attr in attributes) {
	        var val = attributes[attr];
	        if (val && typeof val === 'object' && !(val instanceof ParseObject) && !(val instanceof _ParseFile2['default']) && !(val instanceof _ParseRelation2['default'])) {
	          // Due to the way browsers construct maps, the key order will not change
	          // unless the object is changed
	          try {
	            var json = (0, _encode2['default'])(val, false, true);
	            var stringified = JSON.stringify(json);
	            if (objectCache[attr] !== stringified) {
	              dirty[attr] = val;
	            }
	          } catch (e) {
	            // Error occurred, possibly by a nested unsaved pointer in a mutable container
	            // No matter how it happened, it indicates a change in the attribute
	            dirty[attr] = val;
	          }
	        }
	      }
	      return dirty;
	    }
	  }, {
	    key: '_toFullJSON',
	    value: function _toFullJSON(seen) {
	      var json = this.toJSON(seen);
	      json.__type = 'Object';
	      json.className = this.className;
	      return json;
	    }
	  }, {
	    key: '_getSaveJSON',
	    value: function _getSaveJSON() {
	      var pending = this._getPendingOps();
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      var json = {};
	      var attr;
	      for (attr in dirtyObjects) {
	        json[attr] = new _ParseOp.SetOp(dirtyObjects[attr]).toJSON();
	      }
	      for (attr in pending[0]) {
	        json[attr] = pending[0][attr].toJSON();
	      }
	      return json;
	    }
	  }, {
	    key: '_getSaveParams',
	    value: function _getSaveParams() {
	      var method = this.id ? 'PUT' : 'POST';
	      var body = this._getSaveJSON();
	      var path = 'classes/' + this.className;
	      if (this.id) {
	        path += '/' + this.id;
	      } else if (this.className === '_User') {
	        path = 'users';
	      }
	      return {
	        method: method,
	        body: body,
	        path: path
	      };
	    }
	  }, {
	    key: '_finishFetch',
	    value: function _finishFetch(serverData) {
	      if (!this.id && serverData.objectId) {
	        this.id = serverData.objectId;
	      }
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.initializeState(this._getStateIdentifier());
	      var decoded = {};
	      for (var attr in serverData) {
	        if (attr === 'ACL') {
	          decoded[attr] = new _ParseACL2['default'](serverData[attr]);
	        } else if (attr !== 'objectId') {
	          decoded[attr] = (0, _decode2['default'])(serverData[attr]);
	          if (decoded[attr] instanceof _ParseRelation2['default']) {
	            decoded[attr]._ensureParentAndKey(this, attr);
	          }
	        }
	      }
	      if (decoded.createdAt && typeof decoded.createdAt === 'string') {
	        decoded.createdAt = (0, _parseDate2['default'])(decoded.createdAt);
	      }
	      if (decoded.updatedAt && typeof decoded.updatedAt === 'string') {
	        decoded.updatedAt = (0, _parseDate2['default'])(decoded.updatedAt);
	      }
	      if (!decoded.updatedAt && decoded.createdAt) {
	        decoded.updatedAt = decoded.createdAt;
	      }
	      stateController.commitServerChanges(this._getStateIdentifier(), decoded);
	    }
	  }, {
	    key: '_setExisted',
	    value: function _setExisted(existed) {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var state = stateController.getState(this._getStateIdentifier());
	      if (state) {
	        state.existed = existed;
	      }
	    }
	  }, {
	    key: '_migrateId',
	    value: function _migrateId(serverId) {
	      if (this._localId && serverId) {
	        if (singleInstance) {
	          var stateController = _CoreManager2['default'].getObjectStateController();
	          var oldState = stateController.removeState(this._getStateIdentifier());
	          this.id = serverId;
	          delete this._localId;
	          if (oldState) {
	            stateController.initializeState(this._getStateIdentifier(), oldState);
	          }
	        } else {
	          this.id = serverId;
	          delete this._localId;
	        }
	      }
	    }
	  }, {
	    key: '_handleSaveResponse',
	    value: function _handleSaveResponse(response, status) {
	      var changes = {};
	      var attr;
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var pending = stateController.popPendingState(this._getStateIdentifier());
	      for (attr in pending) {
	        if (pending[attr] instanceof _ParseOp.RelationOp) {
	          changes[attr] = pending[attr].applyTo(undefined, this, attr);
	        } else if (!(attr in response)) {
	          // Only SetOps and UnsetOps should not come back with results
	          changes[attr] = pending[attr].applyTo(undefined);
	        }
	      }
	      for (attr in response) {
	        if ((attr === 'createdAt' || attr === 'updatedAt') && typeof response[attr] === 'string') {
	          changes[attr] = (0, _parseDate2['default'])(response[attr]);
	        } else if (attr === 'ACL') {
	          changes[attr] = new _ParseACL2['default'](response[attr]);
	        } else if (attr !== 'objectId') {
	          changes[attr] = (0, _decode2['default'])(response[attr]);
	          if (changes[attr] instanceof _ParseOp.UnsetOp) {
	            changes[attr] = undefined;
	          }
	        }
	      }
	      if (changes.createdAt && !changes.updatedAt) {
	        changes.updatedAt = changes.createdAt;
	      }

	      this._migrateId(response.objectId);

	      if (status !== 201) {
	        this._setExisted(true);
	      }

	      stateController.commitServerChanges(this._getStateIdentifier(), changes);
	    }
	  }, {
	    key: '_handleSaveError',
	    value: function _handleSaveError() {
	      var pending = this._getPendingOps();
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.mergeFirstPendingState(this._getStateIdentifier());
	    }

	    /** Public methods **/

	  }, {
	    key: 'initialize',
	    value: function initialize() {}
	    // NOOP

	    /**
	     * Returns a JSON version of the object suitable for saving to Parse.
	     * @method toJSON
	     * @return {Object}
	     */

	  }, {
	    key: 'toJSON',
	    value: function toJSON(seen) {
	      var seenEntry = this.id ? this.className + ':' + this.id : this;
	      var seen = seen || [seenEntry];
	      var json = {};
	      var attrs = this.attributes;
	      for (var attr in attrs) {
	        if ((attr === 'createdAt' || attr === 'updatedAt') && attrs[attr].toJSON) {
	          json[attr] = attrs[attr].toJSON();
	        } else {
	          json[attr] = (0, _encode2['default'])(attrs[attr], false, false, seen);
	        }
	      }
	      var pending = this._getPendingOps();
	      for (var attr in pending[0]) {
	        json[attr] = pending[0][attr].toJSON();
	      }

	      if (this.id) {
	        json.objectId = this.id;
	      }
	      return json;
	    }

	    /**
	     * Determines whether this ParseObject is equal to another ParseObject
	     * @method equals
	     * @return {Boolean}
	     */
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      if (this === other) {
	        return true;
	      }
	      return other instanceof ParseObject && this.className === other.className && this.id === other.id && typeof this.id !== 'undefined';
	    }

	    /**
	     * Returns true if this object has been modified since its last
	     * save/refresh.  If an attribute is specified, it returns true only if that
	     * particular attribute has been modified since the last save/refresh.
	     * @method dirty
	     * @param {String} attr An attribute name (optional).
	     * @return {Boolean}
	     */
	  }, {
	    key: 'dirty',
	    value: function dirty(attr) {
	      if (!this.id) {
	        return true;
	      }
	      var pendingOps = this._getPendingOps();
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      if (attr) {
	        if (dirtyObjects.hasOwnProperty(attr)) {
	          return true;
	        }
	        for (var i = 0; i < pendingOps.length; i++) {
	          if (pendingOps[i].hasOwnProperty(attr)) {
	            return true;
	          }
	        }
	        return false;
	      }
	      if (_Object$keys(pendingOps[0]).length !== 0) {
	        return true;
	      }
	      if (_Object$keys(dirtyObjects).length !== 0) {
	        return true;
	      }
	      return false;
	    }

	    /**
	     * Returns an array of keys that have been modified since last save/refresh
	     * @method dirtyKeys
	     * @return {Array of string}
	     */
	  }, {
	    key: 'dirtyKeys',
	    value: function dirtyKeys() {
	      var pendingOps = this._getPendingOps();
	      var keys = {};
	      for (var i = 0; i < pendingOps.length; i++) {
	        for (var attr in pendingOps[i]) {
	          keys[attr] = true;
	        }
	      }
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      for (var attr in dirtyObjects) {
	        keys[attr] = true;
	      }
	      return _Object$keys(keys);
	    }

	    /**
	     * Gets a Pointer referencing this Object.
	     * @method toPointer
	     * @return {Object}
	     */
	  }, {
	    key: 'toPointer',
	    value: function toPointer() {
	      if (!this.id) {
	        throw new Error('Cannot create a pointer to an unsaved ParseObject');
	      }
	      return {
	        __type: 'Pointer',
	        className: this.className,
	        objectId: this.id
	      };
	    }

	    /**
	     * Gets the value of an attribute.
	     * @method get
	     * @param {String} attr The string name of an attribute.
	     */
	  }, {
	    key: 'get',
	    value: function get(attr) {
	      return this.attributes[attr];
	    }

	    /**
	     * Gets a relation on the given class for the attribute.
	     * @method relation
	     * @param String attr The attribute to get the relation for.
	     */
	  }, {
	    key: 'relation',
	    value: function relation(attr) {
	      var value = this.get(attr);
	      if (value) {
	        if (!(value instanceof _ParseRelation2['default'])) {
	          throw new Error('Called relation() on non-relation field ' + attr);
	        }
	        value._ensureParentAndKey(this, attr);
	        return value;
	      }
	      return new _ParseRelation2['default'](this, attr);
	    }

	    /**
	     * Gets the HTML-escaped value of an attribute.
	     * @method escape
	     * @param {String} attr The string name of an attribute.
	     */
	  }, {
	    key: 'escape',
	    value: function escape(attr) {
	      var val = this.attributes[attr];
	      if (val == null) {
	        return '';
	      }
	      var str = val;
	      if (typeof val !== 'string') {
	        if (typeof val.toString !== 'function') {
	          return '';
	        }
	        val = val.toString();
	      }
	      return (0, _escape3['default'])(val);
	    }

	    /**
	     * Returns <code>true</code> if the attribute contains a value that is not
	     * null or undefined.
	     * @method has
	     * @param {String} attr The string name of the attribute.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'has',
	    value: function has(attr) {
	      var attributes = this.attributes;
	      if (attributes.hasOwnProperty(attr)) {
	        return attributes[attr] != null;
	      }
	      return false;
	    }

	    /**
	     * Sets a hash of model attributes on the object.
	     *
	     * <p>You can call it with an object containing keys and values, or with one
	     * key and value.  For example:<pre>
	     *   gameTurn.set({
	     *     player: player1,
	     *     diceRoll: 2
	     *   }, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("currentPlayer", player2, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("finished", true);</pre></p>
	     *
	     * @method set
	     * @param {String} key The key to set.
	     * @param {} value The value to give it.
	     * @param {Object} options A set of options for the set.
	     *     The only supported option is <code>error</code>.
	     * @return {Boolean} true if the set succeeded.
	     */
	  }, {
	    key: 'set',
	    value: function set(key, value, options) {
	      var changes = {};
	      var newOps = {};
	      if (key && typeof key === 'object') {
	        changes = key;
	        options = value;
	      } else if (typeof key === 'string') {
	        changes[key] = value;
	      } else {
	        return this;
	      }

	      options = options || {};
	      var readonly = [];
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        readonly = readonly.concat(this.constructor.readOnlyAttributes());
	      }
	      for (var k in changes) {
	        if (k === 'createdAt' || k === 'updatedAt') {
	          // This property is read-only, but for legacy reasons we silently
	          // ignore it
	          continue;
	        }
	        if (readonly.indexOf(k) > -1) {
	          throw new Error('Cannot modify readonly attribute: ' + k);
	        }
	        if (options.unset) {
	          newOps[k] = new _ParseOp.UnsetOp();
	        } else if (changes[k] instanceof _ParseOp.Op) {
	          newOps[k] = changes[k];
	        } else if (changes[k] && typeof changes[k] === 'object' && typeof changes[k].__op === 'string') {
	          newOps[k] = (0, _ParseOp.opFromJSON)(changes[k]);
	        } else if (k === 'objectId' || k === 'id') {
	          if (typeof changes[k] === 'string') {
	            this.id = changes[k];
	          }
	        } else if (k === 'ACL' && typeof changes[k] === 'object' && !(changes[k] instanceof _ParseACL2['default'])) {
	          newOps[k] = new _ParseOp.SetOp(new _ParseACL2['default'](changes[k]));
	        } else {
	          newOps[k] = new _ParseOp.SetOp(changes[k]);
	        }
	      }

	      // Calculate new values
	      var currentAttributes = this.attributes;
	      var newValues = {};
	      for (var attr in newOps) {
	        if (newOps[attr] instanceof _ParseOp.RelationOp) {
	          newValues[attr] = newOps[attr].applyTo(currentAttributes[attr], this, attr);
	        } else if (!(newOps[attr] instanceof _ParseOp.UnsetOp)) {
	          newValues[attr] = newOps[attr].applyTo(currentAttributes[attr]);
	        }
	      }

	      // Validate changes
	      if (!options.ignoreValidation) {
	        var validation = this.validate(newValues);
	        if (validation) {
	          if (typeof options.error === 'function') {
	            options.error(this, validation);
	          }
	          return false;
	        }
	      }

	      // Consolidate Ops
	      var pendingOps = this._getPendingOps();
	      var last = pendingOps.length - 1;
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      for (var attr in newOps) {
	        var nextOp = newOps[attr].mergeWith(pendingOps[last][attr]);
	        stateController.setPendingOp(this._getStateIdentifier(), attr, nextOp);
	      }

	      return this;
	    }

	    /**
	     * Remove an attribute from the model. This is a noop if the attribute doesn't
	     * exist.
	     * @method unset
	     * @param {String} attr The string name of an attribute.
	     */
	  }, {
	    key: 'unset',
	    value: function unset(attr, options) {
	      options = options || {};
	      options.unset = true;
	      return this.set(attr, null, options);
	    }

	    /**
	     * Atomically increments the value of the given attribute the next time the
	     * object is saved. If no amount is specified, 1 is used by default.
	     *
	     * @method increment
	     * @param attr {String} The key.
	     * @param amount {Number} The amount to increment by (optional).
	     */
	  }, {
	    key: 'increment',
	    value: function increment(attr, amount) {
	      if (typeof amount === 'undefined') {
	        amount = 1;
	      }
	      if (typeof amount !== 'number') {
	        throw new Error('Cannot increment by a non-numeric amount.');
	      }
	      return this.set(attr, new _ParseOp.IncrementOp(amount));
	    }

	    /**
	     * Atomically add an object to the end of the array associated with a given
	     * key.
	     * @method add
	     * @param attr {String} The key.
	     * @param item {} The item to add.
	     */
	  }, {
	    key: 'add',
	    value: function add(attr, item) {
	      return this.set(attr, new _ParseOp.AddOp([item]));
	    }

	    /**
	     * Atomically add an object to the array associated with a given key, only
	     * if it is not already present in the array. The position of the insert is
	     * not guaranteed.
	     *
	     * @method addUnique
	     * @param attr {String} The key.
	     * @param item {} The object to add.
	     */
	  }, {
	    key: 'addUnique',
	    value: function addUnique(attr, item) {
	      return this.set(attr, new _ParseOp.AddUniqueOp([item]));
	    }

	    /**
	     * Atomically remove all instances of an object from the array associated
	     * with a given key.
	     *
	     * @method remove
	     * @param attr {String} The key.
	     * @param item {} The object to remove.
	     */
	  }, {
	    key: 'remove',
	    value: function remove(attr, item) {
	      return this.set(attr, new _ParseOp.RemoveOp([item]));
	    }

	    /**
	     * Returns an instance of a subclass of Parse.Op describing what kind of
	     * modification has been performed on this field since the last time it was
	     * saved. For example, after calling object.increment("x"), calling
	     * object.op("x") would return an instance of Parse.Op.Increment.
	     *
	     * @method op
	     * @param attr {String} The key.
	     * @returns {Parse.Op} The operation, or undefined if none.
	     */
	  }, {
	    key: 'op',
	    value: function op(attr) {
	      var pending = this._getPendingOps();
	      for (var i = pending.length; i--;) {
	        if (pending[i][attr]) {
	          return pending[i][attr];
	        }
	      }
	    }

	    /**
	     * Creates a new model with identical attributes to this one, similar to Backbone.Model's clone()
	     * @method clone
	     * @return {Parse.Object}
	     */
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var clone = new this.constructor();
	      if (!clone.className) {
	        clone.className = this.className;
	      }
	      var attributes = this.attributes;
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        var readonly = this.constructor.readOnlyAttributes() || [];
	        // Attributes are frozen, so we have to rebuild an object,
	        // rather than delete readonly keys
	        var copy = {};
	        for (var a in attributes) {
	          if (readonly.indexOf(a) < 0) {
	            copy[a] = attributes[a];
	          }
	        }
	        attributes = copy;
	      }
	      if (clone.set) {
	        clone.set(attributes);
	      }
	      return clone;
	    }

	    /**
	     * Creates a new instance of this object. Not to be confused with clone()
	     * @method newInstance
	     * @return {Parse.Object}
	     */
	  }, {
	    key: 'newInstance',
	    value: function newInstance() {
	      var clone = new this.constructor();
	      if (!clone.className) {
	        clone.className = this.className;
	      }
	      clone.id = this.id;
	      if (singleInstance) {
	        // Just return an object with the right id
	        return clone;
	      }

	      var stateController = _CoreManager2['default'].getObjectStateController();
	      if (stateController) {
	        stateController.duplicateState(this._getStateIdentifier(), clone._getStateIdentifier());
	      }
	      return clone;
	    }

	    /**
	     * Returns true if this object has never been saved to Parse.
	     * @method isNew
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isNew',
	    value: function isNew() {
	      return !this.id;
	    }

	    /**
	     * Returns true if this object was created by the Parse server when the
	     * object might have already been there (e.g. in the case of a Facebook
	     * login)
	     * @method existed
	     * @return {Boolean}
	     */
	  }, {
	    key: 'existed',
	    value: function existed() {
	      if (!this.id) {
	        return false;
	      }
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var state = stateController.getState(this._getStateIdentifier());
	      if (state) {
	        return state.existed;
	      }
	      return false;
	    }

	    /**
	     * Checks if the model is currently in a valid state.
	     * @method isValid
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      return !this.validate(this.attributes);
	    }

	    /**
	     * You should not call this function directly unless you subclass
	     * <code>Parse.Object</code>, in which case you can override this method
	     * to provide additional validation on <code>set</code> and
	     * <code>save</code>.  Your implementation should return
	     *
	     * @method validate
	     * @param {Object} attrs The current data to validate.
	     * @return {} False if the data is valid.  An error object otherwise.
	     * @see Parse.Object#set
	     */
	  }, {
	    key: 'validate',
	    value: function validate(attrs) {
	      if (attrs.hasOwnProperty('ACL') && !(attrs.ACL instanceof _ParseACL2['default'])) {
	        return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'ACL must be a Parse ACL.');
	      }
	      for (var key in attrs) {
	        if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(key)) {
	          return new _ParseError2['default'](_ParseError2['default'].INVALID_KEY_NAME);
	        }
	      }
	      return false;
	    }

	    /**
	     * Returns the ACL for this object.
	     * @method getACL
	     * @returns {Parse.ACL} An instance of Parse.ACL.
	     * @see Parse.Object#get
	     */
	  }, {
	    key: 'getACL',
	    value: function getACL() {
	      var acl = this.get('ACL');
	      if (acl instanceof _ParseACL2['default']) {
	        return acl;
	      }
	      return null;
	    }

	    /**
	     * Sets the ACL to be used for this object.
	     * @method setACL
	     * @param {Parse.ACL} acl An instance of Parse.ACL.
	     * @param {Object} options Optional Backbone-like options object to be
	     *     passed in to set.
	     * @return {Boolean} Whether the set passed validation.
	     * @see Parse.Object#set
	     */
	  }, {
	    key: 'setACL',
	    value: function setACL(acl, options) {
	      return this.set('ACL', acl, options);
	    }

	    /**
	     * Clears any changes to this object made since the last call to save()
	     * @method revert
	     */
	  }, {
	    key: 'revert',
	    value: function revert() {
	      this._clearPendingOps();
	    }

	    /**
	     * Clears all attributes on a model
	     * @method clear
	     */
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var attributes = this.attributes;
	      var erasable = {};
	      var readonly = ['createdAt', 'updatedAt'];
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        readonly = readonly.concat(this.constructor.readOnlyAttributes());
	      }
	      for (var attr in attributes) {
	        if (readonly.indexOf(attr) < 0) {
	          erasable[attr] = true;
	        }
	      }
	      return this.set(erasable, { unset: true });
	    }

	    /**
	     * Fetch the model from the server. If the server's representation of the
	     * model differs from its current attributes, they will be overriden.
	     *
	     * @method fetch
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the fetch
	     *     completes.
	     */
	  }, {
	    key: 'fetch',
	    value: function fetch(options) {
	      options = options || {};
	      var fetchOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        fetchOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        fetchOptions.sessionToken = options.sessionToken;
	      }
	      var controller = _CoreManager2['default'].getObjectController();
	      return controller.fetch(this, true, fetchOptions)._thenRunCallbacks(options);
	    }

	    /**
	     * Set a hash of model attributes, and save the model to the server.
	     * updatedAt will be updated when the request returns.
	     * You can either call it as:<pre>
	     *   object.save();</pre>
	     * or<pre>
	     *   object.save(null, options);</pre>
	     * or<pre>
	     *   object.save(attrs, options);</pre>
	     * or<pre>
	     *   object.save(key, value, options);</pre>
	     *
	     * For example, <pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }, {
	     *     success: function(gameTurnAgain) {
	     *       // The save was successful.
	     *     },
	     *     error: function(gameTurnAgain, error) {
	     *       // The save failed.  Error is an instance of Parse.Error.
	     *     }
	     *   });</pre>
	     * or with promises:<pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }).then(function(gameTurnAgain) {
	     *     // The save was successful.
	     *   }, function(error) {
	     *     // The save failed.  Error is an instance of Parse.Error.
	     *   });</pre>
	     *
	     * @method save
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the save
	     *     completes.
	     */
	  }, {
	    key: 'save',
	    value: function save(arg1, arg2, arg3) {
	      var _this = this;

	      var attrs;
	      var options;
	      if (typeof arg1 === 'object' || typeof arg1 === 'undefined') {
	        attrs = arg1;
	        if (typeof arg2 === 'object') {
	          options = arg2;
	        }
	      } else {
	        attrs = {};
	        attrs[arg1] = arg2;
	        options = arg3;
	      }

	      // Support save({ success: function() {}, error: function() {} })
	      if (!options && attrs) {
	        options = {};
	        if (typeof attrs.success === 'function') {
	          options.success = attrs.success;
	          delete attrs.success;
	        }
	        if (typeof attrs.error === 'function') {
	          options.error = attrs.error;
	          delete attrs.error;
	        }
	      }

	      if (attrs) {
	        var validation = this.validate(attrs);
	        if (validation) {
	          if (options && typeof options.error === 'function') {
	            options.error(this, validation);
	          }
	          return _ParsePromise2['default'].error(validation);
	        }
	        this.set(attrs, options);
	      }

	      options = options || {};
	      var saveOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        saveOptions.useMasterKey = !!options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken') && typeof options.sessionToken === 'string') {
	        saveOptions.sessionToken = options.sessionToken;
	      }

	      var controller = _CoreManager2['default'].getObjectController();
	      var unsaved = (0, _unsavedChildren2['default'])(this);
	      return controller.save(unsaved, saveOptions).then(function () {
	        return controller.save(_this, saveOptions);
	      })._thenRunCallbacks(options, this);
	    }

	    /**
	     * Destroy this model on the server if it was already persisted.
	     * If `wait: true` is passed, waits for the server to respond
	     * before removal.
	     *
	     * @method destroy
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the destroy
	     *     completes.
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy(options) {
	      options = options || {};
	      var destroyOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        destroyOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        destroyOptions.sessionToken = options.sessionToken;
	      }
	      if (!this.id) {
	        return _ParsePromise2['default'].as()._thenRunCallbacks(options);
	      }
	      return _CoreManager2['default'].getObjectController().destroy(this, destroyOptions)._thenRunCallbacks(options);
	    }

	    /** Static methods **/

	  }, {
	    key: 'attributes',
	    get: function get() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      return _Object$freeze(stateController.estimateAttributes(this._getStateIdentifier()));
	    }

	    /**
	     * The first time this object was saved on the server.
	     * @property createdAt
	     * @type Date
	     */
	  }, {
	    key: 'createdAt',
	    get: function get() {
	      return this._getServerData().createdAt;
	    }

	    /**
	     * The last time this object was updated on the server.
	     * @property updatedAt
	     * @type Date
	     */
	  }, {
	    key: 'updatedAt',
	    get: function get() {
	      return this._getServerData().updatedAt;
	    }
	  }], [{
	    key: '_clearAllState',
	    value: function _clearAllState() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.clearAllState();
	    }

	    /**
	     * Fetches the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAll([object1, object2, ...], {
	     *     success: function(list) {
	     *       // All the objects were fetched.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while fetching one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method fetchAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	  }, {
	    key: 'fetchAll',
	    value: function fetchAll(list, options) {
	      var options = options || {};

	      var queryOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        queryOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        queryOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().fetch(list, true, queryOptions)._thenRunCallbacks(options);
	    }

	    /**
	     * Fetches the given list of Parse.Object if needed.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAllIfNeeded([object1, ...], {
	     *     success: function(list) {
	     *       // Objects were fetched and updated.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while fetching one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method fetchAllIfNeeded
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	  }, {
	    key: 'fetchAllIfNeeded',
	    value: function fetchAllIfNeeded(list, options) {
	      var options = options || {};

	      var queryOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        queryOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        queryOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().fetch(list, false, queryOptions)._thenRunCallbacks(options);
	    }

	    /**
	     * Destroy the given list of models on the server if it was already persisted.
	     *
	     * <p>Unlike saveAll, if an error occurs while deleting an individual model,
	     * this method will continue trying to delete the rest of the models if
	     * possible, except in the case of a fatal error like a connection error.
	     *
	     * <p>In particular, the Parse.Error object returned in the case of error may
	     * be one of two types:
	     *
	     * <ul>
	     *   <li>A Parse.Error.AGGREGATE_ERROR. This object's "errors" property is an
	     *       array of other Parse.Error objects. Each error object in this array
	     *       has an "object" property that references the object that could not be
	     *       deleted (for instance, because that object could not be found).</li>
	     *   <li>A non-aggregate Parse.Error. This indicates a serious error that
	     *       caused the delete operation to be aborted partway through (for
	     *       instance, a connection failure in the middle of the delete).</li>
	     * </ul>
	     *
	     * <pre>
	     *   Parse.Object.destroyAll([object1, object2, ...], {
	     *     success: function() {
	     *       // All the objects were deleted.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while deleting one or more of the objects.
	     *       // If this is an aggregate error, then we can inspect each error
	     *       // object individually to determine the reason why a particular
	     *       // object was not deleted.
	     *       if (error.code === Parse.Error.AGGREGATE_ERROR) {
	     *         for (var i = 0; i < error.errors.length; i++) {
	     *           console.log("Couldn't delete " + error.errors[i].object.id +
	     *             "due to " + error.errors[i].message);
	     *         }
	     *       } else {
	     *         console.log("Delete aborted because of " + error.message);
	     *       }
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method destroyAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the destroyAll
	     *     completes.
	     */
	  }, {
	    key: 'destroyAll',
	    value: function destroyAll(list, options) {
	      var options = options || {};

	      var destroyOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        destroyOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        destroyOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().destroy(list, destroyOptions)._thenRunCallbacks(options);
	    }

	    /**
	     * Saves the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.saveAll([object1, object2, ...], {
	     *     success: function(list) {
	     *       // All the objects were saved.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while saving one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method saveAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     */
	  }, {
	    key: 'saveAll',
	    value: function saveAll(list, options) {
	      var options = options || {};

	      var saveOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        saveOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        saveOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().save(list, saveOptions)._thenRunCallbacks(options);
	    }

	    /**
	     * Creates a reference to a subclass of Parse.Object with the given id. This
	     * does not exist on Parse.Object, only on subclasses.
	     *
	     * <p>A shortcut for: <pre>
	     *  var Foo = Parse.Object.extend("Foo");
	     *  var pointerToFoo = new Foo();
	     *  pointerToFoo.id = "myObjectId";
	     * </pre>
	     *
	     * @method createWithoutData
	     * @param {String} id The ID of the object to create a reference to.
	     * @static
	     * @return {Parse.Object} A Parse.Object reference.
	     */
	  }, {
	    key: 'createWithoutData',
	    value: function createWithoutData(id) {
	      var obj = new this();
	      obj.id = id;
	      return obj;
	    }

	    /**
	     * Creates a new instance of a Parse Object from a JSON representation.
	     * @method fromJSON
	     * @param {Object} json The JSON map of the Object's data
	     * @param {boolean} override In single instance mode, all old server data
	     *   is overwritten if this is set to true
	     * @static
	     * @return {Parse.Object} A Parse.Object reference
	     */
	  }, {
	    key: 'fromJSON',
	    value: function fromJSON(json, override) {
	      if (!json.className) {
	        throw new Error('Cannot create an object without a className');
	      }
	      var constructor = classMap[json.className];
	      var o = constructor ? new constructor() : new ParseObject(json.className);
	      var otherAttributes = {};
	      for (var attr in json) {
	        if (attr !== 'className' && attr !== '__type') {
	          otherAttributes[attr] = json[attr];
	        }
	      }
	      if (override) {
	        // id needs to be set before clearServerData can work
	        if (otherAttributes.objectId) {
	          o.id = otherAttributes.objectId;
	        }
	        var preserved = null;
	        if (typeof o._preserveFieldsOnFetch === 'function') {
	          preserved = o._preserveFieldsOnFetch();
	        }
	        o._clearServerData();
	        if (preserved) {
	          o._finishFetch(preserved);
	        }
	      }
	      o._finishFetch(otherAttributes);
	      if (json.objectId) {
	        o._setExisted(true);
	      }
	      return o;
	    }

	    /**
	     * Registers a subclass of Parse.Object with a specific class name.
	     * When objects of that class are retrieved from a query, they will be
	     * instantiated with this subclass.
	     * This is only necessary when using ES6 subclassing.
	     * @method registerSubclass
	     * @param {String} className The class name of the subclass
	     * @param {Class} constructor The subclass
	     */
	  }, {
	    key: 'registerSubclass',
	    value: function registerSubclass(className, constructor) {
	      if (typeof className !== 'string') {
	        throw new TypeError('The first argument must be a valid class name.');
	      }
	      if (typeof constructor === 'undefined') {
	        throw new TypeError('You must supply a subclass constructor.');
	      }
	      if (typeof constructor !== 'function') {
	        throw new TypeError('You must register the subclass constructor. ' + 'Did you attempt to register an instance of the subclass?');
	      }
	      classMap[className] = constructor;
	      if (!constructor.className) {
	        constructor.className = className;
	      }
	    }

	    /**
	     * Creates a new subclass of Parse.Object for the given Parse class name.
	     *
	     * <p>Every extension of a Parse class will inherit from the most recent
	     * previous extension of that class. When a Parse.Object is automatically
	     * created by parsing JSON, it will use the most recent extension of that
	     * class.</p>
	     *
	     * <p>You should call either:<pre>
	     *     var MyClass = Parse.Object.extend("MyClass", {
	     *         <i>Instance methods</i>,
	     *         initialize: function(attrs, options) {
	     *             this.someInstanceProperty = [],
	     *             <i>Other instance properties</i>
	     *         }
	     *     }, {
	     *         <i>Class properties</i>
	     *     });</pre>
	     * or, for Backbone compatibility:<pre>
	     *     var MyClass = Parse.Object.extend({
	     *         className: "MyClass",
	     *         <i>Instance methods</i>,
	     *         initialize: function(attrs, options) {
	     *             this.someInstanceProperty = [],
	     *             <i>Other instance properties</i>
	     *         }
	     *     }, {
	     *         <i>Class properties</i>
	     *     });</pre></p>
	     *
	     * @method extend
	     * @param {String} className The name of the Parse class backing this model.
	     * @param {Object} protoProps Instance properties to add to instances of the
	     *     class returned from this method.
	     * @param {Object} classProps Class properties to add the class returned from
	     *     this method.
	     * @return {Class} A new subclass of Parse.Object.
	     */
	  }, {
	    key: 'extend',
	    value: function extend(className, protoProps, classProps) {
	      if (typeof className !== 'string') {
	        if (className && typeof className.className === 'string') {
	          return ParseObject.extend(className.className, className, protoProps);
	        } else {
	          throw new Error('Parse.Object.extend\'s first argument should be the className.');
	        }
	      }
	      var adjustedClassName = className;

	      if (adjustedClassName === 'User' && _CoreManager2['default'].get('PERFORM_USER_REWRITE')) {
	        adjustedClassName = '_User';
	      }

	      var parentProto = ParseObject.prototype;
	      if (this.hasOwnProperty('__super__') && this.__super__) {
	        parentProto = this.prototype;
	      } else if (classMap[adjustedClassName]) {
	        parentProto = classMap[adjustedClassName].prototype;
	      }
	      var ParseObjectSubclass = function ParseObjectSubclass(attributes, options) {
	        this.className = adjustedClassName;
	        this._objCount = objectCount++;
	        // Enable legacy initializers
	        if (typeof this.initialize === 'function') {
	          this.initialize.apply(this, arguments);
	        }

	        if (attributes && typeof attributes === 'object') {
	          if (!this.set(attributes || {}, options)) {
	            throw new Error('Can\'t create an invalid Parse Object');
	          }
	        }
	      };
	      ParseObjectSubclass.className = adjustedClassName;
	      ParseObjectSubclass.__super__ = parentProto;

	      ParseObjectSubclass.prototype = _Object$create(parentProto, {
	        constructor: {
	          value: ParseObjectSubclass,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });

	      if (protoProps) {
	        for (var prop in protoProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseObjectSubclass.prototype, prop, {
	              value: protoProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }

	      if (classProps) {
	        for (var prop in classProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseObjectSubclass, prop, {
	              value: classProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }

	      ParseObjectSubclass.extend = function (name, protoProps, classProps) {
	        if (typeof name === 'string') {
	          return ParseObject.extend.call(ParseObjectSubclass, name, protoProps, classProps);
	        }
	        return ParseObject.extend.call(ParseObjectSubclass, adjustedClassName, name, protoProps);
	      };
	      ParseObjectSubclass.createWithoutData = ParseObject.createWithoutData;

	      classMap[adjustedClassName] = ParseObjectSubclass;
	      return ParseObjectSubclass;
	    }

	    /**
	     * Enable single instance objects, where any local objects with the same Id
	     * share the same attributes, and stay synchronized with each other.
	     * This is disabled by default in server environments, since it can lead to
	     * security issues.
	     * @method enableSingleInstance
	     */
	  }, {
	    key: 'enableSingleInstance',
	    value: function enableSingleInstance() {
	      singleInstance = true;
	      _CoreManager2['default'].setObjectStateController(SingleInstanceStateController);
	    }

	    /**
	     * Disable single instance objects, where any local objects with the same Id
	     * share the same attributes, and stay synchronized with each other.
	     * When disabled, you can have two instances of the same object in memory
	     * without them sharing attributes.
	     * @method disableSingleInstance
	     */
	  }, {
	    key: 'disableSingleInstance',
	    value: function disableSingleInstance() {
	      singleInstance = false;
	      _CoreManager2['default'].setObjectStateController(UniqueInstanceStateController);
	    }
	  }]);

	  return ParseObject;
	})();

	exports['default'] = ParseObject;

	_CoreManager2['default'].setObjectController({
	  fetch: function fetch(target, forceFetch, options) {
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2['default'].as([]);
	      }
	      var objs = [];
	      var ids = [];
	      var className = null;
	      var results = [];
	      var error = null;
	      target.forEach(function (el, i) {
	        if (error) {
	          return;
	        }
	        if (!className) {
	          className = el.className;
	        }
	        if (className !== el.className) {
	          error = new _ParseError2['default'](_ParseError2['default'].INVALID_CLASS_NAME, 'All objects should be of the same class');
	        }
	        if (!el.id) {
	          error = new _ParseError2['default'](_ParseError2['default'].MISSING_OBJECT_ID, 'All objects must have an ID');
	        }
	        if (forceFetch || _Object$keys(el._getServerData()).length === 0) {
	          ids.push(el.id);
	          objs.push(el);
	        }
	        results.push(el);
	      });
	      if (error) {
	        return _ParsePromise2['default'].error(error);
	      }
	      var query = new _ParseQuery2['default'](className);
	      query.containedIn('objectId', ids);
	      query._limit = ids.length;
	      return query.find(options).then(function (objects) {
	        var idMap = {};
	        objects.forEach(function (o) {
	          idMap[o.id] = o;
	        });
	        for (var i = 0; i < objs.length; i++) {
	          var obj = objs[i];
	          if (!obj || !obj.id || !idMap[obj.id]) {
	            if (forceFetch) {
	              return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OBJECT_NOT_FOUND, 'All objects must exist on the server.'));
	            }
	          }
	        }
	        if (!singleInstance) {
	          // If single instance objects are disabled, we need to replace the
	          for (var i = 0; i < results.length; i++) {
	            var obj = results[i];
	            if (obj && obj.id && idMap[obj.id]) {
	              var id = obj.id;
	              obj._finishFetch(idMap[id].toJSON());
	              results[i] = idMap[id];
	            }
	          }
	        }
	        return _ParsePromise2['default'].as(results);
	      });
	    } else {
	      var RESTController = _CoreManager2['default'].getRESTController();
	      return RESTController.request('GET', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function (response, status, xhr) {
	        if (target instanceof ParseObject) {
	          target._clearPendingOps();
	          target._clearServerData();
	          target._finishFetch(response);
	        }
	        return target;
	      });
	    }
	  },

	  destroy: function destroy(target, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2['default'].as([]);
	      }
	      var batches = [[]];
	      target.forEach(function (obj) {
	        if (!obj.id) {
	          return;
	        }
	        batches[batches.length - 1].push(obj);
	        if (batches[batches.length - 1].length >= 20) {
	          batches.push([]);
	        }
	      });
	      if (batches[batches.length - 1].length === 0) {
	        // If the last batch is empty, remove it
	        batches.pop();
	      }
	      var deleteCompleted = _ParsePromise2['default'].as();
	      var errors = [];
	      batches.forEach(function (batch) {
	        deleteCompleted = deleteCompleted.then(function () {
	          return RESTController.request('POST', 'batch', {
	            requests: batch.map(function (obj) {
	              return {
	                method: 'DELETE',
	                path: getServerUrlPath() + 'classes/' + obj.className + '/' + obj._getId(),
	                body: {}
	              };
	            })
	          }, options).then(function (results) {
	            for (var i = 0; i < results.length; i++) {
	              if (results[i] && results[i].hasOwnProperty('error')) {
	                var err = new _ParseError2['default'](results[i].error.code, results[i].error.error);
	                err.object = batch[i];
	                errors.push(err);
	              }
	            }
	          });
	        });
	      });
	      return deleteCompleted.then(function () {
	        if (errors.length) {
	          var aggregate = new _ParseError2['default'](_ParseError2['default'].AGGREGATE_ERROR);
	          aggregate.errors = errors;
	          return _ParsePromise2['default'].error(aggregate);
	        }
	        return _ParsePromise2['default'].as(target);
	      });
	    } else if (target instanceof ParseObject) {
	      return RESTController.request('DELETE', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function () {
	        return _ParsePromise2['default'].as(target);
	      });
	    }
	    return _ParsePromise2['default'].as(target);
	  },

	  save: function save(target, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    var stateController = _CoreManager2['default'].getObjectStateController();
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2['default'].as([]);
	      }

	      var unsaved = target.concat();
	      for (var i = 0; i < target.length; i++) {
	        if (target[i] instanceof ParseObject) {
	          unsaved = unsaved.concat((0, _unsavedChildren2['default'])(target[i], true));
	        }
	      }
	      unsaved = (0, _unique2['default'])(unsaved);

	      var filesSaved = _ParsePromise2['default'].as();
	      var pending = [];
	      unsaved.forEach(function (el) {
	        if (el instanceof _ParseFile2['default']) {
	          filesSaved = filesSaved.then(function () {
	            return el.save();
	          });
	        } else if (el instanceof ParseObject) {
	          pending.push(el);
	        }
	      });

	      return filesSaved.then(function () {
	        var objectError = null;
	        return _ParsePromise2['default']._continueWhile(function () {
	          return pending.length > 0;
	        }, function () {
	          var batch = [];
	          var nextPending = [];
	          pending.forEach(function (el) {
	            if (batch.length < 20 && (0, _canBeSerialized2['default'])(el)) {
	              batch.push(el);
	            } else {
	              nextPending.push(el);
	            }
	          });
	          pending = nextPending;
	          if (batch.length < 1) {
	            return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
	          }

	          // Queue up tasks for each object in the batch.
	          // When every task is ready, the API request will execute
	          var batchReturned = new _ParsePromise2['default']();
	          var batchReady = [];
	          var batchTasks = [];
	          batch.forEach(function (obj, index) {
	            var ready = new _ParsePromise2['default']();
	            batchReady.push(ready);
	            var task = function task() {
	              ready.resolve();
	              return batchReturned.then(function (responses, status) {
	                if (responses[index].hasOwnProperty('success')) {
	                  obj._handleSaveResponse(responses[index].success, status);
	                } else {
	                  if (!objectError && responses[index].hasOwnProperty('error')) {
	                    var serverError = responses[index].error;
	                    objectError = new _ParseError2['default'](serverError.code, serverError.error);
	                    // Cancel the rest of the save
	                    pending = [];
	                  }
	                  obj._handleSaveError();
	                }
	              });
	            };
	            stateController.pushPendingState(obj._getStateIdentifier());
	            batchTasks.push(stateController.enqueueTask(obj._getStateIdentifier(), task));
	          });

	          _ParsePromise2['default'].when(batchReady).then(function () {
	            // Kick off the batch request
	            return RESTController.request('POST', 'batch', {
	              requests: batch.map(function (obj) {
	                var params = obj._getSaveParams();
	                params.path = getServerUrlPath() + params.path;
	                return params;
	              })
	            }, options);
	          }).then(function (response, status, xhr) {
	            batchReturned.resolve(response, status);
	          });

	          return _ParsePromise2['default'].when(batchTasks);
	        }).then(function () {
	          if (objectError) {
	            return _ParsePromise2['default'].error(objectError);
	          }
	          return _ParsePromise2['default'].as(target);
	        });
	      });
	    } else if (target instanceof ParseObject) {
	      // copying target lets Flow guarantee the pointer isn't modified elsewhere
	      var targetCopy = target;
	      var task = function task() {
	        var params = targetCopy._getSaveParams();
	        return RESTController.request(params.method, params.path, params.body, options).then(function (response, status) {
	          targetCopy._handleSaveResponse(response, status);
	        }, function (error) {
	          targetCopy._handleSaveError();
	          return _ParsePromise2['default'].error(error);
	        });
	      };

	      stateController.pushPendingState(target._getStateIdentifier());
	      return stateController.enqueueTask(target._getStateIdentifier(), task).then(function () {
	        return target;
	      }, function (error) {
	        return _ParsePromise2['default'].error(error);
	      });
	    }
	    return _ParsePromise2['default'].as();
	  }
	});
	module.exports = exports['default'];

	/**
	 * The ID of this object, unique within its class.
	 * @property id
	 * @type String
	 */

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47);
	module.exports = __webpack_require__(22).Object.freeze;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(41);

	__webpack_require__(19)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var config = {
	  // Defaults
	  IS_NODE: typeof process !== 'undefined' && !!process.versions && !!process.versions.node && !process.versions.electron,
	  REQUEST_ATTEMPT_LIMIT: 5,
	  SERVER_URL: 'https://api.parse.com/1',
	  LIVEQUERY_SERVER_URL: null,
	  VERSION: 'js' + '1.9.1',
	  APPLICATION_ID: null,
	  JAVASCRIPT_KEY: null,
	  MASTER_KEY: null,
	  USE_MASTER_KEY: false,
	  PERFORM_USER_REWRITE: true,
	  FORCE_REVOCABLE_SESSION: false
	};

	function requireMethods(name, methods, controller) {
	  methods.forEach(function (func) {
	    if (typeof controller[func] !== 'function') {
	      throw new Error(name + ' must implement ' + func + '()');
	    }
	  });
	}

	module.exports = {
	  get: function get(key) {
	    if (config.hasOwnProperty(key)) {
	      return config[key];
	    }
	    throw new Error('Configuration key not found: ' + key);
	  },

	  set: function set(key, value) {
	    config[key] = value;
	  },

	  /* Specialized Controller Setters/Getters */

	  setAnalyticsController: function setAnalyticsController(controller) {
	    requireMethods('AnalyticsController', ['track'], controller);
	    config['AnalyticsController'] = controller;
	  },

	  getAnalyticsController: function getAnalyticsController() {
	    return config['AnalyticsController'];
	  },

	  setCloudController: function setCloudController(controller) {
	    requireMethods('CloudController', ['run'], controller);
	    config['CloudController'] = controller;
	  },

	  getCloudController: function getCloudController() {
	    return config['CloudController'];
	  },

	  setConfigController: function setConfigController(controller) {
	    requireMethods('ConfigController', ['current', 'get'], controller);
	    config['ConfigController'] = controller;
	  },

	  getConfigController: function getConfigController() {
	    return config['ConfigController'];
	  },

	  setFileController: function setFileController(controller) {
	    requireMethods('FileController', ['saveFile', 'saveBase64'], controller);
	    config['FileController'] = controller;
	  },

	  getFileController: function getFileController() {
	    return config['FileController'];
	  },

	  setInstallationController: function setInstallationController(controller) {
	    requireMethods('InstallationController', ['currentInstallationId'], controller);
	    config['InstallationController'] = controller;
	  },

	  getInstallationController: function getInstallationController() {
	    return config['InstallationController'];
	  },

	  setObjectController: function setObjectController(controller) {
	    requireMethods('ObjectController', ['save', 'fetch', 'destroy'], controller);
	    config['ObjectController'] = controller;
	  },

	  getObjectController: function getObjectController() {
	    return config['ObjectController'];
	  },

	  setObjectStateController: function setObjectStateController(controller) {
	    requireMethods('ObjectStateController', ['getState', 'initializeState', 'removeState', 'getServerData', 'setServerData', 'getPendingOps', 'setPendingOp', 'pushPendingState', 'popPendingState', 'mergeFirstPendingState', 'getObjectCache', 'estimateAttribute', 'estimateAttributes', 'commitServerChanges', 'enqueueTask', 'clearAllState'], controller);

	    config['ObjectStateController'] = controller;
	  },

	  getObjectStateController: function getObjectStateController() {
	    return config['ObjectStateController'];
	  },

	  setPushController: function setPushController(controller) {
	    requireMethods('PushController', ['send'], controller);
	    config['PushController'] = controller;
	  },

	  getPushController: function getPushController() {
	    return config['PushController'];
	  },

	  setQueryController: function setQueryController(controller) {
	    requireMethods('QueryController', ['find'], controller);
	    config['QueryController'] = controller;
	  },

	  getQueryController: function getQueryController() {
	    return config['QueryController'];
	  },

	  setRESTController: function setRESTController(controller) {
	    requireMethods('RESTController', ['request', 'ajax'], controller);
	    config['RESTController'] = controller;
	  },

	  getRESTController: function getRESTController() {
	    return config['RESTController'];
	  },

	  setSessionController: function setSessionController(controller) {
	    requireMethods('SessionController', ['getSession'], controller);
	    config['SessionController'] = controller;
	  },

	  getSessionController: function getSessionController() {
	    return config['SessionController'];
	  },

	  setStorageController: function setStorageController(controller) {
	    if (controller.async) {
	      requireMethods('An async StorageController', ['getItemAsync', 'setItemAsync', 'removeItemAsync'], controller);
	    } else {
	      requireMethods('A synchronous StorageController', ['getItem', 'setItem', 'removeItem'], controller);
	    }
	    config['StorageController'] = controller;
	  },

	  getStorageController: function getStorageController() {
	    return config['StorageController'];
	  },

	  setUserController: function setUserController(controller) {
	    requireMethods('UserController', ['setCurrentUser', 'currentUser', 'currentUserAsync', 'signUp', 'logIn', 'become', 'logOut', 'requestPasswordReset', 'upgradeToRevocableSession', 'linkWith'], controller);
	    config['UserController'] = controller;
	  },

	  getUserController: function getUserController() {
	    return config['UserController'];
	  },

	  setLiveQueryController: function setLiveQueryController(controller) {
	    requireMethods('LiveQueryController', ['subscribe', 'unsubscribe', 'open', 'close'], controller);
	    config['LiveQueryController'] = controller;
	  },

	  getLiveQueryController: function getLiveQueryController() {
	    return config['LiveQueryController'];
	  },

	  setHooksController: function setHooksController(controller) {
	    requireMethods('HooksController', ['create', 'get', 'update', 'remove'], controller);
	    config['HooksController'] = controller;
	  },

	  getHooksController: function getHooksController() {
	    return config['HooksController'];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ },
/* 49 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = canBeSerialized;

	var _ParseFile = __webpack_require__(51);

	var _ParseFile2 = _interopRequireDefault(_ParseFile);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParseRelation = __webpack_require__(78);

	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);

	function canBeSerialized(obj) {
	  if (!(obj instanceof _ParseObject2['default'])) {
	    return true;
	  }
	  var attributes = obj.attributes;
	  for (var attr in attributes) {
	    var val = attributes[attr];
	    if (!canBeSerializedHelper(val)) {
	      return false;
	    }
	  }
	  return true;
	}

	function canBeSerializedHelper(value) {
	  if (typeof value !== 'object') {
	    return true;
	  }
	  if (value instanceof _ParseRelation2['default']) {
	    return true;
	  }
	  if (value instanceof _ParseObject2['default']) {
	    return !!value.id;
	  }
	  if (value instanceof _ParseFile2['default']) {
	    if (value.url()) {
	      return true;
	    }
	    return false;
	  }
	  if (Array.isArray(value)) {
	    for (var i = 0; i < value.length; i++) {
	      if (!canBeSerializedHelper(value[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	  for (var k in value) {
	    if (!canBeSerializedHelper(value[k])) {
	      return false;
	    }
	  }
	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	function b64Digit(number) {
	  if (number < 26) {
	    return String.fromCharCode(65 + number);
	  }
	  if (number < 52) {
	    return String.fromCharCode(97 + (number - 26));
	  }
	  if (number < 62) {
	    return String.fromCharCode(48 + (number - 52));
	  }
	  if (number === 62) {
	    return '+';
	  }
	  if (number === 63) {
	    return '/';
	  }
	  throw new TypeError('Tried to encode large digit ' + number + ' in base64.');
	}

	/**
	 * A Parse.File is a local representation of a file that is saved to the Parse
	 * cloud.
	 * @class Parse.File
	 * @constructor
	 * @param name {String} The file's name. This will be prefixed by a unique
	 *     value once the file has finished saving. The file name must begin with
	 *     an alphanumeric character, and consist of alphanumeric characters,
	 *     periods, spaces, underscores, or dashes.
	 * @param data {Array} The data for the file, as either:
	 *     1. an Array of byte value Numbers, or
	 *     2. an Object like { base64: "..." } with a base64-encoded String.
	 *     3. a File object selected with a file upload control. (3) only works
	 *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
	 *        For example:<pre>
	 * var fileUploadControl = $("#profilePhotoFileUpload")[0];
	 * if (fileUploadControl.files.length > 0) {
	 *   var file = fileUploadControl.files[0];
	 *   var name = "photo.jpg";
	 *   var parseFile = new Parse.File(name, file);
	 *   parseFile.save().then(function() {
	 *     // The file has been saved to Parse.
	 *   }, function(error) {
	 *     // The file either could not be read, or could not be saved to Parse.
	 *   });
	 * }</pre>
	 * @param type {String} Optional Content-Type header to use for the file. If
	 *     this is omitted, the content type will be inferred from the name's
	 *     extension.
	 */

	var ParseFile = (function () {
	  function ParseFile(name, data, type) {
	    _classCallCheck(this, ParseFile);

	    var specifiedType = type || '';

	    this._name = name;

	    if (data !== undefined) {
	      if (Array.isArray(data)) {
	        this._source = {
	          format: 'base64',
	          base64: ParseFile.encodeBase64(data),
	          type: specifiedType
	        };
	      } else if (typeof File !== 'undefined' && data instanceof File) {
	        this._source = {
	          format: 'file',
	          file: data,
	          type: specifiedType
	        };
	      } else if (data && typeof data.base64 !== 'undefined') {
	        var _base64 = data.base64;
	        var commaIndex = _base64.indexOf(',');

	        if (commaIndex !== -1) {
	          var matches = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,/.exec(_base64.slice(0, commaIndex + 1));
	          // if data URI with type and charset, there will be 4 matches.
	          this._source = {
	            format: 'base64',
	            base64: _base64.slice(commaIndex + 1),
	            type: matches[1]
	          };
	        } else {
	          this._source = {
	            format: 'base64',
	            base64: _base64,
	            type: specifiedType
	          };
	        }
	      } else {
	        throw new TypeError('Cannot create a Parse.File with that data.');
	      }
	    }
	  }

	  /**
	   * Gets the name of the file. Before save is called, this is the filename
	   * given by the user. After save is called, that name gets prefixed with a
	   * unique identifier.
	   * @method name
	   * @return {String}
	   */

	  _createClass(ParseFile, [{
	    key: 'name',
	    value: function name() {
	      return this._name;
	    }

	    /**
	     * Gets the url of the file. It is only available after you save the file or
	     * after you get the file from a Parse.Object.
	     * @method url
	     * @param {Object} options An object to specify url options
	     * @return {String}
	     */
	  }, {
	    key: 'url',
	    value: function url(options) {
	      options = options || {};
	      if (!this._url) {
	        return;
	      }
	      if (options.forceSecure) {
	        return this._url.replace(/^http:\/\//i, 'https://');
	      } else {
	        return this._url;
	      }
	    }

	    /**
	     * Saves the file to the Parse cloud.
	     * @method save
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} Promise that is resolved when the save finishes.
	     */
	  }, {
	    key: 'save',
	    value: function save(options) {
	      var _this = this;

	      options = options || {};
	      var controller = _CoreManager2['default'].getFileController();
	      if (!this._previousSave) {
	        if (this._source.format === 'file') {
	          this._previousSave = controller.saveFile(this._name, this._source).then(function (res) {
	            _this._name = res.name;
	            _this._url = res.url;
	            return _this;
	          });
	        } else {
	          this._previousSave = controller.saveBase64(this._name, this._source).then(function (res) {
	            _this._name = res.name;
	            _this._url = res.url;
	            return _this;
	          });
	        }
	      }
	      if (this._previousSave) {
	        return this._previousSave._thenRunCallbacks(options);
	      }
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        __type: 'File',
	        name: this._name,
	        url: this._url
	      };
	    }
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      if (this === other) {
	        return true;
	      }
	      // Unsaved Files are never equal, since they will be saved to different URLs
	      return other instanceof ParseFile && this.name() === other.name() && this.url() === other.url() && typeof this.url() !== 'undefined';
	    }
	  }], [{
	    key: 'fromJSON',
	    value: function fromJSON(obj) {
	      if (obj.__type !== 'File') {
	        throw new TypeError('JSON object does not represent a ParseFile');
	      }
	      var file = new ParseFile(obj.name);
	      file._url = obj.url;
	      return file;
	    }
	  }, {
	    key: 'encodeBase64',
	    value: function encodeBase64(bytes) {
	      var chunks = [];
	      chunks.length = Math.ceil(bytes.length / 3);
	      for (var i = 0; i < chunks.length; i++) {
	        var b1 = bytes[i * 3];
	        var b2 = bytes[i * 3 + 1] || 0;
	        var b3 = bytes[i * 3 + 2] || 0;

	        var has2 = i * 3 + 1 < bytes.length;
	        var has3 = i * 3 + 2 < bytes.length;

	        chunks[i] = [b64Digit(b1 >> 2 & 0x3F), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0F), has2 ? b64Digit(b2 << 2 & 0x3C | b3 >> 6 & 0x03) : '=', has3 ? b64Digit(b3 & 0x3F) : '='].join('');
	      }

	      return chunks.join('');
	    }
	  }]);

	  return ParseFile;
	})();

	exports['default'] = ParseFile;

	_CoreManager2['default'].setFileController({
	  saveFile: function saveFile(name, source) {
	    if (source.format !== 'file') {
	      throw new Error('saveFile can only be used with File-type sources.');
	    }
	    // To directly upload a File, we use a REST-style AJAX request
	    var headers = {
	      'X-Parse-Application-ID': _CoreManager2['default'].get('APPLICATION_ID'),
	      'X-Parse-JavaScript-Key': _CoreManager2['default'].get('JAVASCRIPT_KEY'),
	      'Content-Type': source.type || (source.file ? source.file.type : null)
	    };
	    var url = _CoreManager2['default'].get('SERVER_URL');
	    if (url[url.length - 1] !== '/') {
	      url += '/';
	    }
	    url += 'files/' + name;
	    return _CoreManager2['default'].getRESTController().ajax('POST', url, source.file, headers);
	  },

	  saveBase64: function saveBase64(name, source) {
	    if (source.format !== 'base64') {
	      throw new Error('saveBase64 can only be used with Base64-type sources.');
	    }
	    var data = {
	      base64: source.base64
	    };
	    if (source.type) {
	      data._ContentType = source.type;
	    }

	    return _CoreManager2['default'].getRESTController().request('POST', 'files/' + name, data);
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _getIterator = __webpack_require__(53)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _isPromisesAPlusCompliant = true;

	/**
	 * A Promise is returned by async methods as a hook to provide callbacks to be
	 * called when the async task is fulfilled.
	 *
	 * <p>Typical usage would be like:<pre>
	 *    query.find().then(function(results) {
	 *      results[0].set("foo", "bar");
	 *      return results[0].saveAsync();
	 *    }).then(function(result) {
	 *      console.log("Updated " + result.id);
	 *    });
	 * </pre></p>
	 *
	 * @class Parse.Promise
	 * @constructor
	 */

	var ParsePromise = (function () {
	  function ParsePromise(executor) {
	    _classCallCheck(this, ParsePromise);

	    this._resolved = false;
	    this._rejected = false;
	    this._resolvedCallbacks = [];
	    this._rejectedCallbacks = [];

	    if (typeof executor === 'function') {
	      executor(this.resolve.bind(this), this.reject.bind(this));
	    }
	  }

	  /**
	   * Marks this promise as fulfilled, firing any callbacks waiting on it.
	   * @method resolve
	   * @param {Object} result the result to pass to the callbacks.
	   */

	  _createClass(ParsePromise, [{
	    key: 'resolve',
	    value: function resolve() {
	      if (this._resolved || this._rejected) {
	        throw new Error('A promise was resolved even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
	      }
	      this._resolved = true;

	      for (var _len = arguments.length, results = Array(_len), _key = 0; _key < _len; _key++) {
	        results[_key] = arguments[_key];
	      }

	      this._result = results;
	      for (var i = 0; i < this._resolvedCallbacks.length; i++) {
	        this._resolvedCallbacks[i].apply(this, results);
	      }

	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    }

	    /**
	     * Marks this promise as fulfilled, firing any callbacks waiting on it.
	     * @method reject
	     * @param {Object} error the error to pass to the callbacks.
	     */
	  }, {
	    key: 'reject',
	    value: function reject(error) {
	      if (this._resolved || this._rejected) {
	        throw new Error('A promise was rejected even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
	      }
	      this._rejected = true;
	      this._error = error;
	      for (var i = 0; i < this._rejectedCallbacks.length; i++) {
	        this._rejectedCallbacks[i](error);
	      }
	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    }

	    /**
	     * Adds callbacks to be called when this promise is fulfilled. Returns a new
	     * Promise that will be fulfilled when the callback is complete. It allows
	     * chaining. If the callback itself returns a Promise, then the one returned
	     * by "then" will not be fulfilled until that one returned by the callback
	     * is fulfilled.
	     * @method then
	     * @param {Function} resolvedCallback Function that is called when this
	     * Promise is resolved. Once the callback is complete, then the Promise
	     * returned by "then" will also be fulfilled.
	     * @param {Function} rejectedCallback Function that is called when this
	     * Promise is rejected with an error. Once the callback is complete, then
	     * the promise returned by "then" with be resolved successfully. If
	     * rejectedCallback is null, or it returns a rejected Promise, then the
	     * Promise returned by "then" will be rejected with that error.
	     * @return {Parse.Promise} A new Promise that will be fulfilled after this
	     * Promise is fulfilled and either callback has completed. If the callback
	     * returned a Promise, then this Promise will not be fulfilled until that
	     * one is.
	     */
	  }, {
	    key: 'then',
	    value: function then(resolvedCallback, rejectedCallback) {
	      var _this = this;

	      var promise = new ParsePromise();

	      var wrappedResolvedCallback = function wrappedResolvedCallback() {
	        for (var _len2 = arguments.length, results = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          results[_key2] = arguments[_key2];
	        }

	        if (typeof resolvedCallback === 'function') {
	          if (_isPromisesAPlusCompliant) {
	            try {
	              results = [resolvedCallback.apply(this, results)];
	            } catch (e) {
	              results = [ParsePromise.error(e)];
	            }
	          } else {
	            results = [resolvedCallback.apply(this, results)];
	          }
	        }
	        if (results.length === 1 && ParsePromise.is(results[0])) {
	          results[0].then(function () {
	            promise.resolve.apply(promise, arguments);
	          }, function (error) {
	            promise.reject(error);
	          });
	        } else {
	          promise.resolve.apply(promise, results);
	        }
	      };

	      var wrappedRejectedCallback = function wrappedRejectedCallback(error) {
	        var result = [];
	        if (typeof rejectedCallback === 'function') {
	          if (_isPromisesAPlusCompliant) {
	            try {
	              result = [rejectedCallback(error)];
	            } catch (e) {
	              result = [ParsePromise.error(e)];
	            }
	          } else {
	            result = [rejectedCallback(error)];
	          }
	          if (result.length === 1 && ParsePromise.is(result[0])) {
	            result[0].then(function () {
	              promise.resolve.apply(promise, arguments);
	            }, function (error) {
	              promise.reject(error);
	            });
	          } else {
	            if (_isPromisesAPlusCompliant) {
	              promise.resolve.apply(promise, result);
	            } else {
	              promise.reject(result[0]);
	            }
	          }
	        } else {
	          promise.reject(error);
	        }
	      };

	      var runLater = function runLater(fn) {
	        fn.call();
	      };
	      if (_isPromisesAPlusCompliant) {
	        if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
	          runLater = function (fn) {
	            process.nextTick(fn);
	          };
	        } else if (typeof setTimeout === 'function') {
	          runLater = function (fn) {
	            setTimeout(fn, 0);
	          };
	        }
	      }

	      if (this._resolved) {
	        runLater(function () {
	          wrappedResolvedCallback.apply(_this, _this._result);
	        });
	      } else if (this._rejected) {
	        runLater(function () {
	          wrappedRejectedCallback(_this._error);
	        });
	      } else {
	        this._resolvedCallbacks.push(wrappedResolvedCallback);
	        this._rejectedCallbacks.push(wrappedRejectedCallback);
	      }

	      return promise;
	    }

	    /**
	     * Add handlers to be called when the promise
	     * is either resolved or rejected
	     * @method always
	     */
	  }, {
	    key: 'always',
	    value: function always(callback) {
	      return this.then(callback, callback);
	    }

	    /**
	     * Add handlers to be called when the Promise object is resolved
	     * @method done
	     */
	  }, {
	    key: 'done',
	    value: function done(callback) {
	      return this.then(callback);
	    }

	    /**
	     * Add handlers to be called when the Promise object is rejected
	     * Alias for catch().
	     * @method fail
	     */
	  }, {
	    key: 'fail',
	    value: function fail(callback) {
	      return this.then(null, callback);
	    }

	    /**
	     * Add handlers to be called when the Promise object is rejected
	     * @method catch
	     */
	  }, {
	    key: 'catch',
	    value: function _catch(callback) {
	      return this.then(null, callback);
	    }

	    /**
	     * Run the given callbacks after this promise is fulfilled.
	     * @method _thenRunCallbacks
	     * @param optionsOrCallback {} A Backbone-style options callback, or a
	     * callback function. If this is an options object and contains a "model"
	     * attributes, that will be passed to error callbacks as the first argument.
	     * @param model {} If truthy, this will be passed as the first result of
	     * error callbacks. This is for Backbone-compatability.
	     * @return {Parse.Promise} A promise that will be resolved after the
	     * callbacks are run, with the same result as this.
	     */
	  }, {
	    key: '_thenRunCallbacks',
	    value: function _thenRunCallbacks(optionsOrCallback, model) {
	      var options = {};
	      if (typeof optionsOrCallback === 'function') {
	        options.success = function (result) {
	          optionsOrCallback(result, null);
	        };
	        options.error = function (error) {
	          optionsOrCallback(null, error);
	        };
	      } else if (typeof optionsOrCallback === 'object') {
	        if (typeof optionsOrCallback.success === 'function') {
	          options.success = optionsOrCallback.success;
	        }
	        if (typeof optionsOrCallback.error === 'function') {
	          options.error = optionsOrCallback.error;
	        }
	      }

	      return this.then(function () {
	        for (var _len3 = arguments.length, results = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          results[_key3] = arguments[_key3];
	        }

	        if (options.success) {
	          options.success.apply(this, results);
	        }
	        return ParsePromise.as.apply(ParsePromise, arguments);
	      }, function (error) {
	        if (options.error) {
	          if (typeof model !== 'undefined') {
	            options.error(model, error);
	          } else {
	            options.error(error);
	          }
	        }
	        // By explicitly returning a rejected Promise, this will work with
	        // either jQuery or Promises/A+ semantics.
	        return ParsePromise.error(error);
	      });
	    }

	    /**
	     * Adds a callback function that should be called regardless of whether
	     * this promise failed or succeeded. The callback will be given either the
	     * array of results for its first argument, or the error as its second,
	     * depending on whether this Promise was rejected or resolved. Returns a
	     * new Promise, like "then" would.
	     * @method _continueWith
	     * @param {Function} continuation the callback.
	     */
	  }, {
	    key: '_continueWith',
	    value: function _continueWith(continuation) {
	      return this.then(function () {
	        return continuation(arguments, null);
	      }, function (error) {
	        return continuation(null, error);
	      });
	    }

	    /**
	     * Returns true iff the given object fulfils the Promise interface.
	     * @method is
	     * @param {Object} promise The object to test
	     * @static
	     * @return {Boolean}
	     */
	  }], [{
	    key: 'is',
	    value: function is(promise) {
	      return promise != null && typeof promise.then === 'function';
	    }

	    /**
	     * Returns a new promise that is resolved with a given value.
	     * @method as
	     * @param value The value to resolve the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'as',
	    value: function as() {
	      var promise = new ParsePromise();

	      for (var _len4 = arguments.length, values = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        values[_key4] = arguments[_key4];
	      }

	      promise.resolve.apply(promise, values);
	      return promise;
	    }

	    /**
	     * Returns a new promise that is resolved with a given value.
	     * If that value is a thenable Promise (has a .then() prototype
	     * method), the new promise will be chained to the end of the
	     * value.
	     * @method resolve
	     * @param value The value to resolve the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'resolve',
	    value: function resolve(value) {
	      return new ParsePromise(function (resolve, reject) {
	        if (ParsePromise.is(value)) {
	          value.then(resolve, reject);
	        } else {
	          resolve(value);
	        }
	      });
	    }

	    /**
	     * Returns a new promise that is rejected with a given error.
	     * @method error
	     * @param error The error to reject the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'error',
	    value: function error() {
	      var promise = new ParsePromise();

	      for (var _len5 = arguments.length, errors = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        errors[_key5] = arguments[_key5];
	      }

	      promise.reject.apply(promise, errors);
	      return promise;
	    }

	    /**
	     * Returns a new promise that is rejected with a given error.
	     * This is an alias for Parse.Promise.error, for compliance with
	     * the ES6 implementation.
	     * @method reject
	     * @param error The error to reject the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'reject',
	    value: function reject() {
	      for (var _len6 = arguments.length, errors = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        errors[_key6] = arguments[_key6];
	      }

	      return ParsePromise.error.apply(null, errors);
	    }

	    /**
	     * Returns a new promise that is fulfilled when all of the input promises
	     * are resolved. If any promise in the list fails, then the returned promise
	     * will be rejected with an array containing the error from each promise.
	     * If they all succeed, then the returned promise will succeed, with the
	     * results being the results of all the input
	     * promises. For example: <pre>
	     *   var p1 = Parse.Promise.as(1);
	     *   var p2 = Parse.Promise.as(2);
	     *   var p3 = Parse.Promise.as(3);
	     *
	     *   Parse.Promise.when(p1, p2, p3).then(function(r1, r2, r3) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	     *
	     * The input promises can also be specified as an array: <pre>
	     *   var promises = [p1, p2, p3];
	     *   Parse.Promise.when(promises).then(function(results) {
	     *     console.log(results);  // prints [1,2,3]
	     *   });
	     * </pre>
	     * @method when
	     * @param {Array} promises a list of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'when',
	    value: function when(promises) {
	      var objects;
	      var arrayArgument = Array.isArray(promises);
	      if (arrayArgument) {
	        objects = promises;
	      } else {
	        objects = arguments;
	      }

	      var total = objects.length;
	      var hadError = false;
	      var results = [];
	      var returnValue = arrayArgument ? [results] : results;
	      var errors = [];
	      results.length = objects.length;
	      errors.length = objects.length;

	      if (total === 0) {
	        return ParsePromise.as.apply(this, returnValue);
	      }

	      var promise = new ParsePromise();

	      var resolveOne = function resolveOne() {
	        total--;
	        if (total <= 0) {
	          if (hadError) {
	            promise.reject(errors);
	          } else {
	            promise.resolve.apply(promise, returnValue);
	          }
	        }
	      };

	      var chain = function chain(object, index) {
	        if (ParsePromise.is(object)) {
	          object.then(function (result) {
	            results[index] = result;
	            resolveOne();
	          }, function (error) {
	            errors[index] = error;
	            hadError = true;
	            resolveOne();
	          });
	        } else {
	          results[i] = object;
	          resolveOne();
	        }
	      };
	      for (var i = 0; i < objects.length; i++) {
	        chain(objects[i], i);
	      }

	      return promise;
	    }

	    /**
	     * Returns a new promise that is fulfilled when all of the promises in the
	     * iterable argument are resolved. If any promise in the list fails, then
	     * the returned promise will be immediately rejected with the reason that
	     * single promise rejected. If they all succeed, then the returned promise
	     * will succeed, with the results being the results of all the input
	     * promises. If the iterable provided is empty, the returned promise will
	     * be immediately resolved.
	     * 
	     * For example: <pre>
	     *   var p1 = Parse.Promise.as(1);
	     *   var p2 = Parse.Promise.as(2);
	     *   var p3 = Parse.Promise.as(3);
	     *
	     *   Parse.Promise.all([p1, p2, p3]).then(function([r1, r2, r3]) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	     *
	     * @method all
	     * @param {Iterable} promises an iterable of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'all',
	    value: function all(promises) {
	      var total = 0;
	      var objects = [];

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = _getIterator(promises), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var p = _step.value;

	          objects[total++] = p;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      if (total === 0) {
	        return ParsePromise.as([]);
	      }

	      var hadError = false;
	      var promise = new ParsePromise();
	      var resolved = 0;
	      var results = [];
	      objects.forEach(function (object, i) {
	        if (ParsePromise.is(object)) {
	          object.then(function (result) {
	            if (hadError) {
	              return false;
	            }
	            results[i] = result;
	            resolved++;
	            if (resolved >= total) {
	              promise.resolve(results);
	            }
	          }, function (error) {
	            // Reject immediately
	            promise.reject(error);
	            hadError = true;
	          });
	        } else {
	          results[i] = object;
	          resolved++;
	          if (!hadError && resolved >= total) {
	            promise.resolve(results);
	          }
	        }
	      });

	      return promise;
	    }

	    /**
	     * Returns a new promise that is immediately fulfilled when any of the
	     * promises in the iterable argument are resolved or rejected. If the
	     * first promise to complete is resolved, the returned promise will be
	     * resolved with the same value. Likewise, if the first promise to
	     * complete is rejected, the returned promise will be rejected with the
	     * same reason.
	     *
	     * @method race
	     * @param {Iterable} promises an iterable of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'race',
	    value: function race(promises) {
	      var completed = false;
	      var promise = new ParsePromise();
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = _getIterator(promises), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var p = _step2.value;

	          if (ParsePromise.is(p)) {
	            p.then(function (result) {
	              if (completed) {
	                return;
	              }
	              completed = true;
	              promise.resolve(result);
	            }, function (error) {
	              if (completed) {
	                return;
	              }
	              completed = true;
	              promise.reject(error);
	            });
	          } else if (!completed) {
	            completed = true;
	            promise.resolve(p);
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return promise;
	    }

	    /**
	     * Runs the given asyncFunction repeatedly, as long as the predicate
	     * function returns a truthy value. Stops repeating if asyncFunction returns
	     * a rejected promise.
	     * @method _continueWhile
	     * @param {Function} predicate should return false when ready to stop.
	     * @param {Function} asyncFunction should return a Promise.
	     * @static
	     */
	  }, {
	    key: '_continueWhile',
	    value: function _continueWhile(predicate, asyncFunction) {
	      if (predicate()) {
	        return asyncFunction().then(function () {
	          return ParsePromise._continueWhile(predicate, asyncFunction);
	        });
	      }
	      return ParsePromise.as();
	    }
	  }, {
	    key: 'isPromisesAPlusCompliant',
	    value: function isPromisesAPlusCompliant() {
	      return _isPromisesAPlusCompliant;
	    }
	  }, {
	    key: 'enableAPlusCompliant',
	    value: function enableAPlusCompliant() {
	      _isPromisesAPlusCompliant = true;
	    }
	  }, {
	    key: 'disableAPlusCompliant',
	    value: function disableAPlusCompliant() {
	      _isPromisesAPlusCompliant = false;
	    }
	  }]);

	  return ParsePromise;
	})();

	exports['default'] = ParsePromise;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	__webpack_require__(72);
	module.exports = __webpack_require__(75);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	var Iterators = __webpack_require__(59);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(57)
	  , step             = __webpack_require__(58)
	  , Iterators        = __webpack_require__(59)
	  , toIObject        = __webpack_require__(31);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(60)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(61)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(62)
	  , hide           = __webpack_require__(63)
	  , has            = __webpack_require__(66)
	  , Iterators      = __webpack_require__(59)
	  , $iterCreate    = __webpack_require__(67)
	  , setToStringTag = __webpack_require__(68)
	  , getProto       = __webpack_require__(12).getProto
	  , ITERATOR       = __webpack_require__(69)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(63);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(12)
	  , createDesc = __webpack_require__(64);
	module.exports = __webpack_require__(65) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 66 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(12)
	  , descriptor     = __webpack_require__(64)
	  , setToStringTag = __webpack_require__(68)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(63)(IteratorPrototype, __webpack_require__(69)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).setDesc
	  , has = __webpack_require__(66)
	  , TAG = __webpack_require__(69)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(70)('wks')
	  , uid    = __webpack_require__(71)
	  , Symbol = __webpack_require__(21).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(21)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(73)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(60)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(74)
	  , defined   = __webpack_require__(18);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(42)
	  , get      = __webpack_require__(76);
	module.exports = __webpack_require__(22).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(77)
	  , ITERATOR  = __webpack_require__(69)('iterator')
	  , Iterators = __webpack_require__(59);
	module.exports = __webpack_require__(22).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(33)
	  , TAG = __webpack_require__(69)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _ParseOp = __webpack_require__(79);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParseQuery = __webpack_require__(84);

	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);

	/**
	 * Creates a new Relation for the given parent object and key. This
	 * constructor should rarely be used directly, but rather created by
	 * Parse.Object.relation.
	 * @class Parse.Relation
	 * @constructor
	 * @param {Parse.Object} parent The parent of this relation.
	 * @param {String} key The key for this relation on the parent.
	 *
	 * <p>
	 * A class that is used to access all of the children of a many-to-many
	 * relationship.  Each instance of Parse.Relation is associated with a
	 * particular parent object and key.
	 * </p>
	 */

	var ParseRelation = (function () {
	  function ParseRelation(parent, key) {
	    _classCallCheck(this, ParseRelation);

	    this.parent = parent;
	    this.key = key;
	    this.targetClassName = null;
	  }

	  /**
	   * Makes sure that this relation has the right parent and key.
	   */

	  _createClass(ParseRelation, [{
	    key: '_ensureParentAndKey',
	    value: function _ensureParentAndKey(parent, key) {
	      this.key = this.key || key;
	      if (this.key !== key) {
	        throw new Error('Internal Error. Relation retrieved from two different keys.');
	      }
	      if (this.parent) {
	        if (this.parent.className !== parent.className) {
	          throw new Error('Internal Error. Relation retrieved from two different Objects.');
	        }
	        if (this.parent.id) {
	          if (this.parent.id !== parent.id) {
	            throw new Error('Internal Error. Relation retrieved from two different Objects.');
	          }
	        } else if (parent.id) {
	          this.parent = parent;
	        }
	      } else {
	        this.parent = parent;
	      }
	    }

	    /**
	     * Adds a Parse.Object or an array of Parse.Objects to the relation.
	     * @method add
	     * @param {} objects The item or items to add.
	     */
	  }, {
	    key: 'add',
	    value: function add(objects) {
	      if (!Array.isArray(objects)) {
	        objects = [objects];
	      }

	      var change = new _ParseOp.RelationOp(objects, []);
	      var parent = this.parent;
	      if (!parent) {
	        throw new Error('Cannot add to a Relation without a parent');
	      }
	      parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	      return parent;
	    }

	    /**
	     * Removes a Parse.Object or an array of Parse.Objects from this relation.
	     * @method remove
	     * @param {} objects The item or items to remove.
	     */
	  }, {
	    key: 'remove',
	    value: function remove(objects) {
	      if (!Array.isArray(objects)) {
	        objects = [objects];
	      }

	      var change = new _ParseOp.RelationOp([], objects);
	      if (!this.parent) {
	        throw new Error('Cannot remove from a Relation without a parent');
	      }
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	    }

	    /**
	     * Returns a JSON version of the object suitable for saving to disk.
	     * @method toJSON
	     * @return {Object}
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        __type: 'Relation',
	        className: this.targetClassName
	      };
	    }

	    /**
	     * Returns a Parse.Query that is limited to objects in this
	     * relation.
	     * @method query
	     * @return {Parse.Query}
	     */
	  }, {
	    key: 'query',
	    value: function query() {
	      var query;
	      var parent = this.parent;
	      if (!parent) {
	        throw new Error('Cannot construct a query for a Relation without a parent');
	      }
	      if (!this.targetClassName) {
	        query = new _ParseQuery2['default'](parent.className);
	        query._extraOptions.redirectClassNameForKey = this.key;
	      } else {
	        query = new _ParseQuery2['default'](this.targetClassName);
	      }
	      query._addCondition('$relatedTo', 'object', {
	        __type: 'Pointer',
	        className: parent.className,
	        objectId: parent.id
	      });
	      query._addCondition('$relatedTo', 'key', this.key);

	      return query;
	    }
	  }]);

	  return ParseRelation;
	})();

	exports['default'] = ParseRelation;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _get = __webpack_require__(27)['default'];

	var _inherits = __webpack_require__(34)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.opFromJSON = opFromJSON;

	var _arrayContainsObject = __webpack_require__(80);

	var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);

	var _decode = __webpack_require__(7);

	var _decode2 = _interopRequireDefault(_decode);

	var _encode = __webpack_require__(81);

	var _encode2 = _interopRequireDefault(_encode);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParseRelation = __webpack_require__(78);

	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);

	var _unique = __webpack_require__(83);

	var _unique2 = _interopRequireDefault(_unique);

	function opFromJSON(json) {
	  if (!json || !json.__op) {
	    return null;
	  }
	  switch (json.__op) {
	    case 'Delete':
	      return new UnsetOp();
	    case 'Increment':
	      return new IncrementOp(json.amount);
	    case 'Add':
	      return new AddOp((0, _decode2['default'])(json.objects));
	    case 'AddUnique':
	      return new AddUniqueOp((0, _decode2['default'])(json.objects));
	    case 'Remove':
	      return new RemoveOp((0, _decode2['default'])(json.objects));
	    case 'AddRelation':
	      var toAdd = (0, _decode2['default'])(json.objects);
	      if (!Array.isArray(toAdd)) {
	        return new RelationOp([], []);
	      }
	      return new RelationOp(toAdd, []);
	    case 'RemoveRelation':
	      var toRemove = (0, _decode2['default'])(json.objects);
	      if (!Array.isArray(toRemove)) {
	        return new RelationOp([], []);
	      }
	      return new RelationOp([], toRemove);
	    case 'Batch':
	      var toAdd = [];
	      var toRemove = [];
	      for (var i = 0; i < json.ops.length; i++) {
	        if (json.ops[i].__op === 'AddRelation') {
	          toAdd = toAdd.concat((0, _decode2['default'])(json.ops[i].objects));
	        } else if (json.ops[i].__op === 'RemoveRelation') {
	          toRemove = toRemove.concat((0, _decode2['default'])(json.ops[i].objects));
	        }
	      }
	      return new RelationOp(toAdd, toRemove);
	  }
	  return null;
	}

	var Op = (function () {
	  function Op() {
	    _classCallCheck(this, Op);
	  }

	  _createClass(Op, [{
	    key: 'applyTo',

	    // Empty parent class
	    value: function applyTo(value) {}
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {}
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {}
	  }]);

	  return Op;
	})();

	exports.Op = Op;

	var SetOp = (function (_Op) {
	  _inherits(SetOp, _Op);

	  function SetOp(value) {
	    _classCallCheck(this, SetOp);

	    _get(Object.getPrototypeOf(SetOp.prototype), 'constructor', this).call(this);
	    this._value = value;
	  }

	  _createClass(SetOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      return this._value;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      return new SetOp(this._value);
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return (0, _encode2['default'])(this._value, false, true);
	    }
	  }]);

	  return SetOp;
	})(Op);

	exports.SetOp = SetOp;

	var UnsetOp = (function (_Op2) {
	  _inherits(UnsetOp, _Op2);

	  function UnsetOp() {
	    _classCallCheck(this, UnsetOp);

	    _get(Object.getPrototypeOf(UnsetOp.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(UnsetOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      return undefined;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      return new UnsetOp();
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Delete' };
	    }
	  }]);

	  return UnsetOp;
	})(Op);

	exports.UnsetOp = UnsetOp;

	var IncrementOp = (function (_Op3) {
	  _inherits(IncrementOp, _Op3);

	  function IncrementOp(amount) {
	    _classCallCheck(this, IncrementOp);

	    _get(Object.getPrototypeOf(IncrementOp.prototype), 'constructor', this).call(this);
	    if (typeof amount !== 'number') {
	      throw new TypeError('Increment Op must be initialized with a numeric amount.');
	    }
	    this._amount = amount;
	  }

	  _createClass(IncrementOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (typeof value === 'undefined') {
	        return this._amount;
	      }
	      if (typeof value !== 'number') {
	        throw new TypeError('Cannot increment a non-numeric value.');
	      }
	      return this._amount + value;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._amount);
	      }
	      if (previous instanceof IncrementOp) {
	        return new IncrementOp(this.applyTo(previous._amount));
	      }
	      throw new Error('Cannot merge Increment Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Increment', amount: this._amount };
	    }
	  }]);

	  return IncrementOp;
	})(Op);

	exports.IncrementOp = IncrementOp;

	var AddOp = (function (_Op4) {
	  _inherits(AddOp, _Op4);

	  function AddOp(value) {
	    _classCallCheck(this, AddOp);

	    _get(Object.getPrototypeOf(AddOp.prototype), 'constructor', this).call(this);
	    this._value = Array.isArray(value) ? value : [value];
	  }

	  _createClass(AddOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (value == null) {
	        return this._value;
	      }
	      if (Array.isArray(value)) {
	        return value.concat(this._value);
	      }
	      throw new Error('Cannot add elements to a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._value);
	      }
	      if (previous instanceof AddOp) {
	        return new AddOp(this.applyTo(previous._value));
	      }
	      throw new Error('Cannot merge Add Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Add', objects: (0, _encode2['default'])(this._value, false, true) };
	    }
	  }]);

	  return AddOp;
	})(Op);

	exports.AddOp = AddOp;

	var AddUniqueOp = (function (_Op5) {
	  _inherits(AddUniqueOp, _Op5);

	  function AddUniqueOp(value) {
	    _classCallCheck(this, AddUniqueOp);

	    _get(Object.getPrototypeOf(AddUniqueOp.prototype), 'constructor', this).call(this);
	    this._value = (0, _unique2['default'])(Array.isArray(value) ? value : [value]);
	  }

	  _createClass(AddUniqueOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (value == null) {
	        return this._value || [];
	      }
	      if (Array.isArray(value)) {
	        // copying value lets Flow guarantee the pointer isn't modified elsewhere
	        var valueCopy = value;
	        var toAdd = [];
	        this._value.forEach(function (v) {
	          if (v instanceof _ParseObject2['default']) {
	            if (!(0, _arrayContainsObject2['default'])(valueCopy, v)) {
	              toAdd.push(v);
	            }
	          } else {
	            if (valueCopy.indexOf(v) < 0) {
	              toAdd.push(v);
	            }
	          }
	        });
	        return value.concat(toAdd);
	      }
	      throw new Error('Cannot add elements to a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._value);
	      }
	      if (previous instanceof AddUniqueOp) {
	        return new AddUniqueOp(this.applyTo(previous._value));
	      }
	      throw new Error('Cannot merge AddUnique Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'AddUnique', objects: (0, _encode2['default'])(this._value, false, true) };
	    }
	  }]);

	  return AddUniqueOp;
	})(Op);

	exports.AddUniqueOp = AddUniqueOp;

	var RemoveOp = (function (_Op6) {
	  _inherits(RemoveOp, _Op6);

	  function RemoveOp(value) {
	    _classCallCheck(this, RemoveOp);

	    _get(Object.getPrototypeOf(RemoveOp.prototype), 'constructor', this).call(this);
	    this._value = (0, _unique2['default'])(Array.isArray(value) ? value : [value]);
	  }

	  _createClass(RemoveOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (value == null) {
	        return [];
	      }
	      if (Array.isArray(value)) {
	        var i = value.indexOf(this._value);
	        var removed = value.concat([]);
	        for (var i = 0; i < this._value.length; i++) {
	          var index = removed.indexOf(this._value[i]);
	          while (index > -1) {
	            removed.splice(index, 1);
	            index = removed.indexOf(this._value[i]);
	          }
	          if (this._value[i] instanceof _ParseObject2['default'] && this._value[i].id) {
	            for (var j = 0; j < removed.length; j++) {
	              if (removed[j] instanceof _ParseObject2['default'] && this._value[i].id === removed[j].id) {
	                removed.splice(j, 1);
	                j--;
	              }
	            }
	          }
	        }
	        return removed;
	      }
	      throw new Error('Cannot remove elements from a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new UnsetOp();
	      }
	      if (previous instanceof RemoveOp) {
	        var uniques = previous._value.concat([]);
	        for (var i = 0; i < this._value.length; i++) {
	          if (this._value[i] instanceof _ParseObject2['default']) {
	            if (!(0, _arrayContainsObject2['default'])(uniques, this._value[i])) {
	              uniques.push(this._value[i]);
	            }
	          } else {
	            if (uniques.indexOf(this._value[i]) < 0) {
	              uniques.push(this._value[i]);
	            }
	          }
	        }
	        return new RemoveOp(uniques);
	      }
	      throw new Error('Cannot merge Remove Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Remove', objects: (0, _encode2['default'])(this._value, false, true) };
	    }
	  }]);

	  return RemoveOp;
	})(Op);

	exports.RemoveOp = RemoveOp;

	var RelationOp = (function (_Op7) {
	  _inherits(RelationOp, _Op7);

	  function RelationOp(adds, removes) {
	    _classCallCheck(this, RelationOp);

	    _get(Object.getPrototypeOf(RelationOp.prototype), 'constructor', this).call(this);
	    this._targetClassName = null;

	    if (Array.isArray(adds)) {
	      this.relationsToAdd = (0, _unique2['default'])(adds.map(this._extractId, this));
	    }

	    if (Array.isArray(removes)) {
	      this.relationsToRemove = (0, _unique2['default'])(removes.map(this._extractId, this));
	    }
	  }

	  _createClass(RelationOp, [{
	    key: '_extractId',
	    value: function _extractId(obj) {
	      if (typeof obj === 'string') {
	        return obj;
	      }
	      if (!obj.id) {
	        throw new Error('You cannot add or remove an unsaved Parse Object from a relation');
	      }
	      if (!this._targetClassName) {
	        this._targetClassName = obj.className;
	      }
	      if (this._targetClassName !== obj.className) {
	        throw new Error('Tried to create a Relation with 2 different object types: ' + this._targetClassName + ' and ' + obj.className + '.');
	      }
	      return obj.id;
	    }
	  }, {
	    key: 'applyTo',
	    value: function applyTo(value, object, key) {
	      if (!value) {
	        if (!object || !key) {
	          throw new Error('Cannot apply a RelationOp without either a previous value, or an object and a key');
	        }
	        var parent = new _ParseObject2['default'](object.className);
	        if (object.id && object.id.indexOf('local') === 0) {
	          parent._localId = object.id;
	        } else if (object.id) {
	          parent.id = object.id;
	        }
	        var relation = new _ParseRelation2['default'](parent, key);
	        relation.targetClassName = this._targetClassName;
	        return relation;
	      }
	      if (value instanceof _ParseRelation2['default']) {
	        if (this._targetClassName) {
	          if (value.targetClassName) {
	            if (this._targetClassName !== value.targetClassName) {
	              throw new Error('Related object must be a ' + value.targetClassName + ', but a ' + this._targetClassName + ' was passed in.');
	            }
	          } else {
	            value.targetClassName = this._targetClassName;
	          }
	        }
	        return value;
	      } else {
	        throw new Error('Relation cannot be applied to a non-relation field');
	      }
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof UnsetOp) {
	        throw new Error('You cannot modify a relation after deleting it.');
	      } else if (previous instanceof RelationOp) {
	        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
	          throw new Error('Related object must be of class ' + previous._targetClassName + ', but ' + (this._targetClassName || 'null') + ' was passed in.');
	        }
	        var newAdd = previous.relationsToAdd.concat([]);
	        this.relationsToRemove.forEach(function (r) {
	          var index = newAdd.indexOf(r);
	          if (index > -1) {
	            newAdd.splice(index, 1);
	          }
	        });
	        this.relationsToAdd.forEach(function (r) {
	          var index = newAdd.indexOf(r);
	          if (index < 0) {
	            newAdd.push(r);
	          }
	        });

	        var newRemove = previous.relationsToRemove.concat([]);
	        this.relationsToAdd.forEach(function (r) {
	          var index = newRemove.indexOf(r);
	          if (index > -1) {
	            newRemove.splice(index, 1);
	          }
	        });
	        this.relationsToRemove.forEach(function (r) {
	          var index = newRemove.indexOf(r);
	          if (index < 0) {
	            newRemove.push(r);
	          }
	        });

	        var newRelation = new RelationOp(newAdd, newRemove);
	        newRelation._targetClassName = this._targetClassName;
	        return newRelation;
	      }
	      throw new Error('Cannot merge Relation Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var _this = this;

	      var idToPointer = function idToPointer(id) {
	        return {
	          __type: 'Pointer',
	          className: _this._targetClassName,
	          objectId: id
	        };
	      };

	      var adds = null;
	      var removes = null;
	      var pointers = null;

	      if (this.relationsToAdd.length > 0) {
	        pointers = this.relationsToAdd.map(idToPointer);
	        adds = { __op: 'AddRelation', objects: pointers };
	      }
	      if (this.relationsToRemove.length > 0) {
	        pointers = this.relationsToRemove.map(idToPointer);
	        removes = { __op: 'RemoveRelation', objects: pointers };
	      }

	      if (adds && removes) {
	        return { __op: 'Batch', ops: [adds, removes] };
	      }

	      return adds || removes || {};
	    }
	  }]);

	  return RelationOp;
	})(Op);

	exports.RelationOp = RelationOp;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = arrayContainsObject;

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	function arrayContainsObject(array, object) {
	  if (array.indexOf(object) > -1) {
	    return true;
	  }
	  for (var i = 0; i < array.length; i++) {
	    if (array[i] instanceof _ParseObject2['default'] && array[i].className === object.className && array[i]._getId() === object._getId()) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _Object$keys = __webpack_require__(14)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _ParseACL = __webpack_require__(8);

	var _ParseACL2 = _interopRequireDefault(_ParseACL);

	var _ParseFile = __webpack_require__(51);

	var _ParseFile2 = _interopRequireDefault(_ParseFile);

	var _ParseGeoPoint = __webpack_require__(82);

	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParseOp = __webpack_require__(79);

	var _ParseRelation = __webpack_require__(78);

	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);

	var toString = Object.prototype.toString;

	function encode(value, disallowObjects, forcePointers, seen) {
	  if (value instanceof _ParseObject2['default']) {
	    if (disallowObjects) {
	      throw new Error('Parse Objects not allowed here');
	    }
	    var seenEntry = value.id ? value.className + ':' + value.id : value;
	    if (forcePointers || !seen || seen.indexOf(seenEntry) > -1 || value.dirty() || _Object$keys(value._getServerData()).length < 1) {
	      return value.toPointer();
	    }
	    seen = seen.concat(seenEntry);
	    return value._toFullJSON(seen);
	  }
	  if (value instanceof _ParseOp.Op || value instanceof _ParseACL2['default'] || value instanceof _ParseGeoPoint2['default'] || value instanceof _ParseRelation2['default']) {
	    return value.toJSON();
	  }
	  if (value instanceof _ParseFile2['default']) {
	    if (!value.url()) {
	      throw new Error('Tried to encode an unsaved file.');
	    }
	    return value.toJSON();
	  }
	  if (toString.call(value) === '[object Date]') {
	    if (isNaN(value)) {
	      throw new Error('Tried to encode an invalid date.');
	    }
	    return { __type: 'Date', iso: value.toJSON() };
	  }
	  if (toString.call(value) === '[object RegExp]' && typeof value.source === 'string') {
	    return value.source;
	  }

	  if (Array.isArray(value)) {
	    return value.map(function (v) {
	      return encode(v, disallowObjects, forcePointers, seen);
	    });
	  }

	  if (value && typeof value === 'object') {
	    var output = {};
	    for (var k in value) {
	      output[k] = encode(value[k], disallowObjects, forcePointers, seen);
	    }
	    return output;
	  }

	  return value;
	}

	exports['default'] = function (value, disallowObjects, forcePointers, seen) {
	  return encode(value, !!disallowObjects, !!forcePointers, seen || []);
	};

	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	/**
	 * Creates a new GeoPoint with any of the following forms:<br>
	 *   <pre>
	 *   new GeoPoint(otherGeoPoint)
	 *   new GeoPoint(30, 30)
	 *   new GeoPoint([30, 30])
	 *   new GeoPoint({latitude: 30, longitude: 30})
	 *   new GeoPoint()  // defaults to (0, 0)
	 *   </pre>
	 * @class Parse.GeoPoint
	 * @constructor
	 *
	 * <p>Represents a latitude / longitude point that may be associated
	 * with a key in a ParseObject or used as a reference point for geo queries.
	 * This allows proximity-based queries on the key.</p>
	 *
	 * <p>Only one key in a class may contain a GeoPoint.</p>
	 *
	 * <p>Example:<pre>
	 *   var point = new Parse.GeoPoint(30.0, -20.0);
	 *   var object = new Parse.Object("PlaceObject");
	 *   object.set("location", point);
	 *   object.save();</pre></p>
	 */

	var ParseGeoPoint = (function () {
	  function ParseGeoPoint(arg1, arg2) {
	    _classCallCheck(this, ParseGeoPoint);

	    if (Array.isArray(arg1)) {
	      ParseGeoPoint._validate(arg1[0], arg1[1]);
	      this._latitude = arg1[0];
	      this._longitude = arg1[1];
	    } else if (typeof arg1 === 'object') {
	      ParseGeoPoint._validate(arg1.latitude, arg1.longitude);
	      this._latitude = arg1.latitude;
	      this._longitude = arg1.longitude;
	    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
	      ParseGeoPoint._validate(arg1, arg2);
	      this._latitude = arg1;
	      this._longitude = arg2;
	    } else {
	      this._latitude = 0;
	      this._longitude = 0;
	    }
	  }

	  /**
	   * North-south portion of the coordinate, in range [-90, 90].
	   * Throws an exception if set out of range in a modern browser.
	   * @property latitude
	   * @type Number
	   */

	  _createClass(ParseGeoPoint, [{
	    key: 'toJSON',

	    /**
	     * Returns a JSON representation of the GeoPoint, suitable for Parse.
	     * @method toJSON
	     * @return {Object}
	     */
	    value: function toJSON() {
	      ParseGeoPoint._validate(this._latitude, this._longitude);
	      return {
	        __type: 'GeoPoint',
	        latitude: this._latitude,
	        longitude: this._longitude
	      };
	    }
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      return other instanceof ParseGeoPoint && this.latitude === other.latitude && this.longitude === other.longitude;
	    }

	    /**
	     * Returns the distance from this GeoPoint to another in radians.
	     * @method radiansTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	  }, {
	    key: 'radiansTo',
	    value: function radiansTo(point) {
	      var d2r = Math.PI / 180.0;
	      var lat1rad = this.latitude * d2r;
	      var long1rad = this.longitude * d2r;
	      var lat2rad = point.latitude * d2r;
	      var long2rad = point.longitude * d2r;

	      var sinDeltaLatDiv2 = Math.sin((lat1rad - lat2rad) / 2);
	      var sinDeltaLongDiv2 = Math.sin((long1rad - long2rad) / 2);
	      // Square of half the straight line chord distance between both points.
	      var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
	      a = Math.min(1.0, a);
	      return 2 * Math.asin(Math.sqrt(a));
	    }

	    /**
	     * Returns the distance from this GeoPoint to another in kilometers.
	     * @method kilometersTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	  }, {
	    key: 'kilometersTo',
	    value: function kilometersTo(point) {
	      return this.radiansTo(point) * 6371.0;
	    }

	    /**
	     * Returns the distance from this GeoPoint to another in miles.
	     * @method milesTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	  }, {
	    key: 'milesTo',
	    value: function milesTo(point) {
	      return this.radiansTo(point) * 3958.8;
	    }

	    /**
	     * Throws an exception if the given lat-long is out of bounds.
	     */
	  }, {
	    key: 'latitude',
	    get: function get() {
	      return this._latitude;
	    },
	    set: function set(val) {
	      ParseGeoPoint._validate(val, this.longitude);
	      this._latitude = val;
	    }

	    /**
	     * East-west portion of the coordinate, in range [-180, 180].
	     * Throws if set out of range in a modern browser.
	     * @property longitude
	     * @type Number
	     */
	  }, {
	    key: 'longitude',
	    get: function get() {
	      return this._longitude;
	    },
	    set: function set(val) {
	      ParseGeoPoint._validate(this.latitude, val);
	      this._longitude = val;
	    }
	  }], [{
	    key: '_validate',
	    value: function _validate(latitude, longitude) {
	      if (latitude !== latitude || longitude !== longitude) {
	        throw new TypeError('GeoPoint latitude and longitude must be valid numbers');
	      }
	      if (latitude < -90.0) {
	        throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' < -90.0.');
	      }
	      if (latitude > 90.0) {
	        throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' > 90.0.');
	      }
	      if (longitude < -180.0) {
	        throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' < -180.0.');
	      }
	      if (longitude > 180.0) {
	        throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' > 180.0.');
	      }
	    }

	    /**
	     * Creates a GeoPoint with the user's current location, if available.
	     * Calls options.success with a new GeoPoint instance or calls options.error.
	     * @method current
	     * @param {Object} options An object with success and error callbacks.
	     * @static
	     */
	  }, {
	    key: 'current',
	    value: function current(options) {
	      var promise = new _ParsePromise2['default']();
	      navigator.geolocation.getCurrentPosition(function (location) {
	        promise.resolve(new ParseGeoPoint(location.coords.latitude, location.coords.longitude));
	      }, function (error) {
	        promise.reject(error);
	      });

	      return promise._thenRunCallbacks(options);
	    }
	  }]);

	  return ParseGeoPoint;
	})();

	exports['default'] = ParseGeoPoint;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = unique;

	var _arrayContainsObject = __webpack_require__(80);

	var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	function unique(arr) {
	  var uniques = [];
	  arr.forEach(function (value) {
	    if (value instanceof _ParseObject2['default']) {
	      if (!(0, _arrayContainsObject2['default'])(uniques, value)) {
	        uniques.push(value);
	      }
	    } else {
	      if (uniques.indexOf(value) < 0) {
	        uniques.push(value);
	      }
	    }
	  });
	  return uniques;
	}

	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _encode = __webpack_require__(81);

	var _encode2 = _interopRequireDefault(_encode);

	var _ParseError = __webpack_require__(43);

	var _ParseError2 = _interopRequireDefault(_ParseError);

	var _ParseGeoPoint = __webpack_require__(82);

	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	/**
	 * Converts a string into a regex that matches it.
	 * Surrounding with \Q .. \E does this, we just need to escape any \E's in
	 * the text separately.
	 */
	function quote(s) {
	  return '\\Q' + s.replace('\\E', '\\E\\\\E\\Q') + '\\E';
	}

	/**
	 * Creates a new parse Parse.Query for the given Parse.Object subclass.
	 * @class Parse.Query
	 * @constructor
	 * @param {} objectClass An instance of a subclass of Parse.Object, or a Parse className string.
	 *
	 * <p>Parse.Query defines a query that is used to fetch Parse.Objects. The
	 * most common use case is finding all objects that match a query through the
	 * <code>find</code> method. For example, this sample code fetches all objects
	 * of class <code>MyClass</code>. It calls a different function depending on
	 * whether the fetch succeeded or not.
	 *
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.find({
	 *   success: function(results) {
	 *     // results is an array of Parse.Object.
	 *   },
	 *
	 *   error: function(error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 *
	 * <p>A Parse.Query can also be used to retrieve a single object whose id is
	 * known, through the get method. For example, this sample code fetches an
	 * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
	 * different function depending on whether the fetch succeeded or not.
	 *
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.get(myId, {
	 *   success: function(object) {
	 *     // object is an instance of Parse.Object.
	 *   },
	 *
	 *   error: function(object, error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 *
	 * <p>A Parse.Query can also be used to count the number of objects that match
	 * the query without retrieving all of those objects. For example, this
	 * sample code counts the number of objects of the class <code>MyClass</code>
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.count({
	 *   success: function(number) {
	 *     // There are number instances of MyClass.
	 *   },
	 *
	 *   error: function(error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 */

	var ParseQuery = (function () {
	  function ParseQuery(objectClass) {
	    _classCallCheck(this, ParseQuery);

	    if (typeof objectClass === 'string') {
	      if (objectClass === 'User' && _CoreManager2['default'].get('PERFORM_USER_REWRITE')) {
	        this.className = '_User';
	      } else {
	        this.className = objectClass;
	      }
	    } else if (objectClass instanceof _ParseObject2['default']) {
	      this.className = objectClass.className;
	    } else if (typeof objectClass === 'function') {
	      if (typeof objectClass.className === 'string') {
	        this.className = objectClass.className;
	      } else {
	        var obj = new objectClass();
	        this.className = obj.className;
	      }
	    } else {
	      throw new TypeError('A ParseQuery must be constructed with a ParseObject or class name.');
	    }

	    this._where = {};
	    this._include = [];
	    this._limit = -1; // negative limit is not sent in the server request
	    this._skip = 0;
	    this._extraOptions = {};
	  }

	  /**
	   * Adds constraint that at least one of the passed in queries matches.
	   * @method _orQuery
	   * @param {Array} queries
	   * @return {Parse.Query} Returns the query, so you can chain this call.
	   */

	  _createClass(ParseQuery, [{
	    key: '_orQuery',
	    value: function _orQuery(queries) {
	      var queryJSON = queries.map(function (q) {
	        return q.toJSON().where;
	      });

	      this._where.$or = queryJSON;
	      return this;
	    }

	    /**
	     * Helper for condition queries
	     */
	  }, {
	    key: '_addCondition',
	    value: function _addCondition(key, condition, value) {
	      if (!this._where[key] || typeof this._where[key] === 'string') {
	        this._where[key] = {};
	      }
	      this._where[key][condition] = (0, _encode2['default'])(value, false, true);
	      return this;
	    }

	    /**
	     * Returns a JSON representation of this query.
	     * @method toJSON
	     * @return {Object} The JSON representation of the query.
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var params = {
	        where: this._where
	      };

	      if (this._include.length) {
	        params.include = this._include.join(',');
	      }
	      if (this._select) {
	        params.keys = this._select.join(',');
	      }
	      if (this._limit >= 0) {
	        params.limit = this._limit;
	      }
	      if (this._skip > 0) {
	        params.skip = this._skip;
	      }
	      if (this._order) {
	        params.order = this._order.join(',');
	      }
	      for (var key in this._extraOptions) {
	        params[key] = this._extraOptions[key];
	      }

	      return params;
	    }

	    /**
	     * Constructs a Parse.Object whose id is already known by fetching data from
	     * the server.  Either options.success or options.error is called when the
	     * find completes.
	     *
	     * @method get
	     * @param {String} objectId The id of the object to be fetched.
	     * @param {Object} options A Backbone-style options object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the result when
	     * the query completes.
	     */
	  }, {
	    key: 'get',
	    value: function get(objectId, options) {
	      this.equalTo('objectId', objectId);

	      var firstOptions = {};
	      if (options && options.hasOwnProperty('useMasterKey')) {
	        firstOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options && options.hasOwnProperty('sessionToken')) {
	        firstOptions.sessionToken = options.sessionToken;
	      }

	      return this.first(firstOptions).then(function (response) {
	        if (response) {
	          return response;
	        }

	        var errorObject = new _ParseError2['default'](_ParseError2['default'].OBJECT_NOT_FOUND, 'Object not found.');
	        return _ParsePromise2['default'].error(errorObject);
	      })._thenRunCallbacks(options, null);
	    }

	    /**
	     * Retrieves a list of ParseObjects that satisfy this query.
	     * Either options.success or options.error is called when the find
	     * completes.
	     *
	     * @method find
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the results when
	     * the query completes.
	     */
	  }, {
	    key: 'find',
	    value: function find(options) {
	      var _this = this;

	      options = options || {};

	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }

	      var controller = _CoreManager2['default'].getQueryController();

	      return controller.find(this.className, this.toJSON(), findOptions).then(function (response) {
	        return response.results.map(function (data) {
	          // In cases of relations, the server may send back a className
	          // on the top level of the payload
	          var override = response.className || _this.className;
	          if (!data.className) {
	            data.className = override;
	          }
	          return _ParseObject2['default'].fromJSON(data, true);
	        });
	      })._thenRunCallbacks(options);
	    }

	    /**
	     * Counts the number of objects that match this query.
	     * Either options.success or options.error is called when the count
	     * completes.
	     *
	     * @method count
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the count completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the count when
	     * the query completes.
	     */
	  }, {
	    key: 'count',
	    value: function count(options) {
	      options = options || {};

	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }

	      var controller = _CoreManager2['default'].getQueryController();

	      var params = this.toJSON();
	      params.limit = 0;
	      params.count = 1;

	      return controller.find(this.className, params, findOptions).then(function (result) {
	        return result.count;
	      })._thenRunCallbacks(options);
	    }

	    /**
	     * Retrieves at most one Parse.Object that satisfies this query.
	     *
	     * Either options.success or options.error is called when it completes.
	     * success is passed the object if there is one. otherwise, undefined.
	     *
	     * @method first
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the object when
	     * the query completes.
	     */
	  }, {
	    key: 'first',
	    value: function first(options) {
	      var _this2 = this;

	      options = options || {};

	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }

	      var controller = _CoreManager2['default'].getQueryController();

	      var params = this.toJSON();
	      params.limit = 1;

	      return controller.find(this.className, params, findOptions).then(function (response) {
	        var objects = response.results;
	        if (!objects[0]) {
	          return undefined;
	        }
	        if (!objects[0].className) {
	          objects[0].className = _this2.className;
	        }
	        return _ParseObject2['default'].fromJSON(objects[0], true);
	      })._thenRunCallbacks(options);
	    }

	    /**
	     * Iterates over each result of a query, calling a callback for each one. If
	     * the callback returns a promise, the iteration will not continue until
	     * that promise has been fulfilled. If the callback returns a rejected
	     * promise, then iteration will stop with that error. The items are
	     * processed in an unspecified order. The query may not have any sort order,
	     * and may not use limit or skip.
	     * @method each
	     * @param {Function} callback Callback that will be called with each result
	     *     of the query.
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the iteration completes successfully.
	     *   <li>error: Function to call when the iteration fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that will be fulfilled once the
	     *     iteration has completed.
	     */
	  }, {
	    key: 'each',
	    value: function each(callback, options) {
	      options = options || {};

	      if (this._order || this._skip || this._limit >= 0) {
	        return _ParsePromise2['default'].error('Cannot iterate on a query with sort, skip, or limit.')._thenRunCallbacks(options);
	      }

	      var promise = new _ParsePromise2['default']();

	      var query = new ParseQuery(this.className);
	      // We can override the batch size from the options.
	      // This is undocumented, but useful for testing.
	      query._limit = options.batchSize || 100;
	      query._include = this._include.map(function (i) {
	        return i;
	      });
	      if (this._select) {
	        query._select = this._select.map(function (s) {
	          return s;
	        });
	      }

	      query._where = {};
	      for (var attr in this._where) {
	        var val = this._where[attr];
	        if (Array.isArray(val)) {
	          query._where[attr] = val.map(function (v) {
	            return v;
	          });
	        } else if (val && typeof val === 'object') {
	          var conditionMap = {};
	          query._where[attr] = conditionMap;
	          for (var cond in val) {
	            conditionMap[cond] = val[cond];
	          }
	        } else {
	          query._where[attr] = val;
	        }
	      }

	      query.ascending('objectId');

	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }

	      var finished = false;
	      return _ParsePromise2['default']._continueWhile(function () {
	        return !finished;
	      }, function () {
	        return query.find(findOptions).then(function (results) {
	          var callbacksDone = _ParsePromise2['default'].as();
	          results.forEach(function (result) {
	            callbacksDone = callbacksDone.then(function () {
	              return callback(result);
	            });
	          });

	          return callbacksDone.then(function () {
	            if (results.length >= query._limit) {
	              query.greaterThan('objectId', results[results.length - 1].id);
	            } else {
	              finished = true;
	            }
	          });
	        });
	      })._thenRunCallbacks(options);
	    }

	    /** Query Conditions **/

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be equal to the provided value.
	     * @method equalTo
	     * @param {String} key The key to check.
	     * @param value The value that the Parse.Object must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'equalTo',
	    value: function equalTo(key, value) {
	      if (typeof value === 'undefined') {
	        return this.doesNotExist(key);
	      }

	      this._where[key] = (0, _encode2['default'])(value, false, true);
	      return this;
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be not equal to the provided value.
	     * @method notEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that must not be equalled.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'notEqualTo',
	    value: function notEqualTo(key, value) {
	      return this._addCondition(key, '$ne', value);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be less than the provided value.
	     * @method lessThan
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'lessThan',
	    value: function lessThan(key, value) {
	      return this._addCondition(key, '$lt', value);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be greater than the provided value.
	     * @method greaterThan
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'greaterThan',
	    value: function greaterThan(key, value) {
	      return this._addCondition(key, '$gt', value);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be less than or equal to the provided value.
	     * @method lessThanOrEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'lessThanOrEqualTo',
	    value: function lessThanOrEqualTo(key, value) {
	      return this._addCondition(key, '$lte', value);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be greater than or equal to the provided value.
	     * @method greaterThanOrEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'greaterThanOrEqualTo',
	    value: function greaterThanOrEqualTo(key, value) {
	      return this._addCondition(key, '$gte', value);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be contained in the provided list of values.
	     * @method containedIn
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'containedIn',
	    value: function containedIn(key, value) {
	      return this._addCondition(key, '$in', value);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * not be contained in the provided list of values.
	     * @method notContainedIn
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'notContainedIn',
	    value: function notContainedIn(key, value) {
	      return this._addCondition(key, '$nin', value);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * contain each one of the provided list of values.
	     * @method containsAll
	     * @param {String} key The key to check.  This key's value must be an array.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'containsAll',
	    value: function containsAll(key, values) {
	      return this._addCondition(key, '$all', values);
	    }

	    /**
	     * Adds a constraint for finding objects that contain the given key.
	     * @method exists
	     * @param {String} key The key that should exist.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'exists',
	    value: function exists(key) {
	      return this._addCondition(key, '$exists', true);
	    }

	    /**
	     * Adds a constraint for finding objects that do not contain a given key.
	     * @method doesNotExist
	     * @param {String} key The key that should not exist
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'doesNotExist',
	    value: function doesNotExist(key) {
	      return this._addCondition(key, '$exists', false);
	    }

	    /**
	     * Adds a regular expression constraint for finding string values that match
	     * the provided regular expression.
	     * This may be slow for large datasets.
	     * @method matches
	     * @param {String} key The key that the string to match is stored in.
	     * @param {RegExp} regex The regular expression pattern to match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'matches',
	    value: function matches(key, regex, modifiers) {
	      this._addCondition(key, '$regex', regex);
	      if (!modifiers) {
	        modifiers = '';
	      }
	      if (regex.ignoreCase) {
	        modifiers += 'i';
	      }
	      if (regex.multiline) {
	        modifiers += 'm';
	      }
	      if (modifiers.length) {
	        this._addCondition(key, '$options', modifiers);
	      }
	      return this;
	    }

	    /**
	     * Adds a constraint that requires that a key's value matches a Parse.Query
	     * constraint.
	     * @method matchesQuery
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'matchesQuery',
	    value: function matchesQuery(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$inQuery', queryJSON);
	    }

	    /**
	     * Adds a constraint that requires that a key's value not matches a
	     * Parse.Query constraint.
	     * @method doesNotMatchQuery
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'doesNotMatchQuery',
	    value: function doesNotMatchQuery(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$notInQuery', queryJSON);
	    }

	    /**
	     * Adds a constraint that requires that a key's value matches a value in
	     * an object returned by a different Parse.Query.
	     * @method matchesKeyInQuery
	     * @param {String} key The key that contains the value that is being
	     *                     matched.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'matchesKeyInQuery',
	    value: function matchesKeyInQuery(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$select', {
	        key: queryKey,
	        query: queryJSON
	      });
	    }

	    /**
	     * Adds a constraint that requires that a key's value not match a value in
	     * an object returned by a different Parse.Query.
	     * @method doesNotMatchKeyInQuery
	     * @param {String} key The key that contains the value that is being
	     *                     excluded.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'doesNotMatchKeyInQuery',
	    value: function doesNotMatchKeyInQuery(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$dontSelect', {
	        key: queryKey,
	        query: queryJSON
	      });
	    }

	    /**
	     * Adds a constraint for finding string values that contain a provided
	     * string.  This may be slow for large datasets.
	     * @method contains
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} substring The substring that the value must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'contains',
	    value: function contains(key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', quote(value));
	    }

	    /**
	     * Adds a constraint for finding string values that start with a provided
	     * string.  This query will use the backend index, so it will be fast even
	     * for large datasets.
	     * @method startsWith
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} prefix The substring that the value must start with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'startsWith',
	    value: function startsWith(key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', '^' + quote(value));
	    }

	    /**
	     * Adds a constraint for finding string values that end with a provided
	     * string.  This will be slow for large datasets.
	     * @method endsWith
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} suffix The substring that the value must end with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'endsWith',
	    value: function endsWith(key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', quote(value) + '$');
	    }

	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given.
	     * @method near
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'near',
	    value: function near(key, point) {
	      if (!(point instanceof _ParseGeoPoint2['default'])) {
	        // Try to cast it as a GeoPoint
	        point = new _ParseGeoPoint2['default'](point);
	      }
	      return this._addCondition(key, '$nearSphere', point);
	    }

	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * @method withinRadians
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in radians) of results to
	     *   return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinRadians',
	    value: function withinRadians(key, point, distance) {
	      this.near(key, point);
	      return this._addCondition(key, '$maxDistance', distance);
	    }

	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 3958.8 miles.
	     * @method withinMiles
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in miles) of results to
	     *     return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinMiles',
	    value: function withinMiles(key, point, distance) {
	      return this.withinRadians(key, point, distance / 3958.8);
	    }

	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 6371.0 kilometers.
	     * @method withinKilometers
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in kilometers) of results
	     *     to return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinKilometers',
	    value: function withinKilometers(key, point, distance) {
	      return this.withinRadians(key, point, distance / 6371.0);
	    }

	    /**
	     * Adds a constraint to the query that requires a particular key's
	     * coordinates be contained within a given rectangular geographic bounding
	     * box.
	     * @method withinGeoBox
	     * @param {String} key The key to be constrained.
	     * @param {Parse.GeoPoint} southwest
	     *     The lower-left inclusive corner of the box.
	     * @param {Parse.GeoPoint} northeast
	     *     The upper-right inclusive corner of the box.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinGeoBox',
	    value: function withinGeoBox(key, southwest, northeast) {
	      if (!(southwest instanceof _ParseGeoPoint2['default'])) {
	        southwest = new _ParseGeoPoint2['default'](southwest);
	      }
	      if (!(northeast instanceof _ParseGeoPoint2['default'])) {
	        northeast = new _ParseGeoPoint2['default'](northeast);
	      }
	      this._addCondition(key, '$within', { '$box': [southwest, northeast] });
	      return this;
	    }

	    /** Query Orderings **/

	    /**
	     * Sorts the results in ascending order by the given key.
	     *
	     * @method ascending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'ascending',
	    value: function ascending() {
	      this._order = [];

	      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
	        keys[_key] = arguments[_key];
	      }

	      return this.addAscending.apply(this, keys);
	    }

	    /**
	     * Sorts the results in ascending order by the given key,
	     * but can also add secondary sort descriptors without overwriting _order.
	     *
	     * @method addAscending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'addAscending',
	    value: function addAscending() {
	      var _this3 = this;

	      if (!this._order) {
	        this._order = [];
	      }

	      for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        keys[_key2] = arguments[_key2];
	      }

	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        _this3._order = _this3._order.concat(key.replace(/\s/g, '').split(','));
	      });

	      return this;
	    }

	    /**
	     * Sorts the results in descending order by the given key.
	     *
	     * @method descending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'descending',
	    value: function descending() {
	      this._order = [];

	      for (var _len3 = arguments.length, keys = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        keys[_key3] = arguments[_key3];
	      }

	      return this.addDescending.apply(this, keys);
	    }

	    /**
	     * Sorts the results in descending order by the given key,
	     * but can also add secondary sort descriptors without overwriting _order.
	     *
	     * @method addDescending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'addDescending',
	    value: function addDescending() {
	      var _this4 = this;

	      if (!this._order) {
	        this._order = [];
	      }

	      for (var _len4 = arguments.length, keys = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        keys[_key4] = arguments[_key4];
	      }

	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        _this4._order = _this4._order.concat(key.replace(/\s/g, '').split(',').map(function (k) {
	          return '-' + k;
	        }));
	      });

	      return this;
	    }

	    /** Query Options **/

	    /**
	     * Sets the number of results to skip before returning any results.
	     * This is useful for pagination.
	     * Default is to skip zero results.
	     * @method skip
	     * @param {Number} n the number of results to skip.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'skip',
	    value: function skip(n) {
	      if (typeof n !== 'number' || n < 0) {
	        throw new Error('You can only skip by a positive number');
	      }
	      this._skip = n;
	      return this;
	    }

	    /**
	     * Sets the limit of the number of results to return. The default limit is
	     * 100, with a maximum of 1000 results being returned at a time.
	     * @method limit
	     * @param {Number} n the number of results to limit to.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'limit',
	    value: function limit(n) {
	      if (typeof n !== 'number') {
	        throw new Error('You can only set the limit to a numeric value');
	      }
	      this._limit = n;
	      return this;
	    }

	    /**
	     * Includes nested Parse.Objects for the provided key.  You can use dot
	     * notation to specify which fields in the included object are also fetched.
	     * @method include
	     * @param {String} key The name of the key to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'include',
	    value: function include() {
	      var _this5 = this;

	      for (var _len5 = arguments.length, keys = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        keys[_key5] = arguments[_key5];
	      }

	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          _this5._include = _this5._include.concat(key);
	        } else {
	          _this5._include.push(key);
	        }
	      });
	      return this;
	    }

	    /**
	     * Restricts the fields of the returned Parse.Objects to include only the
	     * provided keys.  If this is called multiple times, then all of the keys
	     * specified in each of the calls will be included.
	     * @method select
	     * @param {Array} keys The names of the keys to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'select',
	    value: function select() {
	      var _this6 = this;

	      if (!this._select) {
	        this._select = [];
	      }

	      for (var _len6 = arguments.length, keys = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        keys[_key6] = arguments[_key6];
	      }

	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          _this6._select = _this6._select.concat(key);
	        } else {
	          _this6._select.push(key);
	        }
	      });
	      return this;
	    }

	    /**
	     * Subscribe this query to get liveQuery updates
	     * @method subscribe
	     * @return {LiveQuerySubscription} Returns the liveQuerySubscription, it's an event emitter
	     * which can be used to get liveQuery updates.
	     */
	  }, {
	    key: 'subscribe',
	    value: function subscribe() {
	      var controller = _CoreManager2['default'].getLiveQueryController();
	      return controller.subscribe(this);
	    }

	    /**
	     * Constructs a Parse.Query that is the OR of the passed in queries.  For
	     * example:
	     * <pre>var compoundQuery = Parse.Query.or(query1, query2, query3);</pre>
	     *
	     * will create a compoundQuery that is an or of the query1, query2, and
	     * query3.
	     * @method or
	     * @param {...Parse.Query} var_args The list of queries to OR.
	     * @static
	     * @return {Parse.Query} The query that is the OR of the passed in queries.
	     */
	  }], [{
	    key: 'or',
	    value: function or() {
	      var className = null;

	      for (var _len7 = arguments.length, queries = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        queries[_key7] = arguments[_key7];
	      }

	      queries.forEach(function (q) {
	        if (!className) {
	          className = q.className;
	        }

	        if (className !== q.className) {
	          throw new Error('All queries must be for the same class.');
	        }
	      });

	      var query = new ParseQuery(className);
	      query._orQuery(queries);
	      return query;
	    }
	  }]);

	  return ParseQuery;
	})();

	exports['default'] = ParseQuery;

	_CoreManager2['default'].setQueryController({
	  find: function find(className, params, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();

	    return RESTController.request('GET', 'classes/' + className, params, options);
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$keys = __webpack_require__(14)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = equals;

	var _ParseACL = __webpack_require__(8);

	var _ParseACL2 = _interopRequireDefault(_ParseACL);

	var _ParseFile = __webpack_require__(51);

	var _ParseFile2 = _interopRequireDefault(_ParseFile);

	var _ParseGeoPoint = __webpack_require__(82);

	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	function equals(a, b) {
	  if (typeof a !== typeof b) {
	    return false;
	  }

	  if (!a || typeof a !== 'object') {
	    // a is a primitive
	    return a === b;
	  }

	  if (Array.isArray(a) || Array.isArray(b)) {
	    if (!Array.isArray(a) || !Array.isArray(b)) {
	      return false;
	    }
	    if (a.length !== b.length) {
	      return false;
	    }
	    for (var i = a.length; i--;) {
	      if (!equals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }

	  if (a instanceof _ParseACL2['default'] || a instanceof _ParseFile2['default'] || a instanceof _ParseGeoPoint2['default'] || a instanceof _ParseObject2['default']) {
	    return a.equals(b);
	  }

	  if (_Object$keys(a).length !== _Object$keys(b).length) {
	    return false;
	  }
	  for (var k in a) {
	    if (!equals(a[k], b[k])) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = escape;

	function escape(str) {
	  return str.replace(/[&<>\/'"]/g, function (char) {
	    return ({
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '/': '&#x2F;',
	      '\'': '&#x27;',
	      '"': '&quot;'
	    })[char];
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = parseDate;

	function parseDate(iso8601) {
	  var regexp = new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})' + 'T' + '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})' + '(.([0-9]+))?' + 'Z$');
	  var match = regexp.exec(iso8601);
	  if (!match) {
	    return null;
	  }

	  var year = match[1] || 0;
	  var month = (match[2] || 1) - 1;
	  var day = match[3] || 0;
	  var hour = match[4] || 0;
	  var minute = match[5] || 0;
	  var second = match[6] || 0;
	  var milli = match[8] || 0;

	  return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
	}

	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireWildcard = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getState = getState;
	exports.initializeState = initializeState;
	exports.removeState = removeState;
	exports.getServerData = getServerData;
	exports.setServerData = setServerData;
	exports.getPendingOps = getPendingOps;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.getObjectCache = getObjectCache;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	exports.enqueueTask = enqueueTask;
	exports.clearAllState = clearAllState;
	exports.duplicateState = duplicateState;

	var _ObjectStateMutations = __webpack_require__(89);

	var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);

	var objectState = {};

	function getState(obj) {
	  var classData = objectState[obj.className];
	  if (classData) {
	    return classData[obj.id] || null;
	  }
	  return null;
	}

	function initializeState(obj, initial) {
	  var state = getState(obj);
	  if (state) {
	    return state;
	  }
	  if (!objectState[obj.className]) {
	    objectState[obj.className] = {};
	  }
	  if (!initial) {
	    initial = ObjectStateMutations.defaultState();
	  }
	  state = objectState[obj.className][obj.id] = initial;
	  return state;
	}

	function removeState(obj) {
	  var state = getState(obj);
	  if (state === null) {
	    return null;
	  }
	  delete objectState[obj.className][obj.id];
	  return state;
	}

	function getServerData(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.serverData;
	  }
	  return {};
	}

	function setServerData(obj, attributes) {
	  var serverData = initializeState(obj).serverData;
	  ObjectStateMutations.setServerData(serverData, attributes);
	}

	function getPendingOps(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.pendingOps;
	  }
	  return [{}];
	}

	function setPendingOp(obj, attr, op) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
	}

	function pushPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.pushPendingState(pendingOps);
	}

	function popPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  return ObjectStateMutations.popPendingState(pendingOps);
	}

	function mergeFirstPendingState(obj) {
	  var pendingOps = getPendingOps(obj);
	  ObjectStateMutations.mergeFirstPendingState(pendingOps);
	}

	function getObjectCache(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.objectCache;
	  }
	  return {};
	}

	function estimateAttribute(obj, attr) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
	}

	function estimateAttributes(obj) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
	}

	function commitServerChanges(obj, changes) {
	  var state = initializeState(obj);
	  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
	}

	function enqueueTask(obj, task) {
	  var state = initializeState(obj);
	  return state.tasks.enqueue(task);
	}

	function clearAllState() {
	  objectState = {};
	}

	function duplicateState(source, dest) {
	  dest.id = source.id;
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.defaultState = defaultState;
	exports.setServerData = setServerData;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;

	var _encode = __webpack_require__(81);

	var _encode2 = _interopRequireDefault(_encode);

	var _ParseFile = __webpack_require__(51);

	var _ParseFile2 = _interopRequireDefault(_ParseFile);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _ParseRelation = __webpack_require__(78);

	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);

	var _TaskQueue = __webpack_require__(90);

	var _TaskQueue2 = _interopRequireDefault(_TaskQueue);

	var _ParseOp = __webpack_require__(79);

	function defaultState() {
	  return {
	    serverData: {},
	    pendingOps: [{}],
	    objectCache: {},
	    tasks: new _TaskQueue2['default'](),
	    existed: false
	  };
	}

	function setServerData(serverData, attributes) {
	  for (var _attr in attributes) {
	    if (typeof attributes[_attr] !== 'undefined') {
	      serverData[_attr] = attributes[_attr];
	    } else {
	      delete serverData[_attr];
	    }
	  }
	}

	function setPendingOp(pendingOps, attr, op) {
	  var last = pendingOps.length - 1;
	  if (op) {
	    pendingOps[last][attr] = op;
	  } else {
	    delete pendingOps[last][attr];
	  }
	}

	function pushPendingState(pendingOps) {
	  pendingOps.push({});
	}

	function popPendingState(pendingOps) {
	  var first = pendingOps.shift();
	  if (!pendingOps.length) {
	    pendingOps[0] = {};
	  }
	  return first;
	}

	function mergeFirstPendingState(pendingOps) {
	  var first = popPendingState(pendingOps);
	  var next = pendingOps[0];
	  for (var _attr2 in first) {
	    if (next[_attr2] && first[_attr2]) {
	      var merged = next[_attr2].mergeWith(first[_attr2]);
	      if (merged) {
	        next[_attr2] = merged;
	      }
	    } else {
	      next[_attr2] = first[_attr2];
	    }
	  }
	}

	function estimateAttribute(serverData, pendingOps, className, id, attr) {
	  var value = serverData[attr];
	  for (var i = 0; i < pendingOps.length; i++) {
	    if (pendingOps[i][attr]) {
	      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
	        if (id) {
	          value = pendingOps[i][attr].applyTo(value, { className: className, id: id }, attr);
	        }
	      } else {
	        value = pendingOps[i][attr].applyTo(value);
	      }
	    }
	  }
	  return value;
	}

	function estimateAttributes(serverData, pendingOps, className, id) {
	  var data = {};
	  var attr = undefined;
	  for (attr in serverData) {
	    data[attr] = serverData[attr];
	  }
	  for (var i = 0; i < pendingOps.length; i++) {
	    for (attr in pendingOps[i]) {
	      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
	        if (id) {
	          data[attr] = pendingOps[i][attr].applyTo(data[attr], { className: className, id: id }, attr);
	        }
	      } else {
	        data[attr] = pendingOps[i][attr].applyTo(data[attr]);
	      }
	    }
	  }
	  return data;
	}

	function commitServerChanges(serverData, objectCache, changes) {
	  for (var _attr3 in changes) {
	    var val = changes[_attr3];
	    serverData[_attr3] = val;
	    if (val && typeof val === 'object' && !(val instanceof _ParseObject2['default']) && !(val instanceof _ParseFile2['default']) && !(val instanceof _ParseRelation2['default'])) {
	      var json = (0, _encode2['default'])(val, false, true);
	      objectCache[_attr3] = JSON.stringify(json);
	    }
	  }
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	module.exports = (function () {
	  function TaskQueue() {
	    _classCallCheck(this, TaskQueue);

	    this.queue = [];
	  }

	  _createClass(TaskQueue, [{
	    key: 'enqueue',
	    value: function enqueue(task) {
	      var _this = this;

	      var taskComplete = new _ParsePromise2['default']();
	      this.queue.push({
	        task: task,
	        _completion: taskComplete
	      });
	      if (this.queue.length === 1) {
	        task().then(function () {
	          _this._dequeue();
	          taskComplete.resolve();
	        }, function (error) {
	          _this._dequeue();
	          taskComplete.reject(error);
	        });
	      }
	      return taskComplete;
	    }
	  }, {
	    key: '_dequeue',
	    value: function _dequeue() {
	      var _this2 = this;

	      this.queue.shift();
	      if (this.queue.length) {
	        var next = this.queue[0];
	        next.task().then(function () {
	          _this2._dequeue();
	          next._completion.resolve();
	        }, function (error) {
	          _this2._dequeue();
	          next._completion.reject(error);
	        });
	      }
	    }
	  }]);

	  return TaskQueue;
	})();

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _WeakMap = __webpack_require__(92)['default'];

	var _interopRequireWildcard = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getState = getState;
	exports.initializeState = initializeState;
	exports.removeState = removeState;
	exports.getServerData = getServerData;
	exports.setServerData = setServerData;
	exports.getPendingOps = getPendingOps;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.getObjectCache = getObjectCache;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	exports.enqueueTask = enqueueTask;
	exports.duplicateState = duplicateState;
	exports.clearAllState = clearAllState;

	var _ObjectStateMutations = __webpack_require__(89);

	var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);

	var _TaskQueue = __webpack_require__(90);

	var _TaskQueue2 = _interopRequireDefault(_TaskQueue);

	var objectState = new _WeakMap();

	function getState(obj) {
	  var classData = objectState.get(obj);
	  return classData || null;
	}

	function initializeState(obj, initial) {
	  var state = getState(obj);
	  if (state) {
	    return state;
	  }
	  if (!initial) {
	    initial = {
	      serverData: {},
	      pendingOps: [{}],
	      objectCache: {},
	      tasks: new _TaskQueue2['default'](),
	      existed: false
	    };
	  }
	  state = initial;
	  objectState.set(obj, state);
	  return state;
	}

	function removeState(obj) {
	  var state = getState(obj);
	  if (state === null) {
	    return null;
	  }
	  objectState['delete'](obj);
	  return state;
	}

	function getServerData(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.serverData;
	  }
	  return {};
	}

	function setServerData(obj, attributes) {
	  var serverData = initializeState(obj).serverData;
	  ObjectStateMutations.setServerData(serverData, attributes);
	}

	function getPendingOps(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.pendingOps;
	  }
	  return [{}];
	}

	function setPendingOp(obj, attr, op) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
	}

	function pushPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.pushPendingState(pendingOps);
	}

	function popPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  return ObjectStateMutations.popPendingState(pendingOps);
	}

	function mergeFirstPendingState(obj) {
	  var pendingOps = getPendingOps(obj);
	  ObjectStateMutations.mergeFirstPendingState(pendingOps);
	}

	function getObjectCache(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.objectCache;
	  }
	  return {};
	}

	function estimateAttribute(obj, attr) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
	}

	function estimateAttributes(obj) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
	}

	function commitServerChanges(obj, changes) {
	  var state = initializeState(obj);
	  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
	}

	function enqueueTask(obj, task) {
	  var state = initializeState(obj);
	  return state.tasks.enqueue(task);
	}

	function duplicateState(source, dest) {
	  var oldState = initializeState(source);
	  var newState = initializeState(dest);
	  for (var key in oldState.serverData) {
	    newState.serverData[key] = oldState.serverData[key];
	  }
	  for (var index = 0; index < oldState.pendingOps.length; index++) {
	    for (var key in oldState.pendingOps[index]) {
	      newState.pendingOps[index][key] = oldState.pendingOps[index][key];
	    }
	  }
	  for (var key in oldState.objectCache) {
	    newState.objectCache[key] = oldState.objectCache[key];
	  }
	  newState.existed = oldState.existed;
	}

	function clearAllState() {
	  objectState = new _WeakMap();
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	__webpack_require__(55);
	__webpack_require__(95);
	module.exports = __webpack_require__(22).WeakMap;

/***/ },
/* 94 */
/***/ function(module, exports) {

	

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(12)
	  , redefine     = __webpack_require__(62)
	  , weak         = __webpack_require__(96)
	  , isObject     = __webpack_require__(41)
	  , has          = __webpack_require__(66)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(106)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(63)
	  , redefineAll       = __webpack_require__(97)
	  , anObject          = __webpack_require__(42)
	  , isObject          = __webpack_require__(41)
	  , strictNew         = __webpack_require__(98)
	  , forOf             = __webpack_require__(99)
	  , createArrayMethod = __webpack_require__(103)
	  , $has              = __webpack_require__(66)
	  , WEAK              = __webpack_require__(71)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(62);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(23)
	  , call        = __webpack_require__(100)
	  , isArrayIter = __webpack_require__(101)
	  , anObject    = __webpack_require__(42)
	  , toLength    = __webpack_require__(102)
	  , getIterFn   = __webpack_require__(76);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(42);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(59)
	  , ITERATOR   = __webpack_require__(69)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(74)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(23)
	  , IObject  = __webpack_require__(32)
	  , toObject = __webpack_require__(17)
	  , toLength = __webpack_require__(102)
	  , asc      = __webpack_require__(104);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(41)
	  , isArray  = __webpack_require__(105)
	  , SPECIES  = __webpack_require__(69)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(33);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(12)
	  , global         = __webpack_require__(21)
	  , $export        = __webpack_require__(20)
	  , fails          = __webpack_require__(25)
	  , hide           = __webpack_require__(63)
	  , redefineAll    = __webpack_require__(97)
	  , forOf          = __webpack_require__(99)
	  , strictNew      = __webpack_require__(98)
	  , isObject       = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(68)
	  , DESCRIPTORS    = __webpack_require__(65);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = unsavedChildren;

	var _ParseFile = __webpack_require__(51);

	var _ParseFile2 = _interopRequireDefault(_ParseFile);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _ParseRelation = __webpack_require__(78);

	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);

	/**
	 * Return an array of unsaved children, which are either Parse Objects or Files.
	 * If it encounters any dirty Objects without Ids, it will throw an exception.
	 */

	function unsavedChildren(obj, allowDeepUnsaved) {
	  var encountered = {
	    objects: {},
	    files: []
	  };
	  var identifier = obj.className + ':' + obj._getId();
	  encountered.objects[identifier] = obj.dirty() ? obj : true;
	  var attributes = obj.attributes;
	  for (var attr in attributes) {
	    if (typeof attributes[attr] === 'object') {
	      traverse(attributes[attr], encountered, false, !!allowDeepUnsaved);
	    }
	  }
	  var unsaved = [];
	  for (var id in encountered.objects) {
	    if (id !== identifier && encountered.objects[id] !== true) {
	      unsaved.push(encountered.objects[id]);
	    }
	  }
	  return unsaved.concat(encountered.files);
	}

	function traverse(obj, encountered, shouldThrow, allowDeepUnsaved) {
	  if (obj instanceof _ParseObject2['default']) {
	    if (!obj.id && shouldThrow) {
	      throw new Error('Cannot create a pointer to an unsaved Object.');
	    }
	    var identifier = obj.className + ':' + obj._getId();
	    if (!encountered.objects[identifier]) {
	      encountered.objects[identifier] = obj.dirty() ? obj : true;
	      var attributes = obj.attributes;
	      for (var attr in attributes) {
	        if (typeof attributes[attr] === 'object') {
	          traverse(attributes[attr], encountered, !allowDeepUnsaved, allowDeepUnsaved);
	        }
	      }
	    }
	    return;
	  }
	  if (obj instanceof _ParseFile2['default']) {
	    if (!obj.url() && encountered.files.indexOf(obj) < 0) {
	      encountered.files.push(obj);
	    }
	    return;
	  }
	  if (obj instanceof _ParseRelation2['default']) {
	    return;
	  }
	  if (Array.isArray(obj)) {
	    obj.forEach(function (el) {
	      if (typeof el === 'object') {
	        traverse(el, encountered, shouldThrow, allowDeepUnsaved);
	      }
	    });
	  }
	  for (var k in obj) {
	    if (typeof obj[k] === 'object') {
	      traverse(obj[k], encountered, shouldThrow, allowDeepUnsaved);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _get = __webpack_require__(27)['default'];

	var _inherits = __webpack_require__(34)['default'];

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _Object$defineProperty = __webpack_require__(10)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _isRevocableSession = __webpack_require__(109);

	var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);

	var _ParseError = __webpack_require__(43);

	var _ParseError2 = _interopRequireDefault(_ParseError);

	var _ParseObject2 = __webpack_require__(44);

	var _ParseObject3 = _interopRequireDefault(_ParseObject2);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _ParseSession = __webpack_require__(110);

	var _ParseSession2 = _interopRequireDefault(_ParseSession);

	var _Storage = __webpack_require__(111);

	var _Storage2 = _interopRequireDefault(_Storage);

	var CURRENT_USER_KEY = 'currentUser';
	var canUseCurrentUser = !_CoreManager2['default'].get('IS_NODE');
	var currentUserCacheMatchesDisk = false;
	var currentUserCache = null;

	var authProviders = {};

	/**
	 * @class Parse.User
	 * @constructor
	 *
	 * <p>A Parse.User object is a local representation of a user persisted to the
	 * Parse cloud. This class is a subclass of a Parse.Object, and retains the
	 * same functionality of a Parse.Object, but also extends it with various
	 * user specific methods, like authentication, signing up, and validation of
	 * uniqueness.</p>
	 */

	var ParseUser = (function (_ParseObject) {
	  _inherits(ParseUser, _ParseObject);

	  function ParseUser(attributes) {
	    _classCallCheck(this, ParseUser);

	    _get(Object.getPrototypeOf(ParseUser.prototype), 'constructor', this).call(this, '_User');
	    if (attributes && typeof attributes === 'object') {
	      if (!this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Parse User');
	      }
	    }
	  }

	  /**
	   * Request a revocable session token to replace the older style of token.
	   * @method _upgradeToRevocableSession
	   * @param {Object} options A Backbone-style options object.
	   * @return {Parse.Promise} A promise that is resolved when the replacement
	   *   token has been fetched.
	   */

	  _createClass(ParseUser, [{
	    key: '_upgradeToRevocableSession',
	    value: function _upgradeToRevocableSession(options) {
	      options = options || {};

	      var upgradeOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        upgradeOptions.useMasterKey = options.useMasterKey;
	      }

	      var controller = _CoreManager2['default'].getUserController();
	      return controller.upgradeToRevocableSession(this, upgradeOptions)._thenRunCallbacks(options);
	    }

	    /**
	     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
	     * call linkWith on the user (even if it doesn't exist yet on the server).
	     * @method _linkWith
	     */
	  }, {
	    key: '_linkWith',
	    value: function _linkWith(provider, options) {
	      var _this = this;

	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      if (options && options.hasOwnProperty('authData')) {
	        var authData = this.get('authData') || {};
	        if (typeof authData !== 'object') {
	          throw new Error('Invalid type: authData field should be an object');
	        }
	        authData[authType] = options.authData;

	        var controller = _CoreManager2['default'].getUserController();
	        return controller.linkWith(this, authData)._thenRunCallbacks(options, this);
	      } else {
	        var promise = new _ParsePromise2['default']();
	        provider.authenticate({
	          success: function success(provider, result) {
	            var opts = {};
	            opts.authData = result;
	            if (options.success) {
	              opts.success = options.success;
	            }
	            if (options.error) {
	              opts.error = options.error;
	            }
	            _this._linkWith(provider, opts).then(function () {
	              promise.resolve(_this);
	            }, function (error) {
	              promise.reject(error);
	            });
	          },
	          error: function error(provider, _error) {
	            if (options.error) {
	              options.error(_this, _error);
	            }
	            promise.reject(_error);
	          }
	        });
	        return promise;
	      }
	    }

	    /**
	     * Synchronizes auth data for a provider (e.g. puts the access token in the
	     * right place to be used by the Facebook SDK).
	     * @method _synchronizeAuthData
	     */
	  }, {
	    key: '_synchronizeAuthData',
	    value: function _synchronizeAuthData(provider) {
	      if (!this.isCurrent() || !provider) {
	        return;
	      }
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[authType];
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData');
	      if (!provider || !authData || typeof authData !== 'object') {
	        return;
	      }
	      var success = provider.restoreAuthentication(authData[authType]);
	      if (!success) {
	        this._unlinkFrom(provider);
	      }
	    }

	    /**
	     * Synchronizes authData for all providers.
	     * @method _synchronizeAllAuthData
	     */
	  }, {
	    key: '_synchronizeAllAuthData',
	    value: function _synchronizeAllAuthData() {
	      var authData = this.get('authData');
	      if (typeof authData !== 'object') {
	        return;
	      }

	      for (var key in authData) {
	        this._synchronizeAuthData(key);
	      }
	    }

	    /**
	     * Removes null values from authData (which exist temporarily for
	     * unlinking)
	     * @method _cleanupAuthData
	     */
	  }, {
	    key: '_cleanupAuthData',
	    value: function _cleanupAuthData() {
	      if (!this.isCurrent()) {
	        return;
	      }
	      var authData = this.get('authData');
	      if (typeof authData !== 'object') {
	        return;
	      }

	      for (var key in authData) {
	        if (!authData[key]) {
	          delete authData[key];
	        }
	      }
	    }

	    /**
	     * Unlinks a user from a service.
	     * @method _unlinkFrom
	     */
	  }, {
	    key: '_unlinkFrom',
	    value: function _unlinkFrom(provider, options) {
	      var _this2 = this;

	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      return this._linkWith(provider, { authData: null }).then(function () {
	        _this2._synchronizeAuthData(provider);
	        return _ParsePromise2['default'].as(_this2);
	      })._thenRunCallbacks(options);
	    }

	    /**
	     * Checks whether a user is linked to a service.
	     * @method _isLinked
	     */
	  }, {
	    key: '_isLinked',
	    value: function _isLinked(provider) {
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData') || {};
	      if (typeof authData !== 'object') {
	        return false;
	      }
	      return !!authData[authType];
	    }

	    /**
	     * Deauthenticates all providers.
	     * @method _logOutWithAll
	     */
	  }, {
	    key: '_logOutWithAll',
	    value: function _logOutWithAll() {
	      var authData = this.get('authData');
	      if (typeof authData !== 'object') {
	        return;
	      }

	      for (var key in authData) {
	        this._logOutWith(key);
	      }
	    }

	    /**
	     * Deauthenticates a single provider (e.g. removing access tokens from the
	     * Facebook SDK).
	     * @method _logOutWith
	     */
	  }, {
	    key: '_logOutWith',
	    value: function _logOutWith(provider) {
	      if (!this.isCurrent()) {
	        return;
	      }
	      if (typeof provider === 'string') {
	        provider = authProviders[provider];
	      }
	      if (provider && provider.deauthenticate) {
	        provider.deauthenticate();
	      }
	    }

	    /**
	     * Class instance method used to maintain specific keys when a fetch occurs.
	     * Used to ensure that the session token is not lost.
	     */
	  }, {
	    key: '_preserveFieldsOnFetch',
	    value: function _preserveFieldsOnFetch() {
	      return {
	        sessionToken: this.get('sessionToken')
	      };
	    }

	    /**
	     * Returns true if <code>current</code> would return this user.
	     * @method isCurrent
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isCurrent',
	    value: function isCurrent() {
	      var current = ParseUser.current();
	      return !!current && current.id === this.id;
	    }

	    /**
	     * Returns get("username").
	     * @method getUsername
	     * @return {String}
	     */
	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      var username = this.get('username');
	      if (username == null || typeof username === 'string') {
	        return username;
	      }
	      return '';
	    }

	    /**
	     * Calls set("username", username, options) and returns the result.
	     * @method setUsername
	     * @param {String} username
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'setUsername',
	    value: function setUsername(username) {
	      // Strip anonymity, even we do not support anonymous user in js SDK, we may
	      // encounter anonymous user created by android/iOS in cloud code.
	      var authData = this.get('authData');
	      if (authData && typeof authData === 'object' && authData.hasOwnProperty('anonymous')) {
	        // We need to set anonymous to null instead of deleting it in order to remove it from Parse.
	        authData.anonymous = null;
	      }
	      this.set('username', username);
	    }

	    /**
	     * Calls set("password", password, options) and returns the result.
	     * @method setPassword
	     * @param {String} password
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'setPassword',
	    value: function setPassword(password) {
	      this.set('password', password);
	    }

	    /**
	     * Returns get("email").
	     * @method getEmail
	     * @return {String}
	     */
	  }, {
	    key: 'getEmail',
	    value: function getEmail() {
	      var email = this.get('email');
	      if (email == null || typeof email === 'string') {
	        return email;
	      }
	      return '';
	    }

	    /**
	     * Calls set("email", email, options) and returns the result.
	     * @method setEmail
	     * @param {String} email
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'setEmail',
	    value: function setEmail(email) {
	      this.set('email', email);
	    }

	    /**
	     * Returns the session token for this user, if the user has been logged in,
	     * or if it is the result of a query with the master key. Otherwise, returns
	     * undefined.
	     * @method getSessionToken
	     * @return {String} the session token, or undefined
	     */
	  }, {
	    key: 'getSessionToken',
	    value: function getSessionToken() {
	      var token = this.get('sessionToken');
	      if (token == null || typeof token === 'string') {
	        return token;
	      }
	      return '';
	    }

	    /**
	     * Checks whether this user is the current user and has been authenticated.
	     * @method authenticated
	     * @return (Boolean) whether this user is the current user and is logged in.
	     */
	  }, {
	    key: 'authenticated',
	    value: function authenticated() {
	      var current = ParseUser.current();
	      return !!this.get('sessionToken') && !!current && current.id === this.id;
	    }

	    /**
	     * Signs up a new user. You should call this instead of save for
	     * new Parse.Users. This will create a new Parse.User on the server, and
	     * also persist the session on disk so that you can access the user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling signUp.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method signUp
	     * @param {Object} attrs Extra fields to set on the new user, or null.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled when the signup
	     *     finishes.
	     */
	  }, {
	    key: 'signUp',
	    value: function signUp(attrs, options) {
	      options = options || {};

	      var signupOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        signupOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('installationId')) {
	        signupOptions.installationId = options.installationId;
	      }

	      var controller = _CoreManager2['default'].getUserController();
	      return controller.signUp(this, attrs, signupOptions)._thenRunCallbacks(options, this);
	    }

	    /**
	     * Logs in a Parse.User. On success, this saves the session to disk,
	     * so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling logIn.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method logIn
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login is complete.
	     */
	  }, {
	    key: 'logIn',
	    value: function logIn(options) {
	      options = options || {};

	      var loginOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        loginOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('installationId')) {
	        loginOptions.installationId = options.installationId;
	      }

	      var controller = _CoreManager2['default'].getUserController();
	      return controller.logIn(this, loginOptions)._thenRunCallbacks(options, this);
	    }

	    /**
	     * Wrap the default save behavior with functionality to save to local
	     * storage if this is current user.
	     */
	  }, {
	    key: 'save',
	    value: function save() {
	      var _this3 = this;

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _get(Object.getPrototypeOf(ParseUser.prototype), 'save', this).apply(this, args).then(function () {
	        if (_this3.isCurrent()) {
	          return _CoreManager2['default'].getUserController().updateUserOnDisk(_this3);
	        }
	        return _this3;
	      });
	    }

	    /**
	     * Wrap the default destroy behavior with functionality that logs out
	     * the current user when it is destroyed
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this4 = this;

	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return _get(Object.getPrototypeOf(ParseUser.prototype), 'destroy', this).apply(this, args).then(function () {
	        if (_this4.isCurrent()) {
	          return _CoreManager2['default'].getUserController().removeUserFromDisk();
	        }
	        return _this4;
	      });
	    }

	    /**
	     * Wrap the default fetch behavior with functionality to save to local
	     * storage if this is current user.
	     */
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this5 = this;

	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return _get(Object.getPrototypeOf(ParseUser.prototype), 'fetch', this).apply(this, args).then(function () {
	        if (_this5.isCurrent()) {
	          return _CoreManager2['default'].getUserController().updateUserOnDisk(_this5);
	        }
	        return _this5;
	      });
	    }
	  }], [{
	    key: 'readOnlyAttributes',
	    value: function readOnlyAttributes() {
	      return ['sessionToken'];
	    }

	    /**
	     * Adds functionality to the existing Parse.User class
	     * @method extend
	     * @param {Object} protoProps A set of properties to add to the prototype
	     * @param {Object} classProps A set of static properties to add to the class
	     * @static
	     * @return {Class} The newly extended Parse.User class
	     */
	  }, {
	    key: 'extend',
	    value: function extend(protoProps, classProps) {
	      if (protoProps) {
	        for (var prop in protoProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseUser.prototype, prop, {
	              value: protoProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }

	      if (classProps) {
	        for (var prop in classProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseUser, prop, {
	              value: classProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }

	      return ParseUser;
	    }

	    /**
	     * Retrieves the currently logged in ParseUser with a valid session,
	     * either from memory or localStorage, if necessary.
	     * @method current
	     * @static
	     * @return {Parse.Object} The currently logged in Parse.User.
	     */
	  }, {
	    key: 'current',
	    value: function current() {
	      if (!canUseCurrentUser) {
	        return null;
	      }
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.currentUser();
	    }

	    /**
	     * Retrieves the currently logged in ParseUser from asynchronous Storage.
	     * @method currentAsync
	     * @static
	     * @return {Parse.Promise} A Promise that is resolved with the currently
	     *   logged in Parse User
	     */
	  }, {
	    key: 'currentAsync',
	    value: function currentAsync() {
	      if (!canUseCurrentUser) {
	        return _ParsePromise2['default'].as(null);
	      }
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.currentUserAsync();
	    }

	    /**
	     * Signs up a new user with a username (or email) and password.
	     * This will create a new Parse.User on the server, and also persist the
	     * session in localStorage so that you can access the user using
	     * {@link #current}.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method signUp
	     * @param {String} username The username (or email) to sign up with.
	     * @param {String} password The password to sign up with.
	     * @param {Object} attrs Extra fields to set on the new user.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the signup completes.
	     */
	  }, {
	    key: 'signUp',
	    value: function signUp(username, password, attrs, options) {
	      attrs = attrs || {};
	      attrs.username = username;
	      attrs.password = password;
	      var user = new ParseUser(attrs);
	      return user.signUp({}, options);
	    }

	    /**
	     * Logs in a user with a username (or email) and password. On success, this
	     * saves the session to disk, so you can retrieve the currently logged in
	     * user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method logIn
	     * @param {String} username The username (or email) to log in with.
	     * @param {String} password The password to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	  }, {
	    key: 'logIn',
	    value: function logIn(username, password, options) {
	      if (typeof username !== 'string') {
	        return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Username must be a string.'));
	      } else if (typeof password !== 'string') {
	        return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Password must be a string.'));
	      }
	      var user = new ParseUser();
	      user._finishFetch({ username: username, password: password });
	      return user.logIn(options);
	    }

	    /**
	     * Logs in a user with a session token. On success, this saves the session
	     * to disk, so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method become
	     * @param {String} sessionToken The sessionToken to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	  }, {
	    key: 'become',
	    value: function become(sessionToken, options) {
	      if (!canUseCurrentUser) {
	        throw new Error('It is not memory-safe to become a user in a server environment');
	      }
	      options = options || {};

	      var becomeOptions = {
	        sessionToken: sessionToken
	      };
	      if (options.hasOwnProperty('useMasterKey')) {
	        becomeOptions.useMasterKey = options.useMasterKey;
	      }

	      var controller = _CoreManager2['default'].getUserController();
	      return controller.become(becomeOptions)._thenRunCallbacks(options);
	    }
	  }, {
	    key: 'logInWith',
	    value: function logInWith(provider, options) {
	      return ParseUser._logInWith(provider, options);
	    }

	    /**
	     * Logs out the currently logged in user session. This will remove the
	     * session from disk, log out of linked services, and future calls to
	     * <code>current</code> will return <code>null</code>.
	     * @method logOut
	     * @static
	     * @return {Parse.Promise} A promise that is resolved when the session is
	     *   destroyed on the server.
	     */
	  }, {
	    key: 'logOut',
	    value: function logOut() {
	      if (!canUseCurrentUser) {
	        throw new Error('There is no current user user on a node.js server environment.');
	      }

	      var controller = _CoreManager2['default'].getUserController();
	      return controller.logOut();
	    }

	    /**
	     * Requests a password reset email to be sent to the specified email address
	     * associated with the user account. This email allows the user to securely
	     * reset their password on the Parse site.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method requestPasswordReset
	     * @param {String} email The email address associated with the user that
	     *     forgot their password.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     */
	  }, {
	    key: 'requestPasswordReset',
	    value: function requestPasswordReset(email, options) {
	      options = options || {};

	      var requestOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        requestOptions.useMasterKey = options.useMasterKey;
	      }

	      var controller = _CoreManager2['default'].getUserController();
	      return controller.requestPasswordReset(email, requestOptions)._thenRunCallbacks(options);
	    }

	    /**
	     * Allow someone to define a custom User class without className
	     * being rewritten to _User. The default behavior is to rewrite
	     * User to _User for legacy reasons. This allows developers to
	     * override that behavior.
	     *
	     * @method allowCustomUserClass
	     * @param {Boolean} isAllowed Whether or not to allow custom User class
	     * @static
	     */
	  }, {
	    key: 'allowCustomUserClass',
	    value: function allowCustomUserClass(isAllowed) {
	      _CoreManager2['default'].set('PERFORM_USER_REWRITE', !isAllowed);
	    }

	    /**
	     * Allows a legacy application to start using revocable sessions. If the
	     * current session token is not revocable, a request will be made for a new,
	     * revocable session.
	     * It is not necessary to call this method from cloud code unless you are
	     * handling user signup or login from the server side. In a cloud code call,
	     * this function will not attempt to upgrade the current token.
	     * @method enableRevocableSession
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is resolved when the process has
	     *   completed. If a replacement session token is requested, the promise
	     *   will be resolved after a new token has been fetched.
	     */
	  }, {
	    key: 'enableRevocableSession',
	    value: function enableRevocableSession(options) {
	      options = options || {};
	      _CoreManager2['default'].set('FORCE_REVOCABLE_SESSION', true);
	      if (canUseCurrentUser) {
	        var current = ParseUser.current();
	        if (current) {
	          return current._upgradeToRevocableSession(options);
	        }
	      }
	      return _ParsePromise2['default'].as()._thenRunCallbacks(options);
	    }

	    /**
	     * Enables the use of become or the current user in a server
	     * environment. These features are disabled by default, since they depend on
	     * global objects that are not memory-safe for most servers.
	     * @method enableUnsafeCurrentUser
	     * @static
	     */
	  }, {
	    key: 'enableUnsafeCurrentUser',
	    value: function enableUnsafeCurrentUser() {
	      canUseCurrentUser = true;
	    }

	    /**
	     * Disables the use of become or the current user in any environment.
	     * These features are disabled on servers by default, since they depend on
	     * global objects that are not memory-safe for most servers.
	     * @method disableUnsafeCurrentUser
	     * @static
	     */
	  }, {
	    key: 'disableUnsafeCurrentUser',
	    value: function disableUnsafeCurrentUser() {
	      canUseCurrentUser = false;
	    }
	  }, {
	    key: '_registerAuthenticationProvider',
	    value: function _registerAuthenticationProvider(provider) {
	      authProviders[provider.getAuthType()] = provider;
	      // Synchronize the current user with the auth provider.
	      ParseUser.currentAsync().then(function (current) {
	        if (current) {
	          current._synchronizeAuthData(provider.getAuthType());
	        }
	      });
	    }
	  }, {
	    key: '_logInWith',
	    value: function _logInWith(provider, options) {
	      var user = new ParseUser();
	      return user._linkWith(provider, options);
	    }
	  }, {
	    key: '_clearCache',
	    value: function _clearCache() {
	      currentUserCache = null;
	      currentUserCacheMatchesDisk = false;
	    }
	  }, {
	    key: '_setCurrentUserCache',
	    value: function _setCurrentUserCache(user) {
	      currentUserCache = user;
	    }
	  }]);

	  return ParseUser;
	})(_ParseObject3['default']);

	exports['default'] = ParseUser;

	_ParseObject3['default'].registerSubclass('_User', ParseUser);

	var DefaultController = {
	  updateUserOnDisk: function updateUserOnDisk(user) {
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    var json = user.toJSON();
	    json.className = '_User';
	    return _Storage2['default'].setItemAsync(path, JSON.stringify(json)).then(function () {
	      return user;
	    });
	  },

	  removeUserFromDisk: function removeUserFromDisk() {
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    currentUserCacheMatchesDisk = true;
	    currentUserCache = null;
	    return _Storage2['default'].removeItemAsync(path);
	  },

	  setCurrentUser: function setCurrentUser(user) {
	    currentUserCache = user;
	    user._cleanupAuthData();
	    user._synchronizeAllAuthData();
	    return DefaultController.updateUserOnDisk(user);
	  },

	  currentUser: function currentUser() {
	    if (currentUserCache) {
	      return currentUserCache;
	    }
	    if (currentUserCacheMatchesDisk) {
	      return null;
	    }
	    if (_Storage2['default'].async()) {
	      throw new Error('Cannot call currentUser() when using a platform with an async ' + 'storage system. Call currentUserAsync() instead.');
	    }
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    var userData = _Storage2['default'].getItem(path);
	    currentUserCacheMatchesDisk = true;
	    if (!userData) {
	      currentUserCache = null;
	      return null;
	    }
	    userData = JSON.parse(userData);
	    if (!userData.className) {
	      userData.className = '_User';
	    }
	    if (userData._id) {
	      if (userData.objectId !== userData._id) {
	        userData.objectId = userData._id;
	      }
	      delete userData._id;
	    }
	    if (userData._sessionToken) {
	      userData.sessionToken = userData._sessionToken;
	      delete userData._sessionToken;
	    }
	    var current = _ParseObject3['default'].fromJSON(userData);
	    currentUserCache = current;
	    current._synchronizeAllAuthData();
	    return current;
	  },

	  currentUserAsync: function currentUserAsync() {
	    if (currentUserCache) {
	      return _ParsePromise2['default'].as(currentUserCache);
	    }
	    if (currentUserCacheMatchesDisk) {
	      return _ParsePromise2['default'].as(null);
	    }
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    return _Storage2['default'].getItemAsync(path).then(function (userData) {
	      currentUserCacheMatchesDisk = true;
	      if (!userData) {
	        currentUserCache = null;
	        return _ParsePromise2['default'].as(null);
	      }
	      userData = JSON.parse(userData);
	      if (!userData.className) {
	        userData.className = '_User';
	      }
	      if (userData._id) {
	        if (userData.objectId !== userData._id) {
	          userData.objectId = userData._id;
	        }
	        delete userData._id;
	      }
	      if (userData._sessionToken) {
	        userData.sessionToken = userData._sessionToken;
	        delete userData._sessionToken;
	      }
	      var current = _ParseObject3['default'].fromJSON(userData);
	      currentUserCache = current;
	      current._synchronizeAllAuthData();
	      return _ParsePromise2['default'].as(current);
	    });
	  },

	  signUp: function signUp(user, attrs, options) {
	    var username = attrs && attrs.username || user.get('username');
	    var password = attrs && attrs.password || user.get('password');

	    if (!username || !username.length) {
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Cannot sign up user with an empty name.'));
	    }
	    if (!password || !password.length) {
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Cannot sign up user with an empty password.'));
	    }

	    return user.save(attrs, options).then(function () {
	      // Clear the password field
	      user._finishFetch({ password: undefined });

	      if (canUseCurrentUser) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return user;
	    });
	  },

	  logIn: function logIn(user, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    var stateController = _CoreManager2['default'].getObjectStateController();
	    var auth = {
	      username: user.get('username'),
	      password: user.get('password')
	    };
	    return RESTController.request('GET', 'login', auth, options).then(function (response, status) {
	      user._migrateId(response.objectId);
	      user._setExisted(true);
	      stateController.setPendingOp(user._getStateIdentifier(), 'username', undefined);
	      stateController.setPendingOp(user._getStateIdentifier(), 'password', undefined);
	      response.password = undefined;
	      user._finishFetch(response);
	      if (!canUseCurrentUser) {
	        // We can't set the current user, so just return the one we logged in
	        return _ParsePromise2['default'].as(user);
	      }
	      return DefaultController.setCurrentUser(user);
	    });
	  },

	  become: function become(options) {
	    var user = new ParseUser();
	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('GET', 'users/me', {}, options).then(function (response, status) {
	      user._finishFetch(response);
	      user._setExisted(true);
	      return DefaultController.setCurrentUser(user);
	    });
	  },

	  logOut: function logOut() {
	    return DefaultController.currentUserAsync().then(function (currentUser) {
	      var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	      var promise = _Storage2['default'].removeItemAsync(path);
	      var RESTController = _CoreManager2['default'].getRESTController();
	      if (currentUser !== null) {
	        var currentSession = currentUser.getSessionToken();
	        if (currentSession && (0, _isRevocableSession2['default'])(currentSession)) {
	          promise = promise.then(function () {
	            return RESTController.request('POST', 'logout', {}, { sessionToken: currentSession });
	          });
	        }
	        currentUser._logOutWithAll();
	        currentUser._finishFetch({ sessionToken: undefined });
	      }
	      currentUserCacheMatchesDisk = true;
	      currentUserCache = null;

	      return promise;
	    });
	  },

	  requestPasswordReset: function requestPasswordReset(email, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('POST', 'requestPasswordReset', { email: email }, options);
	  },

	  upgradeToRevocableSession: function upgradeToRevocableSession(user, options) {
	    var token = user.getSessionToken();
	    if (!token) {
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].SESSION_MISSING, 'Cannot upgrade a user with no session token'));
	    }

	    options.sessionToken = token;

	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('POST', 'upgradeToRevocableSession', {}, options).then(function (result) {
	      var session = new _ParseSession2['default']();
	      session._finishFetch(result);
	      user._finishFetch({ sessionToken: session.getSessionToken() });
	      if (user.isCurrent()) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return _ParsePromise2['default'].as(user);
	    });
	  },

	  linkWith: function linkWith(user, authData) {
	    return user.save({ authData: authData }).then(function () {
	      if (canUseCurrentUser) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return user;
	    });
	  }
	};

	_CoreManager2['default'].setUserController(DefaultController);
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isRevocableSession;

	function isRevocableSession(token) {
	  return token.indexOf('r:') > -1;
	}

	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	/**
	 * @class Parse.Session
	 * @constructor
	 *
	 * <p>A Parse.Session object is a local representation of a revocable session.
	 * This class is a subclass of a Parse.Object, and retains the same
	 * functionality of a Parse.Object.</p>
	 */
	'use strict';

	var _get = __webpack_require__(27)['default'];

	var _inherits = __webpack_require__(34)['default'];

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _isRevocableSession = __webpack_require__(109);

	var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);

	var _ParseObject2 = __webpack_require__(44);

	var _ParseObject3 = _interopRequireDefault(_ParseObject2);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _ParseUser = __webpack_require__(108);

	var _ParseUser2 = _interopRequireDefault(_ParseUser);

	var ParseSession = (function (_ParseObject) {
	  _inherits(ParseSession, _ParseObject);

	  function ParseSession(attributes) {
	    _classCallCheck(this, ParseSession);

	    _get(Object.getPrototypeOf(ParseSession.prototype), 'constructor', this).call(this, '_Session');
	    if (attributes && typeof attributes === 'object') {
	      if (!this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Session');
	      }
	    }
	  }

	  /**
	   * Returns the session token string.
	   * @method getSessionToken
	   * @return {String}
	   */

	  _createClass(ParseSession, [{
	    key: 'getSessionToken',
	    value: function getSessionToken() {
	      var token = this.get('sessionToken');
	      if (typeof token === 'string') {
	        return token;
	      }
	      return '';
	    }
	  }], [{
	    key: 'readOnlyAttributes',
	    value: function readOnlyAttributes() {
	      return ['createdWith', 'expiresAt', 'installationId', 'restricted', 'sessionToken', 'user'];
	    }

	    /**
	     * Retrieves the Session object for the currently logged in session.
	     * @method current
	     * @static
	     * @return {Parse.Promise} A promise that is resolved with the Parse.Session
	     *   object after it has been fetched. If there is no current user, the
	     *   promise will be rejected.
	     */
	  }, {
	    key: 'current',
	    value: function current(options) {
	      options = options || {};
	      var controller = _CoreManager2['default'].getSessionController();

	      var sessionOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        sessionOptions.useMasterKey = options.useMasterKey;
	      }
	      return _ParseUser2['default'].currentAsync().then(function (user) {
	        if (!user) {
	          return _ParsePromise2['default'].error('There is no current user.');
	        }
	        var token = user.getSessionToken();
	        sessionOptions.sessionToken = user.getSessionToken();
	        return controller.getSession(sessionOptions);
	      });
	    }

	    /**
	     * Determines whether the current session token is revocable.
	     * This method is useful for migrating Express.js or Node.js web apps to
	     * use revocable sessions. If you are migrating an app that uses the Parse
	     * SDK in the browser only, please use Parse.User.enableRevocableSession()
	     * instead, so that sessions can be automatically upgraded.
	     * @method isCurrentSessionRevocable
	     * @static
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isCurrentSessionRevocable',
	    value: function isCurrentSessionRevocable() {
	      var currentUser = _ParseUser2['default'].current();
	      if (currentUser) {
	        return (0, _isRevocableSession2['default'])(currentUser.getSessionToken() || '');
	      }
	      return false;
	    }
	  }]);

	  return ParseSession;
	})(_ParseObject3['default']);

	exports['default'] = ParseSession;

	_ParseObject3['default'].registerSubclass('_Session', ParseSession);

	_CoreManager2['default'].setSessionController({
	  getSession: function getSession(options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    var session = new ParseSession();

	    return RESTController.request('GET', 'sessions/me', {}, options).then(function (sessionData) {
	      session._finishFetch(sessionData);
	      session._setExisted(true);
	      return session;
	    });
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	module.exports = {
	  async: function async() {
	    var controller = _CoreManager2['default'].getStorageController();
	    return !!controller.async;
	  },

	  getItem: function getItem(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.getItem(path);
	  },

	  getItemAsync: function getItemAsync(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      return controller.getItemAsync(path);
	    }
	    return _ParsePromise2['default'].as(controller.getItem(path));
	  },

	  setItem: function setItem(path, value) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.setItem(path, value);
	  },

	  setItemAsync: function setItemAsync(path, value) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      return controller.setItemAsync(path, value);
	    }
	    return _ParsePromise2['default'].as(controller.setItem(path, value));
	  },

	  removeItem: function removeItem(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.removeItem(path);
	  },

	  removeItemAsync: function removeItemAsync(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      return controller.removeItemAsync(path);
	    }
	    return _ParsePromise2['default'].as(controller.removeItem(path));
	  },

	  generatePath: function generatePath(path) {
	    if (!_CoreManager2['default'].get('APPLICATION_ID')) {
	      throw new Error('You need to call Parse.initialize before using Parse.');
	    }
	    if (typeof path !== 'string') {
	      throw new Error('Tried to get a Storage path that was not a String.');
	    }
	    if (path[0] === '/') {
	      path = path.substr(1);
	    }
	    return 'Parse/' + _CoreManager2['default'].get('APPLICATION_ID') + '/' + path;
	  },

	  _clear: function _clear() {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.hasOwnProperty('clear')) {
	      controller.clear();
	    }
	  }
	};

	_CoreManager2['default'].setStorageController(__webpack_require__(112));

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	module.exports = {
	  async: 0,

	  getItem: function getItem(path) {
	    return localStorage.getItem(path);
	  },

	  setItem: function setItem(path, value) {
	    try {
	      localStorage.setItem(path, value);
	    } catch (e) {
	      // Quota exceeded, possibly due to Safari Private Browsing mode
	    }
	  },

	  removeItem: function removeItem(path) {
	    localStorage.removeItem(path);
	  },

	  clear: function clear() {
	    localStorage.clear();
	  }
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _Storage = __webpack_require__(111);

	var _Storage2 = _interopRequireDefault(_Storage);

	var iidCache = null;

	function hexOctet() {
	  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	function generateId() {
	  return hexOctet() + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + hexOctet() + hexOctet();
	}

	module.exports = {
	  currentInstallationId: function currentInstallationId() {
	    if (typeof iidCache === 'string') {
	      return _ParsePromise2['default'].as(iidCache);
	    }
	    var path = _Storage2['default'].generatePath('installationId');
	    return _Storage2['default'].getItemAsync(path).then(function (iid) {
	      if (!iid) {
	        iid = generateId();
	        return _Storage2['default'].setItemAsync(path, iid).then(function () {
	          iidCache = iid;
	          return iid;
	        });
	      }
	      iidCache = iid;
	      return iid;
	    });
	  },

	  _clearCache: function _clearCache() {
	    iidCache = null;
	  },

	  _setInstallationIdCache: function _setInstallationIdCache(iid) {
	    iidCache = iid;
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _ParseError = __webpack_require__(43);

	var _ParseError2 = _interopRequireDefault(_ParseError);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _Storage = __webpack_require__(111);

	var _Storage2 = _interopRequireDefault(_Storage);

	var XHR = null;
	if (typeof XMLHttpRequest !== 'undefined') {
	  XHR = XMLHttpRequest;
	}

	var useXDomainRequest = false;
	if (typeof XDomainRequest !== 'undefined' && !('withCredentials' in new XMLHttpRequest())) {
	  useXDomainRequest = true;
	}

	function ajaxIE9(method, url, data) {
	  var promise = new _ParsePromise2['default']();
	  var xdr = new XDomainRequest();
	  xdr.onload = function () {
	    var response;
	    try {
	      response = JSON.parse(xdr.responseText);
	    } catch (e) {
	      promise.reject(e);
	    }
	    if (response) {
	      promise.resolve(response);
	    }
	  };
	  xdr.onerror = xdr.ontimeout = function () {
	    // Let's fake a real error message.
	    var fakeResponse = {
	      responseText: JSON.stringify({
	        code: _ParseError2['default'].X_DOMAIN_REQUEST,
	        error: 'IE\'s XDomainRequest does not supply error info.'
	      })
	    };
	    promise.reject(fakeResponse);
	  };
	  xdr.onprogress = function () {};
	  xdr.open(method, url);
	  xdr.send(data);
	  return promise;
	}

	var RESTController = {
	  ajax: function ajax(method, url, data, headers) {
	    if (useXDomainRequest) {
	      return ajaxIE9(method, url, data, headers);
	    }

	    var promise = new _ParsePromise2['default']();
	    var attempts = 0;

	    var dispatch = function dispatch() {
	      if (XHR == null) {
	        throw new Error('Cannot make a request: No definition of XMLHttpRequest was found.');
	      }
	      var handled = false;
	      var xhr = new XHR();

	      xhr.onreadystatechange = function () {
	        if (xhr.readyState !== 4 || handled) {
	          return;
	        }
	        handled = true;

	        if (xhr.status >= 200 && xhr.status < 300) {
	          var response;
	          try {
	            response = JSON.parse(xhr.responseText);
	          } catch (e) {
	            promise.reject(e.toString());
	          }
	          if (response) {
	            promise.resolve(response, xhr.status, xhr);
	          }
	        } else if (xhr.status >= 500 || xhr.status === 0) {
	          // retry on 5XX or node-xmlhttprequest error
	          if (++attempts < _CoreManager2['default'].get('REQUEST_ATTEMPT_LIMIT')) {
	            // Exponentially-growing random delay
	            var delay = Math.round(Math.random() * 125 * Math.pow(2, attempts));
	            setTimeout(dispatch, delay);
	          } else if (xhr.status === 0) {
	            promise.reject('Unable to connect to the Parse API');
	          } else {
	            // After the retry limit is reached, fail
	            promise.reject(xhr);
	          }
	        } else {
	          promise.reject(xhr);
	        }
	      };

	      headers = headers || {};
	      if (typeof headers['Content-Type'] !== 'string') {
	        headers['Content-Type'] = 'text/plain'; // Avoid pre-flight
	      }
	      if (_CoreManager2['default'].get('IS_NODE')) {
	        headers['User-Agent'] = 'Parse/' + _CoreManager2['default'].get('VERSION') + ' (NodeJS ' + process.versions.node + ')';
	      }

	      xhr.open(method, url, true);
	      for (var h in headers) {
	        xhr.setRequestHeader(h, headers[h]);
	      }
	      xhr.send(data);
	    };
	    dispatch();

	    return promise;
	  },

	  request: function request(method, path, data, options) {
	    options = options || {};
	    var url = _CoreManager2['default'].get('SERVER_URL');
	    if (url[url.length - 1] !== '/') {
	      url += '/';
	    }
	    url += path;

	    var payload = {};
	    if (data && typeof data === 'object') {
	      for (var k in data) {
	        payload[k] = data[k];
	      }
	    }

	    if (method !== 'POST') {
	      payload._method = method;
	      method = 'POST';
	    }

	    payload._ApplicationId = _CoreManager2['default'].get('APPLICATION_ID');
	    var jsKey = _CoreManager2['default'].get('JAVASCRIPT_KEY');
	    if (jsKey) {
	      payload._JavaScriptKey = jsKey;
	    }
	    payload._ClientVersion = _CoreManager2['default'].get('VERSION');

	    var useMasterKey = options.useMasterKey;
	    if (typeof useMasterKey === 'undefined') {
	      useMasterKey = _CoreManager2['default'].get('USE_MASTER_KEY');
	    }
	    if (useMasterKey) {
	      if (_CoreManager2['default'].get('MASTER_KEY')) {
	        delete payload._JavaScriptKey;
	        payload._MasterKey = _CoreManager2['default'].get('MASTER_KEY');
	      } else {
	        throw new Error('Cannot use the Master Key, it has not been provided.');
	      }
	    }

	    if (_CoreManager2['default'].get('FORCE_REVOCABLE_SESSION')) {
	      payload._RevocableSession = '1';
	    }

	    var installationId = options.installationId;
	    var installationIdPromise;
	    if (installationId && typeof installationId === 'string') {
	      installationIdPromise = _ParsePromise2['default'].as(installationId);
	    } else {
	      var installationController = _CoreManager2['default'].getInstallationController();
	      installationIdPromise = installationController.currentInstallationId();
	    }

	    return installationIdPromise.then(function (iid) {
	      payload._InstallationId = iid;
	      var userController = _CoreManager2['default'].getUserController();
	      if (options && typeof options.sessionToken === 'string') {
	        return _ParsePromise2['default'].as(options.sessionToken);
	      } else if (userController) {
	        return userController.currentUserAsync().then(function (user) {
	          if (user) {
	            return _ParsePromise2['default'].as(user.getSessionToken());
	          }
	          return _ParsePromise2['default'].as(null);
	        });
	      }
	      return _ParsePromise2['default'].as(null);
	    }).then(function (token) {
	      if (token) {
	        payload._SessionToken = token;
	      }

	      var payloadString = JSON.stringify(payload);

	      return RESTController.ajax(method, url, payloadString);
	    }).then(null, function (response) {
	      // Transform the error into an instance of ParseError by trying to parse
	      // the error string as JSON
	      var error;
	      if (response && response.responseText) {
	        try {
	          var errorJSON = JSON.parse(response.responseText);
	          error = new _ParseError2['default'](errorJSON.code, errorJSON.error);
	        } catch (e) {
	          // If we fail to parse the error text, that's okay.
	          error = new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'Received an error with invalid JSON from Parse: ' + response.responseText);
	        }
	      } else {
	        error = new _ParseError2['default'](_ParseError2['default'].CONNECTION_FAILED, 'XMLHttpRequest failed: ' + JSON.stringify(response));
	      }

	      return _ParsePromise2['default'].error(error);
	    });
	  },

	  _setXHR: function _setXHR(xhr) {
	    XHR = xhr;
	  }
	};

	module.exports = RESTController;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	/**
	 * Parse.Analytics provides an interface to Parse's logging and analytics
	 * backend.
	 *
	 * @class Parse.Analytics
	 * @static
	 */

	/**
	 * Tracks the occurrence of a custom event with additional dimensions.
	 * Parse will store a data point at the time of invocation with the given
	 * event name.
	 *
	 * Dimensions will allow segmentation of the occurrences of this custom
	 * event. Keys and values should be {@code String}s, and will throw
	 * otherwise.
	 *
	 * To track a user signup along with additional metadata, consider the
	 * following:
	 * <pre>
	 * var dimensions = {
	 *  gender: 'm',
	 *  source: 'web',
	 *  dayType: 'weekend'
	 * };
	 * Parse.Analytics.track('signup', dimensions);
	 * </pre>
	 *
	 * There is a default limit of 8 dimensions per event tracked.
	 *
	 * @method track
	 * @param {String} name The name of the custom event to report to Parse as
	 * having happened.
	 * @param {Object} dimensions The dictionary of information by which to
	 * segment this event.
	 * @param {Object} options A Backbone-style callback object.
	 * @return {Parse.Promise} A promise that is resolved when the round-trip
	 * to the server completes.
	 */
	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.track = track;

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	function track(name, dimensions, options) {
	  name = name || '';
	  name = name.replace(/^\s*/, '');
	  name = name.replace(/\s*$/, '');
	  if (name.length === 0) {
	    throw new TypeError('A name for the custom event must be provided');
	  }

	  for (var key in dimensions) {
	    if (typeof key !== 'string' || typeof dimensions[key] !== 'string') {
	      throw new TypeError('track() dimensions expects keys and values of type "string".');
	    }
	  }

	  options = options || {};
	  return _CoreManager2['default'].getAnalyticsController().track(name, dimensions)._thenRunCallbacks(options);
	}

	_CoreManager2['default'].setAnalyticsController({
	  track: function track(name, dimensions) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('POST', 'events/' + name, { dimensions: dimensions });
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.run = run;

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _decode = __webpack_require__(7);

	var _decode2 = _interopRequireDefault(_decode);

	var _encode = __webpack_require__(81);

	var _encode2 = _interopRequireDefault(_encode);

	var _ParseError = __webpack_require__(43);

	var _ParseError2 = _interopRequireDefault(_ParseError);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	/**
	 * Contains functions for calling and declaring
	 * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
	 * <p><strong><em>
	 *   Some functions are only available from Cloud Code.
	 * </em></strong></p>
	 *
	 * @class Parse.Cloud
	 * @static
	 */

	/**
	 * Makes a call to a cloud function.
	 * @method run
	 * @param {String} name The function name.
	 * @param {Object} data The parameters to send to the cloud function.
	 * @param {Object} options A Backbone-style options object
	 * options.success, if set, should be a function to handle a successful
	 * call to a cloud function.  options.error should be a function that
	 * handles an error running the cloud function.  Both functions are
	 * optional.  Both functions take a single argument.
	 * @return {Parse.Promise} A promise that will be resolved with the result
	 * of the function.
	 */

	function run(name, data, options) {
	  options = options || {};

	  if (typeof name !== 'string' || name.length === 0) {
	    throw new TypeError('Cloud function name must be a string.');
	  }

	  var requestOptions = {};
	  if (options.useMasterKey) {
	    requestOptions.useMasterKey = options.useMasterKey;
	  }
	  if (options.sessionToken) {
	    requestOptions.sessionToken = options.sessionToken;
	  }

	  return _CoreManager2['default'].getCloudController().run(name, data, requestOptions)._thenRunCallbacks(options);
	}

	_CoreManager2['default'].setCloudController({
	  run: function run(name, data, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();

	    var payload = (0, _encode2['default'])(data, true);

	    var requestOptions = {};
	    if (options.hasOwnProperty('useMasterKey')) {
	      requestOptions.useMasterKey = options.useMasterKey;
	    }
	    if (options.hasOwnProperty('sessionToken')) {
	      requestOptions.sessionToken = options.sessionToken;
	    }

	    var request = RESTController.request('POST', 'functions/' + name, payload, requestOptions);

	    return request.then(function (res) {
	      var decoded = (0, _decode2['default'])(res);
	      if (decoded && decoded.hasOwnProperty('result')) {
	        return _ParsePromise2['default'].as(decoded.result);
	      }
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'The server returned an invalid response.'));
	    })._thenRunCallbacks(options);
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _decode = __webpack_require__(7);

	var _decode2 = _interopRequireDefault(_decode);

	var _encode = __webpack_require__(81);

	var _encode2 = _interopRequireDefault(_encode);

	var _escape2 = __webpack_require__(86);

	var _escape3 = _interopRequireDefault(_escape2);

	var _ParseError = __webpack_require__(43);

	var _ParseError2 = _interopRequireDefault(_ParseError);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _Storage = __webpack_require__(111);

	var _Storage2 = _interopRequireDefault(_Storage);

	/**
	 * Parse.Config is a local representation of configuration data that
	 * can be set from the Parse dashboard.
	 *
	 * @class Parse.Config
	 * @constructor
	 */

	var ParseConfig = (function () {
	  function ParseConfig() {
	    _classCallCheck(this, ParseConfig);

	    this.attributes = {};
	    this._escapedAttributes = {};
	  }

	  /**
	   * Gets the value of an attribute.
	   * @method get
	   * @param {String} attr The name of an attribute.
	   */

	  _createClass(ParseConfig, [{
	    key: 'get',
	    value: function get(attr) {
	      return this.attributes[attr];
	    }

	    /**
	     * Gets the HTML-escaped value of an attribute.
	     * @method escape
	     * @param {String} attr The name of an attribute.
	     */
	  }, {
	    key: 'escape',
	    value: function escape(attr) {
	      var html = this._escapedAttributes[attr];
	      if (html) {
	        return html;
	      }
	      var val = this.attributes[attr];
	      var escaped = '';
	      if (val != null) {
	        escaped = (0, _escape3['default'])(val.toString());
	      }
	      this._escapedAttributes[attr] = escaped;
	      return escaped;
	    }

	    /**
	     * Retrieves the most recently-fetched configuration object, either from
	     * memory or from local storage if necessary.
	     *
	     * @method current
	     * @static
	     * @return {Config} The most recently-fetched Parse.Config if it
	     *     exists, else an empty Parse.Config.
	     */
	  }], [{
	    key: 'current',
	    value: function current() {
	      var controller = _CoreManager2['default'].getConfigController();
	      return controller.current();
	    }

	    /**
	     * Gets a new configuration object from the server.
	     * @method get
	     * @static
	     * @param {Object} options A Backbone-style options object.
	     * Valid options are:<ul>
	     *   <li>success: Function to call when the get completes successfully.
	     *   <li>error: Function to call when the get fails.
	     * </ul>
	     * @return {Parse.Promise} A promise that is resolved with a newly-created
	     *     configuration object when the get completes.
	     */
	  }, {
	    key: 'get',
	    value: function get(options) {
	      options = options || {};

	      var controller = _CoreManager2['default'].getConfigController();
	      return controller.get()._thenRunCallbacks(options);
	    }
	  }]);

	  return ParseConfig;
	})();

	exports['default'] = ParseConfig;

	var currentConfig = null;

	var CURRENT_CONFIG_KEY = 'currentConfig';

	function decodePayload(data) {
	  try {
	    var json = JSON.parse(data);
	    if (json && typeof json === 'object') {
	      return (0, _decode2['default'])(json);
	    }
	  } catch (e) {
	    return null;
	  }
	}

	_CoreManager2['default'].setConfigController({
	  current: function current() {
	    if (currentConfig) {
	      return currentConfig;
	    }

	    var config = new ParseConfig();
	    var storagePath = _Storage2['default'].generatePath(CURRENT_CONFIG_KEY);
	    var configData;
	    if (!_Storage2['default'].async()) {
	      configData = _Storage2['default'].getItem(storagePath);

	      if (configData) {
	        var attributes = decodePayload(configData);
	        if (attributes) {
	          config.attributes = attributes;
	          currentConfig = config;
	        }
	      }
	      return config;
	    }
	    // Return a promise for async storage controllers
	    return _Storage2['default'].getItemAsync(storagePath).then(function (configData) {
	      if (configData) {
	        var attributes = decodePayload(configData);
	        if (attributes) {
	          config.attributes = attributes;
	          currentConfig = config;
	        }
	      }
	      return config;
	    });
	  },

	  get: function get() {
	    var RESTController = _CoreManager2['default'].getRESTController();

	    return RESTController.request('GET', 'config', {}, {}).then(function (response) {
	      if (!response || !response.params) {
	        var error = new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'Config JSON response invalid.');
	        return _ParsePromise2['default'].error(error);
	      }

	      var config = new ParseConfig();
	      config.attributes = {};
	      for (var attr in response.params) {
	        config.attributes[attr] = (0, _decode2['default'])(response.params[attr]);
	      }
	      currentConfig = config;
	      return _Storage2['default'].setItemAsync(_Storage2['default'].generatePath(CURRENT_CONFIG_KEY), JSON.stringify(response.params)).then(function () {
	        return config;
	      });
	    });
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * -weak
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _parseDate = __webpack_require__(87);

	var _parseDate2 = _interopRequireDefault(_parseDate);

	var _ParseUser = __webpack_require__(108);

	var _ParseUser2 = _interopRequireDefault(_ParseUser);

	var initialized = false;
	var requestedPermissions;
	var initOptions;

	/**
	 * Provides a set of utilities for using Parse with Facebook.
	 * @class Parse.FacebookUtils
	 * @static
	 */
	exports['default'] = {
	  /**
	   * Initializes Parse Facebook integration.  Call this function after you
	   * have loaded the Facebook Javascript SDK with the same parameters
	   * as you would pass to<code>
	   * <a href=
	   * "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	   * FB.init()</a></code>.  Parse.FacebookUtils will invoke FB.init() for you
	   * with these arguments.
	   *
	   * @method init
	   * @param {Object} options Facebook options argument as described here:
	   *   <a href=
	   *   "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	   *   FB.init()</a>. The status flag will be coerced to 'false' because it
	   *   interferes with Parse Facebook integration. Call FB.getLoginStatus()
	   *   explicitly if this behavior is required by your application.
	   */
	  init: function init(options) {
	    if (typeof FB === 'undefined') {
	      throw new Error('The Facebook JavaScript SDK must be loaded before calling init.');
	    }
	    initOptions = {};
	    if (options) {
	      for (var key in options) {
	        initOptions[key] = options[key];
	      }
	    }
	    if (initOptions.status && typeof console !== 'undefined') {
	      var warn = console.warn || console.log || function () {};
	      warn.call(console, 'The "status" flag passed into' + ' FB.init, when set to true, can interfere with Parse Facebook' + ' integration, so it has been suppressed. Please call' + ' FB.getLoginStatus() explicitly if you require this behavior.');
	    }
	    initOptions.status = false;
	    FB.init(initOptions);
	    _ParseUser2['default']._registerAuthenticationProvider({
	      authenticate: function authenticate(options) {
	        var _this = this;

	        if (typeof FB === 'undefined') {
	          options.error(this, 'Facebook SDK not found.');
	        }
	        FB.login(function (response) {
	          if (response.authResponse) {
	            if (options.success) {
	              options.success(_this, {
	                id: response.authResponse.userID,
	                access_token: response.authResponse.accessToken,
	                expiration_date: new Date(response.authResponse.expiresIn * 1000 + new Date().getTime()).toJSON()
	              });
	            }
	          } else {
	            if (options.error) {
	              options.error(_this, response);
	            }
	          }
	        }, {
	          scope: requestedPermissions
	        });
	      },

	      restoreAuthentication: function restoreAuthentication(authData) {
	        if (authData) {
	          var expiration = (0, _parseDate2['default'])(authData.expiration_date);
	          var expiresIn = expiration ? (expiration.getTime() - new Date().getTime()) / 1000 : 0;

	          var authResponse = {
	            userID: authData.id,
	            accessToken: authData.access_token,
	            expiresIn: expiresIn
	          };
	          var newOptions = {};
	          if (initOptions) {
	            for (var key in initOptions) {
	              newOptions[key] = initOptions[key];
	            }
	          }
	          newOptions.authResponse = authResponse;

	          // Suppress checks for login status from the browser.
	          newOptions.status = false;

	          // If the user doesn't match the one known by the FB SDK, log out.
	          // Most of the time, the users will match -- it's only in cases where
	          // the FB SDK knows of a different user than the one being restored
	          // from a Parse User that logged in with username/password.
	          var existingResponse = FB.getAuthResponse();
	          if (existingResponse && existingResponse.userID !== authResponse.userID) {
	            FB.logout();
	          }

	          FB.init(newOptions);
	        }
	        return true;
	      },

	      getAuthType: function getAuthType() {
	        return 'facebook';
	      },

	      deauthenticate: function deauthenticate() {
	        this.restoreAuthentication(null);
	      }
	    });
	    initialized = true;
	  },

	  /**
	   * Gets whether the user has their account linked to Facebook.
	   *
	   * @method isLinked
	   * @param {Parse.User} user User to check for a facebook link.
	   *     The user must be logged in on this device.
	   * @return {Boolean} <code>true</code> if the user has their account
	   *     linked to Facebook.
	   */
	  isLinked: function isLinked(user) {
	    return user._isLinked('facebook');
	  },

	  /**
	   * Logs in a user using Facebook. This method delegates to the Facebook
	   * SDK to authenticate the user, and then automatically logs in (or
	   * creates, in the case where it is a new user) a Parse.User.
	   *
	   * @method logIn
	   * @param {String, Object} permissions The permissions required for Facebook
	   *    log in.  This is a comma-separated string of permissions.
	   *    Alternatively, supply a Facebook authData object as described in our
	   *    REST API docs if you want to handle getting facebook auth tokens
	   *    yourself.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  logIn: function logIn(permissions, options) {
	    if (!permissions || typeof permissions === 'string') {
	      if (!initialized) {
	        throw new Error('You must initialize FacebookUtils before calling logIn.');
	      }
	      requestedPermissions = permissions;
	      return _ParseUser2['default']._logInWith('facebook', options);
	    } else {
	      var newOptions = {};
	      if (options) {
	        for (var key in options) {
	          newOptions[key] = options[key];
	        }
	      }
	      newOptions.authData = permissions;
	      return _ParseUser2['default']._logInWith('facebook', newOptions);
	    }
	  },

	  /**
	   * Links Facebook to an existing PFUser. This method delegates to the
	   * Facebook SDK to authenticate the user, and then automatically links
	   * the account to the Parse.User.
	   *
	   * @method link
	   * @param {Parse.User} user User to link to Facebook. This must be the
	   *     current user.
	   * @param {String, Object} permissions The permissions required for Facebook
	   *    log in.  This is a comma-separated string of permissions.
	   *    Alternatively, supply a Facebook authData object as described in our
	   *    REST API docs if you want to handle getting facebook auth tokens
	   *    yourself.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  link: function link(user, permissions, options) {
	    if (!permissions || typeof permissions === 'string') {
	      if (!initialized) {
	        throw new Error('You must initialize FacebookUtils before calling link.');
	      }
	      requestedPermissions = permissions;
	      return user._linkWith('facebook', options);
	    } else {
	      var newOptions = {};
	      if (options) {
	        for (var key in options) {
	          newOptions[key] = options[key];
	        }
	      }
	      newOptions.authData = permissions;
	      return user._linkWith('facebook', newOptions);
	    }
	  },

	  /**
	   * Unlinks the Parse.User from a Facebook account.
	   *
	   * @method unlink
	   * @param {Parse.User} user User to unlink from Facebook. This must be the
	   *     current user.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  unlink: function unlink(user, options) {
	    if (!initialized) {
	      throw new Error('You must initialize FacebookUtils before calling unlink.');
	    }
	    return user._unlinkFrom('facebook', options);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _get = __webpack_require__(27)['default'];

	var _inherits = __webpack_require__(34)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _ParseObject2 = __webpack_require__(44);

	var _ParseObject3 = _interopRequireDefault(_ParseObject2);

	var Installation = (function (_ParseObject) {
	  _inherits(Installation, _ParseObject);

	  function Installation(attributes) {
	    _classCallCheck(this, Installation);

	    _get(Object.getPrototypeOf(Installation.prototype), 'constructor', this).call(this, '_Installation');
	    if (attributes && typeof attributes === 'object') {
	      if (!this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Session');
	      }
	    }
	  }

	  return Installation;
	})(_ParseObject3['default']);

	exports['default'] = Installation;

	_ParseObject3['default'].registerSubclass('_Installation', Installation);
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.send = send;

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _ParseQuery = __webpack_require__(84);

	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);

	/**
	 * Contains functions to deal with Push in Parse.
	 * @class Parse.Push
	 * @static
	 */

	/**
	 * Sends a push notification.
	 * @method send
	 * @param {Object} data -  The data of the push notification.  Valid fields
	 * are:
	 *   <ol>
	 *     <li>channels - An Array of channels to push to.</li>
	 *     <li>push_time - A Date object for when to send the push.</li>
	 *     <li>expiration_time -  A Date object for when to expire
	 *         the push.</li>
	 *     <li>expiration_interval - The seconds from now to expire the push.</li>
	 *     <li>where - A Parse.Query over Parse.Installation that is used to match
	 *         a set of installations to push to.</li>
	 *     <li>data - The data to send as part of the push</li>
	 *   <ol>
	 * @param {Object} options An object that has an optional success function,
	 * that takes no arguments and will be called on a successful push, and
	 * an error function that takes a Parse.Error and will be called if the push
	 * failed.
	 * @return {Parse.Promise} A promise that is fulfilled when the push request
	 *     completes.
	 */

	function send(data, options) {
	  options = options || {};

	  if (data.where && data.where instanceof _ParseQuery2['default']) {
	    data.where = data.where.toJSON().where;
	  }

	  if (data.push_time && typeof data.push_time === 'object') {
	    data.push_time = data.push_time.toJSON();
	  }

	  if (data.expiration_time && typeof data.expiration_time === 'object') {
	    data.expiration_time = data.expiration_time.toJSON();
	  }

	  if (data.expiration_time && data.expiration_interval) {
	    throw new Error('expiration_time and expiration_interval cannot both be set.');
	  }

	  return _CoreManager2['default'].getPushController().send(data, {
	    useMasterKey: options.useMasterKey
	  })._thenRunCallbacks(options);
	}

	_CoreManager2['default'].setPushController({
	  send: function send(data, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();

	    var request = RESTController.request('POST', 'push', data, { useMasterKey: !!options.useMasterKey });

	    return request._thenRunCallbacks(options);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _EventEmitter = __webpack_require__(122);

	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

	var _LiveQueryClient = __webpack_require__(124);

	var _LiveQueryClient2 = _interopRequireDefault(_LiveQueryClient);

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	/**
	 *
	 * We expose three events to help you monitor the status of the WebSocket connection:
	 *
	 * <p>Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('open', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('close', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Error - When some network error or LiveQuery server error happens, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('error', (error) => {
	 * 
	 * });</pre></p>
	 * 
	 * @class Parse.LiveQuery
	 * @static
	 * 
	 */
	var LiveQuery = new _EventEmitter2['default']();

	/**
	 * After open is called, the LiveQuery will try to send a connect request
	 * to the LiveQuery server.
	 * 
	 * @method open
	 */
	LiveQuery.open = function open() {
	  var LiveQueryController = _CoreManager2['default'].getLiveQueryController();
	  LiveQueryController.open();
	};

	/**
	 * When you're done using LiveQuery, you can call Parse.LiveQuery.close().
	 * This function will close the WebSocket connection to the LiveQuery server,
	 * cancel the auto reconnect, and unsubscribe all subscriptions based on it.
	 * If you call query.subscribe() after this, we'll create a new WebSocket
	 * connection to the LiveQuery server.
	 * 
	 * @method close
	 */

	LiveQuery.close = function close() {
	  var LiveQueryController = _CoreManager2['default'].getLiveQueryController();
	  LiveQueryController.close();
	};
	// Register a default onError callback to make sure we do not crash on error
	LiveQuery.on('error', function () {});

	exports['default'] = LiveQuery;

	function getSessionToken() {
	  var controller = _CoreManager2['default'].getUserController();
	  return controller.currentUserAsync().then(function (currentUser) {
	    return currentUser ? currentUser.getSessionToken() : undefined;
	  });
	}

	function getLiveQueryClient() {
	  return _CoreManager2['default'].getLiveQueryController().getDefaultLiveQueryClient();
	}

	var defaultLiveQueryClient = undefined;

	_CoreManager2['default'].setLiveQueryController({
	  setDefaultLiveQueryClient: function setDefaultLiveQueryClient(liveQueryClient) {
	    defaultLiveQueryClient = liveQueryClient;
	  },
	  getDefaultLiveQueryClient: function getDefaultLiveQueryClient() {
	    if (defaultLiveQueryClient) {
	      return _ParsePromise2['default'].as(defaultLiveQueryClient);
	    }

	    return getSessionToken().then(function (sessionToken) {
	      var liveQueryServerURL = _CoreManager2['default'].get('LIVEQUERY_SERVER_URL');

	      if (liveQueryServerURL && liveQueryServerURL.indexOf('ws') !== 0) {
	        throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
	      }

	      // If we can not find Parse.liveQueryServerURL, we try to extract it from Parse.serverURL
	      if (!liveQueryServerURL) {
	        var tempServerURL = _CoreManager2['default'].get('SERVER_URL');
	        var protocol = 'ws://';
	        // If Parse is being served over SSL/HTTPS, ensure LiveQuery Server uses 'wss://' prefix
	        if (tempServerURL.indexOf('https') === 0) {
	          protocol = 'wss://';
	        }
	        var host = tempServerURL.replace(/^https?:\/\//, '');
	        liveQueryServerURL = protocol + host;
	        _CoreManager2['default'].set('LIVEQUERY_SERVER_URL', liveQueryServerURL);
	      }

	      var applicationId = _CoreManager2['default'].get('APPLICATION_ID');
	      var javascriptKey = _CoreManager2['default'].get('JAVASCRIPT_KEY');
	      var masterKey = _CoreManager2['default'].get('MASTER_KEY');
	      // Get currentUser sessionToken if possible
	      defaultLiveQueryClient = new _LiveQueryClient2['default']({
	        applicationId: applicationId,
	        serverURL: liveQueryServerURL,
	        javascriptKey: javascriptKey,
	        masterKey: masterKey,
	        sessionToken: sessionToken
	      });
	      // Register a default onError callback to make sure we do not crash on error
	      // Cannot create these events on a nested way because of EventEmiiter from React Native
	      defaultLiveQueryClient.on('error', function (error) {
	        LiveQuery.emit('error', error);
	      });
	      defaultLiveQueryClient.on('open', function () {
	        LiveQuery.emit('open');
	      });
	      defaultLiveQueryClient.on('close', function () {
	        LiveQuery.emit('close');
	      });

	      return defaultLiveQueryClient;
	    });
	  },
	  open: function open() {
	    var _this = this;

	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this.resolve(liveQueryClient.open());
	    });
	  },
	  close: function close() {
	    var _this2 = this;

	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this2.resolve(liveQueryClient.close());
	    });
	  },
	  subscribe: function subscribe(query) {
	    var _this3 = this;

	    var subscriptionWrap = new _EventEmitter2['default']();

	    getLiveQueryClient().then(function (liveQueryClient) {
	      if (liveQueryClient.shouldOpen()) {
	        liveQueryClient.open();
	      }
	      var promiseSessionToken = getSessionToken();
	      // new event emitter
	      return promiseSessionToken.then(function (sessionToken) {

	        var subscription = liveQueryClient.subscribe(query, sessionToken);
	        // enter, leave create, etc

	        subscriptionWrap.id = subscription.id;
	        subscriptionWrap.query = subscription.query;
	        subscriptionWrap.sessionToken = subscription.sessionToken;
	        subscriptionWrap.unsubscribe = subscription.unsubscribe;
	        // Cannot create these events on a nested way because of EventEmiiter from React Native
	        subscription.on('open', function () {
	          subscriptionWrap.emit('open');
	        });
	        subscription.on('create', function (object) {
	          subscriptionWrap.emit('create', object);
	        });
	        subscription.on('update', function (object) {
	          subscriptionWrap.emit('update', object);
	        });
	        subscription.on('enter', function (object) {
	          subscriptionWrap.emit('enter', object);
	        });
	        subscription.on('leave', function (object) {
	          subscriptionWrap.emit('leave', object);
	        });
	        subscription.on('delete', function (object) {
	          subscriptionWrap.emit('delete', object);
	        });

	        _this3.resolve();
	      });
	    });
	    return subscriptionWrap;
	  },
	  unsubscribe: function unsubscribe(subscription) {
	    var _this4 = this;

	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this4.resolve(liveQueryClient.unsubscribe(subscription));
	    });
	  },
	  _clearCachedDefaultClient: function _clearCachedDefaultClient() {
	    defaultLiveQueryClient = null;
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is a simple wrapper to unify EventEmitter implementations across platforms.
	 */

	'use strict';

	module.exports = __webpack_require__(123).EventEmitter;

/***/ },
/* 123 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _get = __webpack_require__(27)['default'];

	var _inherits = __webpack_require__(34)['default'];

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _Map = __webpack_require__(125)['default'];

	var _getIterator = __webpack_require__(53)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _EventEmitter2 = __webpack_require__(122);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _ParsePromise = __webpack_require__(52);

	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);

	var _ParseObject = __webpack_require__(44);

	var _ParseObject2 = _interopRequireDefault(_ParseObject);

	var _LiveQuerySubscription = __webpack_require__(132);

	var _LiveQuerySubscription2 = _interopRequireDefault(_LiveQuerySubscription);

	// The LiveQuery client inner state
	var CLIENT_STATE = {
	  INITIALIZED: 'initialized',
	  CONNECTING: 'connecting',
	  CONNECTED: 'connected',
	  CLOSED: 'closed',
	  RECONNECTING: 'reconnecting',
	  DISCONNECTED: 'disconnected'
	};

	// The event type the LiveQuery client should sent to server
	var OP_TYPES = {
	  CONNECT: 'connect',
	  SUBSCRIBE: 'subscribe',
	  UNSUBSCRIBE: 'unsubscribe',
	  ERROR: 'error'
	};

	// The event we get back from LiveQuery server
	var OP_EVENTS = {
	  CONNECTED: 'connected',
	  SUBSCRIBED: 'subscribed',
	  UNSUBSCRIBED: 'unsubscribed',
	  ERROR: 'error',
	  CREATE: 'create',
	  UPDATE: 'update',
	  ENTER: 'enter',
	  LEAVE: 'leave',
	  DELETE: 'delete'
	};

	// The event the LiveQuery client should emit
	var CLIENT_EMMITER_TYPES = {
	  CLOSE: 'close',
	  ERROR: 'error',
	  OPEN: 'open'
	};

	// The event the LiveQuery subscription should emit
	var SUBSCRIPTION_EMMITER_TYPES = {
	  OPEN: 'open',
	  CLOSE: 'close',
	  ERROR: 'error',
	  CREATE: 'create',
	  UPDATE: 'update',
	  ENTER: 'enter',
	  LEAVE: 'leave',
	  DELETE: 'delete'
	};

	var generateInterval = function generateInterval(k) {
	  return Math.random() * Math.min(30, Math.pow(2, k) - 1) * 1000;
	};

	/**
	 * Creates a new LiveQueryClient.
	 * Extends events.EventEmitter
	 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
	 * 
	 * A wrapper of a standard WebSocket client. We add several useful methods to 
	 * help you connect/disconnect to LiveQueryServer, subscribe/unsubscribe a ParseQuery easily.
	 *
	 * javascriptKey and masterKey are used for verifying the LiveQueryClient when it tries
	 * to connect to the LiveQuery server
	 * 
	 * @class Parse.LiveQueryClient
	 * @constructor
	 * @param {Object} options
	 * @param {string} options.applicationId - applicationId of your Parse app
	 * @param {string} options.serverURL - <b>the URL of your LiveQuery server</b>
	 * @param {string} options.javascriptKey (optional)
	 * @param {string} options.masterKey (optional) Your Parse Master Key. (Node.js only!)
	 * @param {string} options.sessionToken (optional)
	 *
	 *
	 * We expose three events to help you monitor the status of the LiveQueryClient.
	 *
	 * <pre>
	 * let Parse = require('parse/node');
	 * let LiveQueryClient = Parse.LiveQueryClient;
	 * let client = new LiveQueryClient({
	 *   applicationId: '',
	 *   serverURL: '',
	 *   javascriptKey: '',
	 *   masterKey: ''
	 *  });
	 * </pre>
	 * 
	 * Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
	 * <pre>
	 * client.on('open', () => {
	 * 
	 * });</pre>
	 *
	 * Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
	 * <pre>
	 * client.on('close', () => {
	 * 
	 * });</pre>
	 *
	 * Error - When some network error or LiveQuery server error happens, you'll get this event.
	 * <pre>
	 * client.on('error', (error) => {
	 * 
	 * });</pre>
	 * 
	 * 
	 */

	var LiveQueryClient = (function (_EventEmitter) {
	  _inherits(LiveQueryClient, _EventEmitter);

	  function LiveQueryClient(_ref) {
	    var applicationId = _ref.applicationId;
	    var serverURL = _ref.serverURL;
	    var javascriptKey = _ref.javascriptKey;
	    var masterKey = _ref.masterKey;
	    var sessionToken = _ref.sessionToken;

	    _classCallCheck(this, LiveQueryClient);

	    _get(Object.getPrototypeOf(LiveQueryClient.prototype), 'constructor', this).call(this);

	    if (!serverURL || serverURL.indexOf('ws') !== 0) {
	      throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
	    }

	    this.reconnectHandle = null;
	    this.attempts = 1;;
	    this.id = 0;
	    this.requestId = 1;
	    this.serverURL = serverURL;
	    this.applicationId = applicationId;
	    this.javascriptKey = javascriptKey;
	    this.masterKey = masterKey;
	    this.sessionToken = sessionToken;
	    this.connectPromise = new _ParsePromise2['default']();
	    this.subscriptions = new _Map();
	    this.state = CLIENT_STATE.INITIALIZED;
	  }

	  _createClass(LiveQueryClient, [{
	    key: 'shouldOpen',
	    value: function shouldOpen() {
	      return this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED;
	    }

	    /**
	     * Subscribes to a ParseQuery
	     * 
	     * If you provide the sessionToken, when the LiveQuery server gets ParseObject's 
	     * updates from parse server, it'll try to check whether the sessionToken fulfills 
	     * the ParseObject's ACL. The LiveQuery server will only send updates to clients whose 
	     * sessionToken is fit for the ParseObject's ACL. You can check the LiveQuery protocol
	     * <a href="https://github.com/ParsePlatform/parse-server/wiki/Parse-LiveQuery-Protocol-Specification">here</a> for more details. The subscription you get is the same subscription you get 
	     * from our Standard API.
	     * 
	     * @method subscribe
	     * @param {Object} query - the ParseQuery you want to subscribe to
	     * @param {string} sessionToken (optional) 
	     * @return {Object} subscription
	     */
	  }, {
	    key: 'subscribe',
	    value: function subscribe(query, sessionToken) {
	      var _this = this;

	      if (!query) {
	        return;
	      }
	      var where = query.toJSON().where;
	      var className = query.className;
	      var subscribeRequest = {
	        op: OP_TYPES.SUBSCRIBE,
	        requestId: this.requestId,
	        query: {
	          className: className,
	          where: where
	        }
	      };

	      if (sessionToken) {
	        subscribeRequest.sessionToken = sessionToken;
	      }

	      var subscription = new _LiveQuerySubscription2['default'](this.requestId, query, sessionToken);
	      this.subscriptions.set(this.requestId, subscription);
	      this.requestId += 1;
	      this.connectPromise.then(function () {
	        _this.socket.send(JSON.stringify(subscribeRequest));
	      });

	      // adding listener so process does not crash
	      // best practice is for developer to register their own listener
	      subscription.on('error', function () {});

	      return subscription;
	    }

	    /**
	     * After calling unsubscribe you'll stop receiving events from the subscription object.
	     * 
	     * @method unsubscribe
	     * @param {Object} subscription - subscription you would like to unsubscribe from.
	     */
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(subscription) {
	      var _this2 = this;

	      if (!subscription) {
	        return;
	      }

	      this.subscriptions['delete'](subscription.id);
	      var unsubscribeRequest = {
	        op: OP_TYPES.UNSUBSCRIBE,
	        requestId: subscription.id
	      };
	      this.connectPromise.then(function () {
	        _this2.socket.send(JSON.stringify(unsubscribeRequest));
	      });
	    }

	    /**
	     * After open is called, the LiveQueryClient will try to send a connect request
	     * to the LiveQuery server.
	     * 
	     * @method open
	     */
	  }, {
	    key: 'open',
	    value: function open() {
	      var _this3 = this;

	      var WebSocketImplementation = this._getWebSocketImplementation();
	      if (!WebSocketImplementation) {
	        this.emit(CLIENT_EMMITER_TYPES.ERROR, 'Can not find WebSocket implementation');
	        return;
	      }

	      if (this.state !== CLIENT_STATE.RECONNECTING) {
	        this.state = CLIENT_STATE.CONNECTING;
	      }

	      // Get WebSocket implementation
	      this.socket = new WebSocketImplementation(this.serverURL);

	      // Bind WebSocket callbacks
	      this.socket.onopen = function () {
	        _this3._handleWebSocketOpen();
	      };

	      this.socket.onmessage = function (event) {
	        _this3._handleWebSocketMessage(event);
	      };

	      this.socket.onclose = function () {
	        _this3._handleWebSocketClose();
	      };

	      this.socket.onerror = function (error) {
	        console.log("error on socket");
	        _this3._handleWebSocketError(error);
	      };
	    }
	  }, {
	    key: 'resubscribe',
	    value: function resubscribe() {
	      var _this4 = this;

	      this.subscriptions.forEach(function (subscription, requestId) {
	        var query = subscription.query;
	        var where = query.toJSON().where;
	        var className = query.className;
	        var sessionToken = subscription.sessionToken;
	        var subscribeRequest = {
	          op: OP_TYPES.SUBSCRIBE,
	          requestId: requestId,
	          query: {
	            className: className,
	            where: where
	          }
	        };

	        if (sessionToken) {
	          subscribeRequest.sessionToken = sessionToken;
	        }

	        _this4.connectPromise.then(function () {
	          _this4.socket.send(JSON.stringify(subscribeRequest));
	        });
	      });
	    }

	    /**
	     * This method will close the WebSocket connection to this LiveQueryClient, 
	     * cancel the auto reconnect and unsubscribe all subscriptions based on it.
	     * 
	     * @method close
	     */
	  }, {
	    key: 'close',
	    value: function close() {
	      if (this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	      this.state = CLIENT_STATE.DISCONNECTED;
	      this.socket.close();
	      // Notify each subscription about the close
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = _getIterator(this.subscriptions.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var subscription = _step.value;

	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      this._handleReset();
	      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
	    }
	  }, {
	    key: '_getWebSocketImplementation',
	    value: function _getWebSocketImplementation() {
	      return typeof WebSocket === 'function' || typeof WebSocket === 'object' ? WebSocket : null;
	    }

	    // ensure we start with valid state if connect is called again after close
	  }, {
	    key: '_handleReset',
	    value: function _handleReset() {
	      this.attempts = 1;;
	      this.id = 0;
	      this.requestId = 1;
	      this.connectPromise = new _ParsePromise2['default']();
	      this.subscriptions = new _Map();
	    }
	  }, {
	    key: '_handleWebSocketOpen',
	    value: function _handleWebSocketOpen() {
	      this.attempts = 1;
	      var connectRequest = {
	        op: OP_TYPES.CONNECT,
	        applicationId: this.applicationId,
	        javascriptKey: this.javascriptKey,
	        masterKey: this.masterKey,
	        sessionToken: this.sessionToken
	      };
	      this.socket.send(JSON.stringify(connectRequest));
	    }
	  }, {
	    key: '_handleWebSocketMessage',
	    value: function _handleWebSocketMessage(event) {
	      var data = event.data;
	      if (typeof data === 'string') {
	        data = JSON.parse(data);
	      }
	      var subscription = null;
	      if (data.requestId) {
	        subscription = this.subscriptions.get(data.requestId);
	      }
	      switch (data.op) {
	        case OP_EVENTS.CONNECTED:
	          if (this.state === CLIENT_STATE.RECONNECTING) {
	            this.resubscribe();
	          }
	          this.emit(CLIENT_EMMITER_TYPES.OPEN);
	          this.id = data.clientId;
	          this.connectPromise.resolve();
	          this.state = CLIENT_STATE.CONNECTED;
	          break;
	        case OP_EVENTS.SUBSCRIBED:
	          if (subscription) {
	            subscription.emit(SUBSCRIPTION_EMMITER_TYPES.OPEN);
	          }
	          break;
	        case OP_EVENTS.ERROR:
	          if (data.requestId) {
	            if (subscription) {
	              subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, data.error);
	            }
	          } else {
	            this.emit(CLIENT_EMMITER_TYPES.ERROR, data.error);
	          }
	          break;
	        case OP_EVENTS.UNSUBSCRIBED:
	          // We have already deleted subscription in unsubscribe(), do nothing here
	          break;
	        default:
	          // create, update, enter, leave, delete cases
	          var className = data.object.className;
	          // Delete the extrea __type and className fields during transfer to full JSON
	          delete data.object.__type;
	          delete data.object.className;
	          var parseObject = new _ParseObject2['default'](className);
	          parseObject._finishFetch(data.object);
	          if (!subscription) {
	            break;
	          }
	          subscription.emit(data.op, parseObject);
	      }
	    }
	  }, {
	    key: '_handleWebSocketClose',
	    value: function _handleWebSocketClose() {
	      if (this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	      this.state = CLIENT_STATE.CLOSED;
	      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
	      // Notify each subscription about the close
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = _getIterator(this.subscriptions.values()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var subscription = _step2.value;

	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      this._handleReconnect();
	    }
	  }, {
	    key: '_handleWebSocketError',
	    value: function _handleWebSocketError(error) {
	      this.emit(CLIENT_EMMITER_TYPES.ERROR, error);
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = _getIterator(this.subscriptions.values()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var subscription = _step3.value;

	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	            _iterator3['return']();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      this._handleReconnect();
	    }
	  }, {
	    key: '_handleReconnect',
	    value: function _handleReconnect() {
	      var _this5 = this;

	      // if closed or currently reconnecting we stop attempting to reconnect
	      if (this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }

	      this.state = CLIENT_STATE.RECONNECTING;
	      var time = generateInterval(this.attempts);

	      // handle case when both close/error occur at frequent rates we ensure we do not reconnect unnecessarily.
	      // we're unable to distinguish different between close/error when we're unable to reconnect therefore
	      // we try to reonnect in both cases
	      // server side ws and browser WebSocket behave differently in when close/error get triggered

	      if (this.reconnectHandle) {
	        clearTimeout(this.reconnectHandle);
	      } else {
	        console.info('attempting to reconnect');
	      }

	      this.reconnectHandle = setTimeout((function () {
	        _this5.attempts++;
	        _this5.connectPromise = new _ParsePromise2['default']();
	        _this5.open();
	      }).bind(this), time);
	    }
	  }]);

	  return LiveQueryClient;
	})(_EventEmitter3['default']);

	exports['default'] = LiveQueryClient;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	__webpack_require__(72);
	__webpack_require__(55);
	__webpack_require__(127);
	__webpack_require__(130);
	module.exports = __webpack_require__(22).Map;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(128);

	// 23.1 Map Objects
	__webpack_require__(106)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(12)
	  , hide         = __webpack_require__(63)
	  , redefineAll  = __webpack_require__(97)
	  , ctx          = __webpack_require__(23)
	  , strictNew    = __webpack_require__(98)
	  , defined      = __webpack_require__(18)
	  , forOf        = __webpack_require__(99)
	  , $iterDefine  = __webpack_require__(60)
	  , step         = __webpack_require__(58)
	  , ID           = __webpack_require__(71)('id')
	  , $has         = __webpack_require__(66)
	  , isObject     = __webpack_require__(41)
	  , setSpecies   = __webpack_require__(129)
	  , DESCRIPTORS  = __webpack_require__(65)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(22)
	  , $           = __webpack_require__(12)
	  , DESCRIPTORS = __webpack_require__(65)
	  , SPECIES     = __webpack_require__(69)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(20);

	$export($export.P, 'Map', {toJSON: __webpack_require__(131)('Map')});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(99)
	  , classof = __webpack_require__(77);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _get = __webpack_require__(27)['default'];

	var _inherits = __webpack_require__(34)['default'];

	var _createClass = __webpack_require__(9)['default'];

	var _classCallCheck = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _EventEmitter2 = __webpack_require__(122);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _CoreManager = __webpack_require__(48);

	var _CoreManager2 = _interopRequireDefault(_CoreManager);

	/**
	 * Creates a new LiveQuery Subscription.
	 * Extends events.EventEmitter
	 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
	 * 
	 * @constructor
	 * @param {string} id - subscription id
	 * @param {string} query - query to subscribe to
	 * @param {string} sessionToken - optional session token
	 *
	 * <p>Open Event - When you call query.subscribe(), we send a subscribe request to 
	 * the LiveQuery server, when we get the confirmation from the LiveQuery server,
	 * this event will be emitted. When the client loses WebSocket connection to the
	 * LiveQuery server, we will try to auto reconnect the LiveQuery server. If we
	 * reconnect the LiveQuery server and successfully resubscribe the ParseQuery,
	 * you'll also get this event.
	 * 
	 * <pre>
	 * subscription.on('open', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Create Event - When a new ParseObject is created and it fulfills the ParseQuery you subscribe,
	 * you'll get this event. The object is the ParseObject which is created.
	 * 
	 * <pre>
	 * subscription.on('create', (object) => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Update Event - When an existing ParseObject which fulfills the ParseQuery you subscribe 
	 * is updated (The ParseObject fulfills the ParseQuery before and after changes),
	 * you'll get this event. The object is the ParseObject which is updated.
	 * Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('update', (object) => {
	 * 
	 * });</pre></p>
	 * 
	 * <p>Enter Event - When an existing ParseObject's old value doesn't fulfill the ParseQuery
	 * but its new value fulfills the ParseQuery, you'll get this event. The object is the
	 * ParseObject which enters the ParseQuery. Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('enter', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Update Event - When an existing ParseObject's old value fulfills the ParseQuery but its new value
	 * doesn't fulfill the ParseQuery, you'll get this event. The object is the ParseObject
	 * which leaves the ParseQuery. Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('leave', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Delete Event - When an existing ParseObject which fulfills the ParseQuery is deleted, you'll
	 * get this event. The object is the ParseObject which is deleted.
	 * 
	 * <pre>
	 * subscription.on('delete', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Close Event - When the client loses the WebSocket connection to the LiveQuery
	 * server and we stop receiving events, you'll get this event.
	 * 
	 * <pre>
	 * subscription.on('close', () => {
	 * 
	 * });</pre></p>
	 *
	 * 
	 */

	var Subscription = (function (_EventEmitter) {
	  _inherits(Subscription, _EventEmitter);

	  function Subscription(id, query, sessionToken) {
	    _classCallCheck(this, Subscription);

	    _get(Object.getPrototypeOf(Subscription.prototype), 'constructor', this).call(this);
	    this.id = id;
	    this.query = query;
	    this.sessionToken = sessionToken;
	  }

	  /**
	   * @method unsubscribe
	   */

	  _createClass(Subscription, [{
	    key: 'unsubscribe',
	    value: function unsubscribe() {
	      var _this2 = this;

	      var _this = this;
	      _CoreManager2['default'].getLiveQueryController().getDefaultLiveQueryClient().then(function (liveQueryClient) {
	        liveQueryClient.unsubscribe(_this);
	        _this.emit('close');
	        _this2.resolve();
	      });
	    }
	  }]);

	  return Subscription;
	})(_EventEmitter3['default']);

	exports['default'] = Subscription;
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var Parse = __webpack_require__(3);
	var Firebase = __webpack_require__(1);
	var addArticleCtrl = function ($scope, $window, $ionicLoading, Articles, InputFields, DateHandler) {

	    document.getElementById('img-preview').style.display = 'none';

	    $scope.GetPic = function () {
	        navigator.camera.getPicture(onSuccess, onFail, {
	            quality: 50,
	            destinationType: Camera.DestinationType.DATA_URL,
	            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	        });

	        function onSuccess(imageData) {
	            $scope.imgData = imageData;
	            document.getElementById('img-preview').style.display = 'inline';
	            document.getElementById('img_1').src = "data:image/png;base64," + imageData;
	        }

	        function onFail(message) {
	            alert('Non sono riuscito a reperire la foto perchè ' + message);
	        }

	    };

	    $scope.UploadArticle = function (title, text) {
	        if (InputFields.filledFields([title, text])) {

	            $ionicLoading.show({
	                template: 'Pubblicazione in Corso...'
	            });

	            var newData = {
	                text: text,
	                title: title,
	                author: 'autore',
	                date: DateHandler.GetCurrentDate(),
	                img: document.getElementById('img_1').src
	            };

	            Articles.sendArticle(newData, $ionicLoading);
	            title = '';
	            text = '';
	        }
	        else {
	            alert('compila tutti i campi');
	        }
	    };


	};

	module.exports = addArticleCtrl;



/***/ },
/* 134 */
/***/ function(module, exports) {

	var addNewsCtrl = function ($scope,$ionicLoading, Messages,DateHandler) {

	    $scope.sendNews = function (news) {

	        $ionicLoading.show({
	            template: 'Pubblicazione in Corso...'
	        });

	        var newData = {
	            text:news,
	            author: 'autore',
	            date: DateHandler.GetCurrentDate()
	        };

	        if (news != undefined) {
	            Messages.sendPost(newData,$ionicLoading);
	        }
	        else {
	            alert('compila il testo del messaggio');
	        }
	    };
	};

	module.exports = addNewsCtrl;

/***/ },
/* 135 */
/***/ function(module, exports) {

	var adminCtrl = function ($scope, $state, $window) {

	    $scope.title = "Sezione Amministratori ";

	    $scope.Links = [
	        {
	            "name": "Scrivi Avviso",
	            "icon":"icon ion-ios-bell",
	            "url": "sendMessage",
	            "direct": function () {
	                $state.go(this.url);
	            }
	        },
	        {
	            "name": "Scrivi Articolo d'attualità",
	            "url": "addArticle",
	            "icon":"icon ion-ios-paper",
	            "direct": function () {
	                $state.go(this.url);
	                $window.localStorage.setItem("contentType", "Giornalino");
	            }
	        },
	        {
	            "name": "Scrivi Articolo d'orientamento",
	            "url": "addArticle",
	            "icon":"icon ion-ios-navigate",
	            "direct": function () {
	                $state.go(this.url);
	                $window.localStorage.setItem("contentType", "Orientamento");
	            }
	        }
	    ];

	};

	module.exports = adminCtrl;

/***/ },
/* 136 */
/***/ function(module, exports) {

	var articlesCtrl = function ($scope, $state, $window, Articles, type) {

	    Articles.getArticles($scope, $state, type, "articlesSpinner");

	    $scope.doRefresh = function () {
	        Articles.getArticles($scope, $state, type, "articlesSpinner");
	        $scope.$broadcast('scroll.refreshComplete');
	        $scope.$apply();
	    };

	};

	var attualitaCtrl = function ($scope, $state, $window, Articles) {
	    return articlesCtrl($scope, $state, $window, Articles, 'Giornalino');
	};

	var orientamentoCtrl = function ($scope, $state, $window, Articles) {
	    return articlesCtrl($scope, $state, $window, Articles, 'Orientamento');
	};

	module.exports = {
	    attualitaCtrl: attualitaCtrl,
	    orientamentoCtrl: orientamentoCtrl
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	var commentsCtrl = function ($scope, $window, Comments) {

	    $scope.$on('$ionicView.enter', function () {
	        $scope.doRefresh();
	    });

	    $scope.send = function (comment) {
	        if (comment != undefined) {
	            Comments.sendComment(comment, $window.localStorage.getItem("currentPost"));
	            comment = '';
	            $scope.doRefresh();
	        }
	        else {
	            alert('non puoi pubblicare un commento vuoto');
	        }
	    };

	    $scope.Comments = Comments.getComments($window, 'commentsSpinner');

	    $scope.doRefresh = function () {
	        $scope.Comments = Comments.getComments($window, 'commentsSpinner');
	        $scope.$broadcast('scroll.refreshComplete');
	        $scope.$apply();
	    };

	};

	module.exports = commentsCtrl;

/***/ },
/* 138 */
/***/ function(module, exports) {

	var linkCtrl = function ($scope, $window) {

	    $scope.OpenLink = function (url) {
	        cordova.InAppBrowser.open(url, '_system', 'location=yes');
	    };

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
	        {
	            "name": "Accesso Web Mail",
	            "url": "https://mail.google.com",
	            "icon": "icon ion-ios-email"
	        }
	    ];

	};

	module.exports = linkCtrl;

/***/ },
/* 139 */
/***/ function(module, exports) {

	var loginCtrl = function ($scope, $ionicLoading, $window, $state, Auth, InputFields) {

	    $scope.inputType = 'password';

	    $scope.UserLogin = function (username, password, RememberMe) {
	        if (InputFields.filledFields([username, password])) {
	            $ionicLoading.show({
	                template: 'Accesso in Corso...'
	            });
	            Auth.Login(username, password, $ionicLoading, $state);
	            $scope.SetRememberMe(RememberMe);
	        }
	        else {
	            alert('compila tutti i campi');
	        }
	    };

	    $scope.SetRememberMe = function (RememberMe) {

	        if (RememberMe) {
	            $window.localStorage.setItem("RememberMe", "true");
	        }

	    };

	    $scope.hideShowPassword = function () {
	        if ($scope.inputType == 'password')
	            $scope.inputType = 'text';
	        else
	            $scope.inputType = 'password';
	    };

	};

	module.exports = loginCtrl;

/***/ },
/* 140 */
/***/ function(module, exports) {

	var forumCtrl = function ($scope, $state, $window, Messages) {

	    $scope.$on('$ionicView.enter', function () {
	        Messages.getPosts($scope, $state, 'newsSpinner');
	    });

	    $scope.doRefresh = function () {
	        Messages.getPosts($scope, $state, 'newsSpinner');
	        $scope.$broadcast('scroll.refreshComplete');
	        $scope.$apply();
	    };

	};

	module.exports = forumCtrl;


/***/ },
/* 141 */
/***/ function(module, exports) {

	var articleCtrl = function ($scope, $stateParams, $state, $window, $ionicModal) {

	  $scope.$on('$ionicView.enter', function (e) {

	    $scope.title = $window.localStorage.getItem("title");
	    $scope.text = $window.localStorage.getItem("text");
	    $scope.img = $window.localStorage.getItem("img");
	    $scope.date = $window.localStorage.getItem("date");

	  });

	  $ionicModal.fromTemplateUrl('image-modal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function (modal) {
	    $scope.modal = modal;
	  });

	  $scope.openModal = function () {
	    $scope.modal.show();
	  };

	  $scope.closeModal = function () {
	    $scope.modal.hide();
	  };

	  $scope.$on('$destroy', function () {
	    $scope.modal.remove();
	  });

	};

	module.exports = articleCtrl;

/***/ },
/* 142 */
/***/ function(module, exports) {

	var signupCtrl = function ($scope, $ionicLoading, $location, $state, Auth, InputFields) {

	    $scope.inputType = 'password';

	    $scope.UserSignup = function (username, password, mail) {
	        if (InputFields.filledFields([username, password, mail])) {
	            $ionicLoading.show({
	                template: 'Registrazione in corso...'
	            });
	            Auth.Signup(username, password, mail, $ionicLoading, $state);
	        }
	        else {
	            alert('compila tutti i campi');
	        }
	    };

	    $scope.go = function () {
	        document.location.href = '#/login'
	    };

	    $scope.hideShowPassword = function () {
	        if ($scope.inputType == 'password')
	            $scope.inputType = 'text';
	        else
	            $scope.inputType = 'password';
	    };

	};

	module.exports = signupCtrl;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var Parse = __webpack_require__(3);
	var tabsCtrl = function ($scope, $ionicTabsDelegate, $ionicLoading, $window, $state, $rootScope, $ionicScrollDelegate, Auth) {
	    $scope.View = 'tab-link';
	    $scope.User = Parse.User.current().get('username');

	    $scope.$on('$ionicView.enter', function () {
	        $ionicScrollDelegate.scrollTop();
	        $scope.closeDrawer();
	    });

	    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
	        $rootScope.previousState = from.name;
	        if ($rootScope.previousState == 'comments') {
	            $rootScope.previousState = 'tab.giornalino'
	        }
	        $scope.User = Parse.User.current().get('username');
	    });

	    $scope.checkadmin = function () {

	        if (Parse.User.current()) {
	            if (Parse.User.current().get("isadmin")) {
	                return "ng-show";
	            } else {
	                return "ng-hide";
	            }
	        }
	    };

	    $scope.Disconnect = function () {
	        $ionicLoading.show({
	            template: 'Disconnessione in corso...'
	        });
	        Auth.Logout($ionicLoading, $state);
	        $state.go('login');
	        $window.localStorage.setItem("RememberMe", "false");
	    };

	    $scope.backBtnClick = function () {
	        $state.go($rootScope.previousState);
	    };

	    $scope.navigate = function (destination, ind) {
	        $scope.View = 'tab.' + destination;
	        document.getElementById('MainView1').style.display = 'none';
	        document.getElementById('MainView2').style.display = 'none';
	        document.getElementById('MainView3').style.display = 'none';
	        document.getElementById('MainView4').style.display = 'none';
	        document.getElementById('MainView5').style.display = 'none';
	        document.getElementById('MainView' + ind).style.display = 'block';
	    }
	};

	module.exports = tabsCtrl;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var Firebase = __webpack_require__(1);
	var Messages = function (DateHandler) {

	    this.sendPost = function (newData,loadingTemplate) {

	        var newPostKey = Firebase.database().ref().child('Comunicazioni').push().key;
	        var updates = {};
	        updates['/Comunicazioni/' + newPostKey] = newData;
	        Firebase.database().ref().update(updates).then(function () {
	            loadingTemplate.hide();
	            alert('Comunicazione Pubblicata con successo');
	        });
	    };

	    this.getPosts = function (scope, state, spinner) {

	        document.getElementById(spinner).style.display = 'block';

	        var ModelRef = Firebase.database().ref('Comunicazioni');
	        ModelRef.on('value', function (snapshot) {
	            var results = snapshot.val();
	            var posts = [];

	            Object.keys(results).map(function (item, i) {
	                posts[i] = {
	                    author: results[item].author,
	                    text: results[item].text,
	                    date: results[item].date,
	                    id: item,
	                    link: function () {
	                        window.localStorage.setItem("currentPost", item);
	                        state.go("comments");
	                    }
	                };
	            });

	            scope.Posts = posts.reverse();
	            scope.$apply();
	            document.getElementById(spinner).style.display = 'none';
	        });

	    }


	};

	module.exports = Messages;



/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var Parse = __webpack_require__(3);
	var Firebase = __webpack_require__(1);

	var Articles = function (DateHandler,StringHandler) {

	    this.sendArticle = function (newData, loadingTemplate) {
	        var ArticleType = window.localStorage.getItem('contentType');
	        var newPostKey = Firebase.database().ref().child(ArticleType).push().key;
	        var updates = {};
	        updates['/' + ArticleType + '/' + newPostKey] = newData;
	        Firebase.database().ref().update(updates).then(function () {
	            loadingTemplate.hide();
	            alert('Articolo Pubblicato con successo');
	        })
	    };

	    this.getArticles = function (scope,state,type,spinner) {

	        document.getElementById(spinner).style.display = 'block';
	        var ModelRef = Firebase.database().ref(type);

	        ModelRef.on('value', function (snapshot) {

	            var results = snapshot.val();
	            var articles = [];

	            Object.keys(results).map(function (item, i) {
	                var date = "Data";
	                articles[i] = {
	                    title: results[item].title,
	                    author: results[item].author,
	                    text: results[item].text,
	                    coverText: StringHandler.shorten(results[item].text, 100),
	                    img: results[item].img,
	                    date: results[item].date,
	                    id: item,
	                    link: function (destination) {
	                        window.localStorage.setItem("title", this.title);
	                        window.localStorage.setItem("text", this.text);
	                        window.localStorage.setItem("author", this.author);
	                        window.localStorage.setItem("img", this.img);
	                        window.localStorage.setItem("date", this.date);
	                        state.go(destination);
	                    }
	                };
	            });

	            scope.Articles =  articles.reverse();
	            scope.$apply();
	            document.getElementById(spinner).style.display = 'none';
	        });

	    };

	};

	module.exports = Articles;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var Parse = __webpack_require__(3);
	var Comments = function (DateHandler) {
	    this.sendComment = function (text, father) {

	        var Comment = new Parse.Object("Comment");

	        Comment.set("text", text);
	        Comment.set("Writer", Parse.User.current().get("username"));
	        Comment.set("father", father);
	        Comment.set("date", DateHandler.GetFullDate());

	        Comment.save(null, {
	            success: function (Comment) {
	                alert('commento pubblicato con successo');
	                UpdateCount("Comment", father);
	            },
	            error: function (Comment, error) {
	                alert('Failed to create new object, with error code: ' + error.Comment);
	            }
	        });
	    };

	    this.getComments = function (win,spinner) {

	        document.getElementById(spinner).style.display = 'block';
	        var Comment = new Parse.Object("Comment");
	        var comments = [];
	        var father = localStorage.getItem("currentPost");
	        var query = new Parse.Query(Comment);
	        query.equalTo("father", father);

	        query.find({
	            success: function (results) {

	                for (var i = 0; i < results.length; i++) {


	                    comments[results.length - 1 - i] = {
	                        name: results[i].get("Writer"),
	                        text: results[i].get('text'),
	                        father: results[i].get('father'),
	                        date: results[i].get('date')
	                    };
	                }
	                document.getElementById(spinner).style.display = 'none';
	            },
	            error: function (error) {
	                return;
	            }
	        });

	        return comments;
	    }
	};

	module.exports = Comments;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var Parse = __webpack_require__(3);
	var Auth = function () {

	    this.Signup = function (name, pass, mail, loadingtemplate, state) {
	        var user = new Parse.User();

	        user.set("username", name);
	        user.set("password", pass);
	        user.set("email", mail);
	        user.set("isadmin", false);

	        user.signUp(null, {
	            success: function (user) {
	                // Hooray! Let them use the app now.
	                loadingtemplate.hide();
	                alert("Creato Account Con successo");
	                state.go('login');
	            },
	            error: function (user, error) {
	                // Show the error message somewhere and let the user try again.
	                loadingtemplate.hide();
	                alert("Error: " + error.code + " " + error.message);
	            }
	        });
	    };

	    this.Login = function (name, pass, loadingtemplate, state) {
	        Parse.User.logIn(name, pass, {
	            success: function (user) {
	                loadingtemplate.hide();
	                state.go("tab.link");
	            },
	            error: function (user, error) {
	                loadingtemplate.hide();
	                alert("Error: " + error.code + " " + error.message);
	            }

	        });
	    };

	    this.Logout = function (loadingtemplate, state) {
	        Parse.User.logOut();
	        state.go('login');
	        loadingtemplate.hide();
	    };

	};

	module.exports = Auth;


/***/ },
/* 148 */
/***/ function(module, exports) {

	var DateHandler = function () {

	    var self = this;

	    this.GetCurrentDate = function () {

	        var today = new Date();
	        var dd = today.getDate();
	        var mm = today.getMonth() + 1; //January is 0!

	        if (dd < 10) {
	            dd = '0' + dd
	        }

	        switch (mm) {
	            case 1:
	                mm = "Gennaio";
	                break;
	            case 2:
	                mm = "Febbraio";
	                break;
	            case 3:
	                mm = "Marzo";
	                break;
	            case 4:
	                mm = "Aprile";
	                break;
	            case 5:
	                mm = "Maggio";
	                break;
	            case 6:
	                mm = "Giugno";
	                break;
	            case 7:
	                mm = "Luglio";
	                break;
	            case 8:
	                mm = "Agosto";
	                break;
	            case 9:
	                mm = "Settembre";
	                break;
	            case 10:
	                mm = "Ottobre";
	                break;
	            case 11:
	                mm = "Novembre";
	                break;
	            case 12:
	                mm = "Dicembre";
	                break;

	        }

	        today = dd + ' ' + mm;

	        return today;
	    };

	    this.GetFullDate = function () {

	        var now = new Date();
	        console.log(now);
	        var Hour = now.getHours();
	        var Minutes = now.getMinutes();

	        if (Minutes < 10) {
	            Minutes = "0" + Minutes;
	        }

	        return self.GetCurrentDate() + " alle " + Hour + ":" + Minutes;

	    }
	};

	module.exports = DateHandler;


/***/ },
/* 149 */
/***/ function(module, exports) {

	var InputFields = function () {

	    this.filledFields = function (fields) {
	        var check = true;
	        fields.map(function (item) {
	            if (item == undefined) {
	                check = false;
	            }
	        });
	        return check;
	    };

	};

	module.exports = InputFields;

/***/ },
/* 150 */
/***/ function(module, exports) {

	var StringHandler = function () {
	    this.shorten = function shorten(text, maxLength) {
	        var ret = text;
	        if (ret.length > maxLength) {
	            ret = ret.substr(0, maxLength3) + '…';
	        }
	        return ret;
	    }
	};

	module.exports = StringHandler;


/***/ },
/* 151 */,
/* 152 */,
/* 153 */
/***/ function(module, exports) {

	var config = {
	    apiKey: "AIzaSyBQcIrRUzpahFxeh3s3pzGNlP8QqyFsvn8",
	    authDomain: "app-liceoariostospallanz-d12b0.firebaseapp.com",
	    databaseURL: "https://app-liceoariostospallanz-d12b0.firebaseio.com",
	    storageBucket: "app-liceoariostospallanz-d12b0.appspot.com"
	};

	module.exports = config;

/***/ }
/******/ ]);