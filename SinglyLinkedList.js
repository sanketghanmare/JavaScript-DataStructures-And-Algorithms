class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
     let newnode =  new Node(val);
     if (!this.head) {
         this.head = newnode;
         this.tail = this.head;
     } else {
        this.tail.next = newnode;
        this.tail = newnode;
     }
        this.length += 1;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newtail = current;
        while (current.next) {
           newtail = current;
           current = current.next;
        }

        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
      let newHeadValue = new Node(val);
      if (!this.head) {
          this.head = newHeadValue;
          this.tail = this.head;
      } else {
          newHeadValue.next = this.head;
          this.head = newHeadValue;
      }

      this.length++;
      return newHeadValue;

    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }

        return false;

    }

    insert(index, value){
        if (index < 0 || index > this.length) {
            return false;
        }

        let newNode = new Node(value);

        if (index === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else  {
           let previousNode = this.get(index-1);
           newNode.next = previousNode.next;
           previousNode.next = newNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        let removedNode = null;
        if (index === this.length-1) {
            this.pop();
        } else if (index === 0) {
            this.shift();
        } else  {
            let previousNode = this.get(index-1);
            removedNode = previousNode.next;
            previousNode.next = removedNode.next;
        }
        this.length--;
        return removedNode;
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
}

let list = new SinglyLinkedList();

list.push("Hi");
list.push("How");
list.push("Are");
list.push("You?");
// list.shift();
// list.shift();
list.push(100);
// list.unshift(99)

// console.log(list.get(2))
list.set(2,"yoyoyo")
list.insert(5,"insertNodeTail");
list.insert(0,"insertNodeHead");
// list.insert(1,"atOne");
// list.remove(1)
// list.remove(1)
// list.remove(1)
// list.remove(2)
// list.remove(0)
console.log(list.traverse())
list.reverse()
console.log("\n")
console.log(list.traverse())



// pop() {
//     if (this.head === null || this.head === this.tail) {
//         this.head = null
//         return this;
//     }
//     let tailElement = this.head;
//     while (tailElement) {
//         if (tailElement.next.next === null) {
//             tailElement.next = null;
//             this.tail = tailElement;
//             this.length = this.length - 1;
//             return this;
//         }
//         tailElement = tailElement.next;
//     }
// }







// Bad way to create singly linked list
// let list = new Node("hi");
// list.next = new Node("How");
// list.next.next = new Node("are");
// list.next.next.next = new Node("you?");
