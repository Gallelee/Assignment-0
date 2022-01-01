function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let count = 1
  for(let x of args){
    count=x*count
  }
  return count
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;