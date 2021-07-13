function getSleepHours(day) {
    switch (day) {
        case 'Monday':
            return 8
            break;
        case 'Tuesday':
            return 7
            break;
        case 'Wednsday':
            return 8
            break;
        case 'Thursday':
            return 6
            break;
        case 'Friday':
            return 8
            break;
        case 'Saturday':
            return 6
            break;
        case 'Sunday':
            return 6
            break;
        default:
            return 'Error!'
    }
};

function getActualSleepHours() {
    return getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednsday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday')
};

console.log(getSleepHours('Monday'));
console.log(getActualSleepHours());

function getIdealSleepHours() {
    let idealHours = 8;
    return idealHours * 7;
};

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log(`You slept ${actualSleepHours} hours this week, the perfect amount of sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You slept ${actualSleepHours - idealSleepHours} hours more sleep than you needed.`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You have ${idealSleepHours - actualSleepHours} hours less sleeping, You should get some rest.`)
    }
};
calculateSleepDebt()