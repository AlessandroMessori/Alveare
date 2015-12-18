var sendArticle = function (title, author, text, img) {

  var Article = new Parse.Object("Article");


  Article.set("title", title);
  Article.set("author", author);
  Article.set("text", text);
  Article.set("date", GetCurrentDate());

  var img_file = new Parse.File("Copertina", { base64: img });

  img_file.save().then(function () {
    var el = document.createElement("p2");
    el.innerHTML = "Foto Caricata!";

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

var getArticles = function (state, win) {

  var Article = new Parse.Object("Article");
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
          img: results[i].get("img").url(),
          date: results[i].get("date"),
          link: function () {

            win.localStorage.setItem("title", this.title);
            win.localStorage.setItem("text", this.text);
            win.localStorage.setItem("author", this.author);
            win.localStorage.setItem("img", this.img);
            win.localStorage.setItem("date", this.date);
            state.go("tab.article");

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

var GetCurrentDate = function () {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  switch (mm) {
    case 1:
      mm = "Gennaio";
      break;
    case 2:
      mm = "Febbraio";
      break;
    case 3:
      mm = "Marzo";
      break;
    case 4:
      mm = "Aprile";
      break
    case 5:
      mm = "Maggio";
      break;
    case 6:
      mm = "Giugno";
      break;
    case 7:
      mm = "Luglio";
      break;
    case 8:
      mm = "Agosto";
      break;
    case 9:
      mm = "Settembre";
      break;
    case 10:
      mm = "Ottobre";
      break;
    case 11:
      mm = "Novembre";
      break;
    case 12:
      mm = "Dicembre";
      break;

  }

  today = dd + ' ' + mm + ' ' + yyyy;

  return today;
}

var GetFullDate = function(){
  
    var date = new Date();
    var Hour = date.getHours();
    var Minutes = date.getMinutes();
    
    return GetCurrentDate() + " alle "+Hour+":"+Minutes;
}