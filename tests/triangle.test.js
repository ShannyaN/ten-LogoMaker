const Triangle = require('../lib/triangle.js');

describe('Triangle class',() => {
    describe('Triangle class', () => {
        it("Should be an instance of Triangle", () => {
            const newTriangle = new Triangle(); 
            expect(newTriangle).toBeInstanceOf(Triangle);
        })
    })
    describe('Triangle class', () => {
      it("Should be an instance of Triangle", () => {
        const newTriangle = new Triangle ("svg","red","red");
        expect(newTriangle.text).toBe("svg");
      })
    describe('Triangle class', () => {
      it("Should be an instance of Triangle", () => {
        const newTriangle = new Triangle ("svg","red","red");
        expect(newTriangle.textcolor).toBe("red");
      })
    })
    describe('Triangle class', () => {
      it("Should be an instance of Triangle", () => {
        const newTriangle = new Triangle ("svg","red","red");
        expect(newTriangle.shape).toBe("triangle");
      })
    })
    describe('Triangle class', () => {
      it("Should be an instance of Triangle", () => {
        const newTriangle = new Triangle ("svg","red","blue");
        expect(newTriangle.shapecolor).toBe("blue");
      })
    })
      describe('Triangle Class', () => {
        it('Text must be at least one character long and three characters long maximum.', () => {
          const newTriangle = new Triangle();
          const err = new Error("Text must be at least one character long and three characters long maximum.");
          expect(()=>newTriangle.setText("york")).toThrow(err);
      });
    });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newTriangle = new Triangle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newTriangle.colorShapeVal("red")).not.toThrow(err);
       });
      });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newTriangle = new Triangle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newTriangle.colorShapeVal("111111")).not.toThrow(err);
        });
      });
    describe('Color Validation', () => {
      it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
        const newTriangle = new Triangle();
        const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
        expect(()=>newTriangle.colorShapeVal("k")).toThrow(err);
        });
       });
       describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newTriangle = new Triangle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newTriangle.colorTextVal("green")).not.toThrow(err);
         });
        });
      describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number', () => {
          const newTriangle = new Triangle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newTriangle.colorTextVal("0000FF")).not.toThrow(err);
          });
        });
      describe('Color Validation', () => {
        it('Should throw an error if the text color is not a valid color keyword or hexadecimal number.', () => {
          const newTriangle = new Triangle();
          const err = new Error("Colors must be a valid color keyword or hexadecimal number.");
          expect(()=>newTriangle.colorTextVal("0")).toThrow(err);
      });
    });
  })
})
