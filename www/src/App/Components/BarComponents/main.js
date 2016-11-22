import commentsCtrl from "./CommentsPage/comments";
import likesCtrl  from "./LikesPage/likes";
import reportBugCtrl from "./ReportBugPage/reportBug";
import updateCredentialsCtrl from "./UpdateCredentialsPage/updateCredentials";
import updateProfileCtrl from "./UpdateProfilePage/updateProfile";
import updateStatusCtrl from "./UpdateStatusPage/updateStatus";

const barComponents = angular.module("appAS.components.bar", ["ionic"]);

barComponents.controller("commentsCtrl", commentsCtrl);
barComponents.controller("likesCtrl", likesCtrl);
barComponents.controller("reportBugCtrl", reportBugCtrl);
barComponents.controller("updateCredentialsCtrl", updateCredentialsCtrl);
barComponents.controller("updateProfileCtrl", updateProfileCtrl);
barComponents.controller("updateStatusCtrl", updateStatusCtrl);

export default barComponents;
