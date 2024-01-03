var plusOne = function (digits) {
  let addOne = true;
  for (let i = digits.length - 1; i > -1; i--) {
    addOne = false;

    if (digits[i] + 1 > 9) {
      digits[i] = 0;
      addOne = true;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  if (addOne) {
    digits.unshift(1);
  }
  return digits;
};
