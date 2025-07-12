const fromEuroToUsd = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInUsd = valueInEuro * 1.07;
    // return the dollar value
    return valueInUsd;
}

const fromUsdToYen = function(valueInUsd) {
    let valueInYen = valueInUsd * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// One euro
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToUsd, fromUsdToYen, fromYenToPound };
