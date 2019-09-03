// JS Array.. To Do 1
// Neil Denning

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
var array = [3, 1, 4, 9];
function pushFront(array, value){
    array[0] = value;
    return array;
}
results = pushFront([3, 1, 4, 9], 11);
console.log(results);

function pushFront2(arr, val){
    for(var n = arr.length; n >= 0; n--){
        arr[n] = arr[n - 1];
    }
    arr[0] = val;
    return arr;
}


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
var array = [3, 1, 4, 9];
function popFront(array){
    value = array[0];
    return value;
}
results = popFront(array);
console.log(results);

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
var array = [3, 1, 4, 9];
function insertAt(array, index, value){
    array[index] = value;
    return array;
}
results = insertAt([3, 1, 4, 9], 2, 88);
console.log(results);
// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop().
// Think of popFront(arr) as equivalent to removeAt(arr,0).
var array = [3, 1, 4, 9];
function removeAt(array, index){
    var value = array[index];
    return value;
}
results = removeAt([3, 1, 4, 9], 3)
console.log(results);
// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
var array = [3, 1, 4, 9, 24, 48, 100, 50];
function swapPairs(arr){
    for(var n = 0; n < arr.length; n+=2){
        var temp = arr[n];
        arr[n] = arr[n + 1];
        arr[n + 1] = temp;
    }
    return arr;
}
results = swapPairs(array)
console.log(results)



