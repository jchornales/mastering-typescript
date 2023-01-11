"use strict";
let pair = 0;
let pairDummy = [];
const n = Number(prompt("Please Enter length of array:"));
const k = Number(prompt("Please Enter integer divisor:"));
inputArray(n);
function inputArray(arrayLength) {
    const arr = [];
    for (let ctr = 1; ctr <= arrayLength; ctr++) {
        let element = Number(prompt("Please enter a number:"));
        arr.push(element);
    }
    getPairs(arr);
    return pairDummy.length / 2;
}
function getPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j) {
                if ((array[i] + array[j]) % k === 0) {
                    pairDummy.push([array[i], array[j]]);
                }
            }
        }
    }
}
//# sourceMappingURL=fifthAlgo.js.map