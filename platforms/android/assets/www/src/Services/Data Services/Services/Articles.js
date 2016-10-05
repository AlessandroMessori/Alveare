import Firebase from "firebase";

class Articles {

    constructor($ionicLoading, StringHandler, Modals, FileHandler) {

        this.sendArticle = (newData, imgUrl, ArticleType) => {
            const newPostKey = Firebase.database().ref().child(ArticleType).push().key;
            let updates = {};

            updates["/" + ArticleType + "/" + newPostKey] = newData;
            Firebase.database().ref().update(updates);

            FileHandler.getFileBlob(imgUrl, blob => {
                const imagesRef = Firebase.storage().ref("img").child(newPostKey);
                imagesRef.put(blob)
                    .then(() => {
                        const pdfRef = Firebase.storage().ref("pdf").child(newData.pdf.name);
                        pdfRef.put(newData.pdf.binary)
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

                    const imgs = Firebase.storage().ref("img");
                    const pdfs = Firebase.storage().ref("pdf");
                    const keys = Object.keys(results);

                    keys.map((item, i)=> {

                        imgs.child(item).getDownloadURL().then(imgUrl => {

                            pdfs.child(results[item].pdf.name).getDownloadURL().then(pdfUrl=> {

                                articles[i] = {
                                    title: results[item].title,
                                    author: results[item].author,
                                    text: results[item].text,
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

