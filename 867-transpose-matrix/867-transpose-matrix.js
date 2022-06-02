/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
      
    
    let res=[];
    for(let i=0;i<matrix[0].length;i++){
        r=[]
        for(let j=0;j<matrix.length;j++){
            r.push(matrix[j][i])
        }
        res.push(r)
    }
    return res
};