import "./Ionic/ionic.bundle.min";
import "../index.html";
import "./App/main";

import Firebase from "firebase";
import credentials from "../credentials";
Firebase.initializeApp(credentials);

const messaging = Firebase.messaging();

messaging.requestPermission()
    .then(() => {
        console.log('Notification permission granted.');
        messaging.getToken()
            .then(currentToken => console.log(currentToken))
            .catch(err => console.log(err));
    })
    .catch((err) => {
        console.log('Unable to get permission to notify.', err);
    });


