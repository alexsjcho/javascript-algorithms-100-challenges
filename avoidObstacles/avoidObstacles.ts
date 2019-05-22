function avoidObstacles(inputArray: number[]): number {
  inputArray = inputArray.sort((a, b) => a - b);
  const largestArrayVal = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArray.every((element) => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
