import addArticleCtrl  from"./AddArticlePage/addArticle";
import addNewsCtrl  from "./AddNewsPage/addNews";
import addTutorCtrl from "./AddTutorPage/addTutor";
import deletePostsCtrl from "./DeletePostsPage/deletePosts";
import moderationCtrl  from "./ModerationPage/moderation";
import readReportsCtrl from "./ReadReportsPage/readReports";

const adminComponents = angular.module("appAS.components.admin", ["ionic"]);

adminComponents.controller("addArticleCtrl", addArticleCtrl);
adminComponents.controller("addNewsCtrl", addNewsCtrl);
adminComponents.controller("addTutorCtrl", addTutorCtrl);
adminComponents.controller("deletePostsCtrl", deletePostsCtrl);
adminComponents.controller("moderationCtrl", moderationCtrl);
adminComponents.controller("readReportsCtrl", readReportsCtrl);

export default adminComponents;
