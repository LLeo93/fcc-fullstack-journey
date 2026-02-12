function pyramid(char, count, isInverted) {
  let rows = [];

  for (let i = 0; i < count; i++) {
    let rowChars = char.repeat(2 * i + 1);
    let rowSpaces = ' '.repeat(count - i - 1);
    let row = rowSpaces + rowChars;
    rows.push(row);
  }
  if (isInverted) {
    rows.reverse();
  }
  return '\n' + rows.join('\n') + '\n';
}
