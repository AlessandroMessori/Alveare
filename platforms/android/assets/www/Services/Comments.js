var Firebase = require('firebase');

var Comments = function () {

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

    this.getComments = function (scope, spinner) {

        document.getElementById(spinner).style.display = 'block';
        var comments = [];
        var father = window.localStorage.getItem("currentPost");
        var ModelRef = Firebase.database().ref('Commenti');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();

            Object.keys(results).map(function (item) {

                if (results[item].father == father) {
                    comments.push({
                        author: results[item].author,
                        text: results[item].comment,
                        father: results[item].father,
                        date: results[item].date
                    });
                }

            });
            scope.Comments = comments.reverse();
            scope.Comments.splice(comments.length, scope.Comments.length - comments.length)
            scope.$apply();
            document.getElementById(spinner).style.display = 'none';
        });
    }
};

module.exports = Comments;