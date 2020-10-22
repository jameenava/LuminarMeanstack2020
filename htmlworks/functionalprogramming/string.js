var input="HHHPPSDAAA"
var op={};
var count=0;
for(char of input){
    if (char in op){
        op[char]++

    }
    else{
        op[char]=1
    }

}
console.log(op);