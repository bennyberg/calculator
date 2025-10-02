let left = 0;
let right = 0;
let operator = "";
let result = 0;

const display = document.getElementById('display');
display.textContent = "";

const operate = function (op, left, right) {
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


const addToDisplay = function(v) {
    display.textContent += v;
}


// button functionality
document.querySelector('#keypad').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;                  // clicked empty space (not a button)

    const val = btn.dataset.val;       // e.g. "7", "+", "=" (from data-val)
    if (val === '=') {
        // placeholder: does nothing (no-op)
        display.textContent = display.textContent;
        return;
    }

    addToDisplay(val);                 // your function: appends val to the display
});



