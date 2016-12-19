"use strict";

class ServiceWorker {

    register(path, cb) {

        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register(path)
                    .then(registration => cb(registration))
                    .catch(err => alert(err));
            });
        }

    }
}

export default ServiceWorker;
