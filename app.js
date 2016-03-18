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
  console.log(numSumOne + ' and ' + numSumTwo + ' and ' + numSumThree + ' sum to ' + numSum + '.');
  console.log('The numbers ' + numSumOne + ' and ' + numSumTwo + ' and ' + numSumThree + ' have a product of ' + numMult + '.');
  return [numSum, numMult];
}

//function #4
function sumArray(sumArray1){
  var sum = 0;
  for (var i = 0; i < sumArray1.length; i++) {
    sum = sum + sumArray1[i];
  }

  console.table(sumArray1);
  console.log(sumArray1 + 'was passed in as an array of numbers, and ' + sum + ' is their sum.');
  return sumArray1;
}

//function #5

function multiplyArray(multiplyArray1){
  var sum = 1;
  for (var i = 0; i < multiplyArray1.length; i++) {
    sum = sum * multiplyArray1[i];}
  console.table(multiplyArray1);
  console.log('The numbers ' + multiplyArray1 + ' have a product of ' + sum + '.');
}
