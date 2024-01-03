var addBinary = function (a, b) {
  let index1 = a.length - 1;
  let index2 = b.length - 1;
  let sum = "";
  let addOne = false;
  while (index1 > -1 || index2 > -1) {
    let num = (index1 > -1 ? +a[index1] : 0) + (index2 > -1 ? +b[index2] : 0);
    if (addOne) {
      num += 1;
    }

    if (num > 1) {
      addOne = true;
      sum = (num > 2 ? "1" : "0") + sum;
    } else {
      addOne = false;
      sum = num.toString() + sum;
    }
    index1 -= 1;
    index2 -= 1;
  }

  if (addOne) {
    sum = "1" + sum;
  }
  return sum;
};
