import Articles from "./Services/Articles";
import Auth from "./Services/Auth";
import Comments from "./Services/Comments";
import Likes from "./Services/Likes";
import Messages from "./Services/Messages";
import Notifications from "./Services/Notifications";
import Reports from "./Services/Reports";
import Profile from "./Services/Profile";
import StaticData from "./Services/StaticData";
import Tutors from "./Services/Tutors";
import Users from "./Services/Users";

const dataServices = angular.module("appAS.services.data", ["ionic"]);

dataServices.service("Messages", Messages);
dataServices.service("Articles", Articles);
dataServices.service("Comments", Comments);
dataServices.service("Likes", Likes);
dataServices.service("Reports", Reports);
dataServices.service("Profile", Profile);
dataServices.service("Auth", Auth);
dataServices.service("StaticData", StaticData);
dataServices.service("Tutors", Tutors);
dataServices.service("Users", Users);
dataServices.service("Notifications", Notifications);

export default dataServices;