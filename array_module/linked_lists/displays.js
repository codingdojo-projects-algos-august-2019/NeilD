// Neil Denning
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Display
// Create display(node) for debugging that returns a string containing all list values. 
// Build what you wish console.log(myList) did!
display() {
    let current = this.head;

    while (current) {
      console.log("value is " + current.value);

      current = current.next;
    }

    return this;
  }
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// The End.