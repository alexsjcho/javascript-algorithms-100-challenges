function addTwoDigits(n: any): number {
  const nums = n.toString().split("");

  return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

// console.log(addTwoDigits(29));

//The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

//The toString() method returns a string representing the specified Number object

//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
