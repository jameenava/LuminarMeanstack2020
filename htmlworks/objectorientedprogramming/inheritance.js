//inheritance, in js support muli-level inheritance and single-level inheritance
//the relation in the inheritance are:
//parent=>child
//superclass=>subclass
//baseclass=>suclass

class Parent{
    bike(){
        console.log("I have passion")
    }
}
class Child extends Parent{
    bike(){
        console.log("I have duke")
    }

}
var obj=new Child();
obj.bike();