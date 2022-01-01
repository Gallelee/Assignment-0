function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  //return Math.max(...nums) + Math.min(...nums)
  return nums[0] + nums[nums.length-1]
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;