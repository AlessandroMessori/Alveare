var adminCtrl = function ($scope,StaticData) {

    $scope.title = "Sezione Amministratori ";

    $scope.Links = StaticData.adminLinks;

};

module.exports = adminCtrl;