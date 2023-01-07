"use strict";
function addNumbers(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addNumbers("25", "26");
result.split("");
//# sourceMappingURL=function-overload.js.map