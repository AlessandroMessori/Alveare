const actionBar = ()=> {
    return {
        scope: {
            title: "=title"
        },
        restrict: "E",
        template: require("./actionBar.html"),
    };
};

export default actionBar;