var SocialHandler = function () {

    this.shareApp = function () {

        var options = {
            message: 'share this',
            subject: 'the subject',
            files: []
        };

        window.plugins.socialsharing.shareWithOptions(options,
            function (result) {
            }, function (msg) {
            });
    }

};

module.exports = SocialHandler;
