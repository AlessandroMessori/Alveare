var PlatformHandler = function () {

    this.is = function (platform, callback1, callback2) {

        if (callback1 == undefined) {
            callback1 = function () {
                
            };
        }

        if (callback2 == undefined) {
            callback2 = function () {
                
            };
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
    };

};

module.exports = PlatformHandler;