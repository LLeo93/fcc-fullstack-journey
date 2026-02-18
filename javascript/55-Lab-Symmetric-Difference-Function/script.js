function diffArray(arr1, arr2) {
  const combined = arr1.concat(arr2);

  return combined.filter((item) => {
    return !arr1.includes(item) || !arr2.includes(item);
  });
}
