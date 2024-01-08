const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multBtn = document.getElementById("mult");
const divideBtn = document.getElementById("divide");
const operatorBtn = document.querySelectorAll(".btn-calc");
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

divideBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "#880D1E";
  } else {
    resultElement.style.color = "#8FC93A";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (actionSymbol === "+") {
    return num1 + num2;
  } else if (actionSymbol === "-") {
    return num1 - num2;
  } else if (actionSymbol === "*") {
    return num1 * num2;
  } else if (actionSymbol === "/") {
    return num1 / num2;
  }
}

submitBtn.onclick = function() {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
  alert("Done");
};

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    operatorBtn.forEach(btn => {
      btn.style.borderColor = "#8390FA";
    });

    button.style.borderColor = "#f997b4";
  })
})