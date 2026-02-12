function chunkArrayInGroups(arr, number) {
  const result = [];
  let i = 0;
  while (i < arr.length) {
    let chunk = arr.slice(i, i + number);
    result.push(chunk);
    i += number;
  }
  return result;
}
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
