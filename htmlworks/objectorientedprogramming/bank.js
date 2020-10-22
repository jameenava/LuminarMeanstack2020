class Person{
    setperson(name,age){
        this.name=name;
        this.age=age;
    }
    getperson(){
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
}
class Bank extends Person{
    static get Bname(){
        var bankname="SBK";
        return bankname;
    }
    constructor(name,accno,balance){
       this.person_name=name;
        this.accno=accno;
        this.balance=balance;
       
    }
    deposit(amount){
        this.balance+=amount;
        console.log("your"+Bank.Bname+"is credited with amount"+amount+" avl balance is"+this.balance);

    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("insufficient balance");

        }
        else{
            this.balance-=amount;
            console.log("your"+Bank.Bname+"is debited with amount"+amount+" avl balance is"+this.balance);
        }
    }
    balanceenq(){
        console.log("available balance="+this.balance);
    }
}
var obj=new Bank("jameena",2345,25000);
console.log(obj.person_name);
console.log(obj.accno);
obj.setperson("jameena",25);
obj.getperson();
console.log(Bank.Bname);
obj.withdraw(26000);
obj.deposit(2000);
obj.balanceenq();
obj.withdraw(26000);
obj.balanceenq();