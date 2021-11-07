const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const previousOperand = document.querySelector("#display-previous");
const currentOperand = document.querySelector("#display-current");
const equalButton = document.querySelector(".equal");

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate(a, b , op) {
    switch (op) {
        case "+":
            return add(a,b);
            
        case "-":
            return subtract(a,b);
           
        case "*":
            return multiply(a,b);
            
        case "/":
            return divide(a,b).toFixed(2);
    }
    
}

let firstNumber = '';
let storedNumber = '';
let selectedOperator = '';
let result = '';
currentOperand.textContent= 0;

numberButton.forEach((number) =>{
    number.addEventListener('click', () => {
        if(number.value==="." && storedNumber.includes('.')) 
        {
            return;
        }
        if(number.value==="." && currentOperand.textContent==='')
        {
            storedNumber = 0;
        }
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;
    });
});

operatorButton.forEach((operator)=>{
    operator.addEventListener('click', () => {
        if (firstNumber && storedNumber) 
          {
            calculate();
          }
    if(storedNumber!=='')
    {
        firstNumber = storedNumber;

        selectedOperator = operator.textContent;
        previousOperand.textContent= storedNumber + selectedOperator;
        storedNumber = '';
    }
    else
    {
        return;
    }
    });
});

function calculate() {
    if(selectedOperator==='')
    {
        currentOperand.textContent = storedNumber;
    }
    else if(selectedOperator==='/' && currentOperand.textContent==='0'){
        alert("You can't divide by 0!, You'll destroy this Calculator!")
        clearAll();
    }
    else
    {
        result = operate(parseFloat(firstNumber), parseFloat(storedNumber), selectedOperator);
        previousOperand.textContent = '';
        currentOperand.textContent = result;
        storedNumber = result;
        firstNumber='';
        selectedOperator='';
    }
}


function deleteNumber(){
    currentOperand.textContent = currentOperand.textContent.toString().slice(0,-1);
    if(currentOperand.textContent == '')
    {
        currentOperand.textContent = 0;
    }
    storedNumber = '';  
}

function clearAll() {
    currentOperand.textContent = 0;
    previousOperand.textContent = '';
    firstNumber = '';
    storedNumber = '';
    selectedOperator = '';
}


equalButton.addEventListener('click', calculate);

deleteButton.addEventListener('click', deleteNumber);

clearButton.addEventListener('click', clearAll);

