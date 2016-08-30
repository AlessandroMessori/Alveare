var forumCtrl = function ($scope, $state, $window, $http, Messages) {

    $scope.$on('$ionicView.enter', function () {
        Messages.getPosts($scope, $state, 'newsSpinner');
    });

    $scope.openFile = function (file) {
        handleDocumentWithURL(
            // success handler
            function (msg) {
                console.log('success: ' + msg)
            },

            // error handler
            function (errorcode) {
                if (errorcode == 2) {
                    alert('File not found, please check the URL.');
                } else if (errorcode == 53) {
                    // This is for Android only, because iOS always uses the QuickLook framework.
                    alert('No app that handles this file type, please install one from the Play Store.');
                } else {
                    alert('Unknown generic error. Code: ' + error);
                }
            },

            // link to your document
            'https://github.com/Telerik-Verified-Plugins/DocumentHandler/raw/master/samplefiles/sample.docx'
        );
    }
};

module.exports = forumCtrl;
