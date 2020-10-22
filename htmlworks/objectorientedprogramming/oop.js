class Person{
    setperson(age,name){
        this.age=age;
        this.name=name;
    }
    getPerson(){
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
}
var obj=new Person();
obj.setperson(25,"jameena");
obj.getPerson(); 
var obj1=new Person();
obj1.setperson(21,"jasu");
obj1.getPerson(); 
