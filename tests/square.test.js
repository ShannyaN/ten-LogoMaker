const Square = require('../lib/square.js');

describe('Square class',() => {
    describe('Square class', () => {
        it("Should be an instance of Square", () => {
            const newSquare = new Square(); 
            expect(newSquare).toBeInstanceOf(Square);
        })
    })
    describe('Text Length', () => {
        it('should throw error if text is more than 3 characters or less than one character long', () => {
          const newSquare = new Square();
          newSquare.text = "york";
          const err = new Error('Text must be at least one character long and three characters long maximum.');
          expect(newSquare).toThrowError(err);
        });
      });
      //npm run test
})