import addArticleCtrl  from"./Components/AddArticlePage/addArticle";
import addNewsCtrl  from "./Components/AddNewsPage/addNews";
import commentsCtrl from "./Components/CommentsPage/comments";
import deletePostsCtrl from "./Components/DeletePostsPage/deletePosts";
import likesCtrl  from "./Components/LikesPage/likes";
import moderationCtrl  from "./Components/ModerationPage/moderation";
import readReportsCtrl from "./Components/ReadReportsPage/readReports";
import reportBugCtrl from "./Components/ReportBugPage/reportBug";
import updateProfileCtrl from "./Components/UpdateProfilePage/updateProfile";
import updateStatusCtrl from "./Components/UpdateStatusPage/updateStatus";

const barComponents = angular.module("appAS.components.bar", ["ionic"]);

barComponents.controller("addArticleCtrl", addArticleCtrl);
barComponents.controller("addNewsCtrl", addNewsCtrl);
barComponents.controller("commentsCtrl", commentsCtrl);
barComponents.controller("deletePostsCtrl", deletePostsCtrl);
barComponents.controller("likesCtrl", likesCtrl);
barComponents.controller("moderationCtrl", moderationCtrl);
barComponents.controller("readReportsCtrl", readReportsCtrl);
barComponents.controller("reportBugCtrl", reportBugCtrl);
barComponents.controller("updateProfileCtrl", updateProfileCtrl);
barComponents.controller("updateStatusCtrl", updateStatusCtrl);

export default barComponents;
