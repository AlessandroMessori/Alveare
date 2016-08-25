var addNewsCtrl = function ($scope, Messages,DateHandler) {



    $scope.sendNews = function (news) {

        var newData = {
            text:news,
            author: 'autore',
            date: DateHandler.GetCurrentDate()
        };

        if (news != undefined) {
            Messages.sendPost(newData);
        }
        else {
            alert('compila il testo del messaggio');
        }
    };
};

module.exports = addNewsCtrl;