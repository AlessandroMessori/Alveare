import Articles from "./Services/Articles";
import Auth from "./Services/Auth";
import Comments from "./Services/Comments";
import Likes from "./Services/Likes";
import Messages from "./Services/Messages";
import Profile from "./Services/Profile";
import StaticData from "./Services/StaticData";

const dataServices = angular.module("appAS.services.data", ["ionic"]);

dataServices.service("Messages", Messages);
dataServices.service("Articles", Articles);
dataServices.service("Comments", Comments);
dataServices.service("Likes", Likes);
dataServices.service("Profile", Profile);
dataServices.service("Auth", Auth);
dataServices.service("StaticData", StaticData);

export default dataServices;