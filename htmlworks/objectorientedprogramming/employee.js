//constructor()
//the name of the construct is constructor itself.
//the constructor is used to initialize the instance variable
//constructor will be invoked at the time of object creation
class Employee{
    constructor(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getEmployee(){
        console.log("eid="+this.eid);
        console.log("ename="+this.ename);
    }
    

}
var emp=new Employee(100,"jameena");
emp.getEmployee();