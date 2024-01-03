var removeDuplicates = function (nums) {
  let temp = [];
  nums.forEach((elm, index) => {
    if (!temp.includes(elm)) {
      nums[temp.length] = elm;
      temp.push(elm);
    }
  });
  return temp.length;
};
