'use strict';

const args = process.argv.slice(2)

const pigLatin = function(array){
    let newString = ''
    let finalString = '' 
    for (let x = 0 ; x <= array.length-1 ; x++) {
    let elem = array[x]
    for (let y = 1 ; y <= elem.length-1 ; y++) { 
        newString += elem[y] 
        finalString = newString+'ay'
      }
      }  return finalString
}      

console.log(pigLatin(args))