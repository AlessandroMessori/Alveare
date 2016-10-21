import tabsCtrl  from "./Components/Tabs/tabs";
import loginCtrl  from "./Components/LoginPage/login";
import signupCtrl  from "./Components/SignupPage/signup";

const freeComponents = angular.module("appAS.components.free", ["ionic"]);

freeComponents.controller("loginCtrl", loginCtrl);
freeComponents.controller("signupCtrl", signupCtrl);
freeComponents.controller("tabsCtrl", tabsCtrl);

export default freeComponents;