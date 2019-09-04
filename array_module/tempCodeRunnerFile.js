var arr = [4,"Ulysses",42,false];
function insertAt(arr, idx, val){
	for (var n = arr.length; n >= idx; n--){
		arr[n] = arr[n - 1];
	}
	arr[idx] = val;
	return arr;
}
function doubleTrouble(arr){
    for(var n = 0; n < arr.length; n++){
        while(n < arr.length){
            insertAt(arr, n, arr[n]);
        }
    }
    return arr;
}


console.log(doubleTrouble(arr));