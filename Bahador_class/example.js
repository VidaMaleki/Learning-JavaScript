// using log2 with for loop
function log2(base, num) {
    let result = 0;
    for (let i = 1; i < num; i *= base) {
        result += base;
    }
    return result / 2;
}
console.log(log2(2, 8));
// using exponent with for loop
function exponent(base, power) {
    let answer = 1;
    for (let i = 0; i < power; i++) {
        answer *= base;
    }
    return answer;
};
console.log(exponent(3, 3))
    // multiplying without * using while loop
function mul(a, b) {
    let c = a;
    let i = 1;
    while (i < b) {
        i++;
        c += a;
    }
    return c;
}
console.log(mul(2, 5));
// dividing without / using for loop
function divid(dividend, divisor) {
    let quotient = 0;
    for (let i = dividend; i > 0; i -= divisor) {
        quotient++
    }
    return quotient;
};