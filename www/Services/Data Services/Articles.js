var Firebase = require('firebase');
var Articles = function (DateHandler, StringHandler, Modals, FileHandler) {

    this.sendArticle = function (newData, imgUrl) {
        var ArticleType = window.localStorage.getItem('contentType');
        var newPostKey = Firebase.database().ref().child(ArticleType).push().key;
        var updates = {};

        updates['/' + ArticleType + '/' + newPostKey] = newData;
        Firebase.database().ref().update(updates);

        FileHandler.getFileBlob(imgUrl, function (blob) {
            var imagesRef = Firebase.storage().ref('img').child(newPostKey);
            imagesRef.put(blob)
                .then(function () {
                    Modals.ResultTemplate("Articolo Pubblicato con Successo");
                })
                .catch(function () {
                    Modals.ResultTemplate("Errore nella Pubblicazione dell' Articolo");
                });
        });
    };

    this.getArticles = function (scope, state, fileHandler, type, spinner) {

        document.getElementById(spinner).style.display = 'block';
        var ModelRef = Firebase.database().ref(type);

        ModelRef.on('value', function (snapshot) {

            var results = snapshot.val();
            var articles = [];

            if (results != null) {

                var str = Firebase.storage().ref('img');
                var keys = Object.keys(results);

                keys.map(function (item, i) {

                    str.child(item).getDownloadURL().then(function (url) {
                        articles[i] = {
                            title: results[item].title,
                            author: results[item].author,
                            text: results[item].text,
                            coverText: StringHandler.shorten(results[item].text, 100),
                            img: url,
                            date: results[item].date,
                            id: item,
                            pdf: '',
                            link: function (destination) {
                                state.go(destination);
                            },
                            openPdf: function () {
                                fileHandler.openPdf(this.pdf);
                            }
                        };

                        if (i == keys.length - 1) {
                            scope.Articles = articles.reverse();
                            scope.$apply();
                            document.getElementById(spinner).style.display = 'none';
                        }
                    });
                });
            }
        });

    };

};

module.exports = Articles;

