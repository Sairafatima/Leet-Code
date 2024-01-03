var longestCommonPrefix = function (strs) {
  let string = "";
  if (strs.length > 0) {
    string = strs[0];
  }
  while (string) {
    if (strs.every((elm) => elm.startsWith(string))) {
      return string;
      break;
    } else {
      string = string.slice(0, -1);
    }
  }
  return "";
};
