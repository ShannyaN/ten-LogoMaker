const Square = require('../lib/square.js');

describe('Square class',() => {
    describe('Square class', () => {
        it("Should be an instance of Square", () => {
            const newSquare = new Square(); 
            expect(newSquare).toBeInstanceOf(Square);
        })
    })
    describe('Text Length', () => {
        it('should throe error if text is more than 3 or less than 1', () => {
          const newSquare = new Square(york, red, green);
          const err = new Error('Text must be three characters or less.')
            
          expect(result).toEqual(false);
        });
      });*/
})