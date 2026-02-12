function largestOfAll(arr) {
  let result = [];
  return arr.map((sottoArray) => Math.max(...sottoArray));
}
