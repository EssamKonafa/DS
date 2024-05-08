// // class Stack {
// //     constructor() {
// //         this.topPtr = null;
// //     }
// //     isEmpty() {
// //         return this.topPtr === null;
// //     }
// //     push(newItem) {
// //         let newPtr = {
// //             item: newItem,
// //             next: this.topPtr,
// //         }
// //         this.topPtr = newPtr
// //     }
// //     pop() {
// //         if (this.isEmpty()) {
// //             console.log('stack is empty on pop');
// //         } else {
// //             let temp = this.topPtr.item;
// //             this.topPtr = this.topPtr.next;
// //             temp = null
// //         }
// //     }
// //     // popElement(poped){
// //     //     if(this.isEmpty()){
// //     //         console.log('stack is empty on pop element');
// //     //     }else{
// //     //         poped[0]=this.topPtr.item
// //     //         let temp=this.topPtr
// //     //         this.topPtr=this.topPtr.next
// //     //         temp.next=null
// //     //     }
// //     // }
// //     // getTop(){
// //     //     if(this.isEmpty()){
// //     //         console.log('stack is empty on pop element');
// //     //     }else{

// //     //     }
// //     // }
// //     print(){
// //         if(this.isEmpty()){
// //             console.log('stack is empty on print');
// //         }else{
// //             let curPtr = this.topPtr
// //             let result = 'items in the stack ['
// //             while(curPtr!==null){
// //                 result+=curPtr.item+','
// //                 curPtr=curPtr.next
// //             }
// //             result+=']'
// //             console.log(result);
// //         }
// //     }
// // }

// // let s = new Stack()
// // s.push(5)
// // s.push(3)
// // s.pop()
// // s.popElement()
// // s.print()

// class Stack {
//     constructor() {
//         this.topPointer = null
//     }
//     isEmpty() {
//         return this.topPointer === null
//     }
//     push(newElement) {
//         let newPointer = {
//             item: newElement,
//             next: this.topPointer,
//         }
//         this.topPointer = newPointer;
//     }
//     pop() {
//         this.topPointer=this.topPointer.next 
//         this.topPointer==null
//     }
//     print() {
//         let result = '['
//         while(this.topPointer!==null){
//             result += this.topPointer.item+','
//             this.topPointer=this.topPointer.next
//         }
//             result += ']'
//             console.log(result);
//     }
// }

// let s = new Stack()
// s.push(2)
// s.push(4)
// s.push(6)
// s.pop()
// s.print()