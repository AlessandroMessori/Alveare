var addNewsCtrl = function ($scope,Messages) {
    $scope.sendNews = function (news) {
        Messages.sendPost(news);
    };
};

module.exports = addNewsCtrl;