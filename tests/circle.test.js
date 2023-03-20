const Circle = require('../lib/circle.js');

describe('Circle class',() => {
    describe('Circle class', () => {
        it("Object made from Circle Class should be an instance of Circle", () => {
            const newCircle = new Circle(); 
            expect(newCircle).toBeInstanceOf(Circle);
        })
    })
    describe('Circle class', () => {
      it("Expect the text input to be the object's text property.", () => {
        const newCircle = new Circle ("svg","red","red");
        expect(newCircle.text).toBe("svg");
      })
    describe('Circle class', () => {
      it("Expect the textcolor input to be the object's textcolor property.", () => {
        const newCircle = new Circle ("svg","red","red");
        expect(newCircle.textcolor).toBe("red");
      })
    })
    describe('Circle class', () => {
      it("Expect the shape to be a circle.", () => {
        const newCircle = new Circle ("svg","red","red");
        expect(newCircle.shape).toBe("circle");
      })
    })
    describe('Circle class', () => {
      it("Expect the shapecolor input to be the object's shapecolor property.", () => {
        const newCircle = new Circle ("svg","red","blue");
        expect(newCircle.shapecolor).toBe("blue");
      })
    })
      describe('Text Length', () => {
        it('Text must be at least one character long and three characters long maximum.', () => {
          const newCircle = new Circle();
          const err = new Error("Text must be at least one character long and three characters long maximum.");
          expect(()=>newCircle.setText("york")).toThrow(err);
      });
    });
    describe('Text Length', () => {
      it('Text must be at least one character long and three characters long maximum.', () => {
        const newCircle = new Circle();
        const err = new Error("Text must be at least one character long and three characters long maximum.");
        expect(()=>newCircle.setText("")).toThrow(err);
    });
  });
  });
  describe('Color Validation', () => {
    describe('Shape Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newCircle = new Circle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newCircle.colorShapeVal("red")).not.toThrow(err);
       });
      });
    describe('Shape Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newCircle = new Circle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newCircle.colorShapeVal("111111")).not.toThrow(err);
        });
      });
    describe('Shape Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newCircle = new Circle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newCircle.colorShapeVal("k")).toThrow(err);
        });
       });
       describe('Text Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newCircle = new Circle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newCircle.colorTextVal("green")).not.toThrow(err);
         });
        });
      describe('Text Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newCircle = new Circle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newCircle.colorTextVal("0000FF")).not.toThrow(err);
          });
        });
      describe('Text Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
          const newCircle = new Circle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newCircle.colorTextVal("0")).toThrow(err);
      });
    });
  })
})
