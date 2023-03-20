const Square = require('../lib/square.js');

describe('Square class',() => {
    describe('Square class', () => {
        it("Should be an instance of Square", () => {
            const newSquare = new Square(); 
            expect(newSquare).toBeInstanceOf(Square);
        })
    })
    describe('Square class', () => {
      it("Should be an instance of Square", () => {
        const newSquare = new Square ("svg","red","red");
        expect(newSquare.text).toBe("svg");
      })
    describe('Square class', () => {
      it("Should be an instance of Square", () => {
        const newSquare = new Square ("svg","red","red");
        expect(newSquare.textcolor).toBe("red");
      })
    })
    describe('Square class', () => {
      it("Should be an instance of Square", () => {
        const newSquare = new Square ("svg","red","red");
        expect(newSquare.shape).toBe("square");
      })
    })
    describe('Square class', () => {
      it("Should be an instance of Square", () => {
        const newSquare = new Square ("svg","red","blue");
        expect(newSquare.shapecolor).toBe("blue");
      })
    })
      describe('Square Class', () => {
        it('Text must be at least one character long and three characters long maximum.', () => {
          const newSquare = new Square();
          const err = new Error("Text must be at least one character long and three characters long maximum.");
          expect(()=>newSquare.setText("york")).toThrow(err);
      });
    });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newSquare = new Square();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newSquare.colorShapeVal("red")).not.toThrow(err);
       });
      });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newSquare = new Square();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newSquare.colorShapeVal("111111")).not.toThrow(err);
        });
      });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newSquare = new Square();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newSquare.colorShapeVal("k")).toThrow(err);
        });
       });
       describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newSquare = new Square();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newSquare.colorTextVal("green")).not.toThrow(err);
         });
        });
      describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newSquare = new Square();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newSquare.colorTextVal("0000FF")).not.toThrow(err);
          });
        });
      describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
          const newSquare = new Square();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newSquare.colorTextVal("0")).toThrow(err);
          });
         });
       

      //npm run test
  })
})
