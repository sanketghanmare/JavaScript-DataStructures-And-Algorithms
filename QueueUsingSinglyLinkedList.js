class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;

            //this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first === 0) {
            return null;
        }
        let temp = this.first;
        if (this.first === this.last) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
            //this.first = temp.next;
            this.size --;
        }
        return temp.val;
    }
}

let queue = new Queue();

console.log(queue.enqueue(12));
console.log(queue.enqueue(123));
console.log(queue.enqueue(11232));
console.log(queue.enqueue(1123412342));


console.log(queue.dequeue());
console.log(queue.dequeue());


console.log(queue.size)
