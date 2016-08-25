var Parse = require('parse');
var Firebase = require('firebase');

var Articles = function (DateHandler,StringHandler) {

    this.sendArticle = function (newData, loadingTemplate) {
        var ArticleType = window.localStorage.getItem('contentType');
        var newPostKey = Firebase.database().ref().child(ArticleType).push().key;
        var updates = {};
        updates['/' + ArticleType + '/' + newPostKey] = newData;
        Firebase.database().ref().update(updates).then(function () {
            loadingTemplate.hide();
            alert('Articolo Pubblicato con successo');
        })
    };

    this.getArticles = function (scope,state,type,spinner) {

        document.getElementById(spinner).style.display = 'block';
        var ModelRef = Firebase.database().ref(type);

        ModelRef.on('value', function (snapshot) {

            var results = snapshot.val();
            var articles = [];

            Object.keys(results).map(function (item, i) {
                var date = "Data";
                articles[i] = {
                    title: results[item].title,
                    author: results[item].author,
                    text: results[item].text,
                    coverText: StringHandler.shorten(results[item].text, 100),
                    img: results[item].img,
                    date: results[item].date,
                    id: item,
                    link: function (destination) {
                        window.localStorage.setItem("title", this.title);
                        window.localStorage.setItem("text", this.text);
                        window.localStorage.setItem("author", this.author);
                        window.localStorage.setItem("img", this.img);
                        window.localStorage.setItem("date", this.date);
                        state.go(destination);
                    }
                };
            });

            scope.Articles =  articles.reverse();
            scope.$apply();
            document.getElementById(spinner).style.display = 'none';
        });

    };

};

module.exports = Articles;