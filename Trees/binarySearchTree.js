class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        function helper(node) {
            if (node.val > newNode.val) {
                node.left ? helper(node.left) : node.left = newNode;
            }
            if (node.val < newNode.val) {
                node.right ? helper(node.right) : node.right = newNode;
            }
        }
        if (!this.root) {
            this.root = newNode;
        } else {
            helper(this.root);
        }
        return this;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
tree.insert(7);
tree.insert(9)
console.log(tree.root.left)