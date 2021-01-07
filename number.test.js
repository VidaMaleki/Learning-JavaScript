const { sum, mul, sub, div } = require('./number')

test('Adding 2 + 3 equals 5', () => {
    expect(sum(2, 3)).toBe(5)
})
test('Multiplying 2 * 3 equals 6', () => {
    expect(mul(2, 3)).toBe(6)
})
test('Subtracting 3 - 2 equals 1', () => {
    expect(sub(3, 2)).toBe(1)
})
test('Dividing 9 / 3 equals 3', () => {
    expect(div(9, 3)).toBe(3)
});
