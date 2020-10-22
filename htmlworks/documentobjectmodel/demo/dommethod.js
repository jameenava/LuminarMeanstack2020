// var htag=document.getElementsByTagName("h1")
// for(h of htag){
//     h.style.color="red"
// }
// var h=document.getElementById("one")
// h.style.color="green"
// var lin=document.getElementsByClassName("links")
// for(l of lin){
//     l.style.color="yellow"
// }
//let can be used for scope//inside a block
var lst=document.querySelectorAll("li")
for(let l of lst){
    l.style.color="green"
}
var m=document.querySelector("#mth");
m.style.color="blue"
var h=document.querySelectorAll(".ls")
for(let k of h){
    k.style.color="yellow"
}
var hone=document.querySelector("#first")
// var data =hone.textContent;
// alert(data)
hone.textContent="hello"
var lst=document.querySelectorAll(".links")
for(let l of lst){
    l.textContent="listitem"
}
