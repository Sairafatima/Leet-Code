var isValid = function (s) {
  let onHoldBrackets = [];
  let openingBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in openingBrackets) {
      onHoldBrackets.push(s[i]);
    } else {
      let temp = onHoldBrackets.pop();
      if (openingBrackets[temp] !== s[i]) {
        return false;
      }
    }
  }
  if (onHoldBrackets.length > 0) {
    return false;
  }
  return true;
};
