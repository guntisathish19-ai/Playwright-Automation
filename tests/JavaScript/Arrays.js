var marks = Array(6)

var marks = new Array(33, 44, 55, 67, 89, 99)

console.log(marks[3])
marks[3]=11
console.log(marks[3])

console.log(marks.length)

var marks=[11, 23, 34, 45, 56]
console.log(marks)

console.log(marks[3])
console.log(marks.length)
console.log(marks.push(85))  // to add a new element at the end of an array and returns size of new array
console.log(marks)

console.log(marks.pop()) //it will delete last element in array and reutrns size
console.log(marks)

console.log(marks.unshift(33)) // to add a new element at start of an array and returns size 
console.log(marks)

console.log(marks.indexOf(45)) //retunrs the element position
console.log(marks.includes(110)) //returns true if that value present in array
console.log(marks.slice(2,5))

//prining array using for loop
var sum = 0
for(var i=0; i<marks.length; i++)
{
    console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)

//febonacci series

var a=0, b=1, c
//console.log(a)
//console.log(b)
for(var n=0;n<10;n++)
{
    console.log(a)
    c=a+b
    a=b
    b=c
}

console.log("Even numbers")
var k=20
for(var i=2; i<=k; i++)
{
    if(i%2==0)
    {
    console.log(i+" is even number")
    }
    else
    console.log(i+" is base number")

}



var total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var score = [12, 13, 14, 15, 16]
for(var i=0; i<score.length; i++)
{
    if(score[i]%2==0)
        console.log(score[i])
}

var evenscore = score.filter((score=>score%2==0))
console.log(evenscore)

//map when want multiply array with a specific number
console.log(evenscore.map(a=>a*3))

var scores = [ 13, 14, 12, 15, 17, 16]
console.log(scores.filter(sco=>sco%2==0).map(sco=>sco*3).reduce((sco,mark)=>sco+mark,0))

//sort


console.log(scores.sort())
console.log(scores.sort((a,b)=>a-b))

var fruits = ["banana", "Grapes", "Apples", "mangoes", "oranges"]
fruits=fruits.map(a=>a.toUpperCase())
console.log(fruits.sort())

console.log(scores.sort((a,b)=>b-a))


//exercise1
console.log("************")
let Expenses = [200, 333, 100, 777, 450]

let sumo = Expenses.reduce((a,sum)=>a+sum,0)
console.log(sumo)
let ExpenseSort=Expenses.sort()
console.log(ExpenseSort)
console.log("least="+ExpenseSort.at(0))
console.log("highest="+ExpenseSort.at(ExpenseSort.length-1))

//Exrcise2
console.log("#############")
let productPrices = [121, 33, 44, 49, 60, 100]
let discountedPrices = (productPrices.map(a=>(a-a/10)))
console.log(discountedPrices)
let affordableProducts=discountedPrices.filter(a=>a<50)
console.log(affordableProducts)