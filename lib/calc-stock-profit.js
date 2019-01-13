function mostProfitable(array){

  let deltaArray = calcDeltas(array);

  console.log(deltaArray, deltaArray.length);

  return maxProfit(deltaArray);

}

/****************************************
*/

function calcDeltas(inputArray){

  let outputArray = [];

  for (var index = 0; index < inputArray.length - 1; index ++){
    outputArray.push((inputArray[index + 1]) - inputArray[index]);
  }

  return outputArray;

}

/****************************************
*/

function overlappingArray(array, left, middle, right){

  let leftSum = Number.MIN_SAFE_INTEGER;
  let rightSum = Number.MIN_SAFE_INTEGER;

  let sum = 0;

  for (let i = middle; i >= left; i --){
    if (sum + array[i] >= leftSum) {
      leftSum = sum + array[i];
    }
    sum += array[i];
  }

  sum = 0;

  for (let i = middle + 1; i < right; i ++){
    if (sum + array[i] >= rightSum) {
      rightSum = sum + array[i];
    }
    sum += array[i];
  }

  return leftSum + rightSum;
}


function maxSubArraySplitter(array, left, right){

  //Check to see if array is of size 1
  if (right - left <= 1) {
    return array[left];
  }

  let middle = Math.floor((left + right) / 2);

  //Find max sub array for left array
  let leftSum = maxSubArraySplitter(array, left, middle);
  let rightSum = maxSubArraySplitter(array, middle, right);

  let overlappingSum = overlappingArray(array, left, middle, right);

  return Math.max(overlappingSum, leftSum, rightSum);

}


function maxProfit(array){

  return maxSubArraySplitter(array, 0, array.length);

}


console.log(mostProfitable([45, 24, 35, 31, 40, 38, 11]));

