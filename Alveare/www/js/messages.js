Parse.initialize("o0CJuvQWQY15h5QdIcv9cNexSI3v4QspAsTpkZVZ", "CwF1Y2TKwtlMdaDtrKsEh5yKSnzsjFL0GjZTYzkF");

var sendmex = function(text){

    console.log("funzione partita");

    var Message = new Parse.Object("Message");

    Message.set("text", text);
    Message.set("Writer", Parse.User.current());

    Message.save(null, {
      success: function(Message) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + Message.id);
      },
      error: function(Message, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

}

var getMessages = function(){

  var Message = new Parse.Object("Message");
  var posts = [];
  var query = new Parse.Query(Message);
  query.find({
    success: function(results) {

         for(var i=0;i<results.length;i++){

           posts[i] = {
                name : results[i].get('Writer').get("username"),
                text : results[i].get('text'),
                date : results[i].createdAt
           };
         }
        console.log(posts);
        console.log(results);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

  return posts;
}

$("#sendbtn").click(function () {
  sendmex($("#messagetxt").val());
});
