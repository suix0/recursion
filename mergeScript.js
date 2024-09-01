function merge(arr1, arr2, arr1Length, arr2Length) {
  let i = 0;
  let j = 0;
  let sortedArr = [];
  while (i < arr1Length && j < arr2Length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i])
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  for (;i < arr1Length; i++) {
    sortedArr.push(arr1[i])
  }
  for (;j < arr1Length; j++) {
    sortedArr.push(arr2[j])
  }
  return sortedArr
}

function mergeSort(arr, low, high) {
  // base case
  if (arr.length === 1) {
    return arr
  } else {
    const midPoint = Math.ceil((low + high) / 2);
    const firstHalf = mergeSort(arr.slice(low, midPoint), low, midPoint);
    const secondHalf = mergeSort(arr.slice(midPoint, high), 0, arr.slice(midPoint, high).length);
    return merge(firstHalf, secondHalf, firstHalf.length, secondHalf.length);
  }
}
const arr = [105, 79, 100, 110]
console.log(mergeSort(arr, 0, arr.length));