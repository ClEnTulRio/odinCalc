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
const input = document.querySelector(".input");
const memory = document.querySelector(".memory");


let num1 = "";
let num2 = "";
let memorySwitch = 0;
let memoryValue = 0;
let operator = 0;
input.textContent = 0;

function pressZero() {
    if (memorySwitch < 1) {
        num1 = num1 + String(0);       
    } else {  
        num2 = num2 + String(0);
    }  
}

function pressOne() {
    if (memorySwitch < 1) {
        num1 = num1 + String(1);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(1);
        input.textContent = num2;
    }  
}

function pressTwo() {
    if (memorySwitch < 1) {
        num1 = num1 + String(2);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(2);
        input.textContent = num2;
    }  
}

function pressThree() {
    if (memorySwitch < 1) {
        num1 = num1 + String(3);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(3);
        input.textContent = num2;
    }  
}

function pressFour() {
    if (memorySwitch < 1) {
        num1 = num1 + String(4);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(4);
        input.textContent = num2;
    }  
}

function pressFive() {
    if (memorySwitch < 1) {
        num1 = num1 + String(5);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(5);
        input.textContent = num2;
    }  
}

function pressSix() {
    if (memorySwitch < 1) {
        num1 = num1 + String(6);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(6);
        input.textContent = num2;
    }  
}

function pressSeven() {
    if (memorySwitch < 1) {
        num1 = num1 + String(7);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(7);
        input.textContent = num2;
    }  
}

function pressEight() {
    if (memorySwitch < 1) {
        num1 = num1 + String(8);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(8);
        input.textContent = num2;
    }  
}

function pressNine() {
    if (memorySwitch < 1) {
        num1 = num1 + String(9);
        input.textContent = num1;       
    } else {  
        num2 = num2 + String(9);
        input.textContent = num2;
    }  
}



function addition() {
    if (operator < 1) {
        memoryValue += Number(num1);
        memory.textContent = memoryValue;
        memorySwitch = 1;
        operator = 1
        input.textContent = 0;
    } else {
        memoryValue += memoryValue + Number(num2);
        memorySwitch = 1;
        memory.textContent = memoryValue;
        input.textContent = 0;
    }
    num2 = "";
 console.log(num1, num2, operator);
}

function pressEquals() {        //operator 1= +, 2= -, 3 = *, 4= /
    if (operator < 1) {
        return;
    } else if (operator == 1) {
        num1 = memoryValue + Number(num2);
        memorySwitch = 0;
        memoryValue = 0;
        memory.textContent ="";
        input.textContent= String(num1);
        operator = 0;
    }
}

function pressClear() {
    num1 = "";
    num2 = "";
    memoryValue = Number(num1);
    memorySwitch = 0;
    input.textContent = 0;
    memory.textContent = "";
    operator = 0;
}

zero.addEventListener("click", pressZero);
one.addEventListener("click", pressOne);
two.addEventListener("click", pressTwo);
three.addEventListener("click", pressThree);
four.addEventListener("click", pressFour);
five.addEventListener("click", pressFive);
six.addEventListener("click", pressSix);
seven.addEventListener("click", pressSeven);
eight.addEventListener("click", pressEight);
nine.addEventListener("click", pressNine);
plus.addEventListener("click", addition);
clear.addEventListener("click", pressClear);
equals.addEventListener("click", pressEquals);

