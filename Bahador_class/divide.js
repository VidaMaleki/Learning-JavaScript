function divid(dividend, divisor) {
    let quotient = 0;
    for (let i = dividend; i > 0; i -= divisor) {
        quotient++
    }
    return quotient;
};