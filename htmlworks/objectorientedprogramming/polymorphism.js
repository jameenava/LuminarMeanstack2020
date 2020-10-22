//polymorphism- many forms.
//method overloading-same method nme but diffrent no of arguments.
//in javasript, recently implemented method only works
//in js, constructor cannot be overloaded
// method overriding:take the method from parent,but gives new definition
class Math{
    add(){
        console.log(10+20);

    }
    add(num){
        console.log(num+20);
    }
    add(num1,num2){
        console.log(num1+num2);
    }
}
var calc = new Math();
calc.add(10,20);
calc.add();
