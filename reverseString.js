function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Test the function
const myString = "hello";
const reversed = reverseString(myString);
console.log(reversed); // Output: "olleh"
