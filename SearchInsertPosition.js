var searchInsert = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else if (nums[0] > target) {
      return 0;
    } else if (nums[0] < target) {
      return 1;
    }
  }
  let first = 0;
  let _length = nums.length;
  let last = _length - 1;
  let mid = null;

  while (first < last) {
    if (target < nums[0] || target === nums[0]) {
      return 0;
    }
    if (target > nums[_length - 1]) {
      return _length;
    }
    if (target === nums[_length - 1]) {
      return _length - 1;
    }
    mid = ~~((first + last) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      if (nums[mid + 1] > target) {
        return mid + 1;
      }
      first = mid + 1;
    } else if (nums[mid] > target) {
      if (nums[mid - 1] < target) {
        return mid;
      }
      last = mid;
    }
  }
};
