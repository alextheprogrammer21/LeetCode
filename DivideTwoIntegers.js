var divide = function(dividend, divisor) {

    if (divisor === 0) return undefined;
    let counter = 0;
    let isNegative = false;

    if (divisor < 0) {
        isNegative = !isNegative
        divisor = -divisor
    }
    if (dividend < 0) {
        isNegative = !isNegative
        dividend = -dividend
    }

    
    while (dividend >= divisor) {
        dividend-= divisor
        counter++

        if (counter > 2147483647) return 2147483647
        if (counter < -2147483648) return -2147483648
    }

    if (isNegative) counter = -counter
    return counter;
};

console.log(divide(-1,1))