const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let repeatable = ""
    for (let i = 0; i < num; i++) {
    repeatable += string;
}
    return repeatable;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
