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

var chekLike  = function(liker,father){
    var Likes = new Parse.Object("Likes");

    var query = new Parse.Query(Likes);

    query.equalTo("father",father);
   query.equalTo("Writer", liker);
   var n_likes;
   query.count({
     success: function(count) {
       // The count request succeeded. Show the count
       alert("Likes:"  count);
       n_likes = count;
     },
     error: function(error) {
       // The request failed
       alert("Failed to enumerate likes from DB");
     }
   });
   if (n_likes == 0){
     sendLike(liker, father);
   }
   else {
     deleteLikes(liker, father);
   }
 }

 var getLikes = function(){

 }

 var deleteLikes = function(liker, father){

   var Likes = new Parse.Object("Likes");

   var getOID = new Parse.Query(Likes);

   var query = new Parse.Query(Likes);

 query.get("efgh", {
   success: function(myObj) {
     // The object was retrieved successfully.
     myObj.destroy({});
   },
   error: function(object, error) {
     // The object was not retrieved successfully.
     // error is a Parse.Error with an error code and description.
   }
 });
