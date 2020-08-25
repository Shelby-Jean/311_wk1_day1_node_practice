const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  let sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  if(sumArr == sum){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}