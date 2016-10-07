import Firebase from "firebase";

class Comments {

    constructor(Likes) {

        this.sendComment = (scope, newData, commentList) => {
            const newPostKey = Firebase.database().ref().child("Commenti").push().key;
            let updates = {};
            document.getElementById(commentList).style.display = "none";
            updates["/Commenti/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(()=> {
                    document.getElementById(commentList).style.display = "block";
                    scope.$apply();
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

            ModelRef.on("value", snapshot => {
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
                            Likes.getLikeCount(item, scope, comments, comments.length - 1, "Comments");
                        }
                        else if (results[item].father == father) {
                            Firebase.storage().ref("Profili").child(results[item].userMail).getDownloadURL().then(url=> {
                                comments.push({
                                    author: results[item].author,
                                    avatar: url,
                                    text: results[item].comment,
                                    father: results[item].father,
                                    date: results[item].date,
                                    id: item,
                                    like() {
                                        Likes.checkLike(Firebase.auth().currentUser.displayName, item);
                                    },
                                    link() {
                                        rootScope.currentPost = item;
                                        state.go("likes");
                                    }
                                });


                                if (i == Object.keys(results).length - 1) {
                                    window.setTimeout(()=>document.getElementById(spinner).style.display = "none", 1000);
                                }

                                Likes.getLikeCount(item, scope, comments, comments.length - 1, "Comments");
                            });
                        }

                    });
                }

            });
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
            const oldLenght = scope.Comments.length;
            document.getElementById(commentList).style.display = "none";
            Firebase.database().ref("Commenti/" + commentId).remove()
                .then(() => {
                    modals.ResultTemplate("commento eliminato con successo");
                    scope.Comments.splice(oldLenght - 1, oldLenght * 2);
                    document.getElementById(commentList).style.display = "block";
                    scope.$apply();
                });
        };
    }

}

export default Comments;