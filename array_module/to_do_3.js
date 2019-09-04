// Neil Denning


// To Do 3
// ---------------------------------------------------------------------------------------------|
// Remove Negatives
// Implement removeNegatives() that accepts an array, 
// removes negative values, and returns the same array (not a copy), 
// preserving non-negatives’ order. As always, do not use built-in array functions.
var arr = [2, -3, 4, -5, 6, -1, 8, -7];
function removeNegatives(arr){
    for(var n = arr.length -1; n >= 0; n--){
        if(arr[n] < 0){
            if(n == arr.length -1){
                arr.length--;
            }
            else{
                for(var r = n; r < arr.length; r++){
                    arr[r] = arr[r + 1];
                }
                arr.length--;
            }
        }
    }
    return arr;
}

// console.log(removeNegatives(arr));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Second-to-Last
// Return the second-to-last element of an array. 
// Given [42,true,4,"Kate",7], return "Kate". 
// If array is too short, return null.
var arr = [42,true,4,"Kate",7];
var arr2 = [42];
function secondToLastVal(arr){
    if(arr.length > 2){
        return arr[arr.length -2];
    }
    else{
        return null;
    }
}

// console.log(secondToLastVal(arr));
// console.log(secondToLastVal(arr2));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Second-Largest
// Return the second-largest element of an array. 
// Given [42,1,4,Math.PI,7], return 7. 
// If the array is too short, return null.
var arr = [42,1,4,Math.PI,7];
function secondToLargestVal(arr){
    var max1 = null;
    var max2 = null;
    for(var n = 0; n < arr.length; n++){
        if(max1 < arr[n]){
            max1 = arr[n];
        }
    }
    console.log("Largest Value =", max1);
    for(var r = 0; r < arr.length; r++){
        if(max2 < arr[r] && arr[r] != max1){
            max2 = arr[r];
        }
    }
    return max2;
}   

// console.log("Second To Largest Value =", secondToLargestVal(arr));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Nth-to-Last
// Return the element that is N-from-array’s-end. 
// Given ([5,2,3,6,4,9,7],3), return 4. 
// If the array is too short, return null.
var arr = [5,2,3,6,4,9,7];
function nthToLastVal(arr, nth){
    if(arr.length >= nth){
        return arr[arr.length -nth];
    }
    else{
        return null;
    }
}
// console.log(nthToLastVal([5,2,3,6,4,9,7],7));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. 
// Given arr and N, return the Nth-largest element, where (N-1) elements are larger. 
// Return null if needed.
var arr = [5,2,3,6,4,9,7];
function nthToLargestVal(arr, nth){
    var max = null;
    for(var n = 0; n < arr.length; n++){
        if(arr[n] === nth){
            max = arr[n];
        }
        else{
            nth -1;
        }
    }
    return max;
}
// console.log(nthToLargestVal([5,2,3,6,4,9,7],8));
// def bubbleSort_nrd(lst):
//     for val in range(len(lst)-1,0,-1):
//         if lst[val] < lst[val-1]: # Going from back to front not out of range anymore
//             lst[val-1],lst[val] = lst[val],lst[val-1] 
//         for val in range(len(lst)-1,0,-1):
//             if lst[val] < lst[val-1]: # Going from back to front not out of range anymore
//                 lst[val-1],lst[val] = lst[val],lst[val-1]     
//     return lst
// this is my python sort..I converted it and tried using it to sort and then grab the "Nth" but I got stuck..
// below the sort is NthLargestVal function that works for some cases but not all..bummer-lol. 

var arr = [5,2,3,6,4,9,7];
function bubbleSortNRD(arr){
    for(var n = arr.length -1; n > 0; n--){
        if(arr[n] < arr[n -1]){
            var temp = arr[n -1];
            arr[n -1] = arr[n];
            arr[n] = temp;
        }
        else{
            for(var r = arr.length -1; r > 0; r--){
                if(arr[r] < arr[r -1]){
                    var temp = arr[r -1];
                    arr[r -1] = arr[r];
                    arr[r] = temp;
                }
            }
        }
    }
    return arr;    
}
console.log(bubbleSortNRD(arr));

// function nthToLargestVal(arr, nth){
//     sortedArr = bubbleSortNRD(arr);
//     return arr
// }

function nthToLargestVal(arr, nth){
    var max = null;
    for(var n = 0; n < arr.length; n++){
        if(arr[n] === nth){
            max = arr[n];
        }
        else{
            nth -1;
        }
    }
    return max;
}
console.log(nthToLargestVal([5,2,3,6,4,9,7],8));

// ---------------------------------------------------------------------------------------------|

// The End.