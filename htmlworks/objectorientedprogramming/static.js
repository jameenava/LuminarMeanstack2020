class Student{
    static get Collegename(){
        var clg="Luminar";
        return clg
    }
    static college(){
        console.log("college = Luminar");
    }

    setstudent(roll,name,course,tot){
        this.roll=roll;
        this.name=name;
        this.course=course;
        this.tot=tot;
    }
    printstudent(){
        console.log("rollno="+this.roll);
        console.log("name="+this.name);
        console.log("course="+this.course);
        console.log("total="+this.tot);
        Student.college();
    }
}
class Myclass extends Student{};
var stu1 =new Myclass();
console.log(Myclass.Collegename);

stu1.setstudent(100,"jameena","meanstack",85);
stu1.printstudent();
var stu2 =new Myclass();

stu2.setstudent(101,"jasmin","python",90);
stu2.printstudent();