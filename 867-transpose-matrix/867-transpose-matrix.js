/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
      
    
    let result=[];
    for(let c=0;c<matrix[0].length;c++){
        let res=[]
        for(let r=0;r<matrix.length;r++){
            res.push(matrix[r][c])
        }
        result.push(res)
    }
    return result
};