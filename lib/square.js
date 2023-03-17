const Shape = require('./shape.js');

class Square extends Shape{
    constructor(text, textcolor, shapecolor){
        if (1 > text.length > 3){
            throw new Error("Text must be at least one character long and three characters long maximum.")
        }
        super(text, textcolor, shapecolor);
        this.shape = "square";
        this.line = 'rect  x="50" y="0" width="200" height="200" ';
    }
}
module.exports=Square;