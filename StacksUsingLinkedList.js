class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.first = null
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (this.size === 0) {
            return null
        }
        let temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size --;
        return temp.val;


        //Alternative implementation
        // if (!this.first) return null;
        // let temp = this.first;
        // if (this.first === this.last) {
        //     this.last = null;
        // }
        // this.first = this.first.next;
        // this.size --;
        // return temp;

    }
}
let stack = new Stack();


console.log(stack.push(4));
console.log(stack.push(6));
console.log(stack.push(61));
console.log(stack.push(12346));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size);
