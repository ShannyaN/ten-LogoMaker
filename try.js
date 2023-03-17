function hexCheck(colorCode){
    var re = /[0-9A-Fa-f]{6}/g;
    console.log(re.test(colorCode));
    re.lastIndex = 0;
}
hexCheck('111111');