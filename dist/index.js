'use strict';
const sum = (a, b) => {
    if (a === 0) {
        return b;
    } else if (b === 0) {
        return a;
    } else {
        return a + b;
    }
};
const printSum = (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${sum(a, b)}`);
};
