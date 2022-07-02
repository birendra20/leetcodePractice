// { Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.search(A,0,n-1,key);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} l
 * @param {number} h
 * @param {number} key
 * @return {number}
*/

class Solution {
    search(nums,l,r,target){
       //code here
       
        l = 0
    r = nums.length -1
    while (l <= r) {
        let mid = Math.floor((r - l) / 2 + l)
        if (nums[mid] === target) return mid
        if (nums[l] <= nums[mid]) {
            // left sorted
            if (target >= nums[l] && target < nums[mid]) {
                // target in sorted
                r = mid - 1                
            } else {
                // target in unsorted
                l = mid + 1
            }
        } else {
            // right sorted
            if (target <= nums[r] && target > nums[mid]) {
                // target in sorted
                l = mid + 1
            } else {
                // target in unsorted
                r = mid - 1
            }            
        }
    }
    return -1
    }
}
