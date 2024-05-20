// function bubbleSort(arr) {
//     let n = arr.length; // Get the length of the array
//     let flag = true; // Initialize flag to check if any swap happens
//     let c = 0; // Counter to count the number of iterations
//     for (let i = 0; i < n - 1; i++) {
//         flag = true;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) { // If the current element is greater than the next element
//                 let temp = arr[j]; // Swap elements
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 flag = false; // Set flag to false since a swap occurred
//             }
//             c++; // Increment the counter
//         }
//         if (flag === true) { // If no swaps occurred in the inner loop, the array is sorted
//             break; // Break out of the outer loop
//         }
//     }
//     console.log("# of rounds: " + c);
// }

// function bubbleSortRec(arr, n) {
//     if (n === 1) { // Base case: if there's only one element, return
//         return;
//     }

//     // Inner loop to compare and swap adjacent elements if needed
//     for (let i = 0; i < n - 1; i++) {
//         if (arr[i] > arr[i + 1]) { // If the current element is greater than the next element
//             let temp = arr[i]; // Swap elements
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }

//     bubbleSortRec(arr, n - 1); // Recursively call the function to sort the rest of the array
// }

// // Function to print the array
// function printArray(arr) {
//     console.log(arr.join(" ")); // Join the array elements with spaces and print
// }

// // Main part of the program
// let arr = [30, 20, 40, 5, 60, 2]; // Initialize the array
// let n = arr.length; // Get the length of the array

// bubbleSort(arr, n); // Call the bubble sort function
// // bubbleSortRec(arr, n); // Uncomment to use the recursive bubble sort

// printArray(arr); // Print the sorted array