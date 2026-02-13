function sumAll([n, m]) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}
