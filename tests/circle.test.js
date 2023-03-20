const Circle = require('../lib/circle.js');

describe('Circle class',() => {
    describe('Circle class', () => {
        it("Should be an instance of Circle", () => {
            const newCircle = new Circle(); 
            expect(newCircle).toBeInstanceOf(Circle);
        })
    })
    describe('Circle class', () => {
      it("Should be an instance of Circle", () => {
        const newCircle = new Circle ("svg","red","red");
        expect(newCircle.text).toBe("svg");
      })
    describe('Circle class', () => {
      it("Should be an instance of Circle", () => {
        const newCircle = new Circle ("svg","red","red");
        expect(newCircle.textcolor).toBe("red");
      })
    })
    describe('Circle class', () => {
      it("Should be an instance of Circle", () => {
        const newCircle = new Circle ("svg","red","red");
        expect(newCircle.shape).toBe("circle");
      })
    })
    describe('Circle class', () => {
      it("Should be an instance of Circle", () => {
        const newCircle = new Circle ("svg","red","blue");
        expect(newCircle.shapecolor).toBe("blue");
      })
    })
      describe('Circle Class', () => {
        it('Text must be at least one character long and three characters long maximum.', () => {
          const newCircle = new Circle();
          const err = new Error("Text must be at least one character long and three characters long maximum.");
          expect(()=>newCircle.setText("york")).toThrow(err);
      });
    });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newCircle = new Circle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newCircle.colorShapeVal("red")).not.toThrow(err);
       });
      });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newCircle = new Circle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newCircle.colorShapeVal("111111")).not.toThrow(err);
        });
      });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newCircle = new Circle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newCircle.colorShapeVal("k")).toThrow(err);
        });
       });
       describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newCircle = new Circle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newCircle.colorTextVal("green")).not.toThrow(err);
         });
        });
      describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newCircle = new Circle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newCircle.colorTextVal("0000FF")).not.toThrow(err);
          });
        });
      describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
          const newCircle = new Circle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newCircle.colorTextVal("0")).toThrow(err);
      });
    });
  })
})
