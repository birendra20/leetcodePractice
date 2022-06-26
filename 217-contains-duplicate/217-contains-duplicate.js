/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    
//     let set =new Set();
    
//     for(let i=0;i<nums.length;i++){
      
//         if(set.has(nums[i])){
//             return true;
//         }else{
            
//             set.add(nums[i])
//         }
    
//     }
    
//     return false
    
// }
    
    
    
    let obj={};
    
    for(let i=0;i<nums.length;i++){
        
        
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1
        }else{
            obj[nums[i]]++
        }
    }
    
    
    // let count=0;
    // let maxcount=0
    for(let key in obj){
        if(obj[key]>1){
            return true

    
    
    
   }
    
    }      
    return false    
        
};