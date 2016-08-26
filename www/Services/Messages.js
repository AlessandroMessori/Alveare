var Firebase = require('firebase');
var Messages = function (Modals) {

    this.sendPost = function (newData) {

        var newPostKey = Firebase.database().ref().child('Comunicazioni').push().key;
        var updates = {};
        updates['/Comunicazioni/' + newPostKey] = newData;
        Firebase.database().ref().update(updates)
            .then(function () {
                Modals.ResultTemplate("Comunicazione Pubblicata con Successo");
            })
            .catch(function () {
                Modals.ResultTemplate("Errore nella Pubblicazione della Comunicazione");
            })
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
                    id: item,
                    link: function () {
                        window.localStorage.setItem("currentPost", item);
                        state.go("comments");
                    }
                };
            });

            scope.Posts = posts.reverse();
            scope.$apply();
            document.getElementById(spinner).style.display = 'none';
        });

    }

};

module.exports = Messages;


