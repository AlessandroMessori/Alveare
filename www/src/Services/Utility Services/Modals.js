class Modals {

    constructor($ionicLoading) {
        this.ResultTemplate = (text) => {
            $ionicLoading.hide();
            $ionicLoading.show({template: text});
            window.setTimeout(()=>$ionicLoading.hide(), 1000);
        };
    }

}

export default Modals;
