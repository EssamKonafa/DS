class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    insertFirst(item) {
        let newNode = new Node(item)
        if (this.length === 0) {
            this.first = this.last = newNode;
            this.newNode = null;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.length++
    }
    insertEnd(item) {
        let newNode = new Node(item)
        if (this.length === 0) {
            this.first = this.last = newNode;
            newNode.next = this.first;
        } else {
            this.last.next = newNode;
            newNode.next = null;
            this.last = newNode;
        }
        this.length++
    }
    insertAt(item, loc) {
        if (loc < 0 || loc > this.length) {
            console.log("ERROR: Out of range");
        } else {
            let newNode = new Node(item)
            if (loc === 0) {
                this.insertFirst(item)
            }
            else if (loc==this.length)
                this.insertEnd(item)
            else{
                let current = this.first
                for(let i = 1;i<loc;i++){
                    current=current.next
                    newNode.next=current.next
                    current.next=newNode
                    this.length++
                }
            }
        }
    }
    insertOrdered(item) {
        let newNode = new NodeType(item);

        if (this.first === null) {
            this.first = this.last = newNode;
            newNode.next = null;
            this.length++;
        } else if (this.first.info >= item) {
            newNode.next = this.first;
            this.first = newNode;
            this.length++;
        } else {
            let current = this.first.next;
            let trailCurrent = this.first;

            while (current !== null) {
                if (current.info >= item)
                    break;
                current = current.next;
                trailCurrent = trailCurrent.next;
            }
            if (current === null) {
                this.last.next = newNode;
                newNode.next = null;
                this.last = newNode;
                this.length++;
            } else {
                trailCurrent.next = newNode;
                newNode.next = current;
                this.length++;
            }
        }
    }

    // Deletion methods

    removeFirst() {
        if (this.length === 0)
            console.log("ERROR: EMPTY LIST");
        else if (this.length === 1) {
            delete this.first;
            this.last = this.first = null;
            this.length--;
        } else {
            let current = this.first;
            this.first = this.first.next;
            delete current;
            this.length--;
        }
    }

    removeLast() {
        if (this.length === 0)
            console.log("ERROR: EMPTY LIST");
        else if (this.length === 1) {
            delete this.first;
            this.last = this.first = null;
            this.length--;
        } else {
            let current = this.first.next;
            let trailCurrent = this.first;
            while (current !== this.last) {
                trailCurrent = current;
                current = current.next;
            }
            delete current;
            trailCurrent.next = null;
            this.last = trailCurrent;
            this.length--;
        }
    }

    removeLast2() {
        if (this.length === 0)
            console.log("ERROR: EMPTY LIST");
        else if (this.length === 1) {
            delete this.first;
            this.last = this.first = null;
            this.length--;
        } else {
            let current = this.first;
            while (current.next !== this.last)
                current = current.next;

            delete this.last;
            current.next = null;
            this.last = current;
            this.length--;
        }
    }

    remove(item) {
        if (this.isEmpty()) {
            console.log("Can not remove from empty list");
            return;
        }

        let current, trailCurrent;
        if (this.first.info === item) {
            current = this.first;

            this.first = this.first.next;
            delete current;
            this.length--;
            if (this.length === 0)
                this.last = null;
        } else {
            current = this.first.next;
            trailCurrent = this.first;
            while (current !== null) {
                if (current.info === item)
                    break;
                trailCurrent = current;
                current = current.next;
            }

            if (current === null)
                console.log("The item is not there");
            else {
                trailCurrent.next = current.next;
                if (this.last === current)
                    this.last = trailCurrent;
                delete current;
                this.length--;
            }
        }
    }

    removeAt(loc) {
        if (loc < 0 || loc >= this.length)
            console.log("ERROR: Out of range");
        else {
            let current, trailCurrent;
            if (loc === 0) {
                current = this.first;
                this.first = this.first.next;
                delete current;
                this.length--;
                if (this.length === 0)
                    this.last = null;
            } else {
                current = this.first.next;
                trailCurrent = this.first;
                for (let i = 1; i < loc; i++) {
                    trailCurrent = current;
                    current = current.next;
                }

                trailCurrent.next = current.next;
                if (this.last === current)
                    this.last = trailCurrent;
                delete current;
                this.length--;
            }
        }
    }

    // Other methods

    listSize() {
        return this.length;
    }

    isEmpty() {
        return (this.length === 0);
    }

    seqSearch(item) {
        let current = this.first;
        let loc = 0;
        while (current !== null) {
            if (current.info === item)
                return loc;
            current = current.next;
            loc++;
        }
        return -1;
    }
    reverse() {
        let prev = null, next, curr;
        curr = this.first;
        next = curr.next;
        while (next !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.first = prev;
    }
    print() {
        let current = this.first
        while (current !== null) {
            console.log(current);
            current = current.next
        }
    }
}

let ll = new LinkedList()
// ll.insertFirst(5)
// ll.insertFirst(2)
// ll.print()


