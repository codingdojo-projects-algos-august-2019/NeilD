// // Neil Denning

// To Do 1
// ---------------------------------------------------------------------------------------------|
// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
var str1 = " Pl ayTha tF u nkyM usi c ";
function removeBlanks(str){
    newStr = str1.split(" ").join("");
    return newStr;
}
// console.log(removeBlanks(str1));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
var str1 = "0s1a3y5w7h9a2t4?6!8?0";
function getDigits(str){
    var strInt = "";
    var strArr = [];
    newStr = str.split("");
    for(var n = 0; n < newStr.length; n++){
        if(newStr[n] % 1 === 0){
            strArr.push(newStr[n]);
        }
    }
    strInt = strArr.join("");
    return strInt;
}
// console.log(getDigits(str1));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
var str1 = " there's no free lunch - gotta pay yer way. ";
var str2 = "Live from New York, it's Saturday Night!";
function acronyms(str){
    var newStr = str.split(" ");
    var newArr = [];
    for(var n = 0; n < newStr.length; n++){
        newArr.push(newStr[n][0]);
    }
    results = newArr.join("").toUpperCase();
    return results;
}

// console.log(acronyms(str1));
// console.log(acronyms(str2));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
var str1 = "Honey pie, you are driving me crazy";
function countNonSpaces(str){
    var count = 0;
    for(var n = 0; n < str.length; n++){
        if(str[n] != " "){
            count++;
        }
    }
    return count;
}
// console.log(countNonSpaces(str1));
// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|
// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
var str1 = "Honey pie, you are driving me crazy";
function removeShorterStrings(str, val){
    var newStr = str.split(" ");
    var newArr = [];
    console.log(newStr);
    for(var n = 0; n < newStr.length; n++){
        if(newStr[n].length >= val){
            newArr.push(newStr[n]);
        }
    }
    console.log(newArr);
    results = newArr.join(" ");
    return results;
}
console.log(removeShorterStrings(str1, 5));
// ---------------------------------------------------------------------------------------------|

// The End.