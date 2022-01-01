function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let retset = new Set();
  for(let i = 0; i<args.length; i++){
      for(let x of args[i]){
        retset.add(x)
      }
  }
  return retset;
}
let s = new Set([1,2,3])
let x = new Set([3,5])
let c = new Set([9])
console.log(setUnionOfAnyAmountOfSets(s,x,c))

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;