const flag = true

if(!flag)
{
    console.log(" if block executed")
}
else
{
    console.log("else block execured")
    console.log(flag)
}

let i=0
while(i>10)
{
    
    console.log(i)
    i++
}

do{
    i++
}while(i>10)
 console.log(i)

 //for loop

for(let a=0;a<=10;a++)
{
    console.log("for loop :"+a)
}

// print commom multiples of 2 and 5 within 10 

for (let a=1;a<=10;a++)
{
    if(a%2==0 && a%5==0)
    {
        console.log("common multiples of 2 and 5 :"+a)
    }
}

// I want only first 3 common multiples
let n=0
for (let a=1;a<=100;a++)
{
    if(a%2==0 && a%5==0)
    {
        n++
        console.log(a)
        if(n==3)
        break   
    }

}