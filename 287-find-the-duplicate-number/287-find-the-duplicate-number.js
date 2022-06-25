/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//     for (let i = 0; i < nums.length-1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return nums[i]
//             }
//         }
//     }
// };
// var findDuplicate = function (nums) {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return nums[i];
//     }
//       set.add(nums[i]);
//   }
// };

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    
    while (slow != fast) { // we are guaranteed to have a cycle
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    slow = 0;
    
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};


