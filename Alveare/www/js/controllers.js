
/* global getPosts */
angular.module('starter.controllers', ['ionic'])

.controller('TabsCtrl', function ($scope,$ionicTabsDelegate,$ionicLoading,$window) {

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

.controller('homeCtrl', function ($scope) {

    $scope.title = "Sezione Amministratori ";
    $scope.message = "L'app e' ancora in fase di sviluppo ma se ti va puoi fare un giro nelle varie sezioni per avere un'idea delle funzionalita' dell'app completa";
    $scope.test =  function(){
    sendpost($("#messagetxt").val());
      $("#messagetxt").val("");
    };
})

.controller('giornalinoCtrl', function($scope) {
    $scope.message = "In questa sezione verranno pubblicati periodicamente contenuti del giornalino scolastico";
})


.controller('orientamentoCtrl', function($scope) {
    $scope.message = " In questa sezione potrai leggere le esperienze di studenti universitari in modo da avere un'idea di cosa ti aspetta";

    $scope.Articles  = [{}];
})

.controller('forumCtrl', function($scope) {
    $scope.description = "Questo e' un luogo dove si puo' parlare e discutere di argomenti riguardanti la scuola";
    $scope.Posts =  getPosts();

    $scope.doRefresh = function() {
      $scope.Posts = getPosts();
      $scope.$broadcast('scroll.refreshComplete');
      $scope.$apply()
};
});


