let left = 0;
let right = 0;
let operator = "";

const operate = function(op, left, right){
    switch(op){
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            if (right === 0)
            {
                return "Division by zero";
            }
            return left / right;
        default:
            return "Invalid operator";
    }
}

const generateGrid = function(){
    
}


// console.log(operate('*', 2 ,3));