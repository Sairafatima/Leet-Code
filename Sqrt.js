var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let lowerBound = 0;
  let upperBound = x / 2;
  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2);
    console.log("lowerbounds", lowerBound, "upperbound", upperBound, mid);
    let midSquare = mid * mid;

    if (midSquare === x) {
      return mid;
    }

    if (midSquare < x) {
      upperBound = mid - 1;
    }
    if (midSquare > x) {
      lowerBound = mid + 1;
    }
  }
  return lowerBound;
};

console.log("mySqrt", mySqrt(4));
