var pattern="ABBABBABBA"
char={}
var chars=pattern.split("")
console.log(chars)
for(ch of chars){
    if(ch in chars){
        char[ch]++
        

    }
    else{
        char[ch]=1
    }
    
}
console.log(char);
