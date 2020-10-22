var arr=[10,2,4,11]
var temp
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log("sorted array is"+arr);
