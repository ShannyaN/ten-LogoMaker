const Shape = require('./shape.js');

class Circle extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
        this.shape = "circle";
        this.line = 'circle cx="150" cy="100" r="100" '
    }
}
module.exports=Circle;
