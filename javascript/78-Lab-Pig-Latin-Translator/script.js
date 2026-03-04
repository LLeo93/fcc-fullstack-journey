function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    return str + 'way';
  }

  let cluster = '';
  let rest = str;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      break;
    }
    cluster += str[i];
    rest = str.slice(i + 1);
  }

  return rest + cluster + 'ay';
}
