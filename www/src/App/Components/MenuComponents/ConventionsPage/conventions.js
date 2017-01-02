class conventionsCtrl {
    constructor($scope, StaticData) {

        for (let i = 0; i < StaticData.conventions.length; i++) {
            const len = StaticData.conventions[i].description.length;
            const suffix = (len > 1 ? "Convenzioni" : "Convenzione");
            StaticData.conventions[i].text = `${len} ${suffix}`;
        }

        $scope.Conventions = StaticData.conventions;


    }
}

export default conventionsCtrl;