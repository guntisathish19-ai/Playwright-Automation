function swap(){
    let a=11, b=22
    console.log("before swap"+a+","+b)
    a=a+b
    b=a-b
    a=a-b
    console.log("after swap"+a+","+b)
}
//swap()
stringSwap()
function stringSwap(){
    let first="Hi", second="hello"
    console.log(first+","+second)
    first = first+second
    second=first.substring(0, first.length-second.length)
    first=first.substring(second.length, first.length)
     console.log(first+","+second)
}