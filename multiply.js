// multiply by using for loop (1)
function multiply(number, times) {
    let answer = number;
    for (var i = 1; i < times; i++) {
        answer += number;
    }
    return answer;
}
console.log(multiply(3, 4));
// multiply by using for loop (2)
function multipl(a, b) {
    let answe = 0;
    for (let i = 0; i < b; i++) {
        answe += a;
    }
    return answe;
};
console.log(multipl(5, 4));
//multipy by using while loop
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