class SocialHandler {

    constructor($ionicPlatform, Links) {

        this.getStore = () => {
            return ($ionicPlatform.is("ios")) ? "app-store" : "play-store";
        };

        this.shareApp = () => {

            Links.getStoreLink(this.getStore(), url => {

                const options = {
                    message: "Scarica l'applicazione del liceo Ariosto Spallanzani!",
                    subject: "Applicazione liceo Ariosto Spallanzani",
                    files: [],
                    url
                };

                window.plugins.socialsharing.shareWithOptions(
                    options,
                    () => "",
                    () => "");
            });
        };

        this.rateUs = () => Links.getStoreLink(this.getStore(), url => {
            cordova.InAppBrowser.open(url, "_system", "location=yes");
        });

    }

}

export default SocialHandler;
