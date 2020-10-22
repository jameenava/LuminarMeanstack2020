var data="10+$-9*6"
try{
    var res=eval(data)
    console.log(res)
}
catch(err){
    var data="10-9*6"
    var res=eval(data)
    console.log(res)
}
