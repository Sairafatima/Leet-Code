/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }
  let cols = [];
  for (let i = 0; i < colsCount; i++) {
    cols.push(this.slice(i * rowsCount, i * rowsCount + rowsCount));
  }
  let index = 0;
  let result = [];

  while (index < rowsCount) {
    let temp = [];

    for (let i = 0; i < colsCount; i++) {
      let t = cols[i];
      if (i === 0 || i % 2 === 0) {
        temp.push(t[index]);
      } else {
        temp.push(t[t.length - index - 1]);
      }
    }
    index += 1;
    result.push(temp);
  }
  return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
