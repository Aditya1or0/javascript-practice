//1st Method using for loop
let arr = [10,20,5,8,28]
// let max=arr[0]
// for(let i=0 ;i<arr.length;i++){
   
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }


//2nd Method using reduce
let max = arr.reduce((acc,curr)=>{
    return acc>curr?acc:curr 
    },arr[0])
   
//   acc=10 , curr10
//   acc=10, curr=20
//  acc=20,curr=5
// acc=20,curr=8
// acc=20 curr=28
// acc=28


//3rd Method using Math.max
// const max = Math.max(...arr);
// console.log(max); 
