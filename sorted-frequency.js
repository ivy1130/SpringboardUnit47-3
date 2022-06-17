function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx === -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let leftVal = arr[middleIdx-1]

    if (middleVal === num && (leftVal < num || middleIdx === 0)){
      return middleIdx;
    } else if (middleVal < num) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return -1
}

function findLast(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let rightVal = arr[middleIdx+1]

    if (middleVal === num && (rightVal > num || middleIdx === arr.length-1)){
      return middleIdx;
    } else if (middleVal > num) {
      rightIdx = middleIdx - 1;
    }
    else {
      leftIdx = middleIdx + 1;
    } 
  }
  return -1
}


module.exports = sortedFrequency