class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
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

    bfsTraverse() {
        let queue = [];
        let visited = [];
        let node;
        if (this.root === null) {
            return visited;
        }

        queue.push(this.root)

        while (queue.length !== 0) {
            node = queue.shift();
            visited.push(node.val);
            if (node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }

        return visited;
    }

    dfsPreOrder() {
        if (this.root === null) {
            return null;
        }
        let visited = [];
        let current = this.root;
        preOrder(current);
        function preOrder(node) {
            visited.push(node.val)
            if (node.left) {
                preOrder(node.left);
            }
            if (node.right) {
                preOrder(node.right);
            }
        }
        return visited;
    }

    dfsPostOrder() {
        if (this.root === null) {
            return null;
        }
        let visited = [];
        let current = this.root;
        function postOrder(node) {
            if (node.left) {
                postOrder(node.left)
            }
            if (node.right) {
                postOrder(node.right)
            }
            visited.push(node.val)
        }
        postOrder(current);
        return visited;
    }

    dfsInOrder() {
        if (this.root === null) {
            return null;
        }

        let visited = [];
        let current = this.root;
        function inOrder(node) {
            if (node.left) {
                inOrder(node.left)
            }
            visited.push(node.val)
            if (node.right) {
                inOrder(node.right)
            }
        }
        inOrder(current);
        return visited;
    }
}

let tree = new Tree;

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(" Pre-Order "+tree.dfsPreOrder())
console.log("Post-Order " + tree.dfsPostOrder())
console.log("  In-Order " + tree.dfsInOrder())
