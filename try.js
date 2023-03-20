const { default: validateColor } = require("validate-color");
var outCome;
function hexCheck(textColor){
    var re = /[0-9A-Fa-f]{6}/g;
    outCome = re.test(textColor);
    console.log('Outcome is: ' + outCome)
    return outCome;
    re.lastIndex = 0;}
hexCheck('k')
console.log('validate Color outcome: ' + validateColor('k'))
console.log('hexCheck outcome: ' +hexCheck('k'))
console.log('Both outcome: ' + (!(validateColor('k') || hexCheck('k'))))