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

    $scope.goForward = function () {
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1) {
        $ionicTabsDelegate.select(selected + 1);
    }
}

  $scope.goBack = function () {
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1 && selected != 0) {
        $ionicTabsDelegate.select(selected - 1);
    }
  }

  $scope.goBackAdmin = function(){
     if (Parse.User.current().get("isadmin")){
        $scope.goBack();
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

.controller('homeCtrl', function ($scope,$state) {

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
        },
      }, 
      {
        "name" : "Scrivi Articolo di orientamento",
        "url" : "tab.add_article",
        "direct" : function(){
           $state.go(this.url);
        },
      },
    ];

})

.controller('giornalinoCtrl', function($scope) {
    $scope.message = "In questa sezione verranno pubblicati periodicamente articoli di attualità";
})

.controller('orientamentoCtrl', function($scope) {
    $scope.message = " In questa sezione potrai leggere le esperienze di studenti universitari in modo da avere un'idea di cosa ti aspetta";

    $scope.Articles  = [{}];
})

.controller('forumCtrl', function($scope) {
    $scope.description = "Questo e' un luogo dove si puo' parlare e discutere di argomenti riguardanti la scuola";
    $scope.Posts =  getPosts();



    $scope.doRefresh = function() {
      $scope.Adv = false;
      $scope.Posts = getPosts();
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$apply()
      $scope.Adv = true;

};
})


.controller('linkCtrl', function($scope,$window) {
    $scope.message = " In questa sezione potrai leggere le esperienze di studenti universitari in modo da avere un'idea di cosa ti aspetta";

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

.controller('add_articleCtrl', function($scope) {
     $scope.test =  function(){

    };

})

.controller('send_messageCtrl', function($scope) {
     $scope.test =  function(){
    sendpost($("#messagetxt").val());
      $("#messagetxt").val("");
    };

})

.config(['$ionicConfigProvider',function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
  
}]);
