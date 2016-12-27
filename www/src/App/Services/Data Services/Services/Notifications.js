"use strict";
import Firebase from "firebase";
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
        const dbRef = Firebase.database().ref();
        const user = Firebase.auth().currentUser;
        let updates = {};
        let tokens = [token];

        updates["Utenti/" + user.uid + "/tokens"] = tokens;

        dbRef.update(updates);
    }

    onMessage(cb) {
        return this.messaging.onNotification(data => cb(data));
    }

    send(token, key, title, body) {

        this.$http.defaults.headers.common.Authorization = "key=" + key;

        this.$http({
            url: this.api_url,
            dataType: "json",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                "notification": {
                    "title": title,
                    "body": body,
                    "click_action": "https://dummypage.com"
                },
                "to": token
            }

        })
    }

}

export default Notifications;

