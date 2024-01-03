var lastStoneWeight = function (stones) {
  if (stones.length > 1) {
    while (stones.length > 1) {
      let max = stones.reduce(
        (y, x, index) => {
          if (x >= y.values[0]) {
            y.values[1] = y.values[0];
            y.values[0] = x;
            y.index[1] = y.index[0];
            y.index[0] = index;
          } else if (stones.length > 1 && (x !== y.values[0] || y.index[1] === -1)) {
            if (x >= y.values[1]) {
              y.values[1] = x;
              y.index[1] = index;
            }
          }
          return y;
        },
        { values: [0, 0], index: [-1, -1] }
      );
      if (max.values[1] < max.values[0]) {
        stones[max.index[0]] = max.values[0] - max.values[1];
        stones.splice(max.index[1], 1);
      } else if (max.values[1] === max.values[0]) {
        stones.splice(max.index[1], 1);
        stones.splice(max.index[0] - 1, 1);
      }
    }
  }

  if (stones.length === 0) {
    return 0;
  } else {
    return stones[0];
  }
};
