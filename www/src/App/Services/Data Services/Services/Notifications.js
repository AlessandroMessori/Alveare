"use strict";
class Notifications {

    get api_url() {
        return "https://fcm.googleapis.com/fcm/send";
    }

    get messaging() {
        return FCMPlugin;
    }

    constructor($http) {
        this.$http = $http;
    }

    getToken(cb) {
        this.messaging.getToken(currentToken => cb(currentToken), err => alert(err));
    }

    saveToken(token) {
        console.log(token);
    }

    onMessage() {
        this.messaging.onNotification(
            data => {
                if (data.wasTapped) {
                    alert(JSON.stringify(data));
                } else {
                    alert(JSON.stringify(data));
                }
            },
            msg => console.log("onNotification callback successfully registered: " + msg),
            err => console.log("Error registering onNotification callback: " + err)
        );
    }

    send(token, key, title, body) {
        this.$http({
            url: this.api_url,
            dataType: "json",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": {
                    "key": key
                }
            },
            data: {
                "notification": {
                    "title": title,
                    "body": body,
                    "click_action": "https://dummypage.com"
                },
                "to": token
            }

        }).then(function successCallback() {
            console.log("success");
        }, function errorCallback() {
            console.log("failure");
        });
    }

}

export default Notifications;

