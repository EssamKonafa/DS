// // Function to perform linear search on an array
// function linearSearch(arr, n, key) {
//     // Iterate through the array
//     for (let i = 0; i < n; i++) {
//         // If the current element is equal to the key, return its index
//         if (arr[i] === key) {
//             return i;
//         }
//     }
//     // If key is not found, return -1
//     return -1;
// }

// // Function to get input from user and perform linear search
// function main() {
//     let arr = [90, 10, 40, 70, 5]; // Initialize the array
//     let n = arr.length;             // Get the length of the array

//     // Get input from user
//     let num = parseInt(prompt("Enter an integer:"));

//     // Perform linear search
//     let result = linearSearch(arr, n, num);

//     // Display the result
//     if (result === -1) {
//         console.log("The number (" + num + ") was not found.");
//     } else {
//         console.log("The number (" + arr[result] + ") was found at index (" + result + ").");
//     }
// }

// // Execute the main function
// main();