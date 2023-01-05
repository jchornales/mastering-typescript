"use strict";
function add(...numbers) {
    return numbers.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    });
}
console.log(add(5, 25, 23, 22, 21));
//# sourceMappingURL=basics.js.map