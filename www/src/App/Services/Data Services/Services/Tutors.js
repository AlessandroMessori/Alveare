import Firebase from "firebase";

class Tutors {

    constructor(Modals) {

        this.sendTutor = (newData) => {
            const newPostKey = Firebase.database().ref().child("Tutors").push().key;
            let updates = {};
            updates["/Tutors/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(()=>Modals.ResultTemplate("Gruppo di Studio create con Successo"))
                .catch(()=>Modals.ResultTemplate("Errore nella creazione del Gruppo di Studio"));
        };

        this.getTutors = (scope, spinner) => {

            document.getElementById(spinner).style.display = "block";
            let tutors = [];

            const ModelRef = Firebase.database().ref("Tutors");

            ModelRef.on("value", snapshot => {
                const results = snapshot.val();

                if (results != null) {
                    Object.keys(results).map((item) => {
                        tutors.push(results[item]);
                    });
                }
            });
        };


    }

}

export default Tutors;