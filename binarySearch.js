// // Function to perform binary search on a sorted array
// function binarySearch(arr, l, h, element) {
//     while (l <= h) {
//         let m = Math.floor((l + h) / 2);  // Calculate the middle index

//         if (arr[m] === element)
//             return m;  // If element is found at middle index, return the index
        
//         if (arr[m] > element)
//             h = m - 1;  // If element is smaller than middle element, search in the left half
        
//         else
//             l = m + 1;  // If element is greater than middle element, search in the right half
//     }
//     return -1;  // If element is not present in array, return -1
// }

// // Main function to drive the code
// function main() {
//     let arr = [2, 3, 4, 10, 40];  // Initialize the sorted array
//     let n = arr.length;            // Get the length of the array

//     // Get input from user
//     let num = parseInt(prompt("Enter an integer:"));

//     // Perform binary search
//     let result = binarySearch(arr, 0, n - 1, num);

//     // Display the result
//     if (result === -1) {
//         console.log("The number (" + num + ") was not found.");
//     } else {
//         console.log("The number (" + arr[result] + ") was found at index (" + result + ").");
//     }
// }

// // Execute the main function
// main();