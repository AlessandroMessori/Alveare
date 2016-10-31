import tabsCtrl  from "./Tabs/tabs";
import loginCtrl  from "./LoginPage/login";
import signupCtrl  from "./SignupPage/signup";

const freeComponents = angular.module("appAS.components.free", ["ionic"]);

freeComponents.controller("loginCtrl", loginCtrl);
freeComponents.controller("signupCtrl", signupCtrl);
freeComponents.controller("tabsCtrl", tabsCtrl);

export default freeComponents;