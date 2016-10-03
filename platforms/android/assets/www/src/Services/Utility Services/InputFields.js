var InputFields = function () {

    this.filledFields = function (fields) {
        var check = true;
        fields.map(function (item) {
            if (item == undefined || item == "") {
                check = false;
            }
        });
        return check;
    };

};

module.exports = InputFields;