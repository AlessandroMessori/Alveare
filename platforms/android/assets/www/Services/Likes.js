var Firebase = require('firebase');
var Likes = function () {

    this.checkLike = function (user, post) {
        var self = this;
        var ModelRef = Firebase.database().ref('Likes');
        ModelRef.once('value', function (snapshot) {
            var results = snapshot.val();
            var likeId;
            var check = true;

            if (results != null) {
                Object.keys(results).map(function (item) {
                    if (results[item].user == user && results[item].post == post) {
                        check = false;
                        likeId = item;
                    }
                });
            }

            if (check) {
                self.sendLike({user: user, post: post}, post);
            } else {
                self.removeLike(likeId, post)
            }

        });

    };

    this.sendLike = function (newData, likebtn) {
        var newPostKey = Firebase.database().ref().child('Likes').push().key;
        var updates = {};
        document.getElementById(likebtn).style.color = 'blue';
        updates['/Likes/' + newPostKey] = newData;
        Firebase.database().ref().update(updates)
            .then(function () {
                console.log('like creato');
            })
    };

    this.removeLike = function (target, likebtn) {
        document.getElementById(likebtn).style.color = 'black';
        firebase.database().ref('Likes/' + target).remove()
            .then(function () {
                console.log('like eliminato');
            });
    };

    this.getLikeCount = function (father, scope, posts, index) {
        var ModelRef = Firebase.database().ref('Likes');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();
            var cnt = 0;
            var color = 'black';
            var users = [];

            if (results != null) {
                Object.keys(results).map(function (item) {
                    if (results[item].post == father) {
                        cnt++;
                        users.push(results[item].user);
                        if (Firebase.auth().currentUser.displayName == results[item].user) {
                            color = 'blue';
                        }
                    }
                });
            }
            posts[index].color = color;
            posts[index].likeCount = cnt;
            posts[index].likerList = users.reverse();
            scope.Posts = posts;
            scope.$apply();
        });
    };

    this.getLikers = function (father,scope,spinner) {
        document.getElementById(spinner).style.display = 'block';
        var ModelRef = Firebase.database().ref('Likes');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();
            var users = [];

            if (results != null) {
                Object.keys(results).map(function (item) {
                    if (results[item].post == father) {
                        users.push(results[item].user);
                    }
                });
                scope.Likers = users;
            }
            document.getElementById(spinner).style.display = 'none';
        });
    }
};
module.exports = Likes;
