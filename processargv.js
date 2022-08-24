'use strict';

const args = process.argv.slice(2)

const reverseStr = function(array){
    let newString = ''
    for (let i = 0 ; i <= array.length-1 ; i++) {
    let elem = array[i]
    for (let j = elem.length-1 ; j>=0 ; j--) {  
        newString += elem[j]  
           
    } newString = newString+'\n' 
}
return newString;
}
console.log(reverseStr(args))