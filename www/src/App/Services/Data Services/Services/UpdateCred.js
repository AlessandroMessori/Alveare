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

    }

}

export default UpdateCred;
