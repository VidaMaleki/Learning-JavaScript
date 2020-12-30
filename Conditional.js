'if Statement'
/*1.Using the let keyword, declare a variable named sale. Assign the value true to it.*/
let sale = true;
/*2.Now create an if statement. Provide the if statement a condition of sale.
Inside the code block of the if statement, console.log() the string 'Time to buy!'.*/
if (sale){console.log('Time to buy!')};
/*3.Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.
Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.*/
sale = false;

'else Statement'
/*1.Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string  for a s'Time to wait sale.'*/
let sale = true;
sale = false;
if(sale) {console.log('Time to buy!');} 
else {console.log('Time to wait for a sale.')}

'Logical Operator !'
/*the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!) */
/*1.In main.js there are two variables mood and tirednessLevel.
Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.
If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.*/
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel > 8){console.log('time to sleep')} else {console.log('not bed time yet')};

'Comparison Operators'
/*Less than: <
Greater than: >    
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !== */
/*1.Using let, create a variable named hungerLevel and set it equal to 7.*/
let hungerLevel = 7;
/*2.Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.*/
if(hungerLevel > 7) {console.log('Time to eat!')} else {console.log('We can eat later!')};

'Truthy and Falsy'
/*The list of falsy values includes:
 0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number */
/*1.Change the value of wordCount so that it is truthy. This value should still be a number.
After you make this change and run your code, 'Great! You've started your work!' should log to the console.*/
let wordCount = 0;
wordCount = 1;
if (wordCount) {console.log("Great! You've started your work!");} 
else {console.log('Better get to work!');}

let favoritePhrase = 'Hello World!';
favoritePhrase = '';
if (favoritePhrase) {console.log("This string doesn't seem to be empty.");}
else {console.log('This string is definitely empty.');}

'Truthy and falsy Assignment'
/*1.Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step.
Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.*/
/*2.Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'.
What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.*/
let tool = '';
tool = 'marker';
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);

'Ternary Oprator'
/*1.Refactor, or edit, the first if...else block to use a ternary operator.*/
/*2.Refactor the second if...else block to use a ternary operator.*/
/*3.Refactor the third if...else block to use a ternary operator.*/
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
let isCorrect = true;
isCorrect ? console.log('Correct!') : 
console.log('Incorrect!');
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? 
console.log('I love that!') :
console.log("I don't love that!");

'Else if statement'
/*1.Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen!
In main.js there is already an if...else statement in place. Let’s add an else if statement that checks if season is equal to 'winter'.
Inside the code block of the else if statement, add a console.log() that prints the string 'It\'s winter! Everything is covered in snow.'.*/

/*2.Add another else if statement that checks if season is equal to 'fall'.
Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s fall! Leaves are falling!'.*/

/*3.Add a final else if statement that checks if season is equal to 'summer'.
Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s sunny and warm because it\'s summer!'.*/
let season = 'summer';
if (season === 'spring') {console.log('It\'s spring! The trees are budding!');} 
else if(season === 'winter') {console.log('It\'s winter! Everything is covered in snow.');} 
else if(season === 'fall') {console.log('It\'s fall! Leaves are falling!')}
else if(season === 'summer') {console.log('It\'s sunny and warm because it\'s summer!')}
else {console.log('Invalid season.');}

'switch Statemnet'
/* 1.Let’s write a switch statement to decide what medal to award an athlete.
athleteFinalPosition is already defined at the top of main.js. So start by writing a switch statement with athleteFinalPosition as its expression.*/
switch(expression) {}
/*2.Inside the switch statement, add three cases:
•	The first case checks for the value 'first place'
o	If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!'
•	The second case checks for the value 'second place'
o	If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!'
•	The third case checks for the value 'third place'
o	If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!'
Remember to add a break after each console.log().*/
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){case 'first place': console.log('You get the gold medal!');
break;
case 'second place' : console.log('You get the silver medal!');
break;
case 'third place' : console.log('You get the bronze medal!');
break;
/*3.Now, add a default statement at the end of the switch that uses console.log() to print 'No medal awarded.'.
If athleteFinalPosition does not equal any value of our cases, then the string 'No medal awarded.' is logged to the console.
Remember to add the break keyword at the end of the default case.*/
default:
console.log('No medal awarded.');
break;}

