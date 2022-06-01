/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
let sum=0;
    rSum=[]
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    rSum.push(sum)
    }
    return rSum
    
    //tc=O(n)
    //sc =O(n)
} 
    
 
//};

//    var runningSum = function(nums) {
//     for(let i=1;i<nums.length;i++){
//         nums[i]+=nums[i-1]
//     }
//     return nums
// };