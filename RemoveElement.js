var removeElement = function (nums, val) {
  let count = 0;
  nums.forEach((elm) => {
    if (elm !== val) {
      nums[count] = elm;
      count += 1;
    }
  });
  return count;
};
