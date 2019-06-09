function candies(n: number, m: number): number {
  const candy = Math.floor(m / 3);

  return candy * n;
}

//The Math.floor() function returns the largest integer less than or equal to a given number.

console.log(candies(3, 10));
