import ActionBar  from "./ActionBar/actionBar";
import {LinkModal, linkModalCtrl} from "./LinkModal/linkModal";

var Directives = angular.module("appAS.directives", ["ionic"]);

Directives.directive("actionBar", ActionBar);
Directives.directive("linkModal", LinkModal);
Directives.controller("linkModalCtrl", linkModalCtrl);

export default Directives;
