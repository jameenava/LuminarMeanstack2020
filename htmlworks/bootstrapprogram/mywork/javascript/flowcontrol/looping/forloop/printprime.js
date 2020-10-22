var lower=10;
var upper=50;

for(var i=lower;i<=upper;i++){
    var flag=0;
    for(var j=2;j<lower;j++){
        if(i%j==0){
            flag++;
            break;
        }
        
    }
    if(flag==0){
        console.log(i);
    }
   
}