let firstNumber = 5;
let secondNumber = 2;
let operator = '-' ;

operate(operator,firstNumber,secondNumber)

function add(first,second){return first + second;}
function subtract(first,second){return first - second;}
function multiply(first,second){return first * second;}
function divide(first,second){return first / second;}

function operate(operator,firstNumber,secondNumber)
{
 if (operator == '+') 
 {console.log(add(firstNumber,secondNumber))}
 else if (operator == '-') 
 {console.log(subtract(firstNumber,secondNumber))}
 else if (operator == 'x')
 {console.log(multiply(firstNumber,secondNumber))}
 else if (operator == '/')
 {console.log(divide(firstNumber,secondNumber))};
}
