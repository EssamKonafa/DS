// class Node {
//     constructor(info) {
//         this.info = info;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
//     isEmpty() {
//         return this.root === null;
//     }
//     search(item) {
//         let current = this.root;
//         while (current !== null) {
//             if (current.info === item) return true;
//             else if (current.info < item) current = current.left
//             else current = current.right
//         }
//         return false
//     }
//     searchRecursion(item) {
//         return this.searchRecursionPriv(this.root, item)
//     }
//     searchRecursionPriv(node, item) {
//         if (node === false) return false;
//         else if (node.info === item) return true;
//         else if (node.info > item) return this.searchRecursionPriv(node.left, item)
//         else return this.searchRecursionPriv(node.right, item)
//     }
//     insert(item) {
//         let current = this.root;
//         let trailCurrent = null;
//         const newNode = new Node(item);
//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             while (current !== null)
//                 trailCurrent = current;
//             if (current.info === item) {
//                 console.log("The insert item is already in the list -- duplicates are not allowed.");
//                 return;
//             } else if (current.info > item) {
//                 current = current.left;
//             } else {
//                 current = current.right;
//             }
//         }
//         if (trailCurrent.info > item) {
//             trailCurrent.left = newNode;
//         } else {
//             trailCurrent.right = newNode;
//         }
//     }
//     remove(item) {
//         let current = this.root;
//         let trailCurrent = null;
//         if (this.root === null) {
//             console.log("Cannot delete from the empty tree.");
//             return;
//         }
//         while (current !== null) {
//             if (current.info === item) break;
//             else {
//                 trailCurrent = current;
//                 if (current.info > item) current = current.left;
//                 else current = current.right;
//             }
//         }
//         if (current === null) {
//             console.log("The delete item is not in the tree.");
//             return;
//         } else if (trailCurrent === null) {
//             this.deleteFromTree(this.root);
//         } else if (trailCurrent.info > item) {
//             this.deleteFromTree(trailCurrent.left);
//         } else {
//             this.deleteFromTree(trailCurrent.right);
//         }
//     }
//     deleteFromTree(p) {
//         if (p.left === null && p.right === null) {
//             p = null;
//         } else if (p.left === null) {
//             p = p.right
//         } else if (p.right === null) {
//             p = p.left;
//         } else {
//             let current = p.left;
//             let trailCurrent = null;
//             while (current.right !== null) {
//                 trailCurrent = current;
//                 current = current.right;
//             }
//             p.info = current.info;

//             if (trailCurrent === null) {
//                 p.left = current.left;
//             } else {
//                 trailCurrent.right = current.left;
//             }
//         }
//     }
//     _inorder(node) {
//         if (node !== null) {
//             this._inorder(node.left);
//             console.log(node.info);
//             this._inorder(node.right);
//         }
//     }
//     inorderTraversal() {
//         this._inorder(this.root);
//     }
//     _postOrder(node) {
//         if (node !== null) {
//             this._postOrder(node.left)
//             this._postOrder(node.left)
//             console.log(node.info);
//         }
//     }
//     postOrderTraversal() {
//         this._postOrder(this.root)
//     }
//     treeHight() {
//         return this._height(this.root)
//     }
//     _height(node) {
//         if (node === null) return 0;
//         else return 1+ Math.max(this._height(node.left), this._height(node.right))
//     }
//     treeNodeCount() {
//         return this._nodeCount(this.root);
//     }
//     _nodeCount(node) {
//         if (node === null) return 0;
//         else return 1 + this._nodeCount(node.left) + this._nodeCount(node.right);
//     }
//     treeLeavesCount() {
//         return this._leavesCount(this.root);
//     }
//     _leavesCount(node) {
//         if (node === null) return 0;
//         else if (node.left === null && node.right === null) return 1;
//         else return this._leavesCount(node.left) + this._leavesCount(node.right);
//     }

// }

// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(20);
// bst.insert(5);
// bst.remove(10);

// console.log("Inorder traversal:");
// bst.inorderTraversal();
// console.log("Postorder traversal:");
// bst.postorderTraversal();
// console.log("Preorder traversal:");
// bst.preorderTraversal();