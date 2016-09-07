var linkCtrl = function ($scope, StaticData) {

    $scope.OpenLink = function (url) {
        cordova.InAppBrowser.open(url, '_system', 'location=yes');
    };

    $scope.Links = StaticData.links;

};

module.exports = linkCtrl;