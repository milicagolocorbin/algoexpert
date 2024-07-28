const arr = [1, 2, 3, 4, 5, 6, 8, 9];
const arr1 = [-7, -5, -4, 3, 6, 8, 9];

function sortedSquaredArray(arr: number[]): number[] {
  const sortedArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    sortedArray[i] = value * value;
  }
  sortedArray.sort((v1, v2) => v1 - v2);
  return sortedArray;
}

console.log(sortedSquaredArray(arr));
console.log(sortedSquaredArray(arr1));
