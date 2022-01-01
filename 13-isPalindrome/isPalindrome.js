function isPalindrome(word) {
  let str = word.split("")
  str = str.reverse()
  str = str.join("")
  return str===word
}

// Do not edit this line;
module.exports = isPalindrome;