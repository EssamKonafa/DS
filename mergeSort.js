// function merge(arr, m, l, r) {
//     let n1 = m - l + 1;  // Size of the first subarray
//     let n2 = r - m; // Size of the second subarray

//     let L = new Array(n1)
//     let R = new Array(n2);
//     // Copy data to temporary arrays L[] and R[]
//     for (let i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (let j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
//     // Initial indexes of first and second subarrays
//     let i = 0, j = 0;
//     // Initial index of merged subarray
//     let k = l;
//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i]
//             i++
//         } else {
//             arr[i] = R[j]
//             j++
//         }
//         k++
//     }
//     // Copy the remaining elements of L[], if any
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }
// // Function to sort an array using merge sort
// function mergeSort(arr, l, r) {
//     if (l < r) {
//         // Find the middle point
//         let m = Math.floor(l + (r - l) / 2);

//         // Sort first and second halves
//         mergeSort(arr, l, m);
//         mergeSort(arr, m + 1, r);

//         // Merge the sorted halves
//         merge(arr, l, m, r);
//     }
// }
// // Function to print an array
// function printArray(arr) {
//     console.log(arr.join(" "));
// }

// // Main function to drive the code
// function main() {
//     let arr = [60, 10, 20, 5, 60, 70];
//     let n = arr.length;

//     // Sort the array
//     mergeSort(arr, 0, n - 1);

//     // Print the sorted array
//     printArray(arr);
// }

// // Execute the main function
// main();