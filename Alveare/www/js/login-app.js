var loginapp = angular.module('login', ['ionic']);

loginapp.controller('loginCtrl', function ($scope, $ionicLoading, $window) {

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

var signupapp = angular.module('signup', ['ionic']);

signupapp.controller('signupCtrl', function ($scope, $ionicLoading, $location) {

  $scope.UserSignup = function () {
    $ionicLoading.show({
      template: 'Registrazione in corso...'
    });
    Signup($scope.username, $scope.password, $scope.mail, $ionicLoading);
  };

  $scope.go = function () {
    document.location.href = 'login.html'
  };
});
