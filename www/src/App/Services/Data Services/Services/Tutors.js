import Firebase from "firebase";

class Tutors {

    constructor(Modals) {

        this.sendTutor = (newData) => {
            const newPostKey = Firebase.database().ref().child("Tutors").push().key;
            let updates = {};
            updates["/Tutors/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(() => Modals.ResultTemplate("Gruppo di Studio creato con Successo"))
                .catch(() => Modals.ResultTemplate("Errore nella creazione del Gruppo di Studio"));
        };

        this.getTutors = (scope, rootScope, state, spinner) => {

            document.getElementById(spinner).style.display = "block";
            let tutors = [];

            const ModelRef = Firebase.database().ref("Tutors");

            ModelRef.once("value", snapshot => {
                const results = snapshot.val();

                if (results != null) {
                    Object.keys(results).map((item, i) => {
                        Firebase.storage().ref("Profili").child(results[item].authorMail).getDownloadURL()
                            .then(url => this.setTutorProperties(scope, rootScope, state, results, item, i, tutors, spinner, url))
                            .catch(() => {
                                const defaultImage = require("../../../../Images/user.jpg");
                                this.setTutorProperties(scope, rootScope, state, results, item, i, tutors, spinner, defaultImage);
                            });
                    });
                }
            });
        };

        this.setTutorProperties = (scope, rootScope, state, results, item, i, tutors, spinner, url) => {

            if ((new Date()) < new Date(results[item].date)) {

                tutors.push({
                    authorName: results[item].authorName,
                    avatar: url,
                    description: results[item].description,
                    cls: results[item].cls,
                    sect: results[item].sect,
                    deadLine: results[item].deadLine,
                    date: results[item].date,
                    linkToProfile() {
                        rootScope.currentProfile = {
                            name: results[item].authorName,
                            avatar: url,
                            mail: results[item].authorMail
                        };
                        rootScope.profileUpdatable = false;
                        state.go("updateProfile");
                    },
                });

            }

            scope.Tutors = tutors;
            window.setTimeout(() => document.getElementById(spinner).style.display = "none", 500);
            scope.$apply();
        };
    }

}

export default Tutors;