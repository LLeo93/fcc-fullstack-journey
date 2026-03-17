const rangeOfNumbers = (startNum, endNum) => {
  if (startNum > endNum) {
    return [];
  } else if (startNum === endNum) {
    return [startNum];
  } else {
    const rangeOfNumbersArray = rangeOfNumbers(startNum, endNum - 1);
    rangeOfNumbersArray.push(endNum);
    return rangeOfNumbersArray;
  }
};
