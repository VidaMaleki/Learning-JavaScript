const { capitalizeName, lowerCase } = require('./string')

//This is a uppercase example
test('toUpperCase sepanta to equal Sepanta', () => {
    expect(capitalizeName('sepanta')).toBe('Sepanta')
});
//This an example for lower cassing name
test('toLowerCase VIDA to equal vida', () => {
    expect(lowerCase('VIDA')).toBe('vida')
});