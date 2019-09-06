// Neil Denning
//  fyi-I'm using kaleb and thomas' work for help where I'm stuck.
// To Do 6
// // ---------------------------------------------------------------------------------------------|
// Zip Arrays into Map
// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, 
// create an associative array (map) containing keys of the first, and values of the second. 
// For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
var arr1 = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];
function zipArrayIntoMap(arr1, arr2){
    var myAssocArr = {};
    for(var n = 0; n < arr1.length; n++){
        myAssocArr[arr1[n]] = arr2[n];
        console.log(myAssocArr);
    }
    return myAssocArr;
}
// console.log(zipArrayIntoMap(arr1, arr2));
// **NOTE** I tried this a few different ways..I'm still not getting the right order of keys in the map. 
// They are paired up right, just out of order in pairs.
// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// Invert Hash
// Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) 
// to convert hash keys to values, and values to keys. 

// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, 
// return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.
var arr = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
function invertHash(assocArr) {
    var myAssocArr = {};
    for(key in assocArr){
      myAssocArr[assocArr[key]] = key;
    }
    console.log(assocArr);
    // console.log(myAssocArr);
    return myAssocArr;
  }  
//   console.log(invertHash(arr));
// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// Number of Values (without .Length)
// Without using the .length property that is present on all arrays, determine and return the 
// number of values in the given array. If we were to do this on a numerical array, 
// we might check to see whether the element at a certain numerical index was undefined. 
// Unfortunately, we can’t do that here because the keys don’t have any sort of predictable 
// order or first value.

// So, for object { band: "Travis Shredd & the Good Ol’ Homeboys", 
//                  style: "Country/Metal/Rap", 
//                  album: "668: The Neighbor of the Beast" }, 
// you should return the value 3, because there are three keys in this object: band, style, and album.
var arr = {band: "Travis Shredd", style: "Country", album: "668"};
function length(assocArr){
    var count = 0;
    for(key in assocArr){
      count++;
    }
    return count;
}
console.log(length(arr));
// // ---------------------------------------------------------------------------------------------|
// The End.