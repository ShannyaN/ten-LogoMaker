const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
        this.shape = "triangle";
        this.line = 'polygon points="150 0, 0 200, 300 200"';
    }
}
module.exports=Triangle;