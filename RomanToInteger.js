var romanToInt = function (s) {
  let translator = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let index = 0;
  while (index < s.length) {
    if (index < s.length - 1) {
      if (+translator[s[index]] < +translator[s[index + 1]]) {
        total += +translator[s[index + 1]] - +translator[s[index]];
        index += 2;
      } else {
        total += +translator[s[index]];
        index += 1;
      }
    } else {
      total += +translator[s[index]];
      index += 1;
    }
  }

  return total;
};
