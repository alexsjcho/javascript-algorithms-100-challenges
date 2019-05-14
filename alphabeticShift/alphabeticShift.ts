function alphabeticShift(inputString: string): string {
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let inputShifted = inputString.split("");
  for (let i = 0; i < inputShifted.length; i++) {
    let index = 0;
    if (inputShifted[i] !== "z") {
      index = alphabet.indexOf(inputShifted[i] + 1);
    }
    inputShifted[i] = alphabet[index];
  }

  return inputShifted.join("");
}

console.log(alphabeticShift("crazy"));

//The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
