const actionBar = function () {
    return {
        scope: {
            title: "=title"
        },
        restrict: "E",
        templateUrl: "src/App/Directives/ActionBar/actionBar.html",
    };
};

export default actionBar;