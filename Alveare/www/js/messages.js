var sendpost = function (text) {

  var Message = new Parse.Object("Post");

  Message.set("text", text);
  Message.set("Writer", Parse.User.current().get("username"));
  Message.set("date", GetCurrentDate());

  Message.save(null, {
    success: function (Message) {
      // Execute any logic that should take place after the object is saved.
      alert('Post pubblicato con successo');
    },
    error: function (Message, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
}
var getPosts = function (win,state) {

  var Message = new Parse.Object("Post");
  var posts = [];
  var query = new Parse.Query(Message);
  query.find().then(
    function(results) {

      for (var i = 0; i < results.length; i++) {
        posts[results.length - 1 - i] = {
          name: results[i].get("Writer"),
          text: results[i].get('text'),
          date: results[i].get('date'),
          objectId : results[i].id,
          //commentsCount : GetCommentsCount(results[i].id),
          link: function () {
            win.localStorage.setItem("currentPost", this.objectId);
            state.go("tab.comments");
          }
        };

      }

      /*for (var i = 0; i < results.length; i++) {
        posts[results.length - 1 - i].commentsCount = GetCommentsCount(posts[results.length - 1 - i].objectId);
      }*/


    }
  );


return posts;
}
