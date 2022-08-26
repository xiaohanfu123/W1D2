const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
  return num % 2 == 0; 
  
  // .filter will create a loop in number.
  // either true or false , true => keep in newArray, false =>discard
  


  // if (num % 2 === 0){ return num }
});
console.log("Subset of even numbers:", evens);