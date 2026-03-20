function prime() {
    let n = 100, b = 1;
    var c = 0;
    var count = 0;
    while (b <= n) {
        for (let i = 1; i <= b; i++) {
            if (b % i === 0)
                c++;
        }
        if (c == 2){
            console.log(b + " is a prime number");
            count++
        }
        //else
        //  console.log(b + " is not a prime number");
        b++;
        c = 0;
    }
    console.log("Total no of prime number up to 100 is "+count);
}
prime();

class Prime{
    constructor(){
        
    }
    prime2(){
    let n = 19, c=0;
     for(let i=1; i<=n; i++){
        if(n%i===0)
            c++;
     } 
       if(c==2)
        console.log(n+" is a prime number");
    }
}
const pr = new Prime();
pr.prime2();