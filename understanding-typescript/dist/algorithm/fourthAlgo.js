"use strict";
function birthdayCakeCandles(candles) {
    let highest = 0;
    for (const candle of candles) {
        if (highest === 0) {
            highest = candle;
        }
        else if (candle >= highest) {
            highest = candle;
        }
    }
    let highestCtr = candles.filter((candle) => {
        return candle === highest;
    });
    return highestCtr.length;
}
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
//# sourceMappingURL=fourthAlgo.js.map