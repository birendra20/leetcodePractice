/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
//     let result = nums[0];
    
//     for(i=1; i<nums.length; i++) {
//         if(Math.abs(nums[i]) < Math.abs(result)) {
//             result = nums[i];
//         } else if(Math.abs(nums[i]) == Math.abs(result)) {
//             result = Math.max(result, nums[i]);
//         }
//     }
    
//     return result;
    
    
    
    let min =Infinity
    
    for(let i=0;i<nums.length;i++){
        if(Math.abs(nums[i])<Math.abs(min)){
            min=nums[i]
        }else if(Math.abs(nums[i]==Math.abs(min))){
            min = Math.max(min,nums[i])
        }
    }
    return min
};