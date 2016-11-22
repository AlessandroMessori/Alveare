import Firebase from "firebase";

class UpdateCred {

    constructor() {

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

        this.Update = (user, email, password) => {

            const baseRef = Firebase.database().ref("Utenti");
            user.updateProfile({email, password})
                .then(()=> {
                });
        }

    }

}

export default UpdateCred;
