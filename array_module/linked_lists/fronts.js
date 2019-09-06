// Neil Denning
// Fronts

function ListNode(value){
    this.val = value;
    this.next = null;
}

var node = new Node(23);

class List{
    constructor(){
        this.head = null;
    }
}

// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the 
// first ListNode and a value, create a new node, assign it to the list head, and 
// return a pointer to the new head node.

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
  
const node = new Node(23);
  
class List {
    constructor(){
        this.head = null;
}
addFront(value){
    const node = new Node(value);

    node.next = this.head;
    this.head = node;

    return this;
}

// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. 
// Given a pointer to the first node in a list, remove the head node and return the new 
// list head node. If the list is empty, return null.
removeFront() {
    const node = this.head;

    if (!node) {
      return node;
    }

    // try {
    //   this.head = this.head.next;
    // } catch (error) {
    //   console.log(error.message);
    //   return null;
    // }
    this.head = node.next;


    return this;
  }

  isEmpty() {
    return this.head === null;
    console.log('expression', 4 > 5);
    if (this.head !== null) {
      return false;
    } else {
      return true;
    }
  }


// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Front
// Finally, Tad and Sam reach the front of the line to get movie tickets. 
// Oh no – only one seat remains! Who was earlier in line: Tad or Sam? 
// Return the value (not the node) at the head of the list. 
// If the list is empty, return null.
front() {
    // (expression) ? (if true) : (if false)
    return this.isEmpty() ? null : this.head.value;
    if (this.isEmpty()) {
      return null;
    } else {
      return this.head.value;
    }

    const node = this.head;

    if (node) {
      return node.value;
    }

    return null;
  }

// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// // The End.