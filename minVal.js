// 1st Method using a for loop

let arr = [10, 20, 5, 8, 28];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}
console.log(min); // Output will be 5


// 2nd Method using `reduce`

// let min = arr.reduce((acc, curr) => {
//     return acc < curr ? acc : curr;
// }, arr[0]);
// console.log(min); // Output will be 5


//3rd Method using `Math.min`

// const min = Math.min(...arr);
// console.log(min); // Output will be 5


