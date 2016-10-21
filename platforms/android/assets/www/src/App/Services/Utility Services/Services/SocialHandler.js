class SocialHandler {

    constructor($ionicPlatform) {

        this.shareApp = () => {

            const options = {
                message: "Scarica l'applicazione del liceo Ariosto Spallanzani!",
                subject: "Applicazione liceo Ariosto Spallanzani",
                files: [],
                url: "https://www.google.it/"
            };

            window.plugins.socialsharing.shareWithOptions(options,
                () => {
                },
                () => {
                });
        };

        this.rateUs = () => {
            if ($ionicPlatform.is("ios")) {
                window.open("itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8"); // or itms://
            } else if ($ionicPlatform.is("android")) {
                window.open("market://details?id=<package_name>");
            }
        };

    }

}

export default SocialHandler;
