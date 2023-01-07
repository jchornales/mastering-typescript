"use strict";
let numberPattern = "";
let cursiveSum = 0;
const numInput = prompt("Please Input a Number:") || "No Input";
const iteration = Number(prompt("Input times of pattern Number repeated:"));
function getNumberPattern(num, reps) {
    if (num === "No Input") {
        throw Error("Please Input a Number");
    }
    for (let i = 1; i <= reps; i++) {
        numberPattern += num;
    }
    getCursiveNum(numberPattern);
}
function getCursiveNum(num) {
    for (const n of num) {
        cursiveSum += Number(n);
    }
    alert(cursiveSum);
}
getNumberPattern(numInput, iteration);
//# sourceMappingURL=firstAlgo.js.map