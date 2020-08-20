class BinarySearchTree {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        if(this.head == null) {
            this.head = node;
            return;
        }

        let current = this.head;
        let prev = null;
        let direction = "";

        
        while(current != null) {
            if(node.val <= current.val) {
                prev = current;
                current = current.left;
                direction = "left";
            } else {
                prev = current;
                current = current.right;
                direction = "right";
            }
        }
        if(direction === "right") {
            prev.right = node;
        } else {
            prev.left = node;
        }
    }

    search(value) {
        if(this.head == null) {
            return -1;
        }

        let current = this.head;

        while(current != null) {
            if(current.val === value) {
                return current;
            } else if (current.val < value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return -1;
    }

}


class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}








// building a tree

let myTree = new BinarySearchTree();

myTree.insert(9);
myTree.insert(4);
myTree.insert(14);
myTree.insert(17);
myTree.insert(1);
myTree.insert(24);
myTree.insert(2);
myTree.insert(30);
myTree.insert(6);
myTree.insert(46);
myTree.insert(88);

