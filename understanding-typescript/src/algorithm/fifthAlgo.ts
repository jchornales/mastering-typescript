// Given an array of integers and a positive integer , determine the number of pairs where and + is divisible by
// Example
// Three pairs meet the criteria: and
// Function Description
// Complete the divisibleSumPairs function in the editor below.
// divisibleSumPairs has the following parameter(s):
//     int n: the length of array
//     int ar[n]: an array of integers
//     int k: the integer divisor
// Returns
// - int: the number of pairs
// Input Format
// The first line contains
// space-separated integers, and .
// The second line contains space-separated integers, each a value of

let pair = 0;
let pairDummy: number[][] = [];

const n = Number(prompt("Please Enter length of array:"));
const k = Number(prompt("Please Enter integer divisor:"));

inputArray(n);

function inputArray(arrayLength: number) {
    const arr: number[] = [];
    for (let ctr = 1; ctr <= arrayLength; ctr++) {
        let element = Number(prompt("Please enter a number:"));
        arr.push(element);
    }
    getPairs(arr);

    return pairDummy.length / 2;
}

function getPairs(array: number[]) {
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

//  100% success rate based on hackerRank
