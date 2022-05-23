var student =[{
    name:"dhulqar",
    age: "23",
    gender: "male",
    dob: "01-06-1998",
},
{
    name:"javidh",
    age:"24",
    gender:"male",
    dob:"01-01-1998",
},
{
    name:"kathija",
    age: "23",
    gender:"female",
    dob:"20-05-1998"
}
]
for (let i=0; i<student.length;i++){
   console.log(student[i].name);
   console.log(student[i].age);
   console.log(student[i].gender);
   console.log(student[i].dob);
}
//for in
for (let key in student){
    console.log(student[key].name);
    console.log(student[key].age);
    console.log(student[key].gender);
    console.log(student[key].dob);
}
//for of
for (let value in student){
    console.log(student[value].name);
    console.log(student[value].age);
    console.log(student[value].gender);
    console.log(student[value].dob);
}
//for each
student.forEach(function(value){
    console.log(value.name);
    console.log(value.age);
    console.log(value.gender);
    console.log(value.dob);
}
)



