var forumCtrl = function ($scope, $state, $window, $http, Messages) {

    $scope.$on('$ionicView.enter', function () {
        Messages.getPosts($scope, $state, 'newsSpinner');
    });

    $scope.openFile = function (file) {
        //window.open(file, '_system', 'location=yes');

        var fileURL = cordova.file.externalApplicationStorageDirectory + "file.pdf";

        var fileTransfer = new FileTransfer();

        fileTransfer.download(
            file,
            fileURL,
            function (entry) {
                cordova.plugins.fileOpener2.open(
                    entry.toURL(),
                    'application/pdf',
                    {
                        error: function (e) {
                            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                        },
                        success: function () {
                            console.log('file opened successfully');
                        }
                    }
                );
            },
            function (error) {
            },
            false
        );

    }


};

module.exports = forumCtrl;
