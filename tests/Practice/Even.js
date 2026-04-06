function isEven(a){
    if(a % 2 === 0){
        return true;
    }
    else{       return false;
    }
}
const result  = isEven(3);
console.log(result);
function verifyEven(a){
    for(let i=1; i<=a; i+=1){
        if(i%2 === 0){
            console.log(i+" is even");
        }
        else{
            console.log(i+" is odd");
        }
    }
}
verifyEven(10);