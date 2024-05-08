function infixToPostfix(expression) {
    const stack = [];
    let postfix = '';
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === ' ' || expression[i] === ',') continue;
        else if (isOperator(expression[i])) {
            while (stack.length !== 0 && stack[stack.length - 1] !== '(' && HasHigherPrecedence(stack[stack.length - 1], expression[i])) {
                postfix += stack.pop()
            }
            stack.push(expression[i])
        }
        else if (isOperand(expression[i])) {
            postfix += expression[i]
        }
        else if (expression[i] === '(') {
            stack.push(expression[i])
        }
        else if (expression[i] === ')') {
            while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
                postfix += stack.pop()
            }
            stack.pop()
        }
    }
    while (stack.length !== 0) {
        postfix += stack.pop()
    }
    return postfix
}

function isOperand(c) {
    return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

function isOperator(c) {
    return c === '+' || c === '-' || c === '*' || c === '/' || c === '$';
}

function IsRightAssociative(op) {
    return op === '$'
}

function GetOperatorWeight(op) {
    let weight = -1;
    switch (op) {
        case '+':
        case '-':
            weight = 1;
            break;
        case '*':
        case '/':
            weight = 2;
            break
    }
    return weight;
}

function HasHigherPrecedence(op1, op2) {
    let op1Weight = GetOperatorWeight(op1)
    let op2Weight = GetOperatorWeight(op2)
    if (op1Weight === op1Weight) {
        return IsRightAssociative(op1) ? false : true;
    }
    return op1Weight > op2Weight ? true : false;
}

function run(){
    let expression = prompt('enter')
    let postfix = infixToPostfix(expression)
    console.log("Output =", postfix);
}

run()