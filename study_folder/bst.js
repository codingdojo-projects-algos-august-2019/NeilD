// Study Guide

function BTNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.addNode = function (newNode) {
        if (newNode.value > this.value) {
            if (this.right == null) {
                this.right = newNode
            }
            else {
                this.right.addNode(newNode)
            }
        }
        else {
            if (this.left == null) {
                this.left = newNode
            }
            else {
                this.left.addNode(newNode)
            }
        }
    }
}

function BST() {
    this.root = null;

    this.add = function (value) {
        var newNode = new BTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.root.addNode(newNode)
        }
    }
}


function test() {
    var tree = new BST()

    tree.add(7)

    tree.add(4)

    tree.add(10)

    tree.add(15)

    console.log(tree)

}


console.log(test())