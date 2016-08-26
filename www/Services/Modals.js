var Modals = function ($ionicLoading) {
    this.ResultTemplate = function (text) {
        $ionicLoading.hide();
        $ionicLoading.show({
            template: text
        });
        window.setTimeout(function () {
            $ionicLoading.hide();
        }, 2000);
    }
};

module.exports = Modals;
