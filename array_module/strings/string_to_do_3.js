// // Neil Denning

// To Do 3
// // ---------------------------------------------------------------------------------------------|
// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str 
// are valid. Valid sets of parentheses always open before they close, for example. 
// For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. 
// Given "N(0)t )0(k", return false, because the underlined ")" is premature: 
// there is nothing open for it to close.
var str1 = "Y(3(p)p(3)r)s";
var str2 = "N(0(p)3";
var str3 = "N(0)t )0(k";
function parensValid(str){
    var countOpen = 0;
    var countClosed = 0;
    for(var n = 0; n < str.length; n++){
        if(str[n] == "("){
            countOpen++;
        }
        if(str[n] == ")"){
            countClosed++;
        }
        if(countClosed > countOpen){
            return false;
        }
    }
    if(countOpen === countClosed){
        return true;
    }
    else{
        return false;
    }
}
// console.log(parensValid(str1));
// console.log(parensValid(str2));
// console.log(parensValid(str3));
// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// Braces Valid
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:

// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.
var str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
var str2 = "D(i{a}l[ t]o)n{e";
var str3 = "A(1)s[O (n]0{t) 0}k";
function bracesValid(str){
    var countOpen = 0;
    var countClosed = 0;
    for(var n = 0; n < str.length; n++){
        if(str[n] == "(" || str[n] == "{" || str[n] == "["){
            countOpen++;
        }
        if(str[n] == ")" || str[n] == "}" || str[n] == "]"){
            countClosed++;
        }
        if(countClosed > countOpen){
            return false;
        }
    }
    if(countOpen === countClosed){
        return true;
    }
    else{
        return false;
    }
}
// console.log(bracesValid(str1));
// console.log(bracesValid(str2));
// console.log(bracesValid(str3));
// this one is close..I need to figure out how to check for the order of each brace or bracket.
// I'm checking for more closed than open, but I'm not sure how to check for matching types yet.
// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, 
// because (if we ignore spaces, punctuation, and capitalization) the letters are the same when 
// reading from the back to the front.

// Create a function that returns a boolean whether the string is a strict palindrome. 
// For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: 
// if given "Dud" or "oho!", return false.
var str1 = "racecar";
var str2 = "Dud";
var str3 = "oho!";
function isPalindrome(str){
    var count = 0;
    for(var n = 0; n < str.length/2; n++){
        if(str[n] === str[str.length -(n +1)]){
            count++;
        }
    }
    if(count > str.length/2){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
// Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.




// // ---------------------------------------------------------------------------------------------|

// // ---------------------------------------------------------------------------------------------|
// Longest Palindrome
// For this challenge, we will look not only at the entire string provided but also at the substrings 
// within it. Return the longest palindromic substring. 

// Given "what up, daddy-o?", return "dad". 

// Given "uh... not much", return "u". 

// Include spaces as well (i.e. be strict, as in previous challenge): 
// given "Yikes! my favorite racecar erupted!", return "e racecar e". 
// Strings longer or shorter than complete words are OK.

// Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. 
// Given "Hot puree eruption!", return "tpureeerupt".




// ---------------------------------------------------------------------------------------------|

// ---------------------------------------------------------------------------------------------|