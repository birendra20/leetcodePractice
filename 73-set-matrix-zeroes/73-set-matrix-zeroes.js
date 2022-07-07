//O(m+n) space, O(m+n) time
//keep two sets, one for row indexes than should be marked 0, and one for col indexes that should be marked 0
//loop through matrix once, populating the sets
//loop through a second time, setting items to 0, if their indexes are in either set

// const setZeroes = (matrix) => {
//     let dummyRow =Array(matrix.length).fill(null)
//     let dummyCol = Array(matrix[0].length).fill(null)
//     for (let i = 0;i < matrix.length;i++){
//         for (let j = 0;j<matrix[0].length;j++){
//             if (matrix[i][j] === 0){
               
//                 dummyRow[i]=0;
//                 dummyCol[j]=0
//             }
//         }
//     }
//   for (let i = 0;i < matrix.length;i++){
//         for (let j = 0;j<matrix[0].length;j++){
//             if ( dummyRow[i]==0 ||  dummyCol[j]==0){
//                 matrix[i][j] = 0
//             }
//         }
//     }
//     return matrix

// }

const setZeroes = (matrix) => {
    let col0 = true, rows = matrix.length, cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    //checking if 0 is present in the 0th column or not
    if (matrix[i][0] == 0) col0 = false;
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  //traversing in the reverse direction and
  //checking if the row or col has 0 or not
  //and setting values of matrix accordingly.
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
    if (col0 == false) {
      matrix[i][0] = 0;
    }


}
    
}