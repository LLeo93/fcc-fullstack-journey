function repeatStringNumTimes(str, num) {
  let accumulatedString = '';

  if (num <= 0) {
    return '';
  }

  for (let i = 0; i < num; i++) {
    accumulatedString += str;
  }

  return accumulatedString;
}
