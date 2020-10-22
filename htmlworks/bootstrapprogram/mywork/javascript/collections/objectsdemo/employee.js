var employee={eid:2000,name:"jameena",desig:"developer"}
console.log(employee)
console.log("salary" in employee)
employee.salary=25000
console.log(employee)
employee["salary"]+=5000;
console.log(employee)
for(key in employee){
    console.log(key);
}
for(key in employee){
    console.log(key+","+employee[key])
}