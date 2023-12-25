let firstNumber;
let secondNumber;
let operator;

const zeroBtn = document.getElementById("number_zero");
const oneBtn = document.getElementById("number_one");
const twoBtn = document.getElementById("number_two");
const threeBtn = document.getElementById("number_three");
const fourBtn = document.getElementById("number_four");
const fiveBtn = document.getElementById("number_five");
const sixBtn = document.getElementById("number_six");
const sevenBtn = document.getElementById("number_seven");
const eightBtn = document.getElementById("number_eight");
const nineBtn = document.getElementById("number_nine");

const divBtn = document.getElementById("div");
const multiplyBtn = document.getElementById("multiplier");
const subBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const decimalBtn = document.getElementById("decimal");
const equalBtn = document.getElementById("equal");

const currentDisplay = document.getElementById("currentNumber");
const previousDisplay = document.getElementById("previousNumber")

let displayValue = +currentDisplay.innerHTML;

buttonsList = [
    {buttons: "zero", value: 0,},
    {buttons: "one", value: 1},
    {buttons: "two", value: 2},
    {buttons: "three", value: 3},
    {buttons: "four", value: 4},
    {buttons: "five", value: 5},
    {buttons: "six", value: 6},
    {buttons: "seven", value: 7},
    {buttons: "eight", value: 8},
    {buttons: "nine", value: 9},
    {buttons: "div", value: "÷" },
    {buttons: "multiply", value: "x" },
    {buttons: "sub", value: "-"},
    {buttons: "plus", value: "+"},
    {buttons: "decimal", value: "."},
    {buttons: "equal", value: "="},
]


operate(operator,firstNumber,secondNumber)

function add(first,second){return first + second;}
function subtract(first,second){return first - second;}
function multiply(first,second){return first * second;}
function divide(first,second){return first / second;}

function operate(operator,firstNumber,secondNumber)
{if (operator == '+') 
 {console.log(add(firstNumber,secondNumber))}
 else if (operator == '-') 
 {console.log(subtract(firstNumber,secondNumber))}
 else if (operator == 'x')
 {console.log(multiply(firstNumber,secondNumber))}
 else if (operator == '/')
 {console.log(divide(firstNumber,secondNumber))};}


// when I click on X button, return X.value  on display

function updateDisplay(button)
{
    let numberPressed =  buttonsList.find(item => item.buttons == button).value;
    currentDisplay.textContent += numberPressed;
    displayValue = +currentDisplay.innerHTML; 
}

zeroBtn.addEventListener('click', () => updateDisplay("zero"));
oneBtn.addEventListener('click', () => updateDisplay("one"));
twoBtn.addEventListener('click', () => updateDisplay("two"));
threeBtn.addEventListener('click', () => updateDisplay("three"));
fourBtn.addEventListener('click', () => updateDisplay("four"));
fiveBtn.addEventListener('click', () => updateDisplay("five"));
sixBtn.addEventListener('click', () => updateDisplay("six"));
sevenBtn.addEventListener('click', () => updateDisplay("seven"));
eightBtn.addEventListener('click', () => updateDisplay("eight"));
nineBtn.addEventListener('click', () => updateDisplay("nine"));

decimalBtn.addEventListener('click', () => updateDisplay("decimal"));

divBtn.addEventListener('click', () => updateDisplay("div"));