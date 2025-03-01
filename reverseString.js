function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}


const myString = "hello";
const reversed = reverseString(myString);
console.log(reversed); // Output: "olleh"

//-----------Second Method---------
//const reverseString = (str) => {
//   var newString= str.split("") //Output-> [ 'b', 'u', 't', 't', 'e', 'r' ] 
  // newString= newString.reverse()// Output->[ 'r', 'e', 't', 't', 'u', 'b' ]
  //   newString= newString.join("") // Output->rettub
  //  return newString
//}


//console.log(reverseString("butter"));
