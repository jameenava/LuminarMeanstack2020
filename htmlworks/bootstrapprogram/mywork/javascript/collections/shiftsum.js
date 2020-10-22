var arr1=[4,8,2,9];
var arr2=[];
var tot=0;
for(item of arr1){
    tot+=item;
}
for(item of arr1){
    item2=tot-item;
    arr2.push(item2);
}
console.log(arr2);