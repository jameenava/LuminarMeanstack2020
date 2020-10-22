var arr=[1,2,3,4,5,6,7]
var element=6;
var flag=0;
var i=1
for(item of arr){
    if(item==element){
        flag++;
        break;

    }
    i++;

}
console.log("element found in the position"+i);
