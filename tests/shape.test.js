const Shape = require('../lib/shape.js');

describe('Shape class',() => {
    it('should have a text string with a max of three', () => {
        const shape = new Shape;
        expect(shape.text).toBe("<=3")
    })
} )