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

const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");

const currentDisplay = document.getElementById("currentNumber");
const upperDisplay = document.getElementById("previousNumber")

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
    {buttons: "div", value: "div" },
    {buttons: "multiply", value: "multiply" },
    {buttons: "minus", value: "minus"},
    {buttons: "plus", value: "plus"},
    {buttons: "decimal", value: "."},
    {buttons: "equal", value: "="},
]



function add(first,second){return first + second;}
function subtract(first,second){return first - second;}
function multiply(first,second){return first * second;}
function divide(first,second){return first / second;}

function operate(operator,firstNumber,secondNumber) {
    if (operator == 'plus') 
        {result =  add(firstNumber,secondNumber)
        return rounded = result % 1 !== 0 ? result.toFixed(3) : result;}
    else if (operator == 'minus') 
        {result =  subtract(firstNumber,secondNumber)
        return rounded = result % 1 !== 0 ? result.toFixed(3) : result;}
    else if (operator == 'multiply')
        {result = multiply(firstNumber,secondNumber)
        return rounded = result % 1 !== 0 ? result.toFixed(3) : result;}
    else if (operator == 'div')
        {result = divide(firstNumber,secondNumber)
        return rounded = result % 1 !== 0 ? result.toFixed(3) : result;}
}


// when I click on X button, return X.value  on display

function updateDisplay(button)
{
    if (button == "decimal" && currentDisplay.textContent.includes('.')){return;}
    else {
     let numberPressed =  buttonsList.find(item => item.buttons == button).value;
     currentDisplay.textContent += numberPressed;
     displayValue = +currentDisplay.innerHTML;};
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

divBtn.addEventListener('click', () => addOperator("div"));
multiplyBtn.addEventListener('click', () => addOperator("multiply"));
plusBtn.addEventListener('click', () => addOperator("plus"));
subBtn.addEventListener('click', () => addOperator("minus"));

deleteBtn.addEventListener('click', () => deleteProcess());
clearBtn.addEventListener('click', () => clearProcess());

equalBtn.addEventListener('click', () => startOperation());

function addOperator(pressed)
{
 operator = buttonsList.find(item => item.buttons == pressed).value;
 firstNumber = displayValue;
 currentDisplay.textContent = "";
 updateUpperDisplay();
 displayValue = +currentDisplay.innerHTML; 
}

function startOperation()
{
if (typeof firstNumber === 'undefined' || secondNumber ==='undefined' || typeof operator === 'undefined') {return;}
    secondNumber = displayValue;
    result = operate(operator, firstNumber, secondNumber);
    currentDisplay.innerHTML = result;
    displayValue = +currentDisplay.innerHTML;
    firstNumber = displayValue;

}

function deleteProcess()
{
  currentDisplay.textContent =  currentDisplay.textContent.slice(0, -1);
  displayValue = +currentDisplay.innerHTML;
  
}

function clearProcess()
{
    currentDisplay.textContent = "";
    upperDisplay.innerText = "";
    displayValue = "";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}

function updateUpperDisplay()
{
    upperDisplay.innerText = `${firstNumber}`;
}

