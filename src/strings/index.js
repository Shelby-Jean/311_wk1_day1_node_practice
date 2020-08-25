const split = (str, delim) => {
  // write code for strings.split
  let newStr = str.split(delim);
  return newStr;
}

const pairs = (str) => {
  // write code for strings.pairs
  return str.match(/.{1,2}/g);
}

const reverse = (str) => {
  // write code for strings.reverse
  const splitArr = str.split('');
  const reverseArr = splitArr.reverse();
  return reverseArr.join('');
}

module.exports = {
  split,
  pairs,
  reverse
}