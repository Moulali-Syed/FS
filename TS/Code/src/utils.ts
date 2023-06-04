export function isPalindrome(str: string) {
  return str.split('').reverse().join('') === str;
}

//It would be great if we can use this function as an utility in other files of
// our code base

//The solution for this is provided by javascript modules , is also supported by typescript
