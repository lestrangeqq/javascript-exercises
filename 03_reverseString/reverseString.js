const reverseString = function(str) {
  let arr = str.split('')
  let arrLen = arr.length;
  let reverse = ''
  for (i=1; i!=arrLen+1; i++) {
    reverse += arr[arrLen-i];
  }
  return reverse
};

reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
