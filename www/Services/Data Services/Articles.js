var Firebase = require('firebase');
var Articles = function (DateHandler, StringHandler, Modals, FileHandler) {

    this.sendArticle = function (newData, imgUrl, ArticleType) {
        var newPostKey = Firebase.database().ref().child(ArticleType).push().key;
        var updates = {};

        updates['/' + ArticleType + '/' + newPostKey] = newData;
        Firebase.database().ref().update(updates);

        FileHandler.getFileBlob(imgUrl, function (blob) {
            var imagesRef = Firebase.storage().ref('img').child(newPostKey);
            imagesRef.put(blob)
                .then(function () {
                    var pdfRef = Firebase.storage().ref('pdf').child(newData.pdf.name);
                    pdfRef.put(newData.pdf.binary).then(function () {
                        Modals.ResultTemplate("Articolo Pubblicato con Successo");
                    });
                })
                .catch(function () {
                    Modals.ResultTemplate("Errore nella Pubblicazione dell' Articolo");
                });
        });
    };

    this.getArticles = function (scope, rootScope, state, fileHandler, type, spinner) {

        document.getElementById(spinner).style.display = 'block';
        var ModelRef = Firebase.database().ref(type);

        ModelRef.on('value', function (snapshot) {

            var results = snapshot.val();
            var articles = [];

            if (results != null) {

                var imgs = Firebase.storage().ref('img');
                var pdfs = Firebase.storage().ref('pdf');
                var keys = Object.keys(results);

                keys.map(function (item, i) {

                    imgs.child(item).getDownloadURL().then(function (imgUrl) {

                        pdfs.child(results[item].pdf.name).getDownloadURL().then(function (pdfUrl) {

                            articles[i] = {
                                title: results[item].title,
                                author: results[item].author,
                                text: results[item].text,
                                coverText: StringHandler.shorten(results[item].text, 100),
                                img: imgUrl,
                                date: results[item].date,
                                id: item,
                                pdf: pdfUrl,
                                link: function (destination) {
                                    rootScope.currentPost = item;
                                    state.go(destination);
                                },
                                openPdf: function () {
                                    fileHandler.openFile(pdfUrl);
                                }
                            };

                            if (i == keys.length - 1) {
                                scope.Articles = articles;
                                scope.$apply();
                                document.getElementById(spinner).style.display = 'none';
                            }
                        });
                    });
                });
            }
        });

    };

};

module.exports = Articles;

