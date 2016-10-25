import ActionBar  from "./ActionBar/actionBar";
import LinkModal from "./LinkModal/linkModal";

var Directives = angular.module("appAS.directives", ["ionic"]);

Directives.directive("actionBar", ActionBar);
Directives.directive("linkModal", LinkModal);

export default Directives;
