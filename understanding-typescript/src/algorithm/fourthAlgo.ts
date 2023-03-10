// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
//Example
//The maximum height candles are units high. There are of them, so return
//Function Description
//Complete the function birthdayCakeCandles in the editor below.
//birthdayCakeCandles has the following parameter(s):
//   int candles[n]: the candle heights
//Returns
//   int: the number of candles that are tallest
//Input Format
//The first line contains a single integer,
//, the size of .
//The second line contains space-separated integers, where each integer describes the height of .

function birthdayCakeCandles(candles: number[]): number {
    let highest = 0;
    for (const candle of candles) {
        if (highest === 0) {
            highest = candle;
        } else if (candle >= highest) {
            highest = candle;
        }
    }

    let highestCtr = candles.filter((candle) => {
        return candle === highest;
    });

    return highestCtr.length;
}
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
