angular.module('starter.controllers', ['ionic'])

.controller('TabsCtrl', function ($scope,$ionicTabsDelegate,$ionicLoading,$window,$ionicPlatform) {

  $ionicPlatform.ready(function() {
    ionic.Platform.fullScreen();
  });

    $scope.checkadmin =  function(){

      if (Parse.User.current()) {
          if(Parse.User.current().get("isadmin")){
         return "ng-show";
        } else {
           return "ng-hide";
        }
      }
    }

 $scope.Disconnect = function(){
   $ionicLoading.show({
       template: 'Disconnessione in corso...'
     });
     Logout($ionicLoading);
     $window.localStorage.setItem("RememberMe","false");
 }


})

.controller('homeCtrl', function ($scope,$state,$window) {

    $scope.title = "Sezione Amministratori ";

    $scope.Links = [
      {
        "name" : "Scrivi Avviso",
        "url" : "tab.send_message",
        "direct" : function(){
          $state.go(this.url);
        },
      },
      {
        "name" : "Scrivi Articolo d'attualità",
        "url" : "tab.add_article",
        "direct" : function(){
          $state.go(this.url);
          $window.localStorage.setItem("contentType","Article");
        },
      },
      {
        "name" : "Scrivi Articolo d'orientamento",
        "url" : "tab.add_article",
        "direct" : function(){
           $state.go(this.url);
           $window.localStorage.setItem("contentType","Orientamento");
        },
      },
    ];

})

.controller('orientamentoCtrl', function($scope,$state,$window) {

  $scope.$on('$ionicView.enter',function(){
    if($scope.Articles != getArticles($state,$window,"Orientamento")) { $scope.doRefresh();}
  });

    $scope.Articles  = getArticles($state,$window,"Orientamento");

    $scope.doRefresh = function () {

      $scope.Articles = getArticles($state,$window,"Orientamento");
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();

    };

})

.controller('giornalinoCtrl', function($scope,$state,$window) {

  $scope.$on('$ionicView.enter',function(){
    if($scope.Articles != getArticles($state,$window,"Article")) { $scope.doRefresh();}
  });


    $scope.Articles  = getArticles($state,$window,"Article");

    $scope.doRefresh = function () {

      $scope.Articles = getArticles($state,$window,"Article");
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();
    };

})

.controller('forumCtrl', function($scope,$state,$window) {
    $scope.Posts =  getPosts($window,$state);

    $scope.$on('$ionicView.enter',function(){
      if($scope.Posts != getPosts($window,$state)) { $scope.doRefresh();}
    });

    $scope.doRefresh = function() {
      $scope.Posts = getPosts($window,$state);
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$apply()
};



})

.controller('linkCtrl', function($scope,$window) {

    $scope.OpenLink =  function (url){
       cordova.InAppBrowser.open(url, '_system','location=yes');
    }

    $scope.Links = [
      {
        "name" : "Registro Elettronico",
        "url" : "https://spallanzani-re-sito.registroelettronico.com/login/?next=/select-student/",
        "icon" : "icon ion-ios-book-outline"
      },
      {
        "name" : "Quaderno Elettronico",
        "url" : "http://2.229.79.199/quaderno/index.php",
        "icon" : "icon ion-ios-book"
      },
      {
        "name" : "Sito Web Della Scuola",
        "url" : "http://www.liceoariostospallanzani-re.gov.it/",
        "icon" :"icon ion-ios-world"
      },
    ];


})

.controller('add_articleCtrl', function($scope,$window) {

    $scope.GetPic = function(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50 ,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY });

     function onSuccess(imageData) {
          $scope.imgData = imageData;
        }

    function onFail(message) {
      alert('Non sono riuscito a reperire la foto perchè ' + message);
      }

    }

    $scope.UploadArticle = function(){
      sendArticle($("#titletxt").val(),"autore",$("#texttxt").val(),$scope.imgData,$window.localStorage.getItem("contentType"));
      $("#titletxt").val("");
      $("#texttxt").val("");
    }

})

.controller('send_messageCtrl', function($scope) {
     $scope.test =  function(){
    sendpost($("#messagetxt").val());
      $("#messagetxt").val("");
    };

})

.controller('articleCtrl', function($scope,$stateParams,$state,$window) {

    $scope.$on('$ionicView.enter',function(e){

     $scope.title = $window.localStorage.getItem("title");
     $scope.text = $window.localStorage.getItem("text");
     $scope.img = $window.localStorage.getItem("img");
     $scope.date = $window.localStorage.getItem("date");

    });

})

.controller('commentsCtrl', function($scope,$window) {
   $scope.send = function(){
      sendComment($("#commenttxt").val(),$window.localStorage.getItem("currentPost"));
      $("#commenttxt").val("");
      $scope.doRefresh();
   }

   $scope.$on('$ionicView.enter',function(){
     $scope.doRefresh();
   });

   $scope.Comments = getComments($window);


    $scope.doRefresh = function() {
      $scope.Comments = getComments($window);
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();
};

})

.config(['$ionicConfigProvider',function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');

}]);
