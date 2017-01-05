import commentsCtrl from "./CommentsPage/comments";
import likesCtrl  from "./LikesPage/likes";
import reportBugCtrl from "./ReportBugPage/reportBug";
import singlePostCtrl from "./SinglePost/singlePost";
import updateCredentialsCtrl from "./UpdateCredentialsPage/updateCredentials";
import updateProfileCtrl from "./UpdateProfilePage/updateProfile";

const barComponents = angular.module("appAS.components.bar", ["ionic"]);

barComponents.controller("commentsCtrl", commentsCtrl);
barComponents.controller("likesCtrl", likesCtrl);
barComponents.controller("reportBugCtrl", reportBugCtrl);
barComponents.controller("singlePostCtrl", singlePostCtrl);
barComponents.controller("updateCredentialsCtrl", updateCredentialsCtrl);
barComponents.controller("updateProfileCtrl", updateProfileCtrl);

export default barComponents;
