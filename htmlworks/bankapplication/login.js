class Bank {
    static getAccountDetails() {
        var data = {//data is an object
            jameena: { username: "jameena", password: "jam123", accno: 101, balance: 50000 },
            dilsha: { username: "dilsha", password: "dil123", accno: 102, balance: 40000 },
            keerthana: { username: "keerthana", password: "kee123", accno: 103, balance: 60000 }

        }
        return data
    }
    static login(){
        let uname = (document.querySelector("#exampleInputEmail1").value)
        let pwd = (document.querySelector("#exampleInputPassword1").value)
        var data = Bank.getAccountDetails();
        if(uname in data){
            var passwd = data[uname]["password"];
            if(passwd==pwd){
                
               sweetAlert("Login sucessfull!", "Valid User", "success")
               setTimeout(()=>window.location.href="userhome.html",5000)

                
             
                //window.open("deposit.html");

            }
            else {
                alert("invalid password")
            }

        }
        else {
            swal("login failed!", "invalid user!", "error");
        }
    }
    static deposit(){
        let uname=document.querySelector("#exampleInputEmail1").value
        let amt=Number(document.querySelector("#amount").value)
        let data=Bank.getAccountDetails()
        //let btag=document.querySelector("#bal")
        if(uname in data){
            data[uname]["balance"]+=amt;
            let bal=data[uname]["balance"]
            btag.textContent="available balance"+bal;
            //alert("avl bal = "+data[uname]["balance"])

        }
        else{
            alert("invalid user")
        }
    }
    static withdraw(){
        //alert("connected")
        let uname=document.querySelector("#exampleInputEmail1").value
       // alert(uname)
        let amt= Number(document.querySelector("#amount").value)
        //alert(amt)
        let data=Bank.getAccountDetails()
        if(uname in data){
            //alert(data[uname]["balance"])
            if(amt>data[uname]["balance"]){
                alert("insufficient balance")
            }
            else{
                data[uname]["balance"]-=amt;
                //alert(data[uname]["balance"])
                let bal=data[uname]["balance"]
                btag.textContent="available balance"+bal;
            }
        }
    }


}










