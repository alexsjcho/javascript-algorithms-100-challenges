function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split('');
  const charValues: number[] = [];

  //Wrote code in a way to filter and define cases where the algorithm will return false
  chars.forEach((char: string) => {
    charValues.push(char.charCodeAt[0]);
  });

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  //Want to return true to write code against falsy values
  return true;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));

//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//The size accessor property returns the number of elements in a Set object.
