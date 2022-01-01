function fizzBuzz(start, end) {
  // Insert code here;
  let arr = []
  let x = start
  let y = end
  while(x<=y){
    if(x%3===0 && x%5===0){
      arr.push("FizzBuzz")
    }
    else if(x%3===0){
      arr.push("Fizz")
    }
    else if(x%5===0){
      arr.push("Buzz")
    }
    else{
      arr.push(x)
    }
    x++
  }
  return arr
}

// Do not edit this line;
module.exports = fizzBuzz;