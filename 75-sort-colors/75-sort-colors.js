/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(arr) {
    
//     let low=0, mid=0, high=arr.length-1


//     while ( mid <= high ) { 
    
//         if( arr[mid] == 0 ){ 
//             swap( low, mid ); 
//             mid++; 
//             low++ ;
//         } 
    
//         else if( arr[mid] == 1 ) {   
//             mid++ ;  
//         } 


//         else if( arr[mid] == 2 ) {
//             swap( mid,high ); 
//             high--  
//         } 
//     }


//     function swap(a,b) {
//         [arr[b], arr[a]] = [arr[a], arr[b]]
//     }


// };

var sortColors = function(arr) {
    
    let one = 0;
    let two=0;
    let zero =0;
    
    for(let i=0;i<arr.length;i++){
        
        if(arr[i]==0){
            zero++
        }else if(arr[i]==1){
            one++
        }else{
            two++
        }
    }
   //console.log(zero,one,two)
    arr.length=0;

    for(let i=0;i<zero;i++){
        arr.push(0)
    }
    for(let i=0;i<one;i++){
        arr.push(1)
    }
    for(let i=0;i<two;i++){
        arr.push(2)
    }
    
    return arr

};