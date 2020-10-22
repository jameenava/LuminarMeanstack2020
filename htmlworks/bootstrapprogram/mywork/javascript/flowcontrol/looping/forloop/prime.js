var i=53;
var flag=0
for(var j=2;j<i;j++){
    if(i%j==0){
        console.log("not prime");
        flag++;
        break;
    }
    
   
}
if(flag ==0){
    console.log("prime");
}