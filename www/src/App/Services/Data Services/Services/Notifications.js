"use strict";
import Firebase from "firebase";

class Notifications {

    get api_url() {
        return "https://fcm.googleapis.com/fcm/send";
    }

    get messaging() {
        return Firebase.messaging();
    }

    constructor($http) {
        this.$http = $http;
    }

    getToken(cb) {
        this.messaging.requestPermission()
            .then(() => {
                this.messaging.getToken()
                    .then(currentToken => cb(currentToken))
                    .catch(err => alert(err));
            })
            .catch(err => alert("Unable to get permission to notify. " + err));
    }

    saveToken(token) {
        console.log(token);
    }

    send(token, key, title, body) {
        this.$http({
            url: this.api_url,
            dataType: "json",
            method: "GET",
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

