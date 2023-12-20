let num = 42;
let firstName = "Dias";
const isProgrammer = true;

/* Can Do
let $ = "test";
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 12;
let num_ = 12;
let first_name = "Elena"; // bad
let myNum = 34; // good
let num42 = 10;
*/

/* Restricted
let 42num = "11";
let my-num = 1;
let const;
*/

firstName = "Max";
// isProgrammer = false;

// alert(firstName);
// console.log("Test:", num, isProgrammer);

// console.log(num + 10);

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

// console.log(typeof sum);

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction() {
  
}

submitBtn.onclick = function () {
  if (action == "+") {
    const sum = Number(input1.value) + Number(input2.value);
    printResult(sum);
  } else {
    const sum = Number(input1.value) - Number(input2.value);
    printResult(sum);
  }
};
