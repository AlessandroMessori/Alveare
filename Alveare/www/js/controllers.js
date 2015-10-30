angular.module('starter.controllers', [])

.controller('TabsCtrl', function ($scope,$ionicTabsDelegate) {

    $scope.checkadmin =  function(){
      if (Parse.User.current().get("isadmin")) {
         return "ng-show";
        } else {
           return "ng-hide";
        }
    };

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
})

.controller('homeCtrl', function ($scope) {

    $scope.title = "Sezione Amministratori ";
    $scope.message = "L'app e' ancora in fase di sviluppo ma se ti va puoi fare un giro nelle varie sezioni per avere un'idea delle funzionalita' dell'app completa";
    $scope.test =  function(){
    sendpost($("#messagetxt").val());
    };
})

.controller('giornalinoCtrl', function($scope) {
    $scope.message = "In questa sezione verranno pubblicati periodicamente contenuti del giornalino scolastico";
})


.controller('orientamentoCtrl', function($scope) {
    $scope.message = " In questa sezione potrai leggere le esperienze di studenti universitari in modo da avere un'idea di cosa ti aspetta";

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
