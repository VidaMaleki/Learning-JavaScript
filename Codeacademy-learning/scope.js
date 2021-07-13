/* Scope chapter was include:
Global Scope
Block Scope
Scope Pollution
*/
//This is an example of "Global Scope".
let courseName = 'ADA devaloper academy'

function courses() {
    return 'I am preparing for ' + courseName + '.';
};
module.exports = courses;