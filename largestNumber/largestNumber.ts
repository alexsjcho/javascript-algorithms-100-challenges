function largestNumber(n: number): number {
  let word = '9'.repeat(n);

  // for (let i = 0; i < n; i++) {
  //   word = word.concat('9');
  // }

  return parseInt(word);
}

console.log(largestNumber(2));
