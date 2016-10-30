class DateHandler {

    GetCurrentDate() {

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!

        if (dd < 10) {
            dd = "0" + dd;
        }

        switch (mm) {
            case 1:
                mm = "Gennaio";
                break;
            case 2:
                mm = "Febbraio";
                break;
            case 3:
                mm = "Marzo";
                break;
            case 4:
                mm = "Aprile";
                break;
            case 5:
                mm = "Maggio";
                break;
            case 6:
                mm = "Giugno";
                break;
            case 7:
                mm = "Luglio";
                break;
            case 8:
                mm = "Agosto";
                break;
            case 9:
                mm = "Settembre";
                break;
            case 10:
                mm = "Ottobre";
                break;
            case 11:
                mm = "Novembre";
                break;
            case 12:
                mm = "Dicembre";
                break;

        }

        today = dd + " " + mm;

        return today;
    }

    GetFullDate() {

        const now = new Date();
        let Hour = now.getHours();
        let Minutes = now.getMinutes();

        if (Minutes < 10) {
            Minutes = "0" + Minutes;
        }

        return DateHandler.GetCurrentDate() + " alle " + Hour + ":" + Minutes;

    }
}

export default DateHandler;
