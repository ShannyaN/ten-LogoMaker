const Shape = require('./shape.js');

class Square extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
        this.shape = "square";
        this.line = 'rect  x="50" y="0" width="200" height="200" ';
    }
}
module.exports=Square;