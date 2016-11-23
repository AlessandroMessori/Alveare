import Firebase from "firebase";

class UpdateCred {

    constructor(Modals) {

        this.GetUserData = (user, callback) => {

            const ModelRef = Firebase.database().ref("Utenti");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();

                if (results != null) {
                    Object.keys(results).map(item=> {
                        if (results[item].mail.toLowerCase() == user.email) {
                            callback(results[item]);
                        }
                    });
                }
            });

        };

        this.Update = (user, email, displayName, password, callback) => {
            const oldMail = user.email;

            user.updateProfile({displayName})
                .then(()=> user.updateEmail(email)
                    .then(() =>
                        user.updatePassword(password)
                            .then(() => {
                                const ModelRef = Firebase.database().ref("Utenti");
                                ModelRef.once("value", snapshot => {
                                    const results = snapshot.val();

                                    if (results != null) {
                                        Object.keys(results).map(item=> {
                                            if (results[item].mail.toLowerCase() == oldMail) {
                                                let updates = results[item];
                                                updates.mail = email;
                                                ModelRef.child(item).update(updates).then(callback());
                                            }
                                        });
                                    }
                                });
                            })
                            .catch(()=>Modals.ResultTemplate("La password deve avere almeno 6 caratteri"))
                    )
                    .catch(()=>Modals.ResultTemplate("Mail non valida o già in uso da altro account"))
                )

        };
    }

}

export default UpdateCred;
