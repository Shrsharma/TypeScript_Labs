var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Adder = (function () {
    function Adder(a) {
        var _this = this;
        this.a = a;
        this.add = function (b) { return _this.a + b; };
    }
    return Adder;
})();
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    Child.prototype.callAdd = function (num) {
        return this.add(num);
    };
    return Child;
})(Adder);
var child = new Child(10);
console.log(child.callAdd(20));
