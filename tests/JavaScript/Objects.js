//Objects are collection of properties

let person = {
    firstname:"sathish",
    lastname:"kumar",
    age:"25",
    fullname : function()
    {
        console.log(this.firstname+this.lastname)
    }
}

console.log(person.fullname())
console.log(person['lastname'])
person.gender='male'
//console.log(person)
//console.log(person)
delete person.firstname
//console.log(person)
person.firstname="Tim"
person.lastname="sagar"
console.log(person)
console.log('gender' in person)
for(let key in person)
{
    console.log(person[key])
}

