// function partition1(arr, l, h) {
//     let p = arr[l];  // Choose the pivot element
//     let i = l;       // Initialize the left pointer
//     let j = h;       // Initialize the right pointer
//     while (i < j) {
//         do {
//             i++;
//         } while (arr[i] <= p); // Move the left pointer to the right until an element greater than the pivot is found

//         do {
//             j--;
//         } while (arr[j] > p);  // Move the right pointer to the left until an element less than or equal to the pivot is found

//         if (i < j) {
//             [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at i and j
//         }
//     }
//     [arr[l], arr[j]] = [arr[j], arr[l]]; // Swap the pivot element with the element at j
//     return j; // Return the partition index
// }

// // Function to perform QuickSort using the first partitioning method
// function quickSort1(arr, l, h) {
//     if (l < h) {
//         let piv = partition1(arr, l, h); // Get the partition index
//         quickSort1(arr, l, piv);         // Recursively sort the left subarray
//         quickSort1(arr, piv + 1, h);     // Recursively sort the right subarray
//     }
// }

// // Function to partition the array using the second partitioning method
// function partition2(arr, iBegin, jEnd) {
//     let i = iBegin;     // Initialize the left pointer
//     let j = jEnd;       // Initialize the right pointer
//     let pivLoc = i;     // Set the pivot location

//     while (true) {
//         while (arr[pivLoc] <= arr[j] && pivLoc != j) {
//             j--;
//         }
//         if (pivLoc == j) {
//             break;
//         } else if (arr[pivLoc] > arr[j]) {
//             [arr[j], arr[pivLoc]] = [arr[pivLoc], arr[j]]; // Swap elements at j and pivot location
//             pivLoc = j;
//         }

//         while (arr[pivLoc] >= arr[i] && pivLoc != i) {
//             i++;
//         }
//         if (pivLoc == i) {
//             break;
//         } else if (arr[pivLoc] < arr[i]) {
//             [arr[i], arr[pivLoc]] = [arr[pivLoc], arr[i]]; // Swap elements at i and pivot location
//             pivLoc = i;
//         }
//     }
//     return pivLoc; // Return the pivot location
// }

// // Function to perform QuickSort using the second partitioning method
// function quickSort2(arr, l, h) {
//     if (l < h) {
//         let piv = partition2(arr, l, h); // Get the pivot location
//         quickSort2(arr, l, piv - 1);     // Recursively sort the left subarray
//         quickSort2(arr, piv + 1, h);     // Recursively sort the right subarray
//     }
// }

// // Function to print an array
// function printArray(arr) {
//     console.log(arr.join(" "));
// }

// // Main function to drive the code
// function main() {
//     let arr = [2, -1, 4, 7, 0]; // Initialize the array
//     let n = arr.length;         // Get the length of the array

//     // Perform QuickSort using the second partitioning method
//     quickSort2(arr, 0, n - 1);

//     // Print the sorted array
//     printArray(arr);
// }

// // Execute the main function
// main();