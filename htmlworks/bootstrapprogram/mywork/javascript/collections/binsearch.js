var arr=[1,2,3,4,5,6,7,11]
var flag=0;
var low=0;
var element=1;
var upp=arr.length-1;
while(low<=upp){
    mid=Math.floor((low+upp)/2);
    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        mid++;
        console.log("element found at the position"+mid);
        flag++;
        break;
    }
}
   if(flag==0){
       console.log("element not found");
   }