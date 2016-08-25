var Firebase = require('firebase');
var Messages = function (DateHandler) {

    this.sendPost = function (newData) {

        var newPostKey = Firebase.database().ref().child('Comunicazioni').push().key;
        var updates = {};
        updates['/Comunicazioni/' + newPostKey] = newData;
        Firebase.database().ref().update(updates);
    };

    this.getPosts = function (scope, state, spinner) {

        document.getElementById(spinner).style.display = 'block';

        var ModelRef = Firebase.database().ref('Comunicazioni');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();
            var posts = [];

            Object.keys(results).map(function (item, i) {
                posts[i] = {
                    author: results[item].author,
                    text: results[item].text,
                    date: results[item].date,
                    link: function () {
                        //window.localStorage.setItem("currentPost", this.objectId);
                        state.go("comments");
                    }
                };
            });

            scope.Posts = posts.reverse();
        });

        document.getElementById(spinner).style.display = 'none';

    }


};

module.exports = Messages;

