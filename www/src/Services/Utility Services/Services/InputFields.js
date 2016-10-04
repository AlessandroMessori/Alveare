class InputFields {

    filledFields(fields) {
        let check = true;
        fields.map(item => {
            if (item == undefined || item == "") {
                check = false;
            }
        });
        return check;
    }

}

export default InputFields;