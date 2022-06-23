/**
 * @param {number[]} nums
 * @return {number}
 */

    var maxSubArray = function(nums) {
 var Sum =0;
      var MaxSum =-Infinity;
      for(var i = 0;i<nums.length;i++){
         Sum=Sum+ nums[i]
         if(Sum>MaxSum) MaxSum=Sum;
         if(Sum<0) Sum=0  ; 
        }
     
      return MaxSum;
};
    

    
