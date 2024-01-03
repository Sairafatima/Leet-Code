var isPalindrome = function (x) {
  let temp = x.toString().split("");
  let lastIndex = temp.length - 1;
  let startIndex = 0;
  let isValid = true;
  while (lastIndex >= startIndex) {
    if (temp[lastIndex] !== temp[startIndex]) {
      isValid = false;
      return false;
    } else {
      lastIndex -= 1;
      startIndex += 1;
    }
  }
  return isValid;
};
