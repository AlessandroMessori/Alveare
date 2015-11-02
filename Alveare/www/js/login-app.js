var loginapp = angular.module('login',['ionic']);

loginapp.controller('loginCtrl', function($scope, $ionicLoading) {


   $scope.UserLogin = function(){
     $ionicLoading.show({
       template: 'Accesso in Corso...'
     });
     Login($scope.username,  $scope.password,$ionicLoading);

  };

});

var signupapp = angular.module('signup',['ionic']);

signupapp.controller('signupCtrl', function($scope,$ionicLoading) {

   $scope.UserSignup = function(){
     $ionicLoading.show({
       template: 'Registrazione in corso...'
     });
     Signup($scope.username,$scope.password,$scope.mail,$ionicLoading);
   };
});
