function add(a,b){
    return a+b
};

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return (a/b)
}
function calculateResult(firstNumber, secondNumber, currentOperator){
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    switch(currentOperator){ // Corrected variable name
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case 'X': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return 0;
    }

}

let negative = false
let firstNumber = ''
let secondNumber = '0'
let displayValue = '0'
let currentOperator = null
let operatorSelected = false
let isFirstInput = true
const display = document.querySelector('.display')
display.textContent = displayValue
const btnNum = document.querySelectorAll('.num')

btnNum.forEach(function(btnNum){
    btnNum.addEventListener('click', function(){
        if(operatorSelected){if(secondNumber === "0" && btnNum.textContent !=="0"){
            secondNumber = btnNum.textContent
            display.textContent = secondNumber
            }
            else{
               secondNumber += btnNum.textContent
            display.textContent = secondNumber 
            }
        }else{
        if(isFirstInput === true){
            displayValue = btnNum.textContent
            display.textContent = displayValue
            isFirstInput = false
        }
        else{if(displayValue === "0" && btnNum.textContent !=="0"){
                displayValue = btnNum.textContent
                 display.textContent = displayValue
                }
            else{
                displayValue += btnNum.textContent
                display.textContent = displayValue
            }
        }}
    })
})

const operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach(button => {
    button.addEventListener('click',function() {
        if( firstNumber && secondNumber !== ''){
            if(operatorSelected){
                const currentResult = calculateResult(firstNumber,secondNumber,currentOperator)
                displayValue = currentResult;
                display.textContent = displayValue;
                firstNumber = displayValue;
                currentOperator = button.textContent
                secondNumber = '';
                isFirstInput = true;
                
            }
        }
        if (!operatorSelected){
        firstNumber = displayValue;
        displayValue = '';
        operatorSelected = true;
    }
    currentOperator = button.textContent
    });
});

const equals = document.querySelector(".equals");
equals.addEventListener('click', function(){
    if(currentOperator && secondNumber !== ''){
        const result = calculateResult(firstNumber,secondNumber,currentOperator)
        display.textContent = result;
        displayValue = result.toString();
        firstNumber = '';
        secondNumber = '';
        operatorSelected = false;
        currentOperator = null;
        isFirstInput = true
    }

})
const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    display.textContent = '0';
    displayValue = '0';
    firstNumber = '';
    secondNumber = '';
    operatorSelected = false;
    currentOperator = null;
    isFirstInput = true
});
const posNeg = document.querySelector('.posneg');
posNeg.addEventListener('click', function(){
        if (operatorSelected && secondNumber !== ''){
            secondNumber = secondNumber*-1
            display.textContent = secondNumber
        }else{
        displayValue = displayValue * -1
        display.textContent = displayValue
        }

})
const percent = document.querySelector('.percent');
percent.addEventListener('click', function(){
        if (operatorSelected && secondNumber !== ''){
            secondNumber = secondNumber*.01
            display.textContent = secondNumber
        }else{
        displayValue = displayValue * .01
        display.textContent = displayValue
        }

})
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function(){
   if(!operatorSelected && !displayValue.includes('.')){
    displayValue += '.'
    display.textContent = displayValue
   }else if(operatorSelected && !secondNumber.includes('.')){
    secondNumber += '.'
    display.textContent = secondNumber
   }
})