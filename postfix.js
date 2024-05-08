// function isOperator(sign) {
//     return sign === '+' || sign === '-' || sign === '*' || sign === '/';
// }

// function performOps(operator1, operator2,operator) {
//     let answer;
//     switch (operator) {
//         case '+':
//             answer = operator2 + operator1;
//             break
//         case '-':
//             answer = operator2 - operator1
//             break
//         case '*':
//             answer = operator2 * operator1
//             break
//         case '/':
//             answer = operator2 / operator1
//             break
//     }
//     return answer
// }

// const calculate = prompt('calculate a postfix expression: ')
// const splitting = calculate.split(' ')
// const stack = []
// for (let i = 0; i < splitting.length; i++) {
//     const token = splitting[i]
//     if (!isNaN(token)) {
//         stack.push(parseInt(token))
//     } else if (isOperator(token)) {
//         const operator1 = stack.pop()
//         const operator2 = stack.pop()
//         stack.push(performOps(operator1,operator2,token))
//     }
// }
// console.log('answer=',stack.pop());