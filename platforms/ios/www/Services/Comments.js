var Firebase = require('firebase');
var Comments = function (Likes) {

    this.sendComment = function (scope, newData, commentList) {
        var oldLenght = scope.Comments.length;
        var newPostKey = Firebase.database().ref().child('Commenti').push().key;
        var updates = {};
        document.getElementById(commentList).style.display = 'none';
        updates['/Commenti/' + newPostKey] = newData;
        Firebase.database().ref().update(updates)
            .then(function () {
                alert("Commento Pubblicato con Successo");
                scope.Comments.splice(oldLenght + 1, scope.Comments.length - oldLenght);
                document.getElementById(commentList).style.display = 'block';
                scope.$apply();
            })
    };

    this.getComments = function (scope, spinner, filter) {
        if (filter == undefined) {
            filter = true;
        }
        document.getElementById(spinner).style.display = 'block';
        var comments = [];
        var father = window.localStorage.getItem("currentPost");
        var ModelRef = Firebase.database().ref('Commenti');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();

            if (results != null) {

                Object.keys(results).map(function (item) {

                    if (!filter) {
                        comments.push({
                            author: results[item].author,
                            text: results[item].comment,
                            father: results[item].father,
                            date: results[item].date,
                            id: item
                        });
                    } else if (results[item].father == father) {
                        comments.push({
                            author: results[item].author,
                            text: results[item].comment,
                            father: results[item].father,
                            date: results[item].date,
                            id: item
                        });
                    }

                });
            }
            scope.Comments = comments.reverse();
            scope.Comments.splice(comments.length, scope.Comments.length - comments.length)
            scope.$apply();
            document.getElementById(spinner).style.display = 'none';
        });
    };

    this.getCommentCount = function (father, scope, posts, index) {
        var ModelRef = Firebase.database().ref('Commenti');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();
            var count = 0;

            if (results != null) {

                Object.keys(results).map(function (item) {
                    if (results[item].father == father) {
                        count++;
                    }
                });
            }
            posts[index].commentCount = count;
            Likes.getLikeCount(father, scope, posts, index);
        });

    };

    this.deleteComment = function (scope, commentId, commentList) {
        var oldLenght = scope.Comments.length;
        document.getElementById(commentList).style.display = 'none';
        firebase.database().ref('Commenti/' + commentId).remove()
            .then(function () {
                alert('commento eliminato con successo');
                scope.Comments.splice(oldLenght - 1, oldLenght * 2);
                document.getElementById(commentList).style.display = 'block';
                scope.$apply();
            });
    }
};

module.exports = Comments;