function number(num){
    //let num=131;
    let c=num;
    let b=0;
    while(num>0){
        b=b*10+(num%10);
        num=Math.floor(num/10);
    }
    if(c==b)
        console.log(c+"Given number is polyndrome number");
    else
        console.log("not a poli")
}
number(12231);