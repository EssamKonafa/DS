class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
class LinkedQueue {
    constructor() {
        this.frontPtr = null;
        this.rearPtr = null;
        this.length = 0
    }
    isEmpty() {
        return this.length === 0
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log('queue is empty');
        } else if (this.length === 1) {
            this.frontPtr = null;
            this.rearPtr = null;
            this.length = 0;
        } else {
            let current = this.frontPtr
            this.frontPtr = this.frontPtr.next
            current.next = null;
            this.length--;
        }
    }
    enqueue(item) {
        let newNode = new Node(item);
        if (this.length === 0) {
            this.frontPtr = newNode;
            this.rearPtr = newNode;
        } else {
            this.rearPtr.next = newNode;
            this.rearPtr = newNode
        }
        this.length++
    }
    front() {
        if (this.isEmpty()) {
            console.log('queue is empty');
        } else {
            console.log( this.frontPtr.item)
        }
    }
    rear() {
        if (!this.isEmpty()) {
            console.log( this.rearPtr.item)
        } else {
            console.log('queue is empty');
        }
    }
    removeQueue() {
        if (!this.isEmpty()) {
            while (this.frontPtr !== null) {
                let current = this.frontPtr;
                this.frontPtr = this.frontPtr.next
                current.next = null
            }
            this.rearPtr = null;
            this.length = 0;
        } else {
            console.log('queue is already empty');
        }
    }
    display() {
        if (this.isEmpty()) {
            console.log('queue is empty');
        } else {
            let current = this.frontPtr;
            let result = '['
            while (current != null) {
                result += current.item + ' '
                current = current.next
            }
            result += ']'
            console.log(result);
        }
    }
    search(item) {
        let current = this.frontPtr;
        let flag = true
        while (current !== null) {
            if (current.item === item) {
                console.log('search result :', item,'was found');
                flag = false
                break
            }
            current = current.next;
        }
        if(flag){
            console.log('the item',item,'not found');
        }
    }
}

let LQ = new LinkedQueue()
LQ.enqueue(10)
LQ.enqueue(20)
LQ.enqueue(30)
// LQ.isEmpty()
LQ.dequeue()
LQ.front()
LQ.rear()
// LQ.removeQueue()
LQ.search(30)
LQ.display()