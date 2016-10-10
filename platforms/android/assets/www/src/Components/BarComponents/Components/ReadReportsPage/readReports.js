class readReportsCtrl {

    constructor($scope, Reports) {
        Reports.getReports($scope, "reportsSpinner");
    }

}

export default readReportsCtrl;
