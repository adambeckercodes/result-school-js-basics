const resultElement = document.getElementById("result");

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const submitBtn = document.getElementById("calcBtn");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multBtn = document.getElementById("multBtn");
const divBtn = document.getElementById("divBtn");

let action = "+";
plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
multBtn.onclick = function () {
  action = "*";
};
divBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "#FF6666";
  } else {
    resultElement.style.color = "#44FFD1";

    resultElement.textContent = result;
  }
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);

  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumberWithAction(number1, number2, action);
  printResult(result);
};
