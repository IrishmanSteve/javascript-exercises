const sumAll = function(weeNum, bigNum) {
    let sum = 0;
    if (!Number.isInteger(weeNum) || !Number.isInteger(bigNum)) return "ERROR";
    if (weeNum < 0 || bigNum < 0) return "ERROR";
    if (weeNum > bigNum) {
        const temp = weeNum;
        weeNum = bigNum;
        bigNum = temp;
    }
    for (let i = weeNum; i <= bigNum; i++) {
        sum += i;
    }
    return sum;
};
module.exports = sumAll;
console.log(sumAll(1, 5)); // Should be 15
console.log(sumAll(0, 10)); // Should be 55
console.log(sumAll(-3, 3)); // Should be 0
// Do not edit below this line