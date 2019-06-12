function characterParity(symbol: string): string {
  const result = parseInt(symbol);

  return isNaN(result) ? 'not a digit' : result % 2 === 0 ? 'even' : 'odd';
}

//The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.

//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
