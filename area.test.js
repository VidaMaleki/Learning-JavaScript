const { rectangleArea, squareArea } = require('./area')
test('rectangleArea 2 * 3 equals 6', () => {
    expect(rectangleArea(2, 3)).toBe(6)
})
/*test('triangle area 3 * 4 / 2 equals 6', () => {
    expect(triangleArea(3, 4)).toBe(6)
})*/
test('squareArea 2 * 2 equals 4', () => {
    expect(squareArea(2)).toBe(4)
});