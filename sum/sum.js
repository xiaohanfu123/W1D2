'use strict';
let sum = 0;
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  sum += parseInt(args[i]);
}
console.log(sum);