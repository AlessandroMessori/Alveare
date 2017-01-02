class conventionsCtrl {
    constructor($scope, $ionicPopup, StaticData) {

        for (let i = 0; i < StaticData.conventions.length; i++) {
            const len = StaticData.conventions[i].description.length;
            const suffix = (len > 1 ? "Convenzioni" : "Convenzione");
            StaticData.conventions[i].text = `${len} ${suffix}`;
        }

        $scope.Conventions = StaticData.conventions;

        $scope.showConventions = (title, list) => {
            $ionicPopup.alert({
                title: title,
                template: this.getListTemplate(list)
            });
        };

        this.getListTemplate = list => {
            let tem = "";
            for (let i = 0; i < list.length; i++) {
                tem += `<li> ${list[i]} </li>`;
            }
            return `<ul> ${tem} </ul>`;
        };

    }
}

export default conventionsCtrl;