var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  let sum = 0;
  while (num > 0 || sum > 9) {
    if (num !== 0) {
      let x = num % 10;
      let y = ~~(num / 10);
      let z = y % 10;
      let k = ~~(z / 10);
      let toRemove = x + z * 10;
      sum += x + z;
      num = ~~(num - toRemove) / 100;
    } else {
      sum += num;
      if (sum > 9) {
        num = sum;
        sum = 0;
      }
    }
  }

  return sum;
};
