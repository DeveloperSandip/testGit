var msg = "Hello Sandip";
console.log(msg);
var Starting = /** @class */ (function () {
    function Starting() {
    }
    Starting.prototype.start = function () {
        console.log("Its your first TS function");
    };
    return Starting;
}());
var myStart = new Starting();
myStart.start();
