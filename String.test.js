'String Concatination'
/*Example:
Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'. */
console.log('Hello' + 'World'); //print HelloWorld
'Properties'
/* Example:
Use the .length property to log the number of characters in the following string to the console:
'Teaching the world how to code' */
console.log('Teaching the world how to code'.length);
'Methods'
/* Example:
1.Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.*/
console.log('Codecademy'.toUpperCase());
/*2.In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.
If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim().
Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.*/
console.log('    Remove whitespace   '.trim());
'create variable let'
/* 1.Create a let variable called changeMe and set it equal to the boolean true.*/
let changeMe = true
/*2.On the line after changeMe is declared, set the value of changeMe to be the boolean false.
To check if changeMe was reassigned, log the value saved to changeMe to the console.*/
changeMe = false 
console.log(changeMe);
'create variable const'
'string concatination with variables'
/*1.Create a variable named favoriteAnimal and set it equal to your favorite animal.*/
let favoriteAnimal = 'dog';
/*2.Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.*/
console.log('My favorite animal: ' + favoriteAnimal)
'String interpolation'
/*1.Create a variable called myName and assign it your name */
let myName = 'Vida';
/*2.Create a variable called myCity and assign it your favorite city’s name.*/
let myCity = 'Seattle';
/*3.Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:
My name is NAME. My favorite city is CITY.
Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.*/
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

