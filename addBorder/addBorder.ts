function addBorder(picture: string[]): any {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}

// console.log(addBorder(["abc", "ded"]));

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
