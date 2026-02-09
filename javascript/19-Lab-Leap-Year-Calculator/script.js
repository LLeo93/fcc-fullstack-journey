let year = 2024;

function isLeapYear(number) {
  const leap = (number % 4 === 0 && number % 100 !== 0) || number % 400 === 0;
  if (leap) {
    return number + ' is a leap year.';
  } else {
    return number + ' is not a leap year.';
  }
}
const result = isLeapYear(year);
console.log(result);
