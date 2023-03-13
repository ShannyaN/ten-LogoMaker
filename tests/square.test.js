const Square = require('../lib/square.js');

describe('Square class',() => {
    it("should be an instance of Square", () => {
        const newSquare = new Square(); 
        expect(newSquare).toBeInstanceOf(Square);
    })
} )