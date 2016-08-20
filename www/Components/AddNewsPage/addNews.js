var addNewsCtrl = function ($scope, Messages) {
    $scope.sendNews = function (news) {
        if (news != undefined) {
            Messages.sendPost(news);
        }
        else {
            alert('compila il testo del messaggio');
        }
    };
};

module.exports = addNewsCtrl;