const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mult = document.querySelector("#mult");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
const negative = document.querySelector("#negative");
const result = document.querySelector(".result");

let num1 = 3;
let num2 = 6;
result.textContent = "0";

function addition() {
    let sum = num1 + num2;
    return result.textContent = sum;
}

plus.addEventListener("click", addition);
console.log(result);