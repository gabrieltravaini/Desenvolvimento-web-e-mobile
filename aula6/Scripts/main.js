import obj from "./module.js"

obj.fazAlgo();

let height = 1.80

let person= {
    name:"John",
    age:20,
    height,
    b_day (){ this.age++}
}
person.b_day();
console.log('person', person)

let name= person.name;
let age=person.age;

console.log("saida",{name, age})
