import ActionBar  from "./ActionBar/actionBar";
import {LinkModal, linkModalCtrl} from "./LinkModal/linkModal";
import "./TimePicker/timePicker";

var Directives = angular.module("appAS.directives", ["ionic", "ionic-timepicker"]);

Directives.directive("actionBar", ActionBar);
Directives.directive("linkModal", LinkModal);
Directives.controller("linkModalCtrl", linkModalCtrl);

export default Directives;
