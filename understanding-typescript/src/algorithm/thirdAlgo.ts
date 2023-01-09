//? Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24

//? Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of  integers

//? Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
// Input Format
// A single line of five space-separated integers.

//? Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

//? Sample Input
// 1 2 3 4 5
//? Sample Output
// 10 14

const givenArray = [1, 2, 3, 4, 5];
let cloneArray: number[] = [];
let sumArray: number[] = [];

function miniMaxSum(arr: number[]): void {
    for (let ctr = 0; ctr < arr.length; ctr++) {
        cloneArray = [...arr];
        cloneArray.splice(ctr, 1);
        getSum(cloneArray);
    }
    getMinMax(sumArray);
}

function getSum(arr: number[]) {
    let total = 0;
    for (let arrCtr = 0; arrCtr < arr.length; arrCtr++) {
        total += cloneArray[arrCtr];

        if (arrCtr === arr.length - 1) {
            sumArray.push(total);
        }
    }
}

function getMinMax(arr: number[]) {
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

// Checked by hackerRank 100% Success Rate
