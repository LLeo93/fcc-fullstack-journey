const currentDate = new Date();
const currentDateFormat = 'Current Date and Time: ' + currentDate;

console.log(currentDateFormat);

function formatDateMMDDYYYY(dateObj) {
  const formatted = dateObj.toLocaleDateString('en-US');
  return 'Formatted Date (MM/DD/YYYY): ' + formatted;
}

function formatDateLong(dateObj) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = dateObj.toLocaleDateString('en-US', options);
  return 'Formatted Date (Month Day, Year): ' + formatted;
}
