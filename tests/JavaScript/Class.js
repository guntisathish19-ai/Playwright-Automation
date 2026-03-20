// classes
module.exports = class Person{
     age=25
     location(){
        return "india"
     }
    price(){
        return "1000"
    }     
    constructor(fristname, lastname)
    {
        this.fristname=fristname
        this.lastname=lastname
    }
    fullname()
    {
        return this.fristname+this.lastname
    }
}

/*let person = new Person()
console.log(person.age)
console.log(person.location())
console.log(person.price())
let person1 = new Person("Srihansh", "Smily")
console.log(person1.fristname+" "+person1.lastname)
console.log(person1.fullname())*/

let b;
let a = null
console.log(typeof(b))
console.log(b)
console.log(typeof(a))
console.log(a)
