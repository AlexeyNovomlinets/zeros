module.exports = function getZerosCount(number) {
  // your implementation
  var currentCount = 0;
  var k = 1;
  var res = 0;

  function zerosCount(number) {
    if ((number/(Math.pow(5, k))) >= 1) {
      currentCount = Math.floor(number/(Math.pow(5, k)));
      k++;
      return (currentCount + zerosCount(number));
    }
    else return 0;
  }
  
  return zerosCount(number);
}
