const keyBankBallard = {
    employees: {
        manager: {
            name: 'Scott Baldwin',
            duty: 'Management',
            motivationWord() {
                return 'You can do it.';
            }
        },
        banker: { name: 'Brian Jaynes' },
        teller: { name: 'Reena Kanda' }
    },
    building: {
        room: 6,
        lobby: ["banker's room", "vault room", "bathroom", "kitchen", "ATM"]
    }
};

let bossName = keyBankBallard.employees.manager.name;
//console.log(bossName);
//key bank employees name  
for (let bankMember in keyBankBallard.employees) {
    console.log(`${bankMember}: ${keyBankBallard.employees[bankMember].name}`);
};