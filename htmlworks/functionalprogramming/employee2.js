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
var maxsalary=emp.map(obj=>obj.salary).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log("maximum salary"+maxsalary)
for(obj of emp){
    if(obj.salary==maxsalary){
        console.log(obj)
    }
}
var lowsalary=emp.map(obj=>obj.salary).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2)
console.log("lowest salary"+lowsalary)
for(obj of emp){
    if(obj.salary==lowsalary){
        console.log(obj)
    }
}
var ssalary=emp.map(obj=>obj.salary).sort((obj1,obj2)=>obj2-obj1);
console.log(ssalary);
