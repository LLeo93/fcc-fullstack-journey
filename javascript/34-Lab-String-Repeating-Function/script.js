function repeatStringNumTimes(str, num) {
  let accumulatedString = '';
  for (let i = 0; i < num; i++) {
    accumulatedString += str;
  }
  return accumulatedString;
}
