class Employee{
    constructor(eid,ename,desig,join,resign){
        this.eid=eid
        this.ename=ename
        this.desig=desig
        this.join=join
        this.resign=resign
    }
    getemp=()=>{
        console.log(this.eid)
        console.log(this.ename)
        console.log(this.desig)
        console.log(this.join)
        console.log(this.resign)
    }
}
var obj1=new Employee(100,"ajay","devop",1981,2003)
var obj2=new Employee(101,"vijay","devop",1992,2008)
var obj3=new Employee(102,"bijoy","ba",1999,2007)
var obj4=new Employee(103,"jhon","ba",1989,2010)
var obj5=new Employee(104,"danie","qa",2009,2014)
var obj6=new Employee(105,"lari","qa",1987,2010)
var emp=[];
emp.push(obj1)
emp.push(obj2)
emp.push(obj3)
emp.push(obj4)
emp.push(obj5)
emp.push(obj6)
console.log("details of employee name and designation")
var details=emp.map(obj=>obj.ename+":"+obj.desig)
console.log(details)
console.log("details of employee having designation as developer")
var developer=emp.filter(obj=>obj.desig=="devop");
console.log(developer)
console.log("details of employee working in 80's")
var eightys=emp.filter(obj=>{
    if(obj.join<1990&&obj.join>1980){
        return obj;
    }
})
console.log(eightys)
console.log("details of employees having experience greater than 9")
var exp=emp.filter(obj=>{
    if((obj.resign-obj.join)>9){
        return obj;
    }
})
console.log(exp)
console.log("sorted order of employees based on join date")
var semp=emp.sort((obj1,obj2)=>obj1.join-obj2.join)
console.log(semp)

