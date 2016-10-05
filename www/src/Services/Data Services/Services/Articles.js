import Firebase from "firebase";

class Articles {

    constructor($ionicLoading, StringHandler, Modals, FileHandler) {

        this.sendArticle = (newData, imgUrl, ArticleType) => {
            const newPostKey = Firebase.database().ref().child(ArticleType).push().key;
            let updates = {};

            updates["/" + ArticleType + "/" + newPostKey] = newData;
            Firebase.database().ref().update(updates);

            FileHandler.getFileBlob(imgUrl, blob => {
                const storageRef = Firebase.storage().ref(ArticleType).child(newPostKey);
                storageRef.child("img").put(blob)
                    .then(() => {
                        storageRef.child("pdf").put(newData.pdf.binary)
                            .then(()=>Modals.ResultTemplate("Articolo Pubblicato con Successo"))
                            .catch(()=>Modals.ResultTemplate("Errore nella Pubblicazione dell' Articolo"));
                    });
            });
        };

        this.getArticles = (scope, rootScope, state, type, spinner) => {

            document.getElementById(spinner).style.display = "block";
            const ModelRef = Firebase.database().ref(type);

            ModelRef.on("value", snapshot => {

                const results = snapshot.val();
                let articles = [];

                if (results != null) {
                    const keys = Object.keys(results);

                    keys.map((item, i)=> {


                        const strRef = Firebase.storage().ref(type).child(item);
                        strRef.child("img").getDownloadURL().then(imgUrl => {

                            strRef.child("pdf").getDownloadURL().then(pdfUrl=> {

                                articles[i] = {
                                    title: results[item].title,
                                    author: results[item].author,
                                    text: results[item].text,
                                    avatar: results[item].avatar,
                                    coverText: StringHandler.shorten(results[item].text, 100),
                                    img: imgUrl,
                                    date: results[item].date,
                                    id: item,
                                    pdf: pdfUrl,
                                    link(destination) {
                                        rootScope.currentPost = item;
                                        state.go(destination);
                                    },
                                    openPdf() {
                                        FileHandler.openFile(pdfUrl, $ionicLoading);
                                    }
                                };

                                if (i == keys.length - 1) {
                                    scope.Articles = articles;
                                    scope.$apply();
                                    document.getElementById(spinner).style.display = "none";
                                }
                            });
                        });
                    });
                }
            });

        };

    }

}

export default Articles;

