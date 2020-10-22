var num=121;
var n=num
var rev=0;
while(num>0){
    var mod=num%10;
   
   rev=mod+10*rev;
   num=Math.floor(num/10);

}
console.log(rev);
if(rev==n){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}