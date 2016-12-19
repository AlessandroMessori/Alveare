// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
import Firebase from "firebase";
import {messagingSenderId} from "./credentials";
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
Firebase.initializeApp({messagingSenderId});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = Firebase.messaging();