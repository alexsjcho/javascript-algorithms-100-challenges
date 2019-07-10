function houseNumbersSum(inputArray: number[]): number {
  let total = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return total;
    }

    total += inputArray[i];
  }

  return total;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
