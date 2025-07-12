// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be $1.07", function() {
    const { fromEuroToUsd } = require('./app.js');

    const USD = fromEuroToUsd(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToUsd(3.5)).toBe(3.745);
});

test("One yen should be 156.5", function() {
    const { fromUsdToYen } = require('./app.js');

    const USD = fromUsdToYen(3.5);

    const expected = 3.5 * 156.5;

    expect(fromUsdToYen(3.5)).toBe(547.75);
});

test("One pound should be 0.87", function() {
    const { fromYenToPound } = require('./app.js');

    const USD = fromYenToPound(3.5);

    const expected = 3.5 * 0.87;

    expect(fromYenToPound(3.5)).toBe(3.045);
})