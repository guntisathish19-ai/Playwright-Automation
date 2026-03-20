const Person = require('./Class');


class Pet extends Person
{
    constructor(firstname, lastname)
    {
        super(firstname, lastname)
    }
    location(){
        return "Bluecross"
    }
    place(){
        return "USA"
    }

}

let pet = new Pet("Sam", "Shake")
let pet1= new Person("adi", "Bdi")
console.log(pet.fullname())
console.log(pet.location())
console.log(pet1.location())
console.log(pet.place())