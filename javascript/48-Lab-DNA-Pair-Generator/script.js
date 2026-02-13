function pairElement(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === 'A') {
      result.push(['A', 'T']);
    } else if (letter === 'T') {
      result.push(['T', 'A']);
    } else if (letter === 'C') {
      result.push(['C', 'G']);
    } else if (letter === 'G') {
      result.push(['G', 'C']);
    }
  }
  return result;
}
