import Firebase from "firebase";
import Async from "async";

class Users {

    constructor(Modals) {

        this.GetUserData = (user, callback) => {

            const ModelRef = Firebase.database().ref("Utenti");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();

                if (results != null) {
                    Object.keys(results).map(item => {
                        if (results[item].mail.toLowerCase() == user.email) {
                            callback(results[item]);
                        }
                    });
                }
            });

        };

        this.setUserData = (oldMail, email, uid) => {
            const ModelRef = Firebase.database().ref("Utenti");
            ModelRef.once("value", snapshot => {
                const results = snapshot.val();
                let removed = true;

                if (results != null) {
                    Object.keys(results).map(item => {
                        if (results[item].mail.toLowerCase() === oldMail && removed) {
                            let updates = results[item];
                            updates.mail = email;
                            removed = false;
                            ModelRef.child(item).remove();
                            ModelRef.child(uid).set(updates);
                        }
                    });
                }
            });
        };

        this.Update = (user, email, displayName, password, callback) => {
            const oldMail = user.email;

            user.updateProfile({displayName}).then(() => user.updateEmail(email).then(
                () => Async.parallel(
                    [
                        cb => user.updatePassword(password).then(() => cb()),
                        cb => {
                            this.setUserData(oldMail, email, user.uid);
                            cb();
                        }
                    ],
                    err => {
                        if (err) return err;
                        callback();
                    }),
                error => Modals.ResultTemplate(error)
            ));


        };

    }

}

export default Users;
