var validateColor = require("validate-color").default;
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
    setColor(colorInput) {
        if (text.length > 3){
            throw new Error("Text must be at least one character long and three characters long maximum.");
        }
        this.text = text;
    }
}
module.exports = Shape;