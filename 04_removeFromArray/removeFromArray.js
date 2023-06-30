const removeFromArray = function(array, ...args) {
    const finalArray = [];
    array.forEach((element) => {
    
        if (!args.includes(element)) {
            finalArray.push(element);
        }
    });
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
