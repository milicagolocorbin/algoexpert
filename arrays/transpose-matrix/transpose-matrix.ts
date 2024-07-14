type Matrix = number[][];

const matrix = [
  [1, 2],
  [4, 5],
  [7, 8],
];
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

function transposeMatrix(matrix: Matrix): Matrix {
  const output: Matrix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow: number[] = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    output.push(newRow);
  }
  return output;
}

console.log(transposeMatrix(matrix));
