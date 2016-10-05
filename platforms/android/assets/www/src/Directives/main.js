import ActionBar  from "./ActionBar/actionBar";

var Directives = angular.module("appAS.directives", ["ionic"]);

Directives.directive("actionBar", ActionBar);

export default Directives;
