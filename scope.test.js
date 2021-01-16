const courses = require('./scope')

test('courses equals to I am preparing for ADA devaloper academy.', ()=>{
    expect(courses()).toBe('I am preparing for ADA devaloper academy.')
});