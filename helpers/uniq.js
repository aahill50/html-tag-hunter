Array.prototype.uniq = function() {
    var arr = this;
    var uniqArray = [];
    arr.forEach(function(el) {
        if(uniqArray.indexOf(el) === -1) {
            uniqArray.push(el);
        }
    });
    return uniqArray;
};