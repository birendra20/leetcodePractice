//O(m+n) space, O(m+n) time
//keep two sets, one for row indexes than should be marked 0, and one for col indexes that should be marked 0
//loop through matrix once, populating the sets
//loop through a second time, setting items to 0, if their indexes are in either set

const setZeroes = (matrix) => {
    let dummyRow =Array(matrix.length).fill(null)
    let dummyCol = Array(matrix[0].length).fill(null)
    for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (matrix[i][j] === 0){
               
                dummyRow[i]=0;
                dummyCol[j]=0
            }
        }
    }
  for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if ( dummyRow[i]==0 ||  dummyCol[j]==0){
                matrix[i][j] = 0
            }
        }
    }
    return matrix

}