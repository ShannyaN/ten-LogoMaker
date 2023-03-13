class Shape {
    constructor(text, textcolor, shapecolor){
        if (typeOf text !== string) {
            throw new Error ('Please enter a string.')
        }
        this.text= text;
        this.textcolor=textcolor;
        this.shapecolor=shapecolor;
    }
    render(){
        throw new Error("Define a function")
        if (this.text.length>3) {
            throw new Error('Text can be 3 characters maximum.');
    }}
}
module.exports = Shape;