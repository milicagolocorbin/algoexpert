const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

// function validateSubsequence(array: number[], sequence: number[]): boolean {
//   let arrayIdx = 0;
//   let sequenceIdx = 0;

//   while (arrayIdx < array.length && sequenceIdx < sequence.length) {
//     if (array[arrayIdx] === sequence[sequenceIdx]) {
//       sequenceIdx += 1;
//     }
//     arrayIdx += 1;
//   }

//   return sequenceIdx === sequence.length;
// }

function validateSubsequence(array: number[], sequence: number[]): boolean {
  let sequenceIdx = 0;

  for (let arr of array) {
    if (sequence[sequenceIdx] === sequence.length) {
      break;
    }
    if (sequence[sequenceIdx] === arr) {
      sequenceIdx += 1;
    }
  }

  return sequenceIdx === sequence.length;
}
console.log(validateSubsequence(array, sequence));
