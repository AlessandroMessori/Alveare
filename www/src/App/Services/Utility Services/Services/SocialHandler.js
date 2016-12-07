class SocialHandler {

    constructor($ionicPlatform) {

        this.getStoreLink = () => {
            const androidLink = "market://details?id=<package_name>";
            const iosLink = "itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8";
            return ($ionicPlatform.is("ios")) ? androidLink : iosLink;
        };

        this.shareApp = () => {

            const options = {
                message: "Scarica l'applicazione del liceo Ariosto Spallanzani!",
                subject: "Applicazione liceo Ariosto Spallanzani",
                files: [],
                url: this.getStoreLink()
            };

            window.plugins.socialsharing.shareWithOptions(options,
                () => {
                },
                () => {
                });
        };

        this.rateUs = () => {
            window.open(this.getStoreLink());
        };

    }

}

export default SocialHandler;
