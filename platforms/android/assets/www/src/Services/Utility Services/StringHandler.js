class StringHandler {

    shorten(text, maxLength) {
        let ret = text;
        if (ret.length > maxLength) {
            ret = ret.substr(0, maxLength) + "…";
        }
        return ret;
    }

    getErrorMessage(error) {
        let message = "errore nella creazione dell'account";
        switch (error) {
            case "auth/invalid-email":
                message = "la mail è formattata in modo scorretto";
                break;
            case "auth/weak-password":
                message = "la password deve contenere almeno 6 caratteri";
                break;
            case "auth/email-already-in-use":
                message = "questa mail è già in uso su un altro account";
                break;
        }
        return message;
    }
}


export default StringHandler;
