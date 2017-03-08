var sum = function (n1, n2) {
  return n1 + num;
}

var subtract = function (n1, n2) {
  return n1 - n2;
}

var multiply = function (n1, n2) {
  return n1 * n2;
}

var divide = function (n1, n2) {
  if (n2 === 0) {
    throw new Error("Divied by zero attempt!");
  }
  else
    return n1 / n2;
}

module.exports = { sum, subtract, multiply, divide };