var lengthOfLastWord = function (s) {
  let toMinus = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (s[i + 1] && s[i + 1] !== " ") return s.length - i - toMinus;
      else toMinus += 1;
    }
  }
  if (toMinus > 1) {
    return s.length - (toMinus - 1);
  }
  return s.length;
};
