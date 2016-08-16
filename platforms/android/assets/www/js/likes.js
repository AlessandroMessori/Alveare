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
   var id;
   query.find({
     success: function(results) {
       // The count request succeeded. Show the count
       n_likes = results.length;

       if (n_likes != 0)
       id = results[0].objectId;

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
     deleteLikes(id);
   }
 }


 var deleteLikes = function(OID){

   var Likes = new Parse.Object("Likes");


   var query = new Parse.Query(Likes);

 query.get(OID, {
   success: function(myObj) {
     // The object was retrieved successfully.
     myObj.destroy({});
   },
   error: function(object, error) {
     // The object was not retrieved successfully.
     // error is a Parse.Error with an error code and description.
     alert("Failed to destroy object");
   }
 });
 }
