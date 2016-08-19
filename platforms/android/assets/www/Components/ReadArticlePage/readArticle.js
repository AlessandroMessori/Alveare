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