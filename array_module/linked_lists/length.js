// Neil Denning
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Length
// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. 
// Create a function that accepts a pointer to the first list node, and returns number of nodes 
// in that SList.

length() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;

      current = current.next;
    }

    return count;
  }
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// The End.