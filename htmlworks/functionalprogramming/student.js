//create student class(rol,name,tot,course)
//print allstudent name and id having tot>135
//print all student name course=bca
//find sum of total of students having course=bca
class Student{
    constructor(rollno,name,tot,course){
        this.rollno=rollno;
        this.name=name;
        this.tot=tot;
        this.course=course;
    }
    getstudent=()=>{
        console.log(this.rollno)
        console.log(this.name)
        console.log(this.tot)
        console.log(this.course)
    }

}
var obj1=new Student(100,"jameena",150,"btech")
var obj2=new Student(101,"dilsha",180,"bca")
var obj3=new Student(102,"keerthana",130,"bca")
var obj4=new Student(103,"aishu",190,"btech")
var obj5=new Student(104,"geetu",180,"bca")
var obj6=new Student(105,"archa",120,"btech")
var stu=[];
stu.push(obj1)
stu.push(obj2)
stu.push(obj3)
stu.push(obj4)
stu.push(obj5)
stu.push(obj6)
//for(s of stu){
  //  if(s.tot>135){
    //    console.log(s.name+s.rollno);
    //}
    

//}
var stud1=stu.filter(obj=>obj.tot>135)
for(st of stud1){
    console.log(st.name);
}
var stud2=stu.filter(obj=>obj.course=="bca");
 for(st of stud2){
    console.log(st.name);
    
}
//reduce willtake only number
// //for(s of stu){
//    // if(s.course=="bca"){
//         console.log(s.name);
//     }
// }
// var sum=0;
// for(s of stu){
//     if(s.course=="bca"){
//         sum+=s.tot;
//     }
// }
//console.log(sum);
var total=stud2.map(obj=>obj.tot).reduce((obj1,obj2)=>obj1+obj2)
console.log(total);
var maxtot=stu.map(obj=>obj.tot).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2);
console.log(maxtot)
var maxstu=stu.filter(obj=>obj.tot==(stu.map(obj=>obj.tot).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)));
console.log(maxstu)
//create class for employee(eid,ename.desig,salary)
//prnt salary, mployee 


