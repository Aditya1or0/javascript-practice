let str = "HELLO WORLD";

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(str));

// split("") --> ["H", "E", "L", "L", "O", " ", "W", "O", "R", "L", "D"]
// reverse([]) --> ["D", "L", "R", "O", "W", " ", "O", "L", "L", "E", "H"]
//  join("") --> "DLROW OLLHE"

//split(" ")->gives array of substring based on spaces
