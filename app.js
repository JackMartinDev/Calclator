const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

let operator = prompt("Enter a mathematical operator");
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

console.log(`${a} + ${b} = ${operate(operator, a, b)}`);
