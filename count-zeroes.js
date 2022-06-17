function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let leftVal = arr[middleIdx-1]

    if (middleVal > 0) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === 0 && leftVal < 1) {
      rightIdx = middleIdx - 1;
    } else {
      return arr.length-middleIdx;
    }
  }
  return 0
}

module.exports = countZeroes