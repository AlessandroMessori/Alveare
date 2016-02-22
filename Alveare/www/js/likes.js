var sendLike = function (father) {

  var Likes = new Parse.Object("Likes");

      Likes.set("liker", Parse.User.current().get("username"));
      Likes.set("father", father);

  Likes.save(null, {
    success: function (Likes) {
      alert("like salvato");
    },
    error: function (Likes, error) {
    }
  });

}
