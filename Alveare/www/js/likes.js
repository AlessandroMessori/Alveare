var sendLike = function (liker, father) {

  var Likes = new Parse.Object("Likes");

  Likes.set("Writer", Parse.User.current().get("username"));
  Likes.set("father", father);

  Likes.save(null, {
    success: function (Comment) {

    },
    error: function (Comment, error) {
    }
  });
}

var checklike  = function(liker,father){
  var Likes = new Parse.Object("Likes");

  var query = new Parse.Query(Likes);

  query.equalTo("father",father);

}
