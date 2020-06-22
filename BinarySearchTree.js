class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (current.val === value) {
                return this;
            }
            if (value < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) {
            return false;
        }
        let current = this.root;
        while (true) {
            if (current.val === value) {
                return true;
            }
            if (value < current.val) {
                if (current.left === null) {
                    return false
                }
                current = current.left;
            } else {
                if (value > current.right) {
                    if (current.right === null) {
                        return false
                    }

                }
                current = current.right;
            }
        }

    }

    search(value) {
        if (this.root === null) {
            return undefined;
        }
        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.val) {
                current = current.left;
            } else if (value > current.val) {
                current =  current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
}

let bst = new BinarySearchTree();
bst.insert(10)
bst.insert(115)
bst.insert(9)
bst.insert(19)
bst.insert(90)
bst.insert(1)
// console.log(bst.insert(10));
// console.log(bst.insert(115));
// console.log(bst.insert(9));
// console.log(bst.insert(11));
bst.insert(11)
console.log(bst.search(1));

console.log(bst.find(1));

