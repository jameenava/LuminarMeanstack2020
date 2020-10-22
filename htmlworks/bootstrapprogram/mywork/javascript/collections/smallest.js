var num=[-1,0,1,3,5];
var count=1;
while(count<num.length){
    if(num.includes (count)){
        count++;
    }
    else{
        console.log(count+"is missing");
        break;
    }

}
