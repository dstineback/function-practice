console.log('javascript is working');

//function #1//
function sum(numOne, numTwo) {
  var total = (numOne + numTwo);
  return total;
  //console.log('The sum of ' + numOne + ' and ' + numTwo + ' is ' + total + '.');
}

//function #2//
function multiply(multOne, multTwo) {
  var mulTotal = (multOne * multTwo);
  return mulTotal;
  //console.log('The product of ' + multOne + ' and ' + multTwo + ' is ' + mulTotal + '.');
}

//function #3//
function sumAndMultiply(numSumOne, numSumTwo, numSumThree) {
  var numSum = ((sum(numSumOne, numSumTwo)) + (numSumThree));
  var numMult = ((multiply(numSumOne, numSumTwo)) * (numSumThree));
  console.log(numSumOne + ' and ' + numSumTwo + ' and ' + numSumThree + ' sum to ' + numSum);
  console.log('The numbers ' + numSumOne + ' and ' +  numSumTwo + ' and ' + numSumThree + ' have a product of ' + numMult);
}
