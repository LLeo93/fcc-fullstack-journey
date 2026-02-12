function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
/*const titleCase = str => str.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");*/
