var arr=[1,2,3,4,5,6,7,8]
var res=[];
res=arr.map(num=>num>5?num+1:num==5?num:num-1)
console.log(res);
// for(i=0;i<arr.length;i++){
//     if(arr[i]<5){
//         res.push(arr[i]-1);
//     }
//     else if(arr[i]>5){
//         res.push(arr[i]+1);

//     }
//     else{
//         res.push(arr[i])
//     }
// }
// console.log(res);