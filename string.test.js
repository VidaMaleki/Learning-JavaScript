const { capitalizeName, lowerCase, txt } = require('./string')

//This is a uppercase example.
test('toUpperCase sepanta to equal Sepanta', () => {
    expect(capitalizeName('sepanta')).toBe('Sepanta')
});
//This is an example for lower cassing name.
test('toLowerCase VIDA to equal vida', () => {
    expect(lowerCase('VIDA')).toBe('vida')
});
//in case you change sentence you need to count letters for new sentence.
test('txt My name is Vida. equals 16', () => {
    expect(txt('My name is Vida.')).toBe(16)
});