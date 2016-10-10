import Firebase from "firebase";

class Reports {

    constructor(Modals) {

        this.sendReport = (newData) => {

            const newPostKey = Firebase.database().ref().child("Segnalazioni").push().key;

            let updates = {};
            updates["/Segnalazioni/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(() => Modals.ResultTemplate("Grazie Della Segnalazione!"))
                .catch(() => Modals.ResultTemplate("Errore nell' Invio della Segnalazione"));
        };

        this.getReports = (scope, spinner)=> {

            document.getElementById(spinner).style.display = "block";

            const ModelRef = Firebase.database().ref("Segnalazioni");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();
                let reports = [];

                if (results != null) {
                    Object.keys(results).map(item=> {

                        const report = {
                            author: results[item].author,
                            text: results[item].text,
                            date: results[item].date,
                            id: item
                        };

                        reports.push(report);
                    });
                }

                scope.Reports = reports;
                document.getElementById(spinner).style.display = "none";
            });

        };

    }


}

export default Reports;