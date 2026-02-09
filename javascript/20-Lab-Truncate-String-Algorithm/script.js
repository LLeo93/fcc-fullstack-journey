function truncateString(string, number) {
  if (string.length > number) {
    return string.slice(0, number) + '...';
  }

  return string;
}
