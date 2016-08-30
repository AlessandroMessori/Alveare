var StringHandler = function () {
    this.shorten = function shorten(text, maxLength) {
        var ret = text;
        if (ret.length > maxLength) {
            ret = ret.substr(0, maxLength) + '…';
        }
        return ret;
    }
};

module.exports = StringHandler;
