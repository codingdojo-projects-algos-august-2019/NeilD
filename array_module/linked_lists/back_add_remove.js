// Neil Denning
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Back/Remove/Add
// SList: Back
// Create a function that accepts a ListNode pointer and returns the last value in the list.
back(){
    let runner = this.head
    while(runner.next){
      runner = runner.next
    }
    return runner.value
  }

  
  
}

const list = new List();


list
  .addFront(23)
  .addFront(99)
  .addFront(34)
  .addFront(79)
  .addFront(9)
  .addFront(-1);


console.log(list.back())
console.log('contains -1', list.contains(-1));
console.log('length is ' + list.length());
// .removeFront();
// list.head = node;
list.display();
list.removeFront();
console.log(list.front());

console.log('contains -1', list.contains(-1));
console.log('length is ' + list.length())

// SList: Remove Back
// Create a standalone function that removes the last ListNode in the list and returns the new list.



// SList: Add Back
// Create a function that creates a ListNode with given value and inserts it at end of a linked list.



// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// The End.