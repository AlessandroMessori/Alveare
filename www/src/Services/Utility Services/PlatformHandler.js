class PlatformHandler {
    is(platform, callback1, callback2) {

        if (callback1 == undefined) {
            callback1 = ()=> {
            };
        }

        if (callback2 == undefined) {
            callback2 = ()=> {
            };
        }

        document.addEventListener("deviceready", () => {
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

}

export default PlatformHandler;