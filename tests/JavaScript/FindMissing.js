function missing(){
    let a = [10, 11, 12, 14, 15]
    let sum = 0
    let sum1 = 0
    for (let i=0; i<a.length; i++)
        sum=sum+a[i]
    //let temp = new Array(a.length+1)
    for(let i=10; i<a[0]+a.length+1; i++)
        sum1=sum1+i
    let miss = sum1-sum
    console.log(sum)
    console.log(sum1)
    console.log(miss)
} 
missing()