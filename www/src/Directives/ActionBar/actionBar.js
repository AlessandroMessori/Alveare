var actionBar = function () {
    return {
        scope: {
            title: "=title"
        },
        restrict: "E",
        templateUrl: "src/Directives/ActionBar/actionBar.html",
    };
};

module.exports = actionBar;