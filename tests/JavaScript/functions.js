//Functions

function add(a,b)
{
    return a+b
}

var sum = add(2,4)
console.log(sum)

let sums = function(a,b)
{
    return a+b
}

console.log(sums(5,5))

var sum = ((a,b)=>a+b)
console.log(sum(3,5))