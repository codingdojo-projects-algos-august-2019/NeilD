// // Neil Denning

// To Do 4
// ---------------------------------------------------------------------------------------------|
// Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a 
// method that will randomize the order of an array’s elements. Let’s create shuffle(arr), 
// to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return 
// anything from your function?
var arr = [9,8,7,6,5,4,3,2,1];
function shuffleArr(arr){
    for(var n = 0; n < arr.length; n++){
        var randInt = Math.floor(Math.random()*arr.length);
        var temp = arr[n];
        arr[n] = arr[randInt];
        arr[randInt] = temp;
    }
    return arr;
}


// console.log(shuffleArr(arr));
// console.log(shuffleArr(arr));
// console.log(shuffleArr(arr));
// the above code is from kalebs work..I still need to learn the "math." functions. Everything else makes sense.
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Remove Range
// Given array, and indices start and end, remove vals in that index range, working in-place 
// (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

// *****again..this is kalebs work..kaleb and thomas are like the solutions for me right now. 
// fyi- I'm copying by reading and writing it so I can understand it. 
var arr = [20, 30, 40, 50, 60, 70, 100];
function removeRange(arr, start, end) {
    for (var count = 0; count < (end - start +1); count++) {
        removeAt(arr, start);
    }
    return arr;
}

function removeAt(arr, idx) {
    var temp = arr[idx];
    for (var n = idx; n < arr.length-1; n++) {
        var temp = arr[n];
        arr[n] = arr[n +1];
        arr[n +1] = temp;
    }
    arr.pop();
    return temp;
}

// console.log(removeRange(arr, 2, 4));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element 
// containing the sum of those ten values. If the array does not end aligned evenly with ten elements, 
// add one last sum that includes those last elements not yet been included in one of the earlier sums. 
// Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
var arr = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
function insertAt(arr, idx, val){
	for (var n = arr.length; n >= idx; n--){
		arr[n] = arr[n - 1];
	}
	arr[idx] = val;
	return arr;
}
function intermediateSums(arr){
    var sum1 = 0;
    var sum2 = 0;
    for(var n = 0; n < arr.length; n++){
        if(n < 10){
            sum1 += arr[n];
        }
    }
    if(n > 10){
        insertAt(arr, 10, sum1);
    }
    for(var n = 0; n < arr.length; n++){
        if(n > 10){
            sum2 += arr[n];
        }
    }
    if(n > 10){
        insertAt(arr, 15, sum2);
    }
    return arr;
}
// console.log(intermediateSums(arr));
// **Note** this one is tough..I'll try to figure in edge cases later, but for now it gives the correct output.
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Double Trouble
// Create a function that changes a given array to list each original element twice, 
// retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
// **Note** I remember this from python..it was so easy in python. one line statment...not in JS. lol.
var arr = [4,"Ulysses",42,false];
function doubleTrouble(arr){
    var count = 0;
    var arrLength = arr.length;
    arr.length = arr.length *2;
    for(var n = arrLength -1; n >= 0; n--){
        console.log(n);
        count++;
        arr[arr.length -(count +1)] = arr[n];
        arr[arr.length -(count +2)] = arr[n];
    }
    return arr;
}

//  I didn't like where this one was going..
// function doubleTrouble(arr){
//     var copy = arr[0];
//     for(var n = 0; n < arr.length; n++){
//         copy = arr[n];
//         insertAt(arr, 1, copy);
//     }
//     return arr;
// }


console.log(doubleTrouble(arr));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially 
// into a new array, at alternating indices starting with first array. Extra values from either array 
// should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].
var arr1 = [1, 2];
var arr2 = [10, 20, 30, 40];
function zipIt(a1, a2){
    var newArr = [];
    var count = (a1.length > a2.length ? a1.length : a2.length); // This is new to me..I had to look up these operators. thanks to kaleb!
    for (var i = 0; i < count; i++){
        if (i < a1.length){
            newArr.push(a1[i]);
        }
        if (i < a2.length){
            newArr.push(a2[i]);
        }
    }
    return newArr;
}

console.log(zipIt(arr1, arr2));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!