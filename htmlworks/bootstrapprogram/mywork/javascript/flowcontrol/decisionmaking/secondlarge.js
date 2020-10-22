var num1=50;
var num2=100;
var num3=30;
if(num1>num2 & num1>num3){
    if(num2>num3){
        console.log(+num2+"is second max");
    }
    else{
        console.log(num3+"is second max");
    }
   
}
else if(num2>num1&num2>num3){
    if(num1>num3){
        console.log(+num1+"is second max");
    }
    else{
        console.log(num3+"is second max");
    }
   
}
else{
    console.log(+num3+"is max");
}
