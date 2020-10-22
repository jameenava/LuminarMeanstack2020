//var num=[1,2,3,4]//find the pairs sum//06 (2,4)
//var num=[-1,0,2,3]//find least positive missing number
var num=[1,2,3,4];
input=6;

for(num1 of num)
{
    
    for(num2 of num)
    {
        var res=num1+num2;
        if(input==res){
            console.log(num1,num2)
        }
    
    

    }

   

}
    

