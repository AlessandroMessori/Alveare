import Firebase from "firebase";

class Profile {

    constructor($ionicLoading, FileHandler, Modals) {

        this.updateProfile = imgData => {
            const User = Firebase.auth().currentUser;
            $ionicLoading.show({template: "aggiornamento in corso"});
            FileHandler.getFileBlob(imgData, blob => {
                const imagesRef = Firebase.storage().ref("Profili").child(User.email);
                imagesRef.put(blob)
                    .then((snapshot) => {
                        User.updateProfile({photoURL: snapshot.downloadURL})
                            .then(
                                ()=>Modals.ResultTemplate("Profilo Aggiornato"),
                                ()=>Modals.ResultTemplate("Errore nell' aggiornamento")
                            );
                    });
            });
        };

        this.updateStatus = (newStatus, profile)=> {

            let updates = {};
            updates["/Stati/" + profile] = newStatus;
            Firebase.database().ref().update(updates)
                .then(() => Modals.ResultTemplate("Stato Aggiornato"))
                .catch(() => Modals.ResultTemplate("Impossibile Aggiornare lo Stato"));
        };

        this.getStatus = (userName, scope) => {
            //scope.userStatus = "Nessuno Stato";
            const ModelRef = Firebase.database().ref("Stati/" + userName);
            ModelRef.on("value", snapshot => {
                scope.userStatus = snapshot.val();
                scope.$apply();
            });
        };
    }

}
export default Profile;
