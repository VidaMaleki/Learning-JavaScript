const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1); // 
};
const lowerCase = (name) => {
    return name.toLowerCase();
};
module.exports = { capitalizeName, lowerCase }
