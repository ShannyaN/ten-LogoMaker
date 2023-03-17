const Square = require('../lib/square.js');

describe('Square class',() => {
    describe('Square class', () => {
        it("Should be an instance of Square", () => {
            const newSquare = new Square(); 
            expect(newSquare).toBeInstanceOf(Square);
        })
    })
    // describe('Text Length', () => {
    //     it('Text must be at least one character long and three characters long maximum.', () => {
    //       const newSquare = new Square("york");
    //       //newSquare.text = "york";
    //       const err = new Error('Text must be at least one character long and three characters long maximum.');
    //       expect(newSquare).toThrowError(err);
    //     });
    //   });
    describe('Square class', () => {
      it("Should be an instance of Square", () => {
        const newSquare = new Square ("text","red","red");
        expect(newSquare.text).toBe("text");
      })
    describe('Square class', () => {
      it("Should be an instance of Square", () => {
        const newSquare = new Square ("text","red","red");
        expect(newSquare.textcolor).toBe("red");
      })
    })
    describe('Square class', () => {
      it("Should be an instance of Square", () => {
        const newSquare = new Square ("text","red","blue");
        expect(newSquare.shapecolor).toBe("blue");
      })
    })
      //npm run test
  })
})
