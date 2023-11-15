//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    let isPalindrome = Number(x.toString().split("").reverse().join(""))
    return x === isPalindrome ? true : false
};