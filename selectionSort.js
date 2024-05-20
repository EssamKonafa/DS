// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = arr[minIndex]
//         arr[minIndex] = arr[i]
//         arr[i] = temp
//     }
// }

// function minIndex(arr, i, j) {
//     if (i === j) {
//         return i;
//     }
//         let k = minIndex(arr, i + 1, j);
//         return (arr[i] < arr[k]) ? i : k;
// }

// function recurSelectionSort(arr, n, index = 0) {
//     if (index === n) {
//         return;
//     }
//     let k = minIndex(arr, index, n - 1);
//     if (k !== index) {
//         let temp = arr[k];
//         arr[k] = arr[index];
//         arr[index] = temp;
//     }
//     recurSelectionSort(arr, n, index + 1);
// }

// function printArray(arr) {
//     console.log(arr.join(" ")); 
// }

// let arr = [-60, 0, 50, 30, 10, 20];
// let n = arr.length; 

// selectionSort(arr, n);

// console.log("Array After Selection Sort: ");
// printArray(arr); 