import Firebase from "firebase";

class Profile {

    constructor($ionicLoading, FileHandler, Modals) {

        this.updateProfile = (imgData)=> {
            const User = Firebase.auth().currentUser;
            $ionicLoading.show({template: "aggiornamento in corso"});
            FileHandler.getFileBlob(imgData, blob => {
                const imagesRef = Firebase.storage().ref("profiles").child(User.email);
                imagesRef.put(blob)
                    .then((snapshot) => {
                        User.updateProfile({photoURL: snapshot.downloadURL})
                            .then(
                                ()=>Modals.ResultTemplate("Profilo Aggiornato"),
                                ()=>Modals.ResultTemplate("Errore nell' aggiornamento"),
                            );
                    });
            });
        };


    }

}

export default Profile;