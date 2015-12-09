var sendArticle = function (title, author, text, img) {

  var Article = new Parse.Object("Article");

  Article.set("title", title);
  Article.set("author", author);
  Article.set("text", text);

 
  var img_file = new Parse.File("Copertina", { base64: img });

  img_file.save().then(function () {

  }, function (error) {
    alert("errore nel salvataggio della foto");

  });
  
  Article.set("img", img_file);
  
  Article.save(null, {
    success: function (Article) {
      alert('Articolo pubblicato con successo');
    },
    error: function (Article, error) {
       
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });

}

var getArticles = function (state,win) {

  var Article = new Parse.Object("Article");
  var posts = [];
  var query = new Parse.Query(Article);
  query.find({
    success: function (results) {

      for (var i = 0; i < results.length; i++) {

        var date = results[i].createdAt.getDay() + "-" + results[i].createdAt.getMonth() + "  " + results[i].createdAt.getHours() + ":" + results[i].createdAt.getMinutes();

        posts[results.length - 1 - i] = {
          title: results[i].get("title"),
          author: results[i].get("author"),
          text: results[i].get('text'),
          img:  results[i].get("img").url(),
          date: date,
          link: function(){
              
              win.localStorage.setItem("title",this.title);
              win.localStorage.setItem("text",this.text);
              win.localStorage.setItem("author",this.author);
              win.localStorage.setItem("img",this.img);
              state.go("tab.giornalino");
             
          }

        };
      }
    },
    error: function (error) {
      //document.createElement("p").innerHTML="tira e rilascia per aggiornare";
      console.log("Niente Connessione");
      return;
    }
  });

  return posts;
}
