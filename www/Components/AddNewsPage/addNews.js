var addNewsCtrl = function ($scope,$ionicLoading, Messages,DateHandler) {

    $scope.sendNews = function (news) {

        $ionicLoading.show({
            template: 'Pubblicazione in Corso...'
        });

        var newData = {
            text:news,
            author: 'autore',
            date: DateHandler.GetCurrentDate()
        };

        if (news != undefined) {
            Messages.sendPost(newData,$ionicLoading);
        }
        else {
            alert('compila il testo del messaggio');
        }
    };
};

module.exports = addNewsCtrl;