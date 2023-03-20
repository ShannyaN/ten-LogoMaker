var validateColor = require("validate-color").default;
var re = /[0-9A-Fa-f]{6}/g;
class Shape {
    constructor(text, textcolor, shapecolor){
        // if (typeOf text !== string) {
        //     throw new Error ('Please enter a string.')
        // }
        this.text= text;
        this.textcolor=textcolor;
        this.shapecolor=shapecolor;
    }
    setText(text) {
        if (text.length > 3){
            throw new Error("Text must be at least one character long and three characters long maximum.");
        }
        this.text = text;
    }
    
    colorShapeVal(shapecolor){   
        if (!(validateColor(shapecolor) || re.test(shapecolor))){
            throw new Error("Colors must be a valid color keyword or hexadecimal number.");
        }
        this.shapecolor =shapecolor;
    }
    colorTextVal(textcolor){   
        if (!(validateColor(textcolor) || re.test(textcolor))){
            throw new Error("Colors must be a valid color keyword or hexadecimal number.");
        }
        this.textcolor =textcolor;
    }
}
    // colorVal(shapecolor){    
    //     if (!(validateColor(shapecolor) || hexCheck(shapecolor))){
    //         throw new Error("Colors must be a valid color keyword or hexadecimal number.");
    //     }
    //     this.shapecolor = shapecolor;

module.exports = Shape;