// // Neil Denning
// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// Max/Min/Average
// SList: Max
// American Idol seems to air singers that are the best, and a few that seem like the worst! 
// Create function max(node) to return list’s largest val.
max() {
    let max = this.head.value
    let runner = this.head
    while(runner){
       if (max < runner.value){
         max = runner.value
       }
       runner = runner.next
    }
    return max
  }

// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// SList: Min
// Create min(node) to return list’s smallest val. 
min() {
    let min = this.head.value
    let runner = this.head
    while(runner){
       if (min > runner.value){
         min = runner.value
       }
       runner = runner.next
    }
    return min
  }

// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// SList: Average
// Create average(node) to return average val.
avg() {
    let runner = this.head
    let sum = 0
    while(runner){
      sum += runner.value
      runner = runner.next
    }


    return sum / this.length()
  }



// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// // The End.