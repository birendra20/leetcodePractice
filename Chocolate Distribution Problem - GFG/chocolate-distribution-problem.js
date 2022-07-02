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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
       
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let m = parseInt(readLine());
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findMinDiff(arr, n, m);
        console.log(res);
        
    }
}// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution{
    findMinDiff(arr,n,m){
        //code here
  
let ans = Infinity;

arr.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i <= n - m; i++) {
  let min = arr[i];
  let max = arr[i + m - 1];
  let gap = max - min;

  if (gap < ans) {
    ans = gap;
  }
}
return ans
    }
}
