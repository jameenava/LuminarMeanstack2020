var arr=[1,2,3,8,5,6];
var tot=arr.reduce((num1,num2)=>num1+num2)
console.log(tot);
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);