import Firebase from "firebase";
import uniqBy from "lodash/uniqBy";

class Likes {

    constructor(Notifications) {

        this.checkLike = (user, userID, post, contentType, fatherPost) => {
            if (!fatherPost) {
                fatherPost = post;
            }
            const self = this;
            const ModelRef = Firebase.database().ref("Likes");
            ModelRef.once("value", snapshot => {
                const results = snapshot.val();
                let likeId;
                let check = true;

                if (results != null) {
                    Object.keys(results).map(item => {
                        if (results[item].user == user && results[item].post == post) {
                            check = false;
                            likeId = item;
                        }
                    });
                }

                if (check) {
                    self.sendLike({user, userID, post, contentType, fatherPost}, post);
                } else {
                    self.removeLike(likeId, post);
                }

            });

        };

        this.sendLike = (newData, likeBtn) => {
            const newPostKey = Firebase.database().ref().child("Likes").push().key;
            let updates = {};
            document.getElementById(likeBtn).style.color = "blue";
            updates["/Likes/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(() => Notifications.getTokensByID(newData.userID, token => {
                    const params = {
                        post: newData.fatherPost,
                        type: newData.contentType
                    };
                    Notifications.send(token, "App Ariosto Spallanzani", `a ${newData.user} piace un tuo post`, params);
                }));
        };

        this.removeLike = (target, likebtn) => {
            document.getElementById(likebtn).style.color = "grey";
            Firebase.database().ref("Likes/" + target).remove();
        };

        this.getLikeCount = (father, scope, posts, index, target) => {
            const ModelRef = Firebase.database().ref("Likes");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();
                let cnt = 0;
                let color = "#2F4F4F";
                let users = [];

                if (results != null) {
                    Object.keys(results).map(item => {
                        if (results[item].post == father) {
                            cnt++;
                            users.push(results[item].user);
                            if (Firebase.auth().currentUser.displayName == results[item].user) {
                                color = "blue";
                            }
                        }
                    });
                }

                posts[index].color = color;
                posts[index].likeCount = cnt;
                posts[index].likerList = users.reverse();
                scope[target] = posts;
                if (target == "Comments") {
                    scope[target] = uniqBy(posts, "text");
                }
                window.setTimeout(() => scope.$apply(), 1000);

            });
        };

        this.getLikers = (father, scope, spinner) => {
            document.getElementById(spinner).style.display = "block";
            const ModelRef = Firebase.database().ref("Likes");
            ModelRef.on("value", (snapshot) => {
                const results = snapshot.val();
                let users = [];

                if (results != null) {
                    Object.keys(results).map(item => {
                        if (results[item].post == father) {
                            users.push(results[item].user);
                        }
                    });
                    scope.Likers = users;
                }
                document.getElementById(spinner).style.display = "none";
            });
        };
    }
}

export default Likes;
