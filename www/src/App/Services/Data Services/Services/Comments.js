import Firebase from "firebase";

class Comments {

    constructor(Likes, Notifications) {

        this.sendComment = (scope, newData, commentList, callback) => {
            const newPostKey = Firebase.database().ref().child("Commenti").push().key;
            let updates = {};
            document.getElementById(commentList).style.display = "none";
            updates["/Commenti/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(() => {
                    callback();
                    Notifications.getTokensByID(newData.fatherID, tokens => {
                        tokens.map(token => {
                            Notifications.send(token, "App Ariosto Spallanzani", `${newData.author} ha commentato un tuo post`);
                        });
                    });
                });
        };

        this.getComments = (scope, rootScope, state, spinner, filter) => {

            if (filter == undefined) {
                filter = true;
            }

            document.getElementById(spinner).style.display = "block";
            let comments = [];
            scope.Comments = [];
            const father = rootScope.currentPost;
            const ModelRef = Firebase.database().ref("Commenti");

            ModelRef.once("value", snapshot => {
                const results = snapshot.val();

                if (results != null) {
                    Object.keys(results).map((item, i) => {
                        if (!filter) {
                            comments.push({
                                author: results[item].author,
                                text: results[item].comment,
                                father: results[item].father,
                                date: results[item].date,
                                id: item
                            });
                            if (comments.length == Object.keys(results).length) {
                                scope.Comments = comments;
                            }
                        }
                        else if (results[item].father == father) {
                            const defaultImage = require("../../../../Images/user.jpg");
                            Firebase.storage().ref("Profili").child(results[item].userMail).getDownloadURL()
                                .then(url => this.setCommentProperties(scope, rootScope, state, comments, results, url, i, item, spinner))
                                .catch(() => this.setCommentProperties(scope, rootScope, state, comments, results, defaultImage, i, item, spinner));
                        }

                    });
                }

            });
        };

        this.setCommentProperties = (scope, rootScope, state, comments, results, url, index, item, spinner) => {
            comments.push({
                author: results[item].author,
                avatar: url,
                text: results[item].comment,
                father: results[item].father,
                date: results[item].date,
                id: item,
                like() {
                    Likes.checkLike(Firebase.auth().currentUser.displayName, Firebase.auth().currentUser.uid, item);
                },
                link() {
                    rootScope.currentPost = item;
                    state.go("likes");
                },
                linkToProfile(){
                    rootScope.currentProfile = {
                        name: results[item].author,
                        avatar: url,
                        mail: results[item].userMail
                    };
                    rootScope.profileUpdatable = false;
                    state.go("updateProfile");
                }
            });

            window.setTimeout(() => document.getElementById(spinner).style.display = "none", 1000);

            Likes.getLikeCount(item, scope, comments, comments.length - 1, "Comments");
        };

        this.getCommentCount = (father, scope, posts, index, maxLength) => {
            const ModelRef = Firebase.database().ref("Commenti");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();
                let count = 0;

                if (results != null) {

                    Object.keys(results).map(item => {
                        if (results[item].father == father) {
                            count++;
                        }
                    });
                }
                posts[index].commentCount = count;
                Likes.getLikeCount(father, scope, posts, index, "Posts", maxLength);
            });

        };

        this.deleteComment = (scope, commentId, commentList, modals) => {
            document.getElementById(commentList).style.display = "none";
            Firebase.database().ref("Commenti/" + commentId).remove()
                .then(() => {
                    modals.ResultTemplate("commento eliminato con successo");
                    scope.doRefresh();
                    document.getElementById(commentList).style.display = "block";
                    scope.$apply();
                });
        };
    }

}

export default Comments;