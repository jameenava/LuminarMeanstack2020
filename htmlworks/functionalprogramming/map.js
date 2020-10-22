
var arr=[1,2,3,4,5]
var sq=arr.map(num=>(num**2))
console.log(sq)
var eve=arr.filter(num=>(num%2==0));
console.log(eve);
var names=["anu","anju","ravi","anjali","binesh","bindu"]
var upper=names.map(str=>str.toUpperCase());
console.log(upper)
var name= upper.filter(str=>str.charAt(0)=='A');
console.log(name);