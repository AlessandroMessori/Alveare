var forumCtrl = function ($scope, $state, $window, $http, Messages) {

    $scope.$on('$ionicView.enter', function () {
        Messages.getPosts($scope, $state, 'newsSpinner');
    });

    $scope.openFile = function (file) {
        window.handleDocumentWithURL(
            function (msg) {
                console.log('success: ' + msg)
            }, // success handler
            function (msg) {
                alert('error: ' + msg)
            },   // error handler,
            file.toLowerCase()
        );
    }
};

module.exports = forumCtrl;
