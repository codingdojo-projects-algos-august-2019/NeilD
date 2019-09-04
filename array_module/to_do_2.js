// // Neil Denning

// To Do 2
// ---------------------------------------------------------------------------------------------|
// Reverse 

// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing 
// elements moved to other indices so that order of elements is reversed. 
// Working ‘in-place’ means that you cannot use a second array – 
// move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().

var arr = [1,2,3,4,5,6,7,8];
var arrStr = ["one", "two", "three", "four", "five"]
function reverseArrVal(arr){
    for(var n = 0; n < arr.length/2; n++){
        var temp = arr[n];
        arr[n] = arr[arr.length -1 -n]; //I was missing this addidtional "-n" Ugh-lol.. I found it on Kalebs work.
        arr[arr.length -1 -n] = temp
    }
    return arr;
}
// console.log(reverseArrVal(arr));
// console.log(reverseArrVal(arrStr));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr’s values to the right by that amount. ‘Wrap-around’ any 
// values that shift off array’s end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
// Don’t use built-in functions.
var arr = [1,2,3,4,5,6,7,8];
var arrStr = ["one", "two", "three", "four", "five"]
function rotate(arr, shiftBy){
    for(var n = 0; n < shiftBy; n++){
        var temp = arr[arr.length -1];
        for(var r = arr.length -1; r >= 0; r--){
            arr[r] = arr[r -1];
        }
        arr[0] = temp;
    }
    
    return arr;
}

// console.log(rotate(arr, 5));
// console.log(rotate(arrStr, 3));

// Second: allow negative shiftBy (shift L, not R).
var arr = [1,2,3,4,5,6,7,8];
var arrStr = ["one", "two", "three", "four", "five"]
function rotate(arr, shiftBy){
    if(shiftBy > 0){
        for(var n = 0; n < shiftBy; n++){
            var temp = arr[arr.length -1];
            for(var r = arr.length -1; r >= 0; r--){
                arr[r] = arr[r -1];
            }
            arr[0] = temp;
        }
    }
    else{
        for(var n = 0; n > shiftBy; n--){
            var temp = arr[0];
            for(var r = 0; r < arr.length; r++){
                arr[r] = arr[r +1];
            }
            arr[arr.length -1] = temp;
        }
    }
    
    return arr;
}

// console.log(rotate(arr, 5));
// console.log("**************");
// console.log(rotate(arrStr, 3));
// console.log("**************");
// console.log(rotate(arr, -2));
// console.log("**************");
// console.log(rotate(arrStr, -2));
// console.log("**************");

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Filter Range--------------
// Alan is good at breaking secret codes. One method is to eliminate values 
// that lie within a specific known range. Given arr and values min and max, 
// retain only the array values between min and max. Work in-place: return 
// the array you are given, with values in original order. 
// No built-in array functions.
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arrStr = ["one", "two", "three", "four", "five"]
function filterRange(arr, min, max){
    for(var n = 0; n < arr.length; n++){
        if(min > arr[n]){
            var temp = arr[n];
            arr[n] = arr[min -1]
            arr[min -1]
            arr.push(arr[n]);
            arr.pop(); 
        }
        if(max < arr[n]){
            arr.push(arr[n]);
            arr.pop();
        }
    }
    return arr;
}
// console.log(filterRange(arr,6,12));


var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arrStr = ["one", "two", "three", "four", "five"]
function filterRange(arr, min, max){
    for(var n = 0; n < arr.length; n++){
        if( arr[n] <= min || arr[n] >= max ){
            arr.splice(arr[n]);
        }
    }
    return arr;
}

function filterRange(arr, min, max) {
	var newArr = [];
	for (var n = 0; n < arr.length; n++) {
		if (arr[n] >= min && arr[n] <= max) {
			newArr[newArr.length] = arr[n];
		}
	}
	console.log(newArr);
    return newArr;
}
// console.log(filterRange(arr,6,12));
// this is thomas' work...I really struggled with this one..two attempts above.
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// // Concat---------------
// // Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
var arrStr = ["a","b"];
var arrInt = [1,2];
function concatArr(arr1, arr2){
    var arrNew = [];
    for(var n = 0; n < arr1.length; n++){
        arrNew.push(arr1[n]);
    }
    for(var n = 0; n < arr2.length; n++){
        arrNew.push(arr2[n]);
    }
    return arrNew;
}

var arrStr = ["a","b"];
var arrInt = [1,2];
function concatArr(arr1, arr2){
    var arrNew = [];
    for(var n = 0; n < arr1.length; n++){
        arrNew[arr1.length -1] = (arr1[n]);
    }
    for(var n = 0; n < arr2.length; n++){
        arrNew.push(arr2[n]);
    }
    return arrNew;
}

// console.log(concatArr(arrStr, arrInt));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Skyline Heights-------------
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are 
// given an array with heights of consecutive buildings, starting closest to you and 
// extending away. Array [-1,7,3] would represent three buildings: first is actually out 
// of view below street level, behind it is second at 7 stories high, third is 3 stories 
// high (hidden behind the 7-story). You are situated at street level. Return array containing 
// heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. 
// Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
var arr1 = [-1,1,1,7,3];
var arr2 = [0,4];
function skylineHeights(arr){
    var me = 0;
    var arrNew = [];
    for(var n = 0; n < arr.length; n++){
        if(arr[n] > 0){
            arrNew.push(arr[n]);
        }

    }
    return arrNew;

}
console.log(skylineHeights(arr1));
console.log(skylineHeights(arr2));
//  These are tricky for me..I'll understand it better after I go back thru the platform.
// ---------------------------------------------------------------------------------------------|