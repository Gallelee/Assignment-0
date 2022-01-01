class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let mid = Math.floor((nums.length)/2)
    console.log(mid)
    if(nums.length===1 && nums[0]!=target) return false
    if(nums[mid]===target) return true
    else if(target<nums[mid]){
       return this.binarySearch(nums.slice(0,mid),target)
    }
    else if(target>nums[mid]){
       return this.binarySearch(nums.slice(mid),target)
    }
  }
}
let t = new MySolution()
let arr = [1,2,3,6,7,12,32,33,56]
console.log(t.binarySearch(arr,34))

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;