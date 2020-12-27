Lesson 1

A- Console
1. Use the console.log code in the editor to log your age to the console.
answer:
console.log(33);

B- Comments

1. To the right, we’ve provided you with the beginning of the book Catch-22 by Joseph Heller.
On line 1, write a single line comment that says Opening line.   console.log('It was love at first sight.');

answer:
// openin line
console.log('It was love at first sight.');

2. Single line comments are great for adding context to your code. Multi-line comments are often best suited to prevent a block of code from running. However, both types of comments can be used for either purpose.Use a multi-line comment so that the bottom 6 console.log() statements are all commented out.
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them

answer:
/* console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.); */

C- Data Types 

1. On line 1, log the string 'JavaScript' to the console.
answer:
console.log('JavaScript');

2. On line 2, log the number 2011 to the console.
answer:
console.log(2011);

3. On line 3, print 'Woohoo! I love to code! #codecademy' to the console.
answer:
console.log('Woohoo! I love to code! #codecademy');

4. On line 4, print the number 20.49 to the console.
answer:
console.log(20.49);

D- Arithmetic Operators

1. Inside of a console.log(), add 3.5 to your age. This is the age you’ll be when we start sending people to live on Mars.
answer:
console.log(3.5 + 33); // print 36.5

2. On a new line write another console.log(). Inside the parentheses, take the current year and subtract 1969.
answer:
console.log(2020 - 1969);

3. Create another console.log(). Inside the parentheses divide 65 by 240.
answer:
console.log(65 / 240);

4. Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.
answer:
console.log(0.2708 * 100);

E- String Concatenation

1. Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'. Note: You should concatenate the two strings exactly (without introducing any additional characters).
answer:
console.log('Hello' + 'World'); //print HelloWorld

2. We left off the space last time. Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.
answer:
console.log('Hello ' + 'World'); // print Hello World

F- Properties

1- Use the .length property to log the number of characters in the following string to the console:
'Teaching the world how to code'
answer:
console.log('Teaching the world how to code'.length);

G- Methods

1.Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.
answer:
/ Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

2.In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.
If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim(). Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.
answer:
/ Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

H- Built-in Objects

1. Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
answer:
console.log(Math.random() * 100);

2. Now, use Math.floor() to make the output a whole number.Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor(). 
Answer:
console.log(Math.floor(Math.random() * 100));

3. Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.
Use this method with the number 43.8. Log the answer to the console.
 Answer:
console.log(Math.ceil(43.8));

4. Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.
Put the number 2017 in the parentheses of the method and use console.log() to print the result.
ANSWER:
console.log(Number.isInteger(2017));

