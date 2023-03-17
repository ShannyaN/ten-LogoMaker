const inquirer = require('inquirer');
//const Logo2 = require('./lib/Logo2');
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')
const Circle = require('./lib/circle')
const fs =require('fs');
const classID ="";

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }
  function hexCheck(colorCode){
    var re = /[0-9A-Fa-f]{6}/g;
    console.log(re.test(colorCode));
    re.lastIndex = 0;
}

function render({shapecolor, text, textcolor, line}){
    const svgFile = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <${line} fill=${shapecolor} />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textcolor}>${text}</text>

</svg>
    `;
    fs.writeFile('./lib/logoFile.svg',svgFile, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'))

}

inquirer
    .prompt ([
        {
            type: "input",
            message: "Logo text: ",
            name: "text"
        },
        {
            type: "input",
            message: "Pick a text color. ",
            name: "textcolor"
        },
        {
            type: "list",
            message: "Pick a shape. ",
            name: "shape",
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: "input",
            message: "Pick a shape color. ",
            name: "shapecolor"
        },
    ])
//with data input-do the following
.then ((response)=> {
    if (response.text.length < 1 || response.text>3){
        throw new Error("Text must be at least one character long and three characters long maximum.");
        return;}
    if (!((isColor(response.textcolor)) && (hexCheck(response.textcolor)))){
        throw new Error("Must enter a legitamite color name or hexadecimal number.");
        return;}
    if (!((isColor(response.shapecolor)) && (hexCheck(response.shapecolor)))){
        throw new Error("Must enter a legitamite color name or hexadecimal number.");
        return;}
    const shapeID = response.shape;
    let logo;
    if (shapeID=="square"){
        logo = new Square(response.text, response.textcolor, response.shapecolor);
    } else if (shapeID=="triangle"){
        logo = new Triangle(response.text, response.textcolor, response.shapecolor);
    } else{
        logo = new Circle(response.text, response.textcolor, response.shapecolor);
    }
     //const logo = new classID(response.text, response.textcolor, response.shape, response.shapecolor);
    //Logo2.render(logo);
    //console.log(logo)
    render(logo);
    return logo;
    //console.log(response);
//fileWrite(response)
})

