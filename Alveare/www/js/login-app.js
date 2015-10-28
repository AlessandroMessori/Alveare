var loginapp = angular.module('login',[]);

loginapp.controller('loginCtrl', ['$scope', function($scope) {

   $scope.UserLogin = function(){Login($scope.username,  $scope.password)};
}]);

var signupapp = angular.module('signup',[]);

signupapp.controller('signupCtrl', ['$scope', function($scope) {

   $scope.UserSignup = function(){Signup($scope.username,  $scope.password, $scope.mail)};
}]);
