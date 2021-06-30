let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 19;
if (registeredEarly && age > 18) {
    raceNumber += 1000
};
if (registeredEarly && age > 18) {
    console.log(`Number ${raceNumber} you will race at 9:30 am.`)
} else if (!registeredEarly && age > 18) {
    console.log(`Number ${raceNumber} you will race at 11:00 am.`)
} else if (age < 18) {
    console.log(`Number ${raceNumber} you will race at 12:30 pm.`)
} else {
    console.log(`Number ${raceNumber} Please check registration desk. `)
}