let firstNumber = 5;
let secondNumber = 2;
let operator = '-' ;

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
    let numberPressed =  buttonsArray.find(item => item.buttons == button).value;
    currentDisplay.textContent = numberPressed;
}

// Todo: add all numbers to the array
// Todo: add event listeners to every button to trigger the updateDisplay function
// Todo: store display value in a variable

buttonsArray = [
    {buttons: "zero", value: 0}
]