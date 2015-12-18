var sendComment = function (text, father) {

  var Comment = new Parse.Object("Comment");

  Comment.set("text", text);
  Comment.set("Writer", Parse.User.current().get("username"));
  Comment.set("father", father);
  Comment.set("date", GetFullDate());

  Comment.save(null, {
    success: function (Comment) {

      alert('commento pubblicato con successo');
    },
    error: function (Comment, error) {
      alert('Failed to create new object, with error code: ' + error.Comment);
    }
  });
}

var getComments = function (win) {

  var Comment = new Parse.Object("Comment");
  var comments = [];
  var father = localStorage.getItem("currentPost");
  var query = new Parse.Query(Comment);
  query.equalTo("father",father);
  
  query.find({
    success: function (results) {

      for (var i = 0; i < results.length; i++) {


        comments[results.length - 1 - i] = {
          name: results[i].get("Writer"),
          text: results[i].get('text'),
          father: results[i].get('father'),
          date: results[i].get('date')
        };
      }
    },
    error: function (error) {
      return;
    }
  });

  return comments;
}