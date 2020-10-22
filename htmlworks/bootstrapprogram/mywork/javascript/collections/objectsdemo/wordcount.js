var data="hello hai hello hai hello"//find the highest frequency word
var words=data.split(" ")
console.log(words)
var obj={};
for(word of words){
    if(word in obj){
        obj[word]++;

    }
    else{
        obj[word]=1
    }
}
console.log(obj)

