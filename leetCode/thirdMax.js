/* 414. Third Maximum Number
Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.
Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 
Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/
var thirdMax = function(nums) {
    let sorted = [...new Set(nums.sort((a, b) => b - a))];
    if (sorted.length < 3) return sorted[0];
    else return sorted[2];
};
/* What did I learn?
[...new Set()] will remove duplicates
 nums.sort((a, b) => b - a) will sort nums array from max to min numbers*/