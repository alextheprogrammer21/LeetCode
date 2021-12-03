class Node  {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if (!this.head) {
           this.head = node;
           this.tail = this.head;
        } else {
        this.tail.next = node;
        this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {

        if (!this.head) {
            return undefined;
        }

        let current = this.head; 
        while (current.next) {

            if (!current.next.next) {
                let temp = current.next;
                current.next = null;
                this.tail = current;
                this.length--;
                return temp;
            }
            current = current.next;

        }
    }
    shift() {
        if (!this.head) return null;

        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
}

const list = new LinkedList();
list.push("HI");
list.push("HE");
list.push("LULLERS");

console.log(list);
console.log(list.shift());
console.log(list);