//1st method
// let arr=[1,2,4,5]
// let n = arr.length+1
// let flag;
// let missing=0;

// for(let i=1;i<=n;i++){
//     flag=0
//     for(let j=0;j<arr.length;j++){
//         if(i===arr[j]){
//             flag=1
//             break;
//         }
//     }
//     if(flag===0){
//         missing=i
//         break;
//     }
// }
// console.log(missing)

//Finding Multiple Duplicate

let arr=[1,2,4,5,6,7,9,10]
let missNum= []
const min=Math.min(...arr)
const max=Math.max(...arr)
for(let i=min;i<=max;i++){
    if(arr.indexOf(i)===-1){
        missNum.push(i)
    }
}
