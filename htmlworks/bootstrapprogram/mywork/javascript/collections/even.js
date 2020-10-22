var arr=[10,11,12,13,14,15,16];
var sum=0;
for (i of arr){
    sum+=i;
}
var odd=[];
var even=[];
console.log("sum of array is"+sum);
for(number of arr){
    if(number%2==0){
        even.push(number);

    }
    else{
        odd.push(number);
    }
}
console.log(odd);
console.log(even)
var pow=[];
var i=1;
for(number of arr){
    var res = Math.pow(number,i);
    i++;
    pow.push(res)

}
console.log(pow);