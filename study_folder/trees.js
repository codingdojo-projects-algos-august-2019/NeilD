// Study Guide

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.addNode = function (newNode) {
        if (newNode.value > this.value) {
            if (this.right) {
                this.right.addNode(newNode)
            } else {
                this.right = newNode
            }
        } else {
            if (this.left) {
                this.left.addNode(newNode)
            } else {
                this.left = newNode;
            }

        }
    }
}

function binarySearchTree() {
    this.root = null
    this.size = 0
    
    this.add = function (value) {
        this.size++
        var newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            this.root.addNode(newNode)
        }
    }

    this.contains = function(value){
        if (!this.root){
            return false
        }
        var runner = this.root;
        if(runner.value == value){
            return true;
        } else {
            while(runner){
                if (value < runner.value){
                    if(!runner.left){
                        return false;
                    }
                    runner = runner.left
                }
                if (value > runner.value){
                    if(!runner.right){
                        return false
                    }
                    runner = runner.right
                }
                if (runner.value == value){
                    return true
                }
            }
            return false
        }
    }

}

function test() {
    var tree = new binarySearchTree();

    tree.add(7)
    tree.add(4)
    tree.add(20)
    tree.add(11)
    tree.add(25)
    tree.add(3)
    console.log(tree.contains(12))
    console.log(tree)
}

console.log(test())