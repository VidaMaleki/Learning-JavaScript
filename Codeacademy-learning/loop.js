/* Loops
For loop
Looping in reverse
Looping through Array
Nested loop
The while loop
Do...while statements
Break keyword
*/
//this is a grocery list that we want to loop them 
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil'];
let costPerItem = [1.5, 2, 1.75, 4, 2, 3];
let totalCost = []

for(let i = 0; i < groceryList.length; i++ ){
    console.log(groceryList[i] + ' = ' + costPerItem[i])
    let sumOfCost = costPerItem.reduce(function(a, b){
        return (a + b);
    }, 0);
    totalCost = sumOfCost;
};
console.log(totalCost);

module.exports = groceryList;