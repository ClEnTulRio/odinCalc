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


let num1 = 0;
let num2 = 0;
let memorySwitch = 0;
let memoryValue = 0;
let operator = 0;
input.textContent = 0;

function pressZero() {
    if (memorySwitch < 1) {
        num1+= 0;       
    } else {  
        num2+= 0;
    }
    input.textContent = 0;
}

function pressOne() {
    if (memorySwitch < 1) {
        num1+= 1;       
    } else {  
        num2+= 1;
    }
    input.textContent = 1;
}

function pressTwo() {
    if (memorySwitch < 1) {
        num1+= 2;       
    } else {  
        num2+= 2;
    }
    input.textContent = 2;
}

function pressThree() {
    if (memorySwitch < 1) {
        num1+= 3;       
    } else {  
        num2+= 3;
    }
    input.textContent = 3;
}

function pressFour() {
    if (memorySwitch < 1) {
        num1+= 4;       
    } else {  
        num2+= 4;
    }
    input.textContent = 4;
}

function pressFive() {
    if (memorySwitch < 1) {
        num1+= 5;       
    } else {  
        num2+= 5;
    }
    input.textContent = 5;
}

function pressSix() {
    if (memorySwitch < 1) {
        num1+= 6;       
    } else {  
        num2+= 6;
    }
    input.textContent = 6;
}

function pressSeven() {
    if (memorySwitch < 1) {
        num1+= 7;       
    } else {  
        num2+= 7;
    }
    input.textContent = 7;
}

function pressEight() {
    if (memorySwitch < 1) {
        num1+= 8;       
    } else {  
        num2+= 8;
    }
    input.textContent = 8;
}

function pressNine() {
    if (memorySwitch < 1) {
        num1+= 9;       
    } else {  
        num2+= 9;
    }
    input.textContent = 9;
}


function addition() {
    if (num2 == 0) {
        memoryValue = num1;
        memory.textContent = memoryValue;
        memorySwitch = 1;
        operator = 1
    } else {
        memoryValue = num1 + num2;
        memorySwitch = 1;
        memory.textContent = memoryValue;
        input.textContent = 0;
    }
 console.log(num1, num2, operator);
}

function pressEquals() {        //operator 1= +, 2= -, 3 = *, 4= /
    if (num2 == 0) {
        return;
    } else {

    }
}

function pressClear() {
    num1 = 0;
    num2 = 0;
    memoryValue = 0;
    memorySwitch = 0;
    input.textContent = 0;
    memory.textContent = "";
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

