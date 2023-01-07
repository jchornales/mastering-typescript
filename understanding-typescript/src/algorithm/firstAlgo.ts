// Function Description Return the recursive sum of digits in a number X with repeated pattern n for k times, where recursive sum is sum of all digits in a number until result has only one digit

// n: a number pattern
// k: times of pattern n repeated

// 1 <= n <= 2147483647
// 1 <= k <= 2147483647
// e.g. n = 123, k = 2 => 123123 =>
// recursive sum of 123123 : 1 + 2 + 3 + 1 + 2 + 3 = 12 => 1 + 2 = 3

// Input 1: n = “1”, k = 1
// Input 2: n = “123”, k = 2
// Input 3: n = “2147283647”, k = 2147283647

let numberPattern = "";
let cursiveSum = 0;

const numInput = prompt("Please Input a Number:") || "No Input";
const iteration = Number(prompt("Input times of pattern Number repeated:"));

function getNumberPattern(num: string, reps: number) {
    if (num === "No Input") {
        throw Error("Please Input a Number");
    }

    for (let i = 1; i <= reps; i++) {
        numberPattern += num;
    }

    getCursiveNum(numberPattern);
}

function getCursiveNum(num: string) {
    for (const n of num) {
        cursiveSum += Number(n);
    }
    alert(cursiveSum);
}

getNumberPattern(numInput, iteration);
