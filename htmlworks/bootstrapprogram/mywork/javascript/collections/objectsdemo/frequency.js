var data="hello hai hello hai hello haii hai hai"//find the highest frequency word
var words=data.split(" ")
console.log(words)
var obj={};
var arr=[];
for(word of words){
    if(word in obj){
        obj[word]++;

    }
    else{
        obj[word]=1
    }
}
console.log(obj)
for(key in obj){
    arr.push(obj[key]);
}
arr.sort((a,b)=>b-a);
console.log(arr);
var max=arr[0];
for(key in obj){
    if(obj[key]==max){
        console.log("maxiumum occurence of word is "+key);
    }
}


