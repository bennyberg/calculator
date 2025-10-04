let first = 0;
let second = 0;
let operator = "";
let result = 0;

let firstFlag = false
let operatorFlag = false
let secondFlag = false;

const display = document.getElementById('display');
display.textContent = "";

const operate = function (op, left, right) {
    left = Number(left);
    right = Number(right);

    switch (op) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            if (right === 0) {
                return "Division by zero";
            }
            return left / right;
        default:
            return "Invalid operator";
    }
}


const addToDisplay = function (v) {
    display.textContent += v;
}


// button functionality
document.querySelector('#keypad').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;                  // clicked empty space (not a button)

    const val = btn.dataset.val;       // e.g. "7", "+", "=" (from data-val)

    // first number check
    if (!firstFlag) {
        firstFlag = !firstFlag;
        first = val;

    }

    else if (!operatorFlag) {
        operatorFlag = !operatorFlag;
        operator = val;

    }

    else if (!secondFlag) {
        secondFlag = !secondFlag;
        second = val;

    }

    if (val !== '=') {
        addToDisplay(val);              
    }

    else {
        // console.log(first);
        // console.log(second);
        // console.log(operator);
        // console.log(operate(operator, first, second))
        display.textContent = operate(operator, first, second)
    }










});

// document.querySelector('#equal').addEventListener('click', (e) => {
// }





