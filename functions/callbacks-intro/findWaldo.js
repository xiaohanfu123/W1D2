// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
const findWaldo = function(names, found) /*actionWhenFound */{
  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //     found(i);   // execute callback
  //   }
  names.forEach((name,i)=>{
    if(name === "Waldo") {
      found(i)
    }
  })
  
  }
const actionWhenFound = function(i) {
  console.log(`Found Waldo at index ${i}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"],actionWhenFound)



  [1,2,3].forEach((num,index,array) => {
    console.log('num: ', index);
  });
