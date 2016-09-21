var linkCtrl = function ($scope, StaticData) {

    $scope.Links = StaticData.links;

    $scope.OpenLink = function (url) {
        cordova.InAppBrowser.open(url, '_system', 'location=yes');
    };

};

module.exports = linkCtrl;