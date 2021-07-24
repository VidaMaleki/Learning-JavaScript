let squareNumbers = new Array(10)
for (let i = 0; i < squareNumbers.length; i++) {
    let square = (i + 1) * (i + 1);
    squareNumbers[i] = square;
}
console.log(squareNumbers);

/*expected output
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

if you write console inside loop either put square or squareNumbers like this...

for (let i = 0; i < squareNumbers.length; i++) {
    let square = (i + 1) * (i + 1);
    squareNumbers[i] = square;
    console.log(squareNumbers[i])
}
out put will be...
1
4
9
16
25
36
49
64
81
100
*/