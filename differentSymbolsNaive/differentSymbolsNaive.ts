function differentSymbolsNaive(s: string): number {
  const uniqueChars = new Set();
  const inputChars = s.split('');

  inputChars.forEach((char) => {
    uniqueChars.add(char);
  });

  console.log(uniqueChars);
  return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));

//1st solution
// function differentSymbolsNaive(s: string): number {
//   const uniqueChars: string[] = [];
//   const inputChars: string[] = s.split('');

//   inputChars.forEach((char) => {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars.push(char);
//     }
//   });

//   return uniqueChars.length;
// }

// console.log(differentSymbolsNaive('cabca'));
