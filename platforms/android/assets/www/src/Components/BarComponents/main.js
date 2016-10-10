import addArticleCtrl  from"./Components/AddArticlePage/addArticle";
import addNewsCtrl  from "./Components/AddNewsPage/addNews";
import commentsCtrl from "./Components/CommentsPage/comments";
import likesCtrl  from "./Components/LikesPage/likes";
import moderationCtrl  from "./Components/ModerationPage/moderation";
import readReportsCtrl from "./Components/ReadReportsPage/readReports";
import reportBugCtrl from "./Components/ReportBugPage/reportBug";
import updateProfileCtrl from "./Components/UpdateProfilePage/updateProfile";

const barComponents = angular.module("appAS.components.bar", ["ionic"]);

barComponents.controller("addArticleCtrl", addArticleCtrl);
barComponents.controller("addNewsCtrl", addNewsCtrl);
barComponents.controller("commentsCtrl", commentsCtrl);
barComponents.controller("likesCtrl", likesCtrl);
barComponents.controller("moderationCtrl", moderationCtrl);
barComponents.controller("readReportsCtrl", readReportsCtrl);
barComponents.controller("reportBugCtrl", reportBugCtrl);
barComponents.controller("updateProfileCtrl", updateProfileCtrl);

export default barComponents;
