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
//using 
const str = (name) => {
    return 'I am learning coding by ' + name + ' help.';
};

function concatination(sentence1, sentence2) {
    return sentence1.concat(sentence2);
}


module.exports = { capitalizeName, lowerCase, txt, str, concatination }