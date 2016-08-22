var Parse = require('parse');
var Articles = function (DateHandler,StringHandler) {

    this.sendArticle = function (title, author, text, img, type, loadingTemplate) {

        var Article = new Parse.Object(type);

        Article.set("title", title);
        Article.set("author", author);
        Article.set("text", text);
        Article.set("date", DateHandler.GetCurrentDate());

        var img_file = new Parse.File("Copertina", {base64: img});

        img_file.save().then(function () {
            var el = document.createElement("p2");
            el.innerHTML = "Foto Caricata!";

        }, function (error) {
            alert("errore nel salvataggio della foto");

        });

        Article.set("img", img_file);

        Article.save(null, {
            success: function (Article) {
                loadingTemplate.hide();
                alert('Articolo pubblicato con successo');
            },
            error: function (Article, error) {
                loadingTemplate.hide();
                alert('Errore nella pubblicazione dellArticolo' + error.message);
            }
        });

    };

    this.getArticles = function (state, win, type, spinner) {

        document.getElementById(spinner).style.display = 'block';
        var Article = new Parse.Object(type);
        var posts = [];
        var query = new Parse.Query(Article);
        query.find({
            success: function (results) {

                for (var i = 0; i < results.length; i++) {

                    var date = "Giorno: " + results[i].createdAt.getDay() + " Mese: " + results[i].createdAt.getMonth() + " Anno: " + results[i].createdAt.getYear();

                    posts[results.length - 1 - i] = {
                        title: results[i].get("title"),
                        author: results[i].get("author"),
                        text: results[i].get('text'),
                        coverText: StringHandler.shorten(results[i].get('text'),100),
                        img: results[i].get("img").url(),
                        date: results[i].get("date"),
                        id: results[i].id,
                        link: function () {

                            win.localStorage.setItem("title", this.title);
                            win.localStorage.setItem("text", this.text);
                            win.localStorage.setItem("author", this.author);
                            win.localStorage.setItem("img", this.img);
                            win.localStorage.setItem("date", this.date);
                            win.localStorage.setItem("currentPost", this.id);
                            state.go("article");

                        }
                    };
                }
                document.getElementById(spinner).style.display = 'none';
            },
            error: function (error) {
                //document.createElement("p").innerHTML="tira e rilascia per aggiornare";
                console.log("Niente Connessione");
                return;
            }
        });

        return posts;
    };

};

module.exports = Articles;