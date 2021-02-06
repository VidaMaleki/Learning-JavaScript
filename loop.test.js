const groceryList = require('./loop')


test('groceryList equals to .... ', () => {
    for (let i = 0; i < groceryList.length; i++) {
        

        expect(groceryList[i]).toBe([
            'orange juice',
            'bananas',
            'coffee beans',
            'brown rice',
            'pasta',
            'coconut oil'
        ]);
    };
});