class Modals {

    constructor($ionicLoading) {
        this.ResultTemplate = (text, cb) => {

            if (cb == undefined) {
                cb = () => {
                };
            }

            $ionicLoading.hide();
            $ionicLoading.show({template: text});
            window.setTimeout(()=> {
                $ionicLoading.hide();
                cb();
            }, 1000);
        };
    }

}

export default Modals;
