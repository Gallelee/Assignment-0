function titleCaseEdit(title) {
  // Insert code here;
    let arr = title.split(" ")
    console.log(arr)
    let s = ""
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        s += arr[i] + " "
    }
    console.log(arr)
    return s.trim()
  }

 

// Do not edit this line;
module.exports = titleCaseEdit;