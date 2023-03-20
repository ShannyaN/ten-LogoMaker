const inquirer = require('inquirer');
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')
const Circle = require('./lib/circle')
const fs =require('fs');

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
    const shapeID = response.shape;
    let logo;
    if (shapeID=="square"){
        logo = new Square(response.text, response.textcolor, response.shapecolor);
    } else if (shapeID=="triangle"){
        logo = new Triangle(response.text, response.textcolor, response.shapecolor);
    } else{
        logo = new Circle(response.text, response.textcolor, response.shapecolor);
    }
    render(logo);
    return logo;
})

