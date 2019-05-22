function getAnagrams(words: string[]): string[] {
  let result = [];
  // start of algorithm
  /*
for (let i = 0; i < words.length; i++) {
for (let j = 1; j < words.length; j++) {
    if (i === j) {
        words[i]
    }
}
} */

  // remember anagrams in memory - js is an object, other languages know it as a map/dictionaries
  let anagramToWords = {};

  // go through words list and store anagrams in memory
  words.forEach((word) => {
    const sortedLetters = word.split('');
    sortedLetters.sort();
    const sortedLettersKey = sortedLetters.join('');
    if (!anagramToWords[sortedLettersKey]) {
      // first time anagram is found
      anagramToWords[sortedLettersKey] = [word];
    } else {
      // other times anagram is found again
      anagramToWords[sortedLettersKey].push(word);
    }
  });

  console.log(anagramToWords);
  // any anagram key with an array greater than 1 has two words that are anagrams
  Object.keys(anagramToWords).forEach((anagram) => {
    const anagramWords = anagramToWords[anagram];
    if (anagramWords.length > 1) {
      result = result.concat(anagramWords);
    }
  });

  // end of algorithm
  return result;
}

console.log(
  getAnagrams(['airmen', 'army', 'marine', 'remain', 'airforce', 'mary'])
);
console.log(getAnagrams(['mary', 'david', 'june', 'army']));

//Like Pringles potatoe chips
/// stack - FILO first in last out
let a = [];
a.push(0);
a.push(1);
a.push(2);
// 3 items in stack
console.log(a);
a.pop(); // pops of top of stack - think of pringles
console.log(a);

//Queue is like watching a movie, lining up
// quene - FIFO first in first out
let q = [];
q.push(1);
q.push(2);
q.push(3);
// 3 people in line
console.log(q);
q.splice(0, 1); // first person enters movie
console.log(q);

// generating permiutations
// w o r d
// o r w d
// etc...

// pass by reference vs pass by value

// pass by reference means that you update the parameter being passed into the function
function increment(x) {
  x += 1;
}
let x = 1;
increment(x);
console.log(x); // should have said 2

// pass by value should treat parameter as immutable
function increment2(x) {
  return x + 1;
}
let y = increment2(1);
console.log(y);

// read up on closure
