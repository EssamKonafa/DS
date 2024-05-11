// class ArrayList {
//     constructor(size = 100) {
//         if (size <= 0) {
//             console.log('wrong size');
//             this.maxSize = 100;
//         } else {
//             this.maxSize = size;
//         }
//         this.length = 0;
//         this.list = new Array(this.maxSize).fill(0);
//     }
//     isEmpty() {
//         return this.length === 0;
//     }
//     isFull() {
//         return this.length === this.maxSize;
//     }
//     listSize() {
//         console.log( this.length);
//     }
//     maxListSize() {
//         return this.maxSize;
//     }
//     print() {
//         console.log(this.list.slice(0, this.length).join(" "));
//     }
//     isItemAtEqual(location, item) {
//         if (location < 0 || location >= this.length)
//             return false;
//         else {
//             console.log( this.list[location] === item);
//         }
//     }
//     insertAt(location, item) {
//         if (this.isFull())
//             console.log("The List is Full");
//         else if (location < 0 || location > this.length) {
//             console.log("Out of Range");
//         } else {
//             for (let i = this.length; i > location; i--)
//                 this.list[i] = this.list[i - 1]
//             this.list[location] = item
//             this.length++
//         }
//     }
//     insertEnd(item) {
//         if (this.isFull())
//             console.log("The List is Full");
//         else
//             this.list[this.length++] = item
//     }
//     retrieveAt(location) {
//         if (location < 0 || location > this.length)
//             console.log("Out of Range");
//         else {
//             console.log( this.list[location])
//         }
//     }
//     replaceAt(item, location) {
//         if (location < 0 || location > this.length)
//             console.log("Out of Range");
//         else {
//             return this.list[location] = item
//         }
//     }
//     clearList() {
//         return this.length = 0;
//     }
//     seqSearch(item) {
//         for (let location = 0; location < this.length; location++)
//             if (this.list[location] === item)
//                 console.log( location);
//         return -1
//     }
//     insertNoDuplicate(item) {
//         if (this.isFull())
//             console.log("The List is Full");
//         else {
//             let flag = this.seqSearch(item)
//             if (flag === -1)
//                 this.list[this.length++] = item
//             else
//                 console.log("No duplicates are allowed.");
//         }
//     }
//     remove(item){
//         let location = this.seqSearch(item);
//         if(location===-1)
//             console.log("The item to be deleted is not in the list");
//         else
//         this.removeAt(location)
//     }
//     removeAt(loc){
//         if(loc<0||loc>this.length)
//             console.log("The location of the item to be removed is out of range.");
//         else{
//             for(let i =loc;i<this.length -1;i++)
//                 this.list[i]=this.list[i +1]
//             this.length--;
//         }
//     }
// }

// let list = new ArrayList()
// list.insertAt(0,10)
// list.insertAt(1,11)
// list.insertEnd(66)
// list.insertAt(2,22)
// // list.insertNoDuplicate(7)
// // list.listSize()
// list.isItemAtEqual(0,10)
// list.retrieveAt(1)
// list.replaceAt(7,0)
// // list.clearList()
// list.seqSearch(7)
// // list.remove(11)
// list.removeAt(1)
// list.print()