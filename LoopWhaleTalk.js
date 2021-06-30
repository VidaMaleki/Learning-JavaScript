let input = 'My name is Vida.'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

for (let i = 0; i < input.length; i++) {
    //this should count the number of characters in input 
    //console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        //this will count 0 to 4 for vowles number
        //console.log(j)
        if (input[i] === vowels[j]) {
            if (input[i] === 'e') {
                resultArray.push('ee')
            } else if (input[i] === 'u') {
                resultArray.push('uu')
            } else { resultArray.push(input[i]) };
        };
    };
};
console.log(resultArray.join('').toUpperCase());