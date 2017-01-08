"use strict";
import Firebase from "firebase";

class Links {

    getStoreLink(platform, cb) {
        const linkRef = Firebase.database().ref("Link");
        linkRef.child(platform).once("value", snapshot => cb(snapshot.val()));
    }

}

export default Links;