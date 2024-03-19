var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function cars(manufacturer, modelName, details) {
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, details);
    return car;
}
var car1 = cars("EBTEC Corporation", "Ford", { colour: "black", auto: true });
console.log(car1);
