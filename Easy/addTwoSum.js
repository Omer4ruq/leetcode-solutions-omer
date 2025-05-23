// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum/
// Approach: Hash Map
// Time: O(n), Space: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j];
        }
    }
    
}
return [];
};

let nums = [3,2,4];
let target = 6;
console.log(twoSum(nums, target));