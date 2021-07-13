const languages = require('./Array')

test('languages equals to JavaScript, Python, HTML, CSS, Java', () => {
    let programingLanguage = ['JavaScript', 'Python', 'HTML', 'CSS'];
    expect(new Set(languages(programingLanguage))).toContain('Java');
});   

