"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Justine" }, { age: 23 });
const mergeObj2 = merge({ name: "Justine", hobbies: ["Painting", "Gaming"] }, { age: 23 });
function countAndPrint(element) {
    let descriptionText = "Got no Value.";
    if (element.length > 1) {
        descriptionText = `Got ${element.length} values`;
    }
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return `${obj[key]}`;
}
extractAndConvert({ name: "Justine" }, "name");
//# sourceMappingURL=creating-generic-type.js.map