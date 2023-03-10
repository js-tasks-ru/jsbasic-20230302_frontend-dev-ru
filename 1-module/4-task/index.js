function checkSpam(str) {
  let firstCondition = ('1xBet').toLowerCase();
  let secondCondition = ('XXX').toLowerCase();
  let newStr = str.toLowerCase();
  return newStr.includes(firstCondition) || newStr.includes(secondCondition);
}
