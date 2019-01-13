



/****************************************
Experimenting with a divide and conquer way of
solving the problem.

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


function arraySplitter(array, left, right){

  //Check to see if array is of size 1
  if (right - left <= 1) {
    return array[left];
  }

  let middle = Math.floor((left + right) / 2);


  //Find max sub array for left array
  let leftSum = arraySplitter(array, left, middle);
  let rightSum = arraySplitter(array, middle, right);

  let overlappingSum = overlappingArray(array, left, middle, right);

  return Math.max(overlappingSum, leftSum, rightSum);

}

*/



/****************************************
Takes array and finds the deltas between the elements,
which is equal to the profits (or loss) between any two days.
*/


function calcDeltas(inputArray){

  let outputArray = [];

  for (var index = 0; index < inputArray.length - 1; index ++){
    outputArray.push((inputArray[index + 1]) - inputArray[index]);
  }

  return outputArray;

}

/****************************************
Takes an array and finds the most profitable outcome
of buying and selling stocks in a week.
*/


function mostProfitable(array){

  let deltaArray = calcDeltas(array);

  // Kadane’s Algorithm:

  let maxCurrent = deltaArray[0];
  let maxGlobal = deltaArray[0];

  for (var i = 1; i < deltaArray.length; i++) {
    maxCurrent = Math.max(deltaArray[i], maxCurrent + deltaArray[i]);

    if (maxCurrent > maxGlobal){
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;

//Experimenting with Divide and Conquer recursive algorithms.
//return arraySplitter(deltaArray, 0, deltaArray.length -1);

}


//Call the Function

console.log(mostProfitable([45, 24, 35, 31, 40, 38, 11]));

