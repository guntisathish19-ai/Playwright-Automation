function isPrime(num) {
    let c=0;
    for(let i=1; i<=num; i++){
        if(num % i === 0){
            c++;
        }
    }
    if(c === 2){
        console.log(num+" is a prime number");
    }
    else{
        console.log(num+" is not a prime number");
    }
}
//isPrime(10);
function primeSeries(num){
    let c=0; let a=1;
    //let ll = new LinkedList();
    //const ll = createLinkedList();
    let primes = [];
    while(a <= num){
        for(let i=1; i<=a; i++){
            if(a % i === 0){
                c++;
            } 
        }  
        if(c === 2){
            //console.log(a+" is a prime number");
          //append(ll, a);
            primes.push(a);

        }
        c=0;
        a++;
    }
     
    primes.forEach(p=>{console.log(p+" is a prime number")});
}
primeSeries(30);
        