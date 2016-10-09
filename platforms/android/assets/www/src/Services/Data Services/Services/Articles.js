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


                                Firebase.storage().ref("Profili").child(results[item].userMail).getDownloadURL()
                                    .then(url=> {
                                        this.setArticleProperties(scope, rootScope, state, articles, results[item], item, i, imgUrl, pdfUrl, url, keys.length, spinner);
                                    })
                                    .catch(()=> {
                                        const defaultImage = "dist/Images/user.png";
                                        this.setArticleProperties(scope, rootScope, state, articles, results[item], item, i, imgUrl, pdfUrl, defaultImage, keys.length, spinner);
                                    });

                            });

                        });
                    });
                }

            });

        };


        this.setArticleProperties = (scope, rootScope, state, articles, results, item, index, imgUrl, pdfUrl, url, length, spinner)=> {
            articles[index] = {
                title: results.title,
                author: results.author,
                text: results.text,
                avatar: url,
                coverText: StringHandler.shorten(results.text, 100),
                img: imgUrl,
                date: results.date,
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

            if (index == length - 1) {
                scope.Articles = articles;
                scope.$apply();
                document.getElementById(spinner).style.display = "none";
            }
        };

    }


}

export default Articles;

