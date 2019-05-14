function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

//The forEach() method executes a provided function once for each array element.
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
