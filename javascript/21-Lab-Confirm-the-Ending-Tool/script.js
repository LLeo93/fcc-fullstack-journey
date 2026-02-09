function confirmEnding(string1, string2) {
  let target = string2.length;
  let endString = string1.slice(-target);
  return endString === string2;
}
