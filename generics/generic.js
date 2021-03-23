var GenericMap = (function () {
    function GenericMap() {
        this.items = {};
    }
    GenericMap.prototype.setItem = function (key, item) {
        this.items[key] = item;
    };
    GenericMap.prototype.getItem = function (key) {
        return this.items[key];
    };
    GenericMap.prototype.print = function () {
        var _this = this;
        var itemsString = Object.getOwnPropertyNames(this.items)
            .map(function (key) { return (key + ": " + _this.getItem(key)); }).join(",");
        console.log(itemsString);
    };
    return GenericMap;
})();
var num = new GenericMap();
num.setItem('alpha', 7);
num.setItem('beta', 7);
num.print();
var cjars = new GenericMap();
num.setItem('alpha', 'A');
num.setItem('beta', 'B');
num.print();
