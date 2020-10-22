var one=document.querySelector("#hone")
one.addEventListener("click",()=>{
    one.textContent="clicked"
    one.style.color="red"
})
//addEventListener takes two argument,1.event  2.function
var two=document.querySelector("#htwo")
two.addEventListener("dblclick",()=>{
    two.textContent="double clicked"
    two.style.color="green"
})
var three=document.querySelector("#hthree")
three.addEventListener("mouseover",()=>{
    three.textContent="mouse over"
    three.style.color="pink"
})
three.addEventListener("mouseout",()=>{
    three.textContent="mouse not over"
    three.style.color="black"
})

