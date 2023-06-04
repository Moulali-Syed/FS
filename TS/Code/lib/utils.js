"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(str) {
    return str.split('').reverse().join('') === str;
}
exports.isPalindrome = isPalindrome;
//It would be great if we can use this function as an utility in other files of
// our code base
//The solution for this is provided by javascript modules , is also supported by typescript
