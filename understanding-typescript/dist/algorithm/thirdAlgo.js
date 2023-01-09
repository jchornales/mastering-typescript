"use strict";
const givenArray = [1, 2, 3, 4, 5];
let cloneArray = [];
let sumArray = [];
function miniMaxSum(arr) {
    for (let ctr = 0; ctr < arr.length; ctr++) {
        cloneArray = [...arr];
        cloneArray.splice(ctr, 1);
        getSum(cloneArray);
    }
    getMinMax(sumArray);
}
function getSum(arr) {
    let total = 0;
    for (let arrCtr = 0; arrCtr < arr.length; arrCtr++) {
        total += cloneArray[arrCtr];
        if (arrCtr === arr.length - 1) {
            sumArray.push(total);
        }
    }
}
function getMinMax(arr) {
    let min = 0;
    let max = 0;
    for (const n of arr) {
        if (min === 0 || n <= min) {
            min = n;
        }
        if (n > max) {
            max = n;
        }
    }
    return [min, max];
}
miniMaxSum(givenArray);
//# sourceMappingURL=thirdAlgo.js.map