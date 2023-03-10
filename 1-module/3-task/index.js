function ucFirst(str) {
  if (str) {
    let firstSymbol = str[0].toUpperCase();
    let otherText = str.split(str[0]);
    return firstSymbol + otherText[1];
  } else {
    return str;
  }
}
