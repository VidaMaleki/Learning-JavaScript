 const { capitalizeName, lowerCase, txt, str, concatination } = require('./string')

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

 test('str equals to I am learning coding by Bahador help.', () => {
     expect(str('Bahador')).toBe('I am learning coding by Bahador help.')
 });
 test('cocatination equals to I am learning coding by Bahador help.', () => {
     expect(concatination('Bahador, ', 'salam.')).toBe('Bahador, salam.')
 });