class Employee{
    constructor(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary;


    }
    getemployee=()=>{
        console.log(this.eid)
        console.log(this.ename)
        console.log(this.desig)
        console.log(this.salary)
    }
}
obj1=new Employee(100,"jameena","developr",20000);

obj2=new Employee(101,"janaa","tester",29000);

obj3=new Employee(102,"dilu","ba",27000);
var emp=[]
emp.push(obj1);
emp.push(obj2)
emp.push(obj3)
for(e of emp){
    if(e.salary>22000){
        console.log(e.ename+e.salary);
    }
}
for(e of emp){
    if(e.desig=="developr"){
        console.log(e.ename+e.salary);
    }
}
