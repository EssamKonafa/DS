// // Function to perform insertion sort
// function insertionSort(arr) {
//     let n = arr.length; // Get the length of the array

//     // Outer loop to iterate over each element starting from the second element
//     for (let i = 1; i < n; i++) {
//         let key = arr[i]; // Store the current element as the key
//         let j = i - 1; // Initialize j to the index before the current element

//         // Inner loop to shift elements of the sorted segment forward to create the correct position for the key
//         while (j >= 0 && arr[j] < key) { // Condition to check if the current element is less than the key
//             arr[j + 1] = arr[j]; // Shift the element one position to the right
//             j = j - 1; // Move to the previous element
//         }
//         arr[j + 1] = key; // Place the key in its correct position
//     }
// }

// // Recursive function to perform insertion sort
// function insertionSortRecursive(arr, n) {
//     if (n <= 1) { // Base case: if there's only one element, return
//         return;
//     }

//     // Recursively sort the first n-1 elements
//     insertionSortRecursive(arr, n - 1);

//     let last = arr[n - 1]; // Store the last element
//     let j = n - 2; // Initialize j to the index before the last element

//     // Inner loop to shift elements of the sorted segment forward to create the correct position for the last element
//     while (j >= 0 && arr[j] < last) { // Condition to check if the current element is less than the last element
//         arr[j + 1] = arr[j]; // Shift the element one position to the right
//         j--; // Move to the previous element
//     }
//     arr[j + 1] = last; // Place the last element in its correct position
// }

// // Function to print the array
// function printArray(arr) {
//     console.log(arr.join(" ")); // Join the array elements with spaces and print
// }

// // Main part of the program
// let arr = [80, 90, 60, 30, 50, 70, 40]; // Initialize the array
// let n = arr.length; // Get the length of the array

// insertionSort(arr, n); // Call the insertion sort function
// // insertionSortRecursive(arr, n); // Uncomment to use the recursive insertion sort

// printArray(arr); // Print the sorted array