function pairSum(nums, target) {
  if(nums.length<=1){
    throw "error"
  }
  for(let i = 0;i<nums.length-1;i++){
    for(let j = i + 1; j<nums.length; j++){
      if(i!=j && nums[i]+nums[j]===target){
        return true
      }
    }
  }
  return false;
}
const arr = [1,2,3,4,4,6,7]
console.log(pairSum(arr,13))

// Do not edit this line;
module.exports = pairSum;