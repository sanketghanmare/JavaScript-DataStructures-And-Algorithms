class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.tail;
        if (this.length === 1) {
            this.head = this.length = null;
        } else {

            this.tail = temp.previous;
            this.tail.next = null;
            temp.previous = null; // cut the old tails previous ties also
        }
        this.length--;
        return temp;
    }

    shift() {

        if (this.length === 0) {
            return undefined;
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let oldHead = this.head;
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
       let newHeadNode = new Node(val);

       if (this.length === 0) {
           this.head = newHeadNode;
           this.tail =  this.head;
       } else {

           this.head.previous = newHeadNode;
           newHeadNode.next = this.head;
           this.head = newHeadNode;
       }
       this.length++;
       return this;

    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter, current;
        if (index <= Math.floor(this.length/2)) {
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.previous;
                counter--;
            }
        }
        return current;
    }

    set(val,index) {
        let oldNode = this.get(index);
        if (oldNode !== null) {
            oldNode.val = val;
            return true;
        }
        return false;
    }

    insert(index,val) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            return this.unshift(val);
        } else if (index === this.length) {
           return this.push(val)
        } else {
            let newNode = new Node(val);
            let prevNode = this.get(index-1);
            let afterNode = prevNode.next;
            prevNode.next = newNode;
            newNode.previous = prevNode;
            newNode.next = afterNode;
            afterNode.previous = newNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        let nodeToRemove;
        if (index === 0) {
            return this.shift();
        } else if (index === this.length-1) {
            return this.pop()
        } else {

            nodeToRemove = this.get(index);

            // nodeToRemove.previous.next = nodeToRemove.next;
            // nodeToRemove.next.previous = nodeToRemove.previous;

            let prevNode = nodeToRemove.previous;
            let afterNode = nodeToRemove.next;

            prevNode.next = afterNode;
            afterNode.previous = prevNode;
            nodeToRemove.next = null;
            nodeToRemove.previous = null;
        }
        this.length--;
        return nodeToRemove;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null; // definitely set it to null; end of the list will set to null because this

        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }
}

let doubleList = new DoublyLinkedList();

doubleList.push(1)
doubleList.push(2)
doubleList.push(3)
doubleList.push("Last Item")
doubleList.push("abracadabra")
doubleList.push("giligilichu")
// doubleList.pop()
//console.log(doubleList.shift())
//doubleList.unshift("new Value")
//console.log(doubleList.unshift("new adsfasf"))
//console.log(doubleList.traverse())

// console.log(doubleList.get(5))
// console.log(doubleList.get(2))
// console.log(doubleList.set("two",1))
// console.log(doubleList.insert(0,"tank"))
// console.log(doubleList.insert(4,"four"))
// console.log(doubleList.insert(8,"last index"))
// console.log(doubleList.traverse())
// console.log(doubleList.remove(0))
// console.log(doubleList.traverse())
// console.log(doubleList.remove(7))
// console.log(doubleList.traverse())
// console.log(doubleList.remove(4))
console.log(doubleList.traverse())
doubleList.reverse();
console.log("\n")

console.log(doubleList.reverse())
