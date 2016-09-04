var likesCtrl = function ($scope, Likes) {

    $scope.$on('$ionicView.enter', function () {
        Likes.getLikers(window.localStorage.getItem('currentPost'), $scope, 'likesSpinner');
    });

    Likes.getLikers(window.localStorage.getItem('currentPost'), $scope, 'likesSpinner');

};

module.exports = likesCtrl;
