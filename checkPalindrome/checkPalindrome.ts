function checkPalindrome(inputString: string): boolean {
  const originalWord = inputString.toLowerCase();
  const reversedWord = originalWord
    .split('')
    .reverse()
    .join('');

  return originalWord === reversedWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

//The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

//The toLowerCase() method returns the calling string value converted to lower case.
