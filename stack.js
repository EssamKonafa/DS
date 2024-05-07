const maxSize = 4;

class stack {
    constructor() {
        this.item = new Array(maxSize);
        this.top = -1;
    }
    isEmpty() {
        return this.top < 0;
    }
    push(element) {
        if (this.top >= maxSize - 1) {
            console.log('stack is full on push');
        } else {
            this.top++;
            this.item[this.top] = element;
        }
    }
    pop() {
        if (this.isEmpty()) {
            console.log('stack is empty on pop');
        } else {
            this.top--
        }
    }
    // popElement(element) {
    //     if (this.isEmpty()) {
    //         console.log('stack is empty on popElement');
    //     } else {
    //         element[0] = this.item[this.top];
    //         top--;
    //     }
    // }
    getTop(stackTop) {
        if (this.isEmpty()) {
            console.log('stack is empty on getTop');
        } else {
            stackTop[0] = this.item[this.top]
            console.log(stackTop[0]);
        }
    }
    log() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let result = '[';
            for (let i = this.top; i >= 0; i--) {
                result += this.item[i] + ",";
            }
            result += ']'
            console.log(result);
        }
    }
}

const s = new stack();
// s.push(1)
// s.push(2)
// s.push(3)
// s.push(9)
// s.pop()
// s.popElement()
// s.push(2)
// s.push(2)
// s.getTop()
s.log()