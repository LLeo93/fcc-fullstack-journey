function getAverage(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
}
function getGrade(score) {
  if (score === 100) return 'A+';
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}
function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== 'F';
}
function studentMsg(arrScore, studentScore) {
  let average = getAverage(arrScore);
  let grade = getGrade(studentScore);
  const status = hasPassingGrade(studentScore)
    ? 'You passed the course.'
    : 'You failed the course.';
  return `Class average: ${average}. Your grade: ${grade}. ${status}`;
}
