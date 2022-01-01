function frequencyCounter(word) {
  // Insert code here;
  let keyVal = {

  }
  const str = word.split("")
  for(let i = 0; i<str.length; i++){
    if(keyVal[str[i]]===undefined){
      keyVal[str[i]] = 0
    }
    keyVal[str[i]] = keyVal[str[i]] + 1
  }
  return keyVal;
}
console.log(frequencyCounter("apple"))

// Do not edit this line;
module.exports = frequencyCounter;