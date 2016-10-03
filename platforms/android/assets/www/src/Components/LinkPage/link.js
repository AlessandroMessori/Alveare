class linkCtrl {
    constructor($scope, StaticData) {

        $scope.Links = StaticData.links;

        $scope.OpenLink = (url) => cordova.InAppBrowser.open(url, "_system", "location=yes");

    }
}

export default linkCtrl;