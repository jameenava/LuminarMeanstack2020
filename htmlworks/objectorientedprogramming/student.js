class Student{
    setstudent(roll,name,course,tot){
        this.roll-roll;
        this.name=name;
        this.course=course;
        this.tot=tot;
    }
    printstudent(){
        console.log("rollno="+this.roll);
        console.log("name="+this.name);
        console.log("course="+this.course);
        console.log("total="+this.tot);
    }
}
var stu1 = new Student();
stu1.setstudent(100,"jameena","meanstack",85);
stu1.printstudent();
var stu1 = new Student();
stu1.setstudent(101,"jasmin","python",90);
stu1.printstudent();