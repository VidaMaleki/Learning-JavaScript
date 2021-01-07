const capitalizeName = require('./string')

//This is a uppercase example
test('toUpperCase sepanta to equal Sepanta', () => {
    expect(capitalizeName('sepanta')).toBe('Sepanta');
});



