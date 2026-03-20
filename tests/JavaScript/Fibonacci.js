function fibonacci(){
    let n=10;
    let f1=0, f2=1, f3=0;
    if(n>=1)
        console.log(f1);
    if(n>=2)
        console.log(f2);
    while(f3<=n){
        f3=f2+f1;
        f1=f2;
        f2=f3;
        console.log(f2)
        
    }
}
fibonacci();