function chunkyMonkey(arr: any[], size: number): any[][] {
  const nestedArray = [];
  let count = 0;

  while (count < arr.length) {
    nestedArray.push(arr.slice(count, (count += size)));
  }

  return nestedArray;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
