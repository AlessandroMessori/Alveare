var PlatformHandler = function () {

    this.is = function (platform, callback1, callback2) {

        if (callback1 == undefined) {
            callback1 = null;
        }

        if (callback2 == undefined) {
            callback2 = null;
        }

        document.addEventListener("deviceready", function () {
            if (window.cordova) {
                if (device.platform == platform) {
                    callback1();
                }
                else {
                    callback2();
                }
            }
        }, false);
    }

};

module.exports = PlatformHandler;