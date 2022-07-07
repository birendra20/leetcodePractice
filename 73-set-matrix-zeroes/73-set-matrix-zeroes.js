//O(m+n) space, O(m+n) time
//keep two sets, one for row indexes than should be marked 0, and one for col indexes that should be marked 0
//loop through matrix once, populating the sets
//loop through a second time, setting items to 0, if their indexes are in either set

const setZeroes = (matrix) => {
    let rowsZero = new Set()
    let colsZero = new Set()
    for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (matrix[i][j] === 0){
                rowsZero.add(i)
                colsZero.add(j)
            }
        }
    }
  for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (rowsZero.has(i) || colsZero.has(j)){
                matrix[i][j] = 0
            }
        }
    }

}