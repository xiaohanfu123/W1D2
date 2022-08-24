'use strict';
const args = process.argv.slice(2)

const rollDice = (times)=>{
  let result = ''
  for (let index = times; index > 0; index--) {
    result += Math.floor(Math.random() * 7 )
    if(index>1){
      result += ', '
 }  
  }
  console.log(result) 
   }
rollDice(5)