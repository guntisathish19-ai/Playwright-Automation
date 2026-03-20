let day = 'Tuesday '

console.log(day.length)
console.log(day.charAt(2))
console.log(day.concat(', Monday'))
console.log(day.endsWith('y'))
console.log(day.slice(0,4))
console.log(day.split('s')[0].trim())

let day1=day.concat('is funday day')
console.log(day1)
console.log(day1.indexOf('day',5))

let count = 0
let val=day1.indexOf('day')
while(val!=-1)
{
    count++
    val=day1.indexOf('day', val+1)
}
console.log(count)
console.log(val)
