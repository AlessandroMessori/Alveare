var SocialHandler = function ($ionicPlatform) {

    this.shareApp = function () {

        var options = {
            message: "Scarica l'applicazione del liceo Ariosto Spallanzani!",
            subject: "Applicazione liceo Ariosto Spallanzani",
            files: []
        };

        window.plugins.socialsharing.shareWithOptions(options,
            function () {
            }, function () {
            });
    };

    this.rateUs = function () {
        if ($ionicPlatform.is("ios")) {
            window.open("itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8"); // or itms://
        } else if ($ionicPlatform.is("android")) {
            window.open("market://details?id=<package_name>");
        }
    };

};

module.exports = SocialHandler;
