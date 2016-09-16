var actionBar = function () {
    return {
        scope: {
            title: '=title'
        },
        restrict: 'E',
        templateUrl: 'Directives/ActionBar/actionBar.html',
    };
};

module.exports = actionBar;