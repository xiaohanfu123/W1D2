/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...

const joinList = (array)=> {
  let concepts = ''
  for(let index = 0; index < array.length; index++) {
    if (index > 0) {
      concepts +=  ', '}
    concepts += array[index] 
  } return  concepts
}

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(joinList(conceptList))
// console.log(`Today I learned about ${concepts}.`);
