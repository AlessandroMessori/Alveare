class adminCtrl {

    constructor($scope, StaticData) {

        $scope.title = "Sezione Amministratori ";
        $scope.Links = StaticData.adminLinks;

    }

}

export default  adminCtrl;