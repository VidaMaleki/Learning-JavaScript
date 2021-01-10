//This unction is to making first letter Uppercase.
const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1); 
};
//This function is for lowercasing a word.
const lowerCase = (name) => {
    return name.toLowerCase();
};
//his function is for counting length of a sentence
const txt = (sentence) => {
    return sentence.length;
};    
module.exports = { capitalizeName, lowerCase, txt }