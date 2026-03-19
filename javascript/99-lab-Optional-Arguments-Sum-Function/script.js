function addTogether() {
  const [arg1, arg2] = arguments;

  const isNumber = (num) => typeof num === 'number';

  if (!isNumber(arg1)) {
    return undefined;
  }

  if (arguments.length === 2) {
    if (!isNumber(arg2)) {
      return undefined;
    }
    return arg1 + arg2;
  }

  return function (nextArg) {
    if (!isNumber(nextArg)) {
      return undefined;
    }
    return arg1 + nextArg;
  };
}
