const emp= require('./employee');
const details = new emp();
console.log("Name: "+details.fullName()+"\nAge: "+details.age+"\nCompany: "+details.company);