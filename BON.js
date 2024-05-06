// function binarySearch(arr, size, value) {
        //     let low = 0;
        //     let high = size - 1;

        //     while (low <= high) {
        //         // Calculate the middle index using integer division
        //         let mid = low + ((high - low) / 2) | 0;

        //         console.log("low:", low, "high:", high, "mid:", mid); // Add this line for logging

        //         if (arr[mid] === value) {
        //             return mid;
        //         } else if (arr[mid] < value) {
        //             low = mid + 1;
        //         } else {
        //             high = mid - 1;
        //         }
        //     }

        //     return -1;
        // }

        // // Example usage:
        // let arr = [1, 2, 3, 4, 5];
        // let size = arr.length;
        // let value = 3;
        // console.log("Index of", value, ":", binarySearch(arr, size, value));

        // function swap(x, y) {
        //     let temporaryValue = y
        //     y = x
        //     x = temporaryValue
        //     return [x, y]
        // }
        // console.log('before swapping :', [5, 9]);
        // console.log('after swapping', swap(5, 9));

        // function findMin(arr) {
        //     let minValue = arr[0]
        //     let minIndex = 0
        //     for (let i = 1; i < arr.length; i++) {
        //         if (arr[i] < minValue) {
        //             minValue = arr[i]
        //             minIndex = i
        //         }
        //     }
        //     return minIndex
        // }
        // console.log("Index of minimum value:", findMin([5, 3, 8, 2, 6]));

        // function findMax(arr){
        //     let maxValue = arr[0]
        //     let maxIndex = 0
        //     for(let i = 1;i<arr.length;i++){

        //         if(arr[i]>maxValue){
        //             maxValue=arr[i]
        //             maxIndex=i
        //         }
        //     }
        //     return maxIndex
        // }
        // console.log('max value :',findMax([7,9,5]));
// function findMin(arr){
//     minValue=arr[0]
//     minIndex=0
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<minValue){
//             minValue=arr[i]
//             // arr[1]=minValue
//         }
//     }
//     return minValue
// }
// console.log('min value',findMin([2,7,1,9,1]));