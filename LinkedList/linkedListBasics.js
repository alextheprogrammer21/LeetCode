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
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get (ind) {
        if (ind > this.length || ind < 0) {
            return null;
        }
        let counter = this.head;

        for (let i = 0; i < ind; i++) {
            counter = counter.next;
        }
        return counter;
    }
    set (ind, val) {
        let node = this.get(ind);
        if (!node) {
            return false;
        } else {
            node.val = val;
            return true;
        }
    }
    insert (ind, val) {
        if (ind < 0 || ind > this.length) return false;
        let newNode = new Node(val);
        if (ind === this.length) {
            this.push(val);
            return this;
    }
        if (ind === 0) {
            this.unshift(val)
            return this;
        }
        let find = this.get(ind-1);
        newNode.next = find.next;
        find.next=newNode;
        this.length++;
        return this;
    }
    remove (ind) {
        let find = this.get(ind-1);
        let returnval = find.next;
        find.next = returnval.next;
        this.length--;
        return returnval;
    }
    reverse () {
        this.tail = this.head; //13 is now tail
        let current = this.tail.next; //27 
        let temp;
        let prev = this.tail; //13
        for (let i = 0; i < this.length; i++) {
            if (!current.next) { //Now there is no current.next
                this.head = current; //this.head is now is 71
                current.next = prev; // points to the 32
                this.tail.next = null;
                return this;
            }
            temp = current.next; // points to the 71
            current.next = prev; //Makes the 32 point to 27
            prev = current; // Prev is now 32
            current = temp; //current now points to the 71

        }
    }
}

const list = new LinkedList();
list.push("HI");
list.push("HE");
list.push("LULLERS");

console.log(list);
console.log(list.reverse());
//push, pop, shift,