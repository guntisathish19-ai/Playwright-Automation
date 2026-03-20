class Polindrome{
    polindrome(){
        let n=1212, original=n, b=0
        while(n>0){
            b=b*10+n%10;
            n=Math.floor(n/10)
        }
        if(b==original)
            console.log(b+" is a polindrome")
        else
            console.log(b+" is not a polindrome")
    }
}
const obj=new Polindrome();
obj.polindrome()