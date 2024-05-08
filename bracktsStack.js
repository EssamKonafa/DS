// // function arePair(open, close) {
// //     if (open === '(' && close === ')')
// //         return true;
// //     else if (open === '{' && close === '}')
// //         return true
// //     else if (open === '[' && close === ']')
// //         return true
// //     return false
// // }

// // function areBalanced(exp) {
// //     const stack = [];
// //     const length = exp.length;
// //     for (let i = 0; i < length; i++) {
// //         if (exp[i] === '(' || exp[i] === '{' || exp[i] === '[')
// //             stack.push(exp[i])
// //         else if (exp[i] === ')' || exp[i] === '}' || exp[i] === ']') {
// //             if (stack.length === 0 || !arePair(stack[stack.length - 1], exp[i]))
// //                 return false
// //             else {
// //                 stack.pop()
// //             }
// //         }
// //     }
// //     return stack.length === 0 ? true : false;
// // }

// // const expression = prompt('enter your code')

// // if (areBalanced(expression))
// //     console.log('balanced');
// // else
// //     console.log("Not Balanced");

// function pairs(open, close) {
//     if (open === '(' && close === ')')
//         return true
//     else if (open === '{' && close === '}')
//         return true
//     else if (open === '[' && close === ']')
//         return true
//     return false
// }

// function areBalance(expect) {
//     const stack = []
//     const length = expect.length
//     for (let i = 0; i < length; i++) {
//         if (expect[i] === '(' || expect[i] === '{' || expect[i] === '[')
//             stack.push(expect[i])
//         else if (expect[i] === ')' || expect[i] === '}' || expect[i] === ']')
//             if (stack.length === 0 || !pairs(stack[stack.length - 1], expect[i])) {
//                 return false
//             } else {
//                 stack.pop()
//             }
//     }
//     return stack.length === 0 ? true : false
// }

// const expression = prompt('enter ur code')
// if (areBalance(expression))
//     console.log('balanced');
// else
//     console.log('not balance');
