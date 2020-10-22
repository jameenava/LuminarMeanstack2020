var num=153;
var powsum=0
while(num>0){
    var digit=num%10;
    powsum+=Math.pow(digit,3);
    num=Math.floor(num/10);

}
console.log("powersum is"+powsum)