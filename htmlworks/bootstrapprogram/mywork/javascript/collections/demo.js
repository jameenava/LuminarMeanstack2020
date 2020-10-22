//array is a collection of similiar datatypes.
//in java and cpp, the array size is limited, and stactic. and can only store similiar value.
//but in js there is no size limit
//in js different type of data objects can be stored.
//each element can be accessed by using their array index.
//can add ech element using the push operator
var name="mubai"
var names=["mumbai","delhi","csk"];
console.log(names[0]);
names.push("delhi")
console.log(names);
names.pop();
console.log(names);
names.push(2500);
console.log(names);
var numbers=[10,11,12,13,14,15];
console.log(numbers);
for(element of numbers){
    console.log(element);
}