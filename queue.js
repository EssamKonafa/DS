// class Queue {
//     constructor(size) {
//         if (size <= 0)
//             this.maxSize = 100;
//         else
//             this.maxSize = size;
//         this.front = 0;
//         this.rear = this.maxSize - 1;
//         this.length = 0;
//         this.arr = new Array(this.maxSize)
//     }
//     isEmpty() {
//         return this.length === 0
//     }
//     isFull() {
//         return this.length === this.maxSize;
//     }
//     addQueue(element) {
//         if (this.isFull()) {
//             console.log("Queue Full Can't Enqueue ...!");
//         } else {
//             this.rear = (this.rear + 1) % this.maxSize;
//             this.arr[this.rear] = element
//             this.length++
//         }
//     }
//     deleteQueue() {
//         if (this.isEmpty()) {
//             console.log("Empty Queue Can't Dequeue ...!");
//         } else {
//             this.front = (this.front + 1) % this.maxSize;
//             this.length--
//         }
//     }
//     frontQueue() {
//         if (!this.isEmpty()) {
//             console.log(this.arr[this.front]);
//             // console.log(front);
//         } else {
//             throw new Error("Queue is empty!");
//         }
//     }
//     rearQueue() {
//         if (!this.isEmpty()) {
//             console.log(this.arr[this.rear]);
//         } else {
//             throw new Error("Queue is empty!");
//         }
//     }
//     queueSearch(element) {
//         let pos = -1
//         if (!this.isEmpty()) {
//             for (let i = this.front; i !== this.rear; i = (i + 1) % this.maxSize) {
//                 if (this.arr[i] === element) {
//                     pos = i;
//                     break;
//                 }
//             }
//             if (pos === -1) {
//                 if (this.arr[this.rear] === element)
//                     pos = this.rear
//             }
//         }
//         else {
//             console.log('queue is empty');
//         }
//         console.log(pos);
//     }
//     destroyQueue() {
//         this.arr = [];
//         this.front = 0;
//         this.rear = this.maxSize - 1;
//         this.length = 0;
//         this.maxSize = 0;
//     }
//     printQueue() {
//         if (!this.isEmpty()) {
//             let i = this.front;
//             let result = '';
//             while (i !== this.rear) {
//                 result += this.arr[i] + ' ';
//                 i = (i + 1) % this.maxSize;
//             }
//             result += this.arr[this.rear];
//             console.log(result);
//         } else {
//             console.log('queue is empty');
//         }
//     }
// }
// function main() {
//     let queue = new Queue(4)
//     queue.addQueue(10);
//     queue.addQueue(30);
//     // queue.addQueue(90);
//     queue.addQueue(90);
//     queue.addQueue(50);
//     // queue.deleteQueue()
//     queue.frontQueue()
//     queue.rearQueue()
//     // queue.destroyQueue()
//     queue.queueSearch(50)
//     queue.printQueue()
// }

// main()