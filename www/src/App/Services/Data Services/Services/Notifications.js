"use strict";
import Firebase from "firebase";
import credentials from "../../../../../credentials";

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

    getTokensByID(id, cb) {
        const dbRef = Firebase.database().ref();
        const path = "Utenti/" + id + "/token";

        dbRef.child(path).once("value", snapshot => {
            const results = snapshot.val();
            cb(results);
        });
    }

    deleteToken(id) {
        const dbRef = Firebase.database().ref();
        const path = "Utenti/" + id + "/token";

        const prom = new Promise((resolve, reject) => {
            dbRef.child(path).remove()
                .then(() => resolve())
                .catch(() => reject());
        });

        return prom;
    }

    saveToken(token) {
        const dbRef = Firebase.database().ref();
        const user = Firebase.auth().currentUser;
        const path = "Utenti/" + user.uid + "/token";
        let updates = {};
        updates[path] = token;
        dbRef.update(updates);
    }

    onMessage(cb) {
        return this.messaging.onNotification(data => {
            if (data.wasTapped) {
                cb(data)
            }
        });
    }

    send(to, title, body, params) {

        this.$http.defaults.headers.common.Authorization = "key=" + credentials.newApiKey;

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
                    "sound": "default",
                    "click_action": "FCM_PLUGIN_ACTIVITY",
                },
                "data": params,
                "to": to
            }
        }).then(() => console.log("successo"), () => console.log("errore"));
    }

}

export default Notifications;

