// Function to heapify a subtree rooted with node i which is an index in arr[]
function heapify(arr, n, i) {
    let l = 2 * i + 1;  // Calculate the left child index
    let r = 2 * i + 2;  // Calculate the right child index
    let max = i;        // Initialize max as root

    // If left child is larger than root
    if (l < n && arr[l] > arr[max]) {
        max = l;
    }
    // If right child is larger than max so far
    if (r < n && arr[r] > arr[max]) {
        max = r;
    }

    // If max is not root
    if (max !== i) {
        // Swap arr[i] with arr[max]
        [arr[i], arr[max]] = [arr[max], arr[i]];
        // Recursively heapify the affected sub-tree
        heapify(arr, n, max);
    }
}

// Function to build a heap
function buildHeap(arr, n) {
    // Index of the last non-leaf node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

// Function to perform Heap Sort
function heapSort(arr, n) {
    // Build a max heap
    buildHeap(arr, n);

    // One by one extract elements from heap
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// Function to print an array
function printArray(arr) {
    console.log(arr.join(" "));
}

// Main function to drive the code
function main() {
    let arr = [90, 10, 40, 70, 5]; // Initialize the array
    let n = arr.length;             // Get the length of the array

    // Perform Heap Sort
    heapSort(arr, n);

    // Print the sorted array
    printArray(arr);
}

// Execute the main function
main();