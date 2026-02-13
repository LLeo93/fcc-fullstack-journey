function uniteUnique(...arr) {
  let allNumbers = arr.flat();
  let uniqueSet = new Set(allNumbers);
  return [...uniqueSet];
}
