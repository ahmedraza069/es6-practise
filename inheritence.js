class Parent{
    constructor(){
        this.fatherName = 'Raza';
    }
}
class Child extends Parent{
    constructor(name,age){
        super()
        this.name = name;
        this.age = age;
    }
    getFullName(){
        return this.name+ " " + this.fatherName;
    }
}
const baby =new Child('Arsalan', 2);
const baby2 = new Child('Badsah', 12)
console.log(baby.getFullName());
console.log(baby2);

