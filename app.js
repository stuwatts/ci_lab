function sum(a, b) {
  return a + b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b){
  if(a == 0 || b == 0){
    throw "Error cannot divide by 0";
  }
  else{
    return a / b;
  }
}

module.exports = { sum,multiply,divide };