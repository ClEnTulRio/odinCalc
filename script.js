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
    if (input.textContent === "0") {
        return;   
    } else if (memorySwitch < 1) {
        num1 = num1 + String(0); 
        input.textContent = num1;      
    } else {  
        num2 = num2 + String(0);
        input.textContent = num2;
    }  
    console.log(input, num1);
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
    } else if (operator == 1){
        memoryValue = memoryValue + Number(num2);
        memoryValue = parseFloat(memoryValue.toFixed(2));
        memorySwitch = 1;
        memory.textContent = memoryValue;
        input.textContent = 0;
    } else if (operator == 2) {
        substraction();
        operator = 1;
    } else if (operator == 3) {
        multiplication();
        operator = 1;
    } else if (operator == 4) {
        division();
        operator = 1;
    }
    num2 = "";
}

function substraction() {
    if (operator < 1) {
        memoryValue += Number(num1);
        memory.textContent = memoryValue;
        memorySwitch = 1;
        operator = 2
        input.textContent = 0;
    } else if (operator == 1 ){
        addition();
        operator = 2;
    } else if (operator == 2 ){
        memoryValue = memoryValue - Number(num2);
        memoryValue = parseFloat(memoryValue.toFixed(2));
        memorySwitch = 1;
        memory.textContent = memoryValue;
        input.textContent = 0;
    } else if (operator == 3) {
        multiplication();
        operator = 2;
    } else if (operator == 4) {
        division();
        operator = 1;
    }
    num2 = "";
}

function multiplication() {
    if (operator < 1) {
        memoryValue += Number(num1);
        memory.textContent = memoryValue;
        memorySwitch = 1;
        operator = 3
        input.textContent = 0;
    } else if (operator == 1 ){
        addition();
        operator = 3;
    } else if (operator == 2 ){
        substraction();
        operator = 3;
    } else if (operator == 3) {
        memoryValue = memoryValue * Number(num2);
        memoryValue = parseFloat(memoryValue.toFixed(2));
        memorySwitch = 1;
        memory.textContent = memoryValue;
        input.textContent = 0; 
    } else if (operator == 4) {
        division();
        operator = 3;
    }
    num2 = "";
}

function division() {
    if (operator < 1) {
        memoryValue += Number(num1);
        memory.textContent = memoryValue;
        memorySwitch = 1;
        operator = 4
        input.textContent = 0;
    } else if (operator == 1 ){
        addition();
        operator = 3;
    } else if (operator == 2 ){
        substraction();
        operator = 3;
    } else if (operator == 3) {
        multiplication();
        operator = 4;
    } else if (operator == 4) {
        if (num2 == 0) {
            memory.style.opacity = "0";
            input.textContent = "Can't divide by 0."
            setTimeout( () => {
                memory.style.opacity = "1";
                input.textContent = 0;
            }, 1000)
        } else {
            memoryValue = memoryValue / Number(num2);
            memoryValue = parseFloat(memoryValue.toFixed(2));
            memorySwitch = 1;
            memory.textContent = memoryValue;
            input.textContent = 0; 
        }
    }
    num2 = "";
}

function pressEquals() {        //operator 1= +, 2= -, 3 = *, 4= /
    if (operator < 1) {
        return;
    } else if (operator == 1) {
        num1 = memoryValue + Number(num2);
        num1 = parseFloat(num1.toFixed(2));
        memorySwitch = 0;
        memoryValue = 0;
        memory.textContent ="";
        input.textContent= num1;
        operator = 0;
    } else if (operator == 2) {
        num1 = memoryValue - Number(num2);
        num1 = parseFloat(num1.toFixed(2));
        memorySwitch = 0;
        memoryValue = 0;
        memory.textContent ="";
        input.textContent= num1;
        operator = 0;
    } else if (operator == 3) {
        num1 = memoryValue * Number(num2);
        num1 = parseFloat(num1.toFixed(2));
        memorySwitch = 0;
        memoryValue = 0;
        memory.textContent ="";
        input.textContent= num1;
        operator = 0;
    } else if (operator == 4) {
        if (num2 == 0) {
            memory.style.opacity = "0";
            input.textContent = "Can't divide by 0."
            setTimeout( () => {
                memory.style.opacity = "1";
                input.textContent = 0;
            }, 1000)
        } else {
            num1 = memoryValue / Number(num2);
            num1 = parseFloat(num1.toFixed(2));
            memorySwitch = 0;
            memoryValue = 0;
            memory.textContent ="";
            input.textContent= num1;
            operator = 0;
        }
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

function pressBack() {
    if (memorySwitch == 0 && !num1 == "") {
        num1 = String(num1).slice(0, -1);
        input.textContent = num1;
    } else if (memorySwitch == 1 && !num2 == "") {
        num2 = String(num2).slice(0, -1);
        input.textContent = num2; 
    } else {
        return;
    }
    if (num1 == "") {
        input.textContent = 0;
    }
    if (num2 == "" && memorySwitch == 1) {
        input.textContent = 0;
    }
}
function pressDot() {
    num1 = String(num1);
    num2 = String(num2);
    if (memorySwitch == 0) {
        if (num1 === ""){
            num1 = "0.";
            input.textContent = num1;
        } else if (!num1.includes(".")){
            num1 = num1 + ".";
            input.textContent = num1;
        } else {
            return;
        }
    } else {
        if (num2 === ""){
            num2 = "0.";
            input.textContent = num2;
        } else if (!num2.includes(".")){
            num2 = num2 + ".";
            input.textContent = num2;
        } else {
            return;
        }
    }
}

function pressNegative () {
    num1 = String(num1);
    num2 = String(num2);
    if (memorySwitch == 0) {
        if (num1 === ""){
            return;
        } else if (!num1.includes("-")){
            num1 = "-" + num1;
            input.textContent = num1;
        } else {
            num1 = num1.slice(1);
            input.textContent = num1;
        }
    } else {
        if (num2 === ""){
            return;
        } else if (!num2.includes("-")){
            num2 = "-" + num2;
            input.textContent = num2;
        } else {
            num2 = num2.slice(1);
            input.textContent = num2;
        }
    }
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
minus.addEventListener("click", substraction);
mult.addEventListener("click", multiplication);
divide.addEventListener("click", division);
clear.addEventListener("click", pressClear);
equals.addEventListener("click", pressEquals);
back.addEventListener("click", pressBack);
dot.addEventListener("click", pressDot);
negative.addEventListener("click", pressNegative);

document.addEventListener("keydown", function(event) {
    const key = event.key;
    switch (key) {
        case '0':
            pressZero();
            break;
        case '1':
            pressOne();
            break;
        case '2':
            pressTwo();
            break;
        case '3':
            pressThree();
            break;
        case '4':
            pressFour();
            break;
        case '5':
            pressFive();
            break;
        case '6':
            pressSix();
            break;
        case '7':
            pressSeven();
            break;
        case '8':
            pressEight();
            break;
        case '9':
            pressNine();
            break;
        case '+':
            addition();
            break;
        case '-':
            substraction();
            break;
        case '*':
            multiplication();
            break;
        case '/':
            division();
            break;
        case 'Enter':
        case '=':
            pressEquals();
            break;
        case '.':
            pressDot();
            break;
        case 'Backspace':
            pressBack();
            break;
        case 'Escape':
            pressClear();
            break;
        case 'n':
            pressNegative();
            break;
    }
    event.preventDefault();
});
