var txt=document.querySelector("#txt")
function display(num){
    txt.value+=num;
}
clr=()=>{
    txt.value=""
}
ev=()=>{
    var data=eval(txt.value)
    txt.value=data
}