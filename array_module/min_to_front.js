
// Neil Denning

// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

var array = [4,2,1,3,5]

function minToFront(arr){
    var minVal = arr[0];
    var minIdx = 0;
    for(var n = 0; n < arr.length; n++){
        if(minVal > arr[n]){
            minVal = arr[n];
            minIdx = n;
        }
    }
    for (var i = minIdx; i > 0; i--){
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    console.log("minVal =", minVal);
    console.log("minIdx =", minIdx);
    // var temp = arr[0];
    // arr[0] = minVal;
    // arr[minIdx] = temp;    
    return arr;
    
}

console.log("min to front =", minToFront(array));