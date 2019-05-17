function arrayConversion(inputArray: number[]): number {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }
  return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

//The push() method adds one or more elements to the end of an array and returns the new length of the array.

function sumProduct(nums: number[], isOdd: boolean): number[] {
    const sumProducts: number[] = [];
    if (isOdd) {
      for (let i = 0; i < nums.length; i += 2) {
        sumProducts.push(nums[i] + nums[i + 1]);
      } else {
          for (let i = 0; i < nums.length; i += 2) {
              sumProducts.push(nums[i] * nums[i + 1]);
            } 
      }
      return sumProducts;
  }
  