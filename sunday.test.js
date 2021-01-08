const mul = require('./sunday');

test('multiplying 1 * 2 to equals 2', () => {
    expect(mul(1, 2)).toBe(2);
});